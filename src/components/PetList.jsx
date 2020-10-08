import React from "react";

const PetList = (props) => {
  // if (props.isVisible) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  const removePet = (clickEvent) => {
    // props.pets[0].pop();
    console.log(props.pets);
    // props.pets.remove();
    console.log("clicked");
  };
  return (
    <ul>
      {props.pets.map((pet) => {
        return (
          <li key={pet.name}>
            <h3>
              {pet.name} - {pet.cuteness}{" "}
              <button onClick={removePet}>Remove</button>
            </h3>
            {props.isVisible && <img src={pet.img} alt={pet.name} />}
          </li>
        );
      })}
    </ul>
  );
};

export default PetList;
