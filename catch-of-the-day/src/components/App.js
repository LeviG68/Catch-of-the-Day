import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from "../sample-fishes";

class App extends React.Component{
  state = {
    fishes: {},
    order: {}
  }
  addFish = fish => {
    // 1/ take a copy of the exsiting state
    const fishes ={ ...this.state.fishes};
    // 2. add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3.set the new fishes object to state
    this.setState({ fishes });
  }
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }
  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFish} />
      </div>
    );
  }
  };
export default App;