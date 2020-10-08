import React from 'react';

const Title = (props) => {
  const handleClick = (clickEvent) => {
    console.log(`Hello, ${props.user}`);
  };
  return (
    <header>
      <h1>{props.user}'s pups</h1>
      <button onClick={handleClick}>Say hello!</button>
    </header>
  );
};

export default Title;
