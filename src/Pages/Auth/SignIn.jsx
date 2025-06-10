import React, { useContext, useState } from "react";
import logo from "../../assets/Images/amzon-auth-logo.png";
import classes from "./auth.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataPovider";
import { Type } from "../../Utility/action.type";

import { ClipLoader } from "react-spinners";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  // console.log(email, password);

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(navStateData);
  // console.log(user);
  const authHandler = async (e) => {
    try {
      e.preventDefault();
      // console.log(e.target.name);
      if (e.target.name == "signIn") {
        setLoading({ ...loading, signIn: true });
        signInWithEmailAndPassword(auth, email, password)
          .then((userInfo) => {
            // console.log(userInfo);
            dispatch({
              type: Type.SET_USER,
              user: userInfo.user,
            });
            setLoading({ ...loading, signIn: false });
            navigate(navStateData?.state?.redirect || "/");
          })
          .catch((err) => {
            // console.log("I couldn't signIn with this email and password");
            setError(err.message);
            setLoading({ ...loading, signIn: false });
          });
      } else {
        setLoading({ ...loading, signUp: true });
        createUserWithEmailAndPassword(auth, email, password)
          .then((userInfo) => {
            // console.log(userInfo);
            dispatch({
              type: Type.SET_USER,
              user: userInfo.user,
            });
            setLoading({ ...loading, signUp: false });
            navigate(navStateData?.state?.redirect || "/");
          })
          .catch((err) => {
            // console.log(
            //   "I couldn't create an account with this email and password"
            // );
            setError(err.message);
            setLoading({ ...loading, signUp: false });
          });
      }
    } catch (error) {
      console.log("I got problem to handle the user");
    }
  };

  return (
    <section className={classes.login_outer_container}>
      <Link to="/">
        <img src={logo} alt="Amazon.png" />
      </Link>
      <div className={classes.form_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              color: "red",
              fontWeight: "bold",
              textAlign: "center",
              padding: "5px",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <label htmlFor="Email">E-mail:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="Email"
          />
          <label className={classes.password_label} htmlFor="Password">
            Password:
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="Password"
            minLength={8}
            maxLength={12}
          />
          <button type="submit" name="signIn" onClick={authHandler}>
            {loading.signIn ? <ClipLoader size={15}></ClipLoader> : "Sign In"}
          </button>
        </form>
        <p>
          By signing in you agree to the AMAZON FAKE CLONE Condition of Use &
          Sale. Please see our Privacy Notice , our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button type="submit" name="signUp" onClick={authHandler}>
          {loading.signUp ? (
            <ClipLoader size={15}></ClipLoader>
          ) : (
            "Create your Amazon account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "10px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
