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
        objectToUpdate: null
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
        fetch("http://localhost:3001/api/getPlants")
            .then(data => data.json())
            .then(res => this.setState({ plants: res.data }));
    };


    render() {
        let plants = (
            <div>
                {this.state.plants.map((plant, index) => {
                    return <Plant
                        index={index}
                        name={plant.scientific_name} />
                })}
            </div>
        );

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Benjamín Aceval Plant Database</h1>
                    <Searchbar />
                    {plants}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
