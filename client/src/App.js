import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Searchbar from './SearchBar/SearchBar';
import Plant from './Species/Species'
import FilterOption from './FilterOption/FilterOption';

class App extends Component {
    state = {
        all_species: [],
        species_types: [],
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
        searchInProgress: false,
    };

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    componentDidMount() {
        this.getPlantsFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getPlantsFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    // never let a process live forever
    // always kill a process everytime we are done using it
    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    getPlantsFromDb = () => {
        if(!this.state.searchInProgress) {
            fetch("http://localhost:3001/api/getPlants")
                .then(data => data.json())
                .then((res) => {
                    if(res.data != null && res.data.length !== 0) this.setState({all_species: res.data})
                });
        }
    }

    filterPlants = (event) => {
        if(event.target.value) {
            fetch("http://localhost:3001/api/plantFilter/" + event.target.value)
                .then(data => data.json())
                .then(res => this.setState({searchInProgress: true, all_species: res.data}));
        } else {
            this.setState({searchInProgress: false});
        }
    }

    setSpeciesTypes = () => {
        this.state.all_species.forEach((a_species) => {
            if(!this.state.species_types.includes(a_species.species_type)) {
                this.state.species_types.push(a_species.species_type);
            }
        })
    }

    render() {

        let plants = (
            <div>
                {this.state.all_species.map((plant) => {

                    const image_paths = plant.image_name.map((image) => {
                       return '/plant_images/' + image;
                    });

                    return <Plant
                        key={plant._id}
                        scientific_name={plant.scientific_name}
                        common_name={plant.common_name}
                        author={plant.author}
                        family_name={plant.family_name}
                        bird_call={plant.bird_call}
                        flowering_season={plant.flowering_season}
                        gps={plant.gps}
                        description={plant.description}
                        images={image_paths} />
                })}
            </div>
        );

        let species_filters = (
            <div>
                {this.state.species_types.map((a_type) => {
                    return <FilterOption key={a_type} />
                })}
            </div>
        );

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Las Plantas y Aves de Benjamín Aceval</h1>
                    <Searchbar changed={(event) => this.filterPlants(event)} />
                    <div className="container-fluid">
                        {species_filters}
                    </div>
                    <div className="container-fluid">
                        {plants}
                    </div>
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
