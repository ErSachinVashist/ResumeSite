import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Achievements({ achievement }) {
  return (
    <>
      <div className="divHeading">Award & Achievements</div>

      <div className="achDiv">
        {achievement?.map((ach, index) => (
          <div key={index} className="achCard">
            <div style={{ backgroundImage: `url(${ach.icon})` }} />
            <div>{ach.title}</div>
            <div> {documentToReactComponents(ach.description)}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Achievements;
