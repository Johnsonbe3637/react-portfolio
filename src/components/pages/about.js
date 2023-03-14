import React from "react";
import profilePicture from "../../../static/assets/images/poster.jpg.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className="left-column"
           style={{
             background: "url(" + profilePicture + ") no-repeat",
             backgroundSize: "cover",
             backgroundPosition: "center"
           }}
        />
      <div className="right-column">
        Welcome to my portfolio.  My name Is Benjamin Johnson and I've spent the last seven months learning
        everything there is to know about full stack development in the coding industry, from html & css to Python,
        javascript, vanilla javascript, scss, & react. Covering both front and back ends of development. I'm currently
        applying this knowledge in my role as a student for Bottega University, where I have learned how to go in depth
        using my skills. I've built a number of web pages in the past using the popular pre-built platform Shopify.
        However, the shopify platform builds were nothing as in depth as to what I have learned at Bottega University.
        My latest challenge has been getting more experience with the back end builds for projects, as I do prefer front
        -end builds. My goal is to improve and further my education within the coding world & to help through my contributions
        as a continual productive member of the team.
        {/* You can follow my work here: Personal Website or External Portfolio Link. */}
      </div>
    </div>
  );
}