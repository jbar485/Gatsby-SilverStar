import React from "react";
import PropTypes from "prop-types";
import "./Home.css";
import back from "../../images/back.jpg";
import back2 from "../../images/back2.jpg";
import basketball from "../../images/basketball.jpeg";
import bath from "../../images/bath.jpg";
import entry from "../../images/entry.jpeg";
import gym from "../../images/gym.jpg";
import housefront from "../../images/housefront.jpg";
import housefront2 from "../../images/housefront2.jpg";
import infinity from "../../images/infinity.jpg";
import kitchen from "../../images/kitchen.jpg";
import outdoorkitchen from "../../images/outdoorkitchen.jpg";
import pillar from "../../images/pillar.jpeg";
import secret1 from "../../images/secret1.jpeg";
import secret2 from "../../images/secret2.jpg";
import yard from "../../images/yard.jpg";

function HomeList(props) {
  return (
    <div className="homes-page">
      <h1 className="homes-header">Homes</h1>
      <p className="description">
        Whether you’re ready to break ground on a lifelong vision or are still
        gazing at the horizon wondering what’s possible, we want to come
        alongside you as creative partners and help push the boundaries of what
        you thought a home could be. We know you’re excited about what comes
        next. We are too.
      </p>
      <h3 className="gallery-header">Gallery</h3>

      <div className="gallery">
        <img
          src={housefront}
          alt="Picture of front of house"
          className="galleryI"
        />
        <img src={housefront2} alt="Front of House" className="galleryI" />
        <img src={back} alt="Back of house" className="galleryI" />
        <img src={back2} alt="Back of house" className="galleryI" />
        <img src={yard} alt="Backyard" className="galleryI" />
        <img src={outdoorkitchen} alt="Outdoor Kitchen" className="galleryI" />
        <img src={kitchen} alt="Kitchen" className="galleryI" />
        <img src={bath} alt="Master Bath" className="galleryI" />
        <img src={gym} alt="Home gym" className="galleryI" />
        <img src={infinity} alt="Infinity Pool" className="galleryI" />
        <img src={basketball} alt="Basketball court" className="galleryI" />
        <img src={entry} alt="Entryway" className="galleryI" />
        <img src={pillar} alt="Pillars" className="galleryI" />
        <img src={secret1} alt="Secret Office" className="galleryI" />
        <img src={secret2} alt="secret office" className="galleryI" />
      </div>
    </div>
  );
}

HomeList.propTypes = {
  homeList: PropTypes.array
};

export default HomeList;
