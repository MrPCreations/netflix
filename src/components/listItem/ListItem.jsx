import React, { useState } from "react";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://img.freepik.com/free-psd/creative-film-poster-template_23-2149839039.jpg?w=1800&t=st=1710697026~exp=1710697626~hmac=9107e7652b1c0763a356f7a982ff3f4075f87196474a087fcaa9f10ef9b1660b"
        alt="Cover"
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
