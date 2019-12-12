import React from "react";
import styles from "./Build.css";
import {Slide} from "../../Slide/Slide";
import build from "./build.png";
import launch from "./launch.png";

export const buildTitles = {
  title: "Build the tool",
  subtitles: [
    {
      title: "Pré-requis",
      length: 1,
    },
    {
      title: "Build",
      length: 1,
    },
    {
      title: "Launch it",
      length: 1,
    },
    {
      title: "Pourquoi le faire ?", // rigolo + failles
      length: 1,
    },
  ],
};

export const Build = () => {
  return (
    <React.Fragment>
      <Slide>
        Pré-requis
      </Slide>
      <Slide data-background-color="#fff">
        <img className={styles.imgBuild} src={build} alt="build"/>
      </Slide>
      <Slide data-background-color="#fff">
        <img className={styles.imgLaunch} src={launch} alt="launch"/>
      </Slide>
    </React.Fragment>
  );
};
