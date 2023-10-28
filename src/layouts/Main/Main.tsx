import { useDispatch, useSelector } from "react-redux";
import { goUpSection } from "../../store/HeaderSlice";
import { BsArrowRight } from "react-icons/bs";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Qualifications from "../Qualifications";
import Work from "../Work";
import Contact from "../Contact";

const findActiveLink = (links) => {
  return links.find((link) => link.active).linkDiv;
};

const goToLink = (type) => {
  let link = "";
  switch (type) {
    case "linkedin":
      link = "https://www.linkedin.com/in/sachin-vashist";
      break;
    case "mail":
      link = "mailto: sachinvashist82@gmail.com";
      break;
    case "github":
      link = "https://github.com/ErSachinVashist";
      break;
    case "fb":
      link = "https://www.facebook.com/vashist82";
      break;
    case "insta":
      link = "https://www.instagram.com/vashist797";
      break;
    case "twitter":
      link = "https://twitter.com/sachinvashist82";
      break;
    case "resume":
      link =
        "https://drive.google.com/file/d/1M2ErjAkJUugiy2YS63_pk9aQhsy0q3-g/view?usp=sharing";
      break;
    default: //
  }
  window.open(link, "_blank", "noopener,noreferrer");
};

function Main() {
  const dispatch = useDispatch(),
    links = useSelector((state) => state.headerLinks.links);

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
