import { useContext, useReducer } from "react";
import {
  FaMobileAlt,
  FaGooglePlusG,
  FaLinkedinIn,
  FaFileAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { makeActive } from "../../store/HeaderSlice";
import { TopContext } from "../../App";

const showHireFun = (state, action) => {
  switch (action.type) {
    case "home":
      return false;
    case "hire":
      return true;
    default:
      return state;
  }
};
function Home(props) {
  const [showHireReduce, showHireDispatch] = useReducer(showHireFun, false);
  const dispatch = useDispatch();
  const { goToLink } = props;
  const { aboutMe = {} } = useSelector((state) => state.contentData);

  return (
    <div className={"homeDiv " + (showHireReduce ? "addHire" : "")}>
      <div>
        <p>{`I'm ${aboutMe.firstName} ${aboutMe.lastName}`}</p>
        <div>{aboutMe.subTitle}</div>
        <button
          className="cstbtn"
          onClick={() => showHireDispatch({ type: "hire" })}
        >
          Hire Me
        </button>
        <button
          className="cstbtn diffBtn"
          onClick={() => dispatch(makeActive("aboutDiv"))}
        >
          About me
        </button>
      </div>
      <div>
        <p className="iconsDiv">
          <span className="hoverTitle">
            <FaMobileAlt />
            <b>{aboutMe.phoneNumber}</b>
          </span>
          <span onClick={() => goToLink(aboutMe.linkedIn)}>
            <FaLinkedinIn />
          </span>
          <span onClick={() => goToLink(`mailto:${aboutMe.email}`)}>
            <FaGooglePlusG />
          </span>
          <span onClick={() => goToLink(aboutMe.resume)}>
            <FaFileAlt />
          </span>
        </p>
        <div style={{ lineHeight: 1.5 }}>
          I’m eager to receive your feedback...
          <br />
          <b>Thank You :)</b>{" "}
        </div>
        <button
          className="cstbtn"
          onClick={() => showHireDispatch({ type: "home" })}
        >
          Back
        </button>
      </div>
      <div
        style={{
          backgroundImage: `url(${aboutMe.homeImage?.fields?.file?.url})`,
        }}
      ></div>
    </div>
  );
}

export default Home;
