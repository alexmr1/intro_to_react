import React from "react";
import PetList from "./components/PetList";
import Title from "./components/Title";
import "./App.css";

class App extends React.Component {
  state = {
    isVisible: false,
    pups: [
      {
        name: "Radley",
        cuteness: 5,
        img:
          "https://i.pinimg.com/originals/39/6f/14/396f14bd9c68652906500047d677356c.jpg",
      },
      {
        name: "Max",
        cuteness: 8,
        img:
          "https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog?w=1440&auto=compress&fm=jpg",
      },
      {
        name: "Pete",
        cuteness: 6,
        img:
          "http://cdn.akc.org/content/article-body-image/beagle2_cute_puppies.jpg",
      },
    ],
  };

  kittens = [
    {
      name: "Opal",
      cuteness: 6,
      img:
        "https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-field.jpg?w=585&scale=down",
    },
  ];
  user = "Doug";

  render = () => {
    return (
      <div className="App">
        <Title user={this.user} />
        <button onClick={this.toggleVisible}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
        <PetList pets={this.state.pups} isVisible={this.state.isVisible} />
        <button onClick={this.sortPets}>Sort Pets</button>

        {/* <PetList pets={kittens} /> */}
      </div>
    );
  };

  sortPets = (clickEvent) => {
    this.setState((currentState) => {
      const sorted = this.state.pups.sort((a, b) => {
        return a.cuteness - b.cuteness;
      });
      return { pups: sorted };
      // console.log(sorted);
    });
  };

  toggleVisible = (clickEvent) => {
    // this.state.isVisible = !this.state.isVisible; <---- do NOT do this! it mutates state!
    // has access to the current state
    this.setState((currentState) => {
      // has to return a new object, which will become the new state
      return { isVisible: !currentState.isVisible };
    });
    console.log(this.state.isVisible);
  };
}

export default App;
