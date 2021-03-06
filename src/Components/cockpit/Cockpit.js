import React from "react";
import classes from "./cockpit.css";

const Cockpit = props => {
  let assignedclasses = [];
  let btnClass = "";
  if (props.showPerson) {
    btnClass = "blue";
  }
  if (props.person.length <= 3) {
    assignedclasses.push("blue");
  }
  if (props.person.length <= 2) {
    assignedclasses.push("bold");
  }
  return (
    <div className={classes.Cockpit}>
      <h1> Hi,{props.title}  In {props.tech} </h1>
      <p className={assignedclasses.join(" ")}> This is really working </p>
      <button className={btnClass} onClick={props.toggle}>
        Toggle Name
      </button>
    </div>
  );
};

export default Cockpit;
