import React from "react";
import "./main-content.css";
import PersonList from "../person-list/PersonList";

//helper func
const getId = str => {
  let key = 0;
  for (let i = 0; i < str.length; i++) {
    key += str.charCodeAt(i);
  }
  return key.toString();
};

//archvists database
const archivists = [
  { id: getId("Sasha"), name: "Sasha" },
  { id: getId("Tim"), name: "Tim" },
  { id: getId("Basira"), name: "Basira" },
  { id: getId("Martin"), name: "Martin" }
];

function MainContent() {
  return (
    <main className="main-content">
      <h2>Archivist's Assistants</h2>
      <PersonList archivists={archivists} />
    </main>
  );
}

export default MainContent;
