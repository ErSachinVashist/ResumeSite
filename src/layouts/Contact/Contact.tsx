import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdLocationOn, MdEmail } from "react-icons/md";
import {
  FaLinkedinIn,
  FaGlobeAmericas,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import { sendMsg } from "../../store/ContactSlice";

const reqFields = ["message", "email"],
  defaultVals = {
    name: "",
    email: "",
    phonenumber: "",
    message: "",
    errorArray: [],
  };
function Contact(props) {
  const { goToLink } = props,
    { sending } = useSelector((state) => state.contactData),
    dipatch = useDispatch(),
    [formData, changeFormData] = useState(defaultVals);

  useEffect(() => {
    if (!sending) changeFormData(defaultVals);
  }, [sending]);

  const addFormData = (key, value) => {
    changeFormData({
      ...formData,
      [key]: value,
      errorArray: formData.errorArray.filter((item) => item !== key),
    });
  };

  const submitMsg = () => {
    let errorArray = [];
    Object.keys(formData).forEach((key) => {
      if (reqFields.indexOf(key) > -1 && formData[key] === "")
        errorArray.push(key);
    });

    if (errorArray.length > 0) {
      return changeFormData({ ...formData, errorArray });
    }
    dipatch(sendMsg(formData));
  };

  const isErrored = (type) => {
    return formData.errorArray.indexOf(type) > -1 ? "erroredField" : "";
  };

  return (
    <div className="contactDiv">
      <div className="divHeading">Contact Me</div>
      <div>
        <div className="contactInfo">
          Contact info
          <table>
            <tbody>
              <tr>
                <td width="15%">
                  <MdLocationOn />
                </td>
                <td>New Delhi, India</td>
              </tr>
              <tr>
                <td>
                  <MdEmail />
                </td>
                <td>sachinvashist82@gmail.com</td>
              </tr>
              <tr>
                <td>
                  <IoLogoWhatsapp />
                </td>
                <td>+918860496464</td>
              </tr>
              <tr>
                <td>
                  <FaGlobeAmericas />
                </td>
                <td>ersachinvashist.github.io/ResumeSite</td>
              </tr>
            </tbody>
          </table>
          Follow Me
          <p className="iconsDiv">
            <span onClick={() => goToLink("linkedin")}>
              <FaLinkedinIn />
            </span>
            <span onClick={() => goToLink("twitter")}>
              <FaTwitter />
            </span>
            <span onClick={() => goToLink("github")}>
              <FiGithub />
            </span>
            <span onClick={() => goToLink("fb")}>
              <FaFacebookF />
            </span>
            <span onClick={() => goToLink("insta")}>
              <FiInstagram />
            </span>
          </p>
        </div>
        <div className="contactForm">
          <div>
            <label>name</label>
            <input
              className={isErrored("name")}
              value={formData.name}
              type="text"
              placeholder="Type your name"
              onChange={(e) => addFormData("name", e.target.value)}
            />
          </div>
          <div>
            <label>email</label>
            <input
              className={isErrored("email")}
              value={formData.email}
              type="email"
              placeholder="Type your email address"
              onChange={(e) => addFormData("email", e.target.value)}
            />
          </div>
          <div>
            <label>phone number</label>
            <input
              className={isErrored("phonenumber")}
              value={formData.phonenumber}
              type="text"
              placeholder="Type your phone number"
              onChange={(e) => addFormData("phonenumber", e.target.value)}
            />
          </div>
          <div>
            <label>your message</label>
            <textarea
              className={isErrored("message")}
              value={formData.message}
              rows="5"
              placeholder="Type your message here"
              onChange={(e) => addFormData("message", e.target.value)}
            ></textarea>
          </div>
          <button disabled={sending} className="cstbtn" onClick={submitMsg}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
