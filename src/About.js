import React from "react";

const About = (props) => {
  let myMap = props.newData;
  return (
    <div>
      <div>
        {myMap.map((each) => {
          return (
            <div>
              <h1>{each.name.toUpperCase()}</h1>
              <p>{each.status.toLowerCase()}</p>
              <p>{each.age}</p>
              <p>
                {each.isMarried == true
                  ? `${each.name.toUpperCase()} IS MARRIED`
                  : ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
