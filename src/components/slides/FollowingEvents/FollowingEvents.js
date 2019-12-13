import React from "react";
import styles from "./FollowingEvents.css";
import {Slide} from "../../Slide/Slide";

export const followingEventsTitles = {
  title: "What next ?",
  subtitles: [
    {
      title: "Debug mode",
      length: 1,
    },
    {
      title: "Architecture",
      length: 1,
    },
    {
      title: "How it works",
      length: 1,
    },
  ],
};

export const FollowingEvents = () => {
  return (
    <React.Fragment>
      <Slide data-background-color="#f6f8fa">
      </Slide>
      <Slide data-background-color="#f6f8fa">
      </Slide>
      <Slide data-background-color="#f6f8fa">
        <b>Sleigh</b> + <b>Désassembleur</b>
      </Slide>
    </React.Fragment>
  );
};
