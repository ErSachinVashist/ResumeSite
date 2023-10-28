import { useSelector, useDispatch } from "react-redux";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { makeActive } from "../../store/HeaderSlice";

function Qualifications() {
  const { qualification } = useSelector((state) => state.contentData);
  const dispatch = useDispatch();

  return (
    <div className="qualDiv">
      <div className="divHeading">Qualifications</div>
      <div className="eduCard">
        {qualification?.map((qual, index) => (
          <div key={index}>
            {qual.batchYear}
            <p>{qual.title}</p>
            {qual.institution}
            <div>{documentToReactComponents(qual.description)}</div>
          </div>
        ))}
      </div>
      <button
        className="cstbtn nxtBtn"
        onClick={() => dispatch(makeActive("workDiv"))}
      >
        My Work
      </button>
    </div>
  );
}

export default Qualifications;
