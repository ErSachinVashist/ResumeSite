import { useContext, useReducer } from "react";
import {
  FaMobileAlt,
  FaGooglePlusG,
  FaLinkedinIn,
  FaFileAlt,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
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
  const [showHireReduce, showHireDispatch] = useReducer(showHireFun, false),
    dispatch = useDispatch(),
    { goToLink } = props,
    { name } = useContext(TopContext);

  return (
    <div className={"homeDiv " + (showHireReduce ? "addHire" : "")}>
      <div>
        {/* <TopContext.Consumer>
          {data=><p>I'm {data.name}</p>}
        </TopContext.Consumer> */}
        <p>I'm {name}</p>
        <div>Enthusiastic Full stack Web Developer</div>
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
            <b>+918860496464</b>
          </span>
          <span onClick={() => goToLink("linkedin")}>
            <FaLinkedinIn />
          </span>
          <span onClick={() => goToLink("mail")}>
            <FaGooglePlusG />
          </span>
          <span onClick={() => goToLink("resume")}>
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
      <div></div>
    </div>
  );
}

export default Home;
