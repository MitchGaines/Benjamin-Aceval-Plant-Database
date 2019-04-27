import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Searchbar from './SearchBar/SearchBar';
import Plant from './Plant/Plant'


class App extends Component {
    state = {
        plants: [],
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
            fetch("http://0.0.0.0:3001/api/getPlants")
                .then(data => data.json())
                .then(res => this.setState({plants: res.data}));
        }
    };

    filterPlants = (event) => {
        if(event.target.value) {
            fetch("http://0.0.0.0:3001/api/plantFilter/" + event.target.value)
                .then(data => data.json())
                .then(res => this.setState({searchInProgress: true, plants: res.data}));
        } else {
            this.setState({searchInProgress: false});
        }
    }

    render() {
        let plants = (
            <div>
                {this.state.plants.map((plant) => {

                    const image_paths = plant.image_name.map((image) => {
                       return '/plant_images/' + image;
                    });

                    return <Plant
                        key={plant._id}
                        scientific_name={plant.scientific_name}
                        common_name={plant.common_name}
                        family_name={plant.family_name}
                        flowering_season={plant.flowering_season}
                        gps={plant.gps}
                        description={plant.description}
                        images={image_paths} />
                })}
            </div>
        );

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Benjamín Aceval Plant Database</h1>
                    <Searchbar changed={(event) => this.filterPlants(event)} />
                    {plants}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
