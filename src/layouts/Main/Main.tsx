import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { BsArrowRight } from "react-icons/bs";
import { goUpSection } from "../../store/HeaderSlice";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Qualifications from "../Qualifications";
import Work from "../Work";
import Contact from "../Contact";
import { getContent } from "../../store/ContentSlice";

const findActiveLink = (links) => {
  return links.find((link) => link.active).linkDiv;
};

const goToLink = (link) => {
  window.open(link, "_blank", "noopener,noreferrer");
};

function Main() {
  const dispatch = useDispatch(),
    links = useSelector((state) => state.headerLinks.links),
    { isLoading } = useSelector((state) => state.contentData);

  useEffect(() => {
    dispatch(getContent({ type: "skills" }));
    dispatch(getContent({ type: "achievement" }));
    dispatch(getContent({ type: "qualification" }));
    dispatch(getContent({ type: "workExperience", order: "endDate" }));
    dispatch(getContent({ type: "aboutMe" }));
  }, []);

  return (
    <div className="mainDiv">
      <div className={classNames("loading", { hidden: !isLoading })}></div>
      {!isLoading && (
        <>
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
        </>
      )}
    </div>
  );
}

export default Main;
