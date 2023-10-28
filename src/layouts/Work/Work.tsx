import { useDispatch, useSelector } from "react-redux";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Achievements from "../Achievements";
import { makeActive } from "../../store/HeaderSlice";

function Work() {
  const dispatch = useDispatch();
  const {
    workExperience,
    achievement,
    aboutMe = {},
  } = useSelector((state) => state.contentData);

  return (
    <div className="workDiv">
      <div className="divHeading">Work Experience</div>
      <div className="workExDesp">
        <div>
          <span>{aboutMe.workExperience}</span> Years of <br />
          Experience
        </div>
        <div>
          <span>{aboutMe.totalClients}</span> Satisfied <br />
          Clients
        </div>
        <div>
          <span>{aboutMe.totalProjects}</span>Projects <br />
          Delivered
        </div>
      </div>
      <div className="workCol">
        {workExperience?.map((comp, index) => (
          <div key={index} className="workCard">
            <img src={comp.icon} alt="img" />
            <div>
              <p>{comp.role}</p>
              {comp.title}
              <br />
              {`${comp.startDate} - ${comp.endDate}`}
            </div>
            <div className="workOverlay">
              <div>Description </div>{" "}
              {documentToReactComponents(comp.description)}
            </div>
          </div>
        ))}
      </div>
      <Achievements achievement={achievement} />
      <button
        className="cstbtn nxtBtn"
        onClick={() => dispatch(makeActive("contactDiv"))}
      >
        Let's Connect
      </button>
      <br />
    </div>
  );
}

export default Work;
