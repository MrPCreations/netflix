import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = ({type}) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="gengre" id="gengre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasay</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://img.freepik.com/free-psd/sideways-woman-with-skull-glitch-effect_23-2148313629.jpg?w=1060&t=st=1710704619~exp=1710705219~hmac=8fac22ecc12ca8828dfc208f15e5dba1153130bd08bce2bf6cfa54bc72f59ea8
        "
        alt=""
      />
      <div className="info">
        <img
          src="https://cdn.pixabay.com/photo/2016/04/13/22/53/jesus-1327882_1280.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          inventore ipsa laboriosam nobis consequatur, alias sint distinctio ad
          optio, ipsam blanditiis aperiam? Distinctio molestias ipsa maiores
          optio cumque reiciendis corrupti?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
