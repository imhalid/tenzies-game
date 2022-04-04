import React from "react";
//import { useState } from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "rgb(149 176 251)" : "transparent",
    color: props.isHeld ? "white" : "#222",
  };

  return (
    <div style={styles} onClick={props.holdDie} className="die-bg">
      <h2>{props.value}</h2>
    </div>
  );
}
