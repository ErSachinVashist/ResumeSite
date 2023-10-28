import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goUpSection } from "../../store/HeaderSlice";
import { BsArrowRight } from "react-icons/bs";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Qualifications from "../Qualifications";
import Work from "../Work";
import Contact from "../Contact";
import { getData } from "../../store/ContentSlice";
import { HEADER_LINKS } from "../../constants";

const findActiveLink = (links) => {
  return links.find((link) => link.active).linkDiv;
};

const goToLink = (link) => {
  window.open(link, "_blank", "noopener,noreferrer");
};

function Main() {
  const dispatch = useDispatch(),
    links = useSelector((state) => state.headerLinks.links);

  useEffect(() => {
    dispatch(getData("skills"));
    dispatch(getData("achievement"));
    dispatch(getData("qualification"));
    dispatch(getData("workExperience"));
    dispatch(getData("aboutMe"));
  }, []);

  return (
    <div className="mainDiv">
      <button
        className={
          "cstbtn backBtn " +
          (findActiveLink(links) !== "homeDiv" && "showUpBtn")
        }
        onClick={() => dispatch(goUpSection())}
      >
        <BsArrowRight size={50} />
      </button>
      <Home goToLink={goToLink} />
      <About goToLink={goToLink} />
      <Skills />
      <Qualifications />
      <Work />
      <Contact goToLink={goToLink} />
    </div>
  );
}

export default Main;
