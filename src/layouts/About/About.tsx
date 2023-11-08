import { useDispatch, useSelector } from "react-redux";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { makeActive } from "../../store/HeaderSlice";

function About(props) {
  const dispatch = useDispatch();
  const { goToLink } = props;
  const { aboutMe = {} } = useSelector((state) => state.contentData);
  return (
    <div className="aboutDiv">
      <div>
        <img src={aboutMe.aboutImage?.fields?.file?.url} alt="img" />
      </div>
      <div>
        <div className="divHeading" style={{ alignItems: "flex-start" }}>
          About Me
        </div>
        <div>{documentToReactComponents(aboutMe.description)}</div>
        <div>
          <button
            className="cstbtn nxtBtn"
            onClick={() => dispatch(makeActive("skillsDiv"))}
          >
            My Artillery
          </button>
          <button
            className="cstbtn diffBtn"
            onClick={() => goToLink(aboutMe.resume)}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
