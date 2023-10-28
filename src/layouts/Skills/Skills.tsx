import { useSelector, useDispatch } from "react-redux";
import { makeActive } from "../../store/HeaderSlice";

function Skills() {
  const { commSkills, techSkills } = useSelector((state) => state.skillsData),
    dispatch = useDispatch();
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
        {commSkills.map((skill, index) => (
          <div
            key={index}
            className="circle-border"
            style={{
              background: `linear-gradient(270deg, var(--activeColor) ${skill.score}%, transparent 0%), linear-gradient(10deg, var(--activeColor) 50%, lightgray 50%)`,
            }}
          >
            <div className="circle">{skill.title}</div>
          </div>
        ))}
      </div>
      <div className="skillsCard">
        {techSkills.map((skill, index) => (
          <div key={index}>
            <div>
              <img src={skill.icon} alt="img" />
              <p>{skill.title}</p>
              {skill.desp}
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
