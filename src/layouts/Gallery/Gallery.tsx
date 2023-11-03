import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { makeActive } from "../../store/HeaderSlice";

function Gallery() {
  const { gallery } = useSelector((state) => state.contentData);
  const dispatch = useDispatch();
  return (
    <div className="galleryDiv">
      <div className="divHeading">Gallery</div>
      <div className="galleryCard">
        {gallery?.map((img, index) => (
          <img
            className={classNames({
              yCover: img.type === "landscape",
              xCover: img.type === "portrait",
              bigCover: img.type === "cover",
            })}
            src={img.icon}
            key={img.title}
            alt={"img" + index}
          />
        ))}
      </div>
      <button
        className="cstbtn nxtBtn"
        onClick={() => dispatch(makeActive("contactDiv"))}
      >
        Let's Connect
      </button>
    </div>
  );
}

export default Gallery;
