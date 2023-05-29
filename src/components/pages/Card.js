import Styles from "../styles/Card.module.css";
import {Link } from 'react-router-dom'
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import Boat from "./Boat"

function Card({ imagen, title }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p> */}
      <div className={Styles.btnn}>
        {/* <Button text="Demo" /> */}
        <Link to='/boat'><Button text="view" /></Link>
      </div>
    </animated.div>
  );
}

export default Card;
