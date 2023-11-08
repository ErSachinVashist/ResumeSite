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
        I have more than 7 years' experience building software for clients all
        over the world. Below is a quick overview of my main technical and team
        skill sets and technologies I use.
      </div>
      <div className="skillsPartition">
        <div>
          {skillObj.softSkills.map((skill, index) => (
            <div className="softSkillDiv" key={index}>
              <img src={skill.icon} alt="img" />
              <b>{skill.title}</b>
              <span>{documentToReactComponents(skill.description)}</span>
            </div>
          ))}
        </div>
        <div>
          {skillObj.techSkills.map((skill, index) => (
            <div
              className="techSkillDiv"
              style={{
                backgroundImage: `linear-gradient(
                  to right,
                  var(--activeColor) ${skill.score * 10}%,
                  rgba(0, 0, 0, 0) 10%
                )`,
              }}
              key={index}
            >
              <img src={skill.icon} alt="img" />
              <span>
                {skill.title} <b>{skill.score * 10}%</b>
              </span>
            </div>
          ))}
        </div>
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
