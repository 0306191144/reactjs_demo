import React, { useState } from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AbumList";

function AlbumFeature(props) {
  const albumlist = [
    {
      id: 1,
      title: "Nhẹ Nhàng cùng Vpop",
      urlmp3:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/e/5cbeea8c68ba03c81907b2f0637a3e72.jpg",
    },
    {
      id: 2,
      title: "Nhẹ Nhàng cùng uk",
      urlmp3:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/e/5cbeea8c68ba03c81907b2f0637a3e72.jpg",
    },
    {
      id: 3,
      title: "Nhẹ Nhàng cùng uk",
      urlmp3:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/e/5cbeea8c68ba03c81907b2f0637a3e72.jpg",
    },
    {
      id: 4,
      title: "Nhẹ Nhàng cùng uk",
      urlmp3:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/e/5cbeea8c68ba03c81907b2f0637a3e72.jpg",
    },
    {
      id: 5,
      title: "Nhẹ Nhàng cùng uk",
      urlmp3:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/e/5cbeea8c68ba03c81907b2f0637a3e72.jpg",
    },
    {
      id: 6,
      title: "Nhẹ Nhàng cùng uk",
      urlmp3:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/e/5cbeea8c68ba03c81907b2f0637a3e72.jpg",
    },
    {
      id: 7,
      title: "Nhẹ Nhàng cùng uk",
      urlmp3:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/e/5cbeea8c68ba03c81907b2f0637a3e72.jpg",
    },
    {
      id: 8,
      title: "Nhẹ Nhàng cùng uk",
      urlmp3:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/e/5cbeea8c68ba03c81907b2f0637a3e72.jpg",
    },
  ];

  return (
    <div>
      <AlbumList albumlist={albumlist} />
    </div>
  );
}

export default AlbumFeature;
