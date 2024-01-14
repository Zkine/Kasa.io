import { useState, useRef } from "react";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../styles/main.scss";

function Collapse({ titre, description }) {
  const ref = useRef(null);
  const [Open, setIsOpen] = useState(false);
  const [SelectedTitle, setIsSelectedTitle] = useState("");
  const [contentHeight, setIsContentHeight] = useState(0);

  function selected(e) {
    setIsOpen(!Open);
    setIsSelectedTitle(e.target.children[0].textContent);
    setIsContentHeight(ref.current.clientHeight);
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
              : "conteneurcollapse--icone down_rotate",
          ]}
        >
          <IoIosArrowUp />
        </span>
      </button>
      <div
        className={"conteneurcollapse__description"}
        style={{
          height:
            SelectedTitle === "Fiabilité" && Open
              ? contentHeight + 35
              : SelectedTitle === "Respect" && Open
              ? contentHeight + 35
              : SelectedTitle === "Service" && Open
              ? contentHeight + 35
              : SelectedTitle === "Sécurité" && Open
              ? contentHeight + 35
              : SelectedTitle === "description" && Open
              ? contentHeight + 35
              : SelectedTitle === "equipements" && Open
              ? contentHeight + 35
              : 0,
        }}
      >
        <div ref={ref}>{description}</div>
      </div>
    </div>
  );
}

export default Collapse;
