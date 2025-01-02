import React from "react";
import Project from "../Project/Project";
import SvgAnimation from "./SvgAnimation";

export default function BusinessSite() {
  const description = (
    <span>
      Will create a highly optimized and visually engaging <b>Business Website</b> tailored to meet the unique needs of your business. 
      <br></br>Our <b>custom website development service</b> will be designed to provide a seamless, user-friendly experience that enhances your online presence. With a focus on <b>responsive design, SEO optimization, and seamless integration</b>, we will ensure that your website drives growth, attracts more customers, and elevates your brand's credibility.
      {/* Developed <b>"Power Analytics"</b> a front-end, highly customized & user
      friendly <b>Business Intelligence Solution, in React/Redux </b>. Power
      Analytics allows for{" "}
      <b>real time data extraction, transformation and loading </b>
      from different <b>SQL and NoSQL databases</b> sources, along with
      visualization, automatic charts, dashboard and report generation. */}
    </span>
  );
  const techs =
    "";
  return (
    <a href='https://blubuk.com'>
      <Project
        title="Business Site"
        experience="Trades"
        time=""
        description={description}
        techs={techs}
        left={true}
      >
        <SvgAnimation />
      </Project>
    </a>

  );
}
