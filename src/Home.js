import React from "react";

const Home = (props) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>
        I am {props.fname} and I am {props.mate}yrs and a {props.work}
      </p>
    </div>
  );
};

export default Home;