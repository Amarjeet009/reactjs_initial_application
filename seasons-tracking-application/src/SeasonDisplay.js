import './SeasonDisplay.css'
import React from "react";

const seasonConfig = {
  summer: {
    seasonMessage: "let's hit the beach",
    seasonIcon: "sun",
  },
  winter: {
    seasonMessage: "Burr, it is chilly",
    seasonIcon: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 3 && month < 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth() + 1);
  //   const seasonMessage = season === 'winter' ? seasonConfig.summer.textMsg : seasonConfig.winter.textMsg;
  //   const seasonIcon = season === 'winter' ? seasonConfig.winter.icon : seasonConfig.summer.icon;

  const { seasonMessage, seasonIcon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${seasonIcon} icon `}></i>
      <h1>{seasonMessage}</h1>
      <i className={`icon-right massive ${seasonIcon} icon `}></i>
    </div>
  );
};

export default SeasonDisplay;
