function Achivements({ achieve }) {
  return (
    <>
      <div className="divHeading">Award & Achivements</div>

      <div className="achDiv">
        {achieve.map((ach, index) => (
          <div key={index} className="achCard">
            <div style={{ backgroundImage: `url(${ach.img})` }} />
            <div>{ach.title}</div>
            <div>{ach.desp}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Achivements;
