import { useSelector, useDispatch } from "react-redux";
import { makeActive } from "../../store/HeaderSlice";

function Qualifications() {
  const { qualData } = useSelector((state) => state.qualData),
    dispatch = useDispatch();
  return (
    <div className="qualDiv">
      <div className="divHeading">Qualifications</div>
      <div className="eduCard">
        {qualData.map((qual, index) => (
          <div key={index}>
            {qual.batch}
            <p>{qual.title}</p>
            {qual.inst}
            <p>{qual.desp}</p>
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
