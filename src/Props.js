import React from "react";

const Props = (props) => {
  let anything = props.newArr;
  return (
    <div>
      {anything.map((name) => {
        return <p>Hi {name}</p>;
      })}
    </div>
  );
};

export default Props;
