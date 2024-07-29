"use client";
import React, { useEffect, useState } from "react";
import "./TestimonialPage.css";
import { useThemeContext } from "@/context/theme-context";
import TestimonialsCards from "@/components/TestimonialsCards";
import data from "./TestimonialData.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Navbar from "@/sections/navbar/Navbar";

function TestimonialPage() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const router = useRouter();
  if (!isAuthenticated) router.push("/login");
  const [TestimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    setTestimonialData(data);
  }, []);
  const { themeState } = useThemeContext();
  return (
    <main
      id="main"
      className={`${themeState.primary} ${themeState.background}`}
    >
      <div className={`cont `}>
        <h2>Testimonials</h2>
        <div className="subTitle">
          <h2>Note et Commantaire</h2>
          <Link href={"/leave-feedback"} className="btn sm primary git">
            Laisser Un Message
          </Link>
        </div>
        <div className="AllTestimonials">
          {TestimonialData.map((item, index) => {
            return (
              <>
                <Navbar />
                <TestimonialsCards
                  key={index}
                  ratingStart={item.ratingStart}
                  desc={item.desc}
                  username={item.username}
                  date={item.date}
                />
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default TestimonialPage;
