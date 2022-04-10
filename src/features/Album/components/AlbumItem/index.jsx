import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
function AlbumItem({ albumItem }) {
  return (
    <div className="AlbumItem">
      <img src={albumItem.urlmp3} alt="loi" />
      <div>{albumItem.title}</div>
      <div className="button">
        <button onClick={() => {}}>doi name</button>
      </div>
    </div>
  );
}

AlbumItem.propTypes = {};

export default AlbumItem;
