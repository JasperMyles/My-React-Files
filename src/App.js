import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Jasper from "./Jasper";
import Props from "./Props";
import About from "./About";

function App() {
  let data2 = [
    { name: "david", status: "Tutor", age: 60, isMarried: false },
    { name: "ovie", status: "Student", age: 40, isMarried: true },
    { name: "taiwo", status: "Student", age: 40, isMarried: true },
    { name: "samil", status: "Student", age: 19, isMarried: false },
    { name: "ak", status: "Student", age: 14, isMarried: true },
    { name: "david", status: "Student", age: 70, isMarried: true },
    { name: "juliet", status: "Student", age: 20, isMarried: false },
    { name: "eggy", status: "Tutor", age: 50, isMarried: true },
  ];

  let newName = ["Sammy", "Elizabeth", "Ak", "Precious", "Mike"];
  let name = "Jasper ";
  let age = 44;
  let obj = {
    name: "Joshua ",
    age: 100,
    job: "Junior Dev ",
  };

  let arr = ["sammy", "elizabebeth", "ak", "mike"];
  console.log(obj);

  return (
    <div className="App">
      {
        /* <Home fname={obj.name} mate={obj.age} work={obj.job} />
      <Jasper myName={name} occupation="Junior Dev" /> */

        <About newData={data2} />
        //  <Props newArr={newName.filter((each) => each.includes("k"))} />
      }
    </div>
  );
}

export default App;
