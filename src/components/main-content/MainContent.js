import React from "react";
import "./main-content.scss";
import PersonList from "../person-list/PersonList";

//helper func to generate id of a card based on the name
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
  { id: getId("Melanie"), name: "Melanie" },
  { id: getId("Daisy"), name: "Daisy" },
  { id: getId("Martin"), name: "Martin" }
];

function MainContent() {
  return (
    <main className="main-content">
      <PersonList archivists={archivists} />
    </main>
  );
}

export default MainContent;
