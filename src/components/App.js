import React, {Component} from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';
import FruitBasket from './FruitBasket';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    fetch('/api/fruit').then((response) => response.json()).then((fruit) => {
      this.setState({
        fruit: fruit
      });
    })//.then(() => {
  }  //   fetch('/api/fruit)types').then((response) => response.json()).then((filters) => {
    //     this.setState({
    //       filters: filters
    //     });
    // })//.done();
  //}).done();  //would like to come back to this

  handleFilterChange = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({
      currentFilter: event.target.value
    });
  }

  render() {
    return (
      <div>
      <Filter filters={this.state.filters} handleChange={this.handleFilterChange}/>
      <FilteredFruitList filter={this.state.currentFilter} fruit={this.state.fruit} />
      </div>
    )
  }
}

export default App;
