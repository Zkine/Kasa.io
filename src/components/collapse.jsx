import { useState } from "react";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../styles/main.scss";

function Collapse({ titre, description }) {
  const [Open, setIsOpen] = useState(false);
  const [SelectedTitle, setIsSelectedTitle] = useState("");

  function selected(e) {
    setIsOpen(!Open);
    setIsSelectedTitle(e.target.children[0].textContent);
  }

  return (
    <div className="conteneurcollapse">
      <button className="conteneurcollapse__button" onClick={selected}>
        <p className="conteneurcollapse__titre">{titre}</p>
        <span
          className={[
            SelectedTitle === ""
              ? "conteneurcollapse--icone"
              : SelectedTitle === "Fiabilité" && Open
              ? "conteneurcollapse--icone rotate"
              : SelectedTitle === "Respect" && Open
              ? "conteneurcollapse--icone rotate"
              : SelectedTitle === "Service" && Open
              ? "conteneurcollapse--icone rotate"
              : SelectedTitle === "Sécurité" && Open
              ? "conteneurcollapse--icone rotate"
              : SelectedTitle === "description" && Open
              ? "conteneurcollapse--icone rotate"
              : SelectedTitle === "equipements" && Open
              ? "conteneurcollapse--icone rotate"
              : "conteneurcollapse--icone norotate",
          ]}
        >
          <IoIosArrowUp />
        </span>
      </button>
      {/* {Open && ( */}
      <div
        className={[
          SelectedTitle === ""
            ? "conteneurcollapse__description"
            : SelectedTitle === "Fiabilité" && Open
            ? "conteneurcollapse__description collapse_open"
            : SelectedTitle === "Respect" && Open
            ? "conteneurcollapse__description collapse_open"
            : SelectedTitle === "Service" && Open
            ? "conteneurcollapse__description collapse_open"
            : SelectedTitle === "Sécurité" && Open
            ? "conteneurcollapse__description collapse_open"
            : SelectedTitle === "description" && Open
            ? "conteneurcollapse__description collapse_open"
            : SelectedTitle === "equipements" && Open
            ? "conteneurcollapse__description collapse_open"
            : "conteneurcollapse__description collapse_close",
        ]}
      >
        <p className="collapse__paragraphe">{description}</p>
      </div>
      {/* )} */}
    </div>
  );
}

export default Collapse;
