import { useSelector, useDispatch } from "react-redux";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { makeActive } from "../../store/HeaderSlice";

function Skills() {
  const { skills } = useSelector((state) => state.contentData);
  const dispatch = useDispatch();
  const skillObj = { softSkills: [], techSkills: [] };
  skills?.forEach((skill) => {
    skillObj[skill.skillType === "Soft" ? "softSkills" : "techSkills"].push(
      skill
    );
  });
  return (
    <div className="skillsDiv">
      <div className="divHeading">Skills</div>
      <div>
        My interpersonal skills allowed me to participate effectively as a
        member or lead in different teams, satisfy client’s expectations, make
        decisions and solve problems with other people, and work effectively
        with team members. It helped me to make and live in a less stressful
        working environment.
      </div>

      <div className="skillsCircle">
        {skillObj.softSkills.map((skill, index) => (
          <div
            key={index}
            className="circle-border"
            style={{
              background: `linear-gradient(270deg, var(--activeColor) ${
                skill.score * 10
              }%, transparent 0%), linear-gradient(10deg, var(--activeColor) 50%, lightgray 50%)`,
            }}
          >
            <div className="circle">{skill.title}</div>
          </div>
        ))}
      </div>
      <div className="skillsCard">
        {skillObj.techSkills.map((skill, index) => (
          <div key={index}>
            <div>
              <img src={skill.icon} alt="img" />
              <p>{skill.title}</p>
              {documentToReactComponents(skill.description)}
            </div>
          </div>
        ))}
      </div>
      <button
        className="cstbtn nxtBtn"
        onClick={() => dispatch(makeActive("qualDiv"))}
      >
        My Qualifications
      </button>
      <br />
    </div>
  );
}

export default Skills;
