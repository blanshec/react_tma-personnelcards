import React from "react";
import PersonCard from "../person-card/PersonCard";

function PersonList(props) {
  const archivists = props.archivists;
  const items = archivists.map(archivist => {
    return <PersonCard key={archivist.id} archivist={archivist} />;
  });
  return <ul>{items}</ul>;
}

export default PersonList;
