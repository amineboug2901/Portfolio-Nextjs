"use client";
import React, { useState } from "react";
import { useThemeContext } from "@/context/theme-context";
import "./LeaveMessage.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function LeaveMessage() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  if (!isAuthenticated) router.push("/login");
  const [formInputs, setFormInputs] = useState({
    name: "",
    feedback: "",
    rating: 0,
  });

  function check__all__null__fields() {
    if (
      formInputs.name != "" ||
      formInputs.feedback != "" ||
      formInputs.rating != ""
    ) {
      return true;
    }
    alert("Please Fill out all the Fields");
    return false;
  }
  function check__name() {
    const name = formInputs.name;
    if (name != "" && name.length >= 2) {
      return true;
    }
    alert("Name Character Should be greater or equal to 3");
    return false;
  }
  function check__feedback() {
    const feedback = formInputs.feedback;
    if (feedback != "" && feedback.length >= 4) {
      return true;
    }
    alert("Your Feedback must be the 4 number of character");
    return false;
  }
  function check__rating() {
    const rating = formInputs.rating;
    if (rating <= 5 && rating >= 1) {
      return true;
    }
    alert("Rating Should be under 5 or greater than 1");
    return false;
  }

  const sumitHandler = (e) => {
    e.preventDefault();
    console.log(formInputs);
    if (
      check__all__null__fields() &&
      check__name() &&
      check__feedback() &&
      check__rating
    ) {
      alert("Thank you for Your Rating");
    } else alert("please fill all the fields");
  };

  const { themeState } = useThemeContext();
  return (
    <main
      id="main"
      className={`leave-message-cont ${themeState.primary} ${themeState.background}`}
    >
      <h1 className="leave-title">Give Feedback</h1>
      <div className="form-box">
        <form onSubmit={sumitHandler}>
          <div className="user-box">
            <input
              onChange={(e) => {
                setFormInputs({ ...formInputs, name: e.target.value });
              }}
              className="name-input"
              type="text"
              placeholder=""
              name=""
              required=""
            />
            <label>Name</label>
          </div>
          <label className="feed-label">Feedback:</label>
          <div className="user-box">
            <textarea
              onChange={(e) => {
                setFormInputs({ ...formInputs, feedback: e.target.value });
              }}
              name=""
              placeholder="Your Feedback.."
              className="review-text"
              cols={41}
              rows={7}
            ></textarea>
          </div>
          <div className="rate">
            <h3>Review</h3>
            <input
              onChange={(e) => {
                setFormInputs({ ...formInputs, rating: e.target.value });
              }}
              className="rating-input"
              max={5}
              min={1}
              placeholder={"Rating 1-5"}
              type="number"
              name=""
              required=""
            />
          </div>
          <center>
            <button type="submit" className="btn sm primary ">
              SUBMIT
            </button>
          </center>
        </form>
      </div>
    </main>
  );
}

export default LeaveMessage;
