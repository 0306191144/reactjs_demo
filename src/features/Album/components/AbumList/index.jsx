import React from "react";
import AlbumItem from "../AlbumItem";
import "./style.scss";
function AlbumList({ albumlist }) {
  return (
    <div>
      <div className="album">
        {albumlist.map((albumItem) => (
          <div className="container " key={albumItem.id}>
            <AlbumItem albumItem={albumItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumList;
