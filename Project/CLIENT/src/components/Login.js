import logo from "../logo.svg";
import "../App.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { checkboxClasses } from "@mui/material";
import Home from "./Home";
import "./Login.css";

function Login({ store }) {
  const [login, setLogin] = useState(null);
  const [un, setUn] = useState(null);
  const [pw, setPw] = useState(null);
  const [captchaText, setCaptchaText] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    drawCaptcha();
  }, []);

  function drawCaptcha() {
    const ctx = canvasRef.current.getContext("2d");
    const characters =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charLength = characters.length;
    let captchaString = "";
    for (let i = 0; i < 5; i++) {
      captchaString += characters.charAt(Math.floor(Math.random() * charLength));
    }
    setCaptchaText(captchaString);
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.font = "48px serif";
    ctx.fillText(captchaString, 10, 60);
  }

  function handleForm(event) {
    event.preventDefault();
    if (captchaInput !== captchaText) {
      setCaptchaError(true);
      drawCaptcha();
      return;
    }
    setCaptchaError(false);
    const data = new FormData(event.currentTarget);
    setUn(data.get("un"));
    setPw(data.get("pw"));
    axios
      .get("http://localhost:8081/check", {
        params: {
          un: data.get("un"),
          pw: data.get("pw"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setLogin(res.data);
      });
  }

  if (login === null || login === "FAIL") {
    return (
      <div className="App-login">
        <p>Login goes here</p>
        <form onSubmit={handleForm}>
          <label htmlFor="un">Email:</label>
          <input type="text" placeholder="Enter Email" name="un" id="un" />
          <br />
          <label htmlFor="pw">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="pw"
            id="pw"
          />
          <br />
          <br />
          <div className="captcha-container">
            <canvas ref={canvasRef} width="360" height="80"></canvas>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Enter the text in the image"
            />
          </div>
          {captchaError && <div className="captcha-error">Captcha text does not match!</div>}
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <Home un={un} pw={pw} store={store} />
      </div>
    );
  }
}

export default Login;
