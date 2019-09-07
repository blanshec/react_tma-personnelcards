import React from "react";

const PersonCard = props => {
  const archivist = props.archivist;
  return <li>{archivist.name}</li>;
};

export default PersonCard;
