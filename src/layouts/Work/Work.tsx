import { useDispatch, useSelector } from "react-redux";
import Achivements from "../Achivements";
import { makeActive } from "../../store/HeaderSlice";

function Work() {
  const dispatch = useDispatch(),
    { exp, work, achieve } = useSelector((state) => state.workData);

  return (
    <div className="workDiv">
      <div className="divHeading">Work Experience</div>
      <div className="workExDesp">
        <div>
          <span>{exp.years}</span> Years of <br />
          Experience
        </div>
        <div>
          <span>{exp.clients}</span> Satisfied <br />
          Clients
        </div>
        <div>
          <span>{exp.projects}</span>Projects <br />
          Delivered
        </div>
      </div>
      <div className="workCol">
        {work.map((comp, index) => (
          <div key={index} className="workCard">
            <img src={comp.img} alt="img" />
            <div>
              <p>{comp.role}</p>
              {comp.company}
              <br />
              {comp.duration}
            </div>
            <div className="workOverlay">
              <div>Description </div> {comp.desp}{" "}
            </div>
          </div>
        ))}
      </div>
      <Achivements achieve={achieve} />
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
