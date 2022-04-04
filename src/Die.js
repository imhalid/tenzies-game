import React from "react";
//import { useState } from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld
      ? "rgb(201 184 255 / 55%)"
      : "rgba(16, 137, 245, 0.1)",
    // color: props.isHeld ? "white" : "#222",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    boxShadow: props.isHeld ? "0px 0px 5px 3px rgb(201 184 255 / 20%)" : "none",
  };

  return (
    <div style={styles} onClick={props.holdDie} className="die-bg">
      <h2>{props.value}</h2>
    </div>
  );
}
