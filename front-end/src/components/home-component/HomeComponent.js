// Home components goes in this folder..
import React,{useState} from "react";
import {Helmet} from "react-helmet";
import About from "./about-dataAnalytics/About"
import Content from "../home-component/content/Content";
import Estimate from "./estimate/Card";
import Description from "./data-analytics-description/Description";
import Contact from "../../common-components/contact-component/Contact";
import HomeCards from "./home-cards/HomeCards";
import App from "./Accordian/App";
import Paper from "./Belowfaq/Paper";


export default function HomeComponent() {
  return (
    <div style={{fontFamily:"Poppins", marginTop:"6rem"}}>
      <Helmet>
                <meta charSet="utf-8" />
                <title>unMazer - Understand the World</title>
                <meta name="description" content="unMazer is helping businesses understand unique insights about people, location, news, social media, satellite imageries etc. through its B2B SaaS platform." />
      </Helmet>
      <Content />
      <Description/>
      {/* <About/> */}
      {/* <Animation /> */}
      {/* <Solution /> */}
      {/*  <LeftContent data={LeftContent1}/> */}
      {/* <Technology /> */}
      {/*  <RightContent data={RightContent1} code={false}/>
      <LeftContent data={LeftContent2}/>
      <RightContent data={RightContent2} code={true}/> */}
      <HomeCards/>
      <Estimate />
      <App/>
      <Paper/>
      
      <Contact link={"https://us7.list-manage.com/contact-form?u=c45b4435fa81fc45d23ed7254&form_id=6313ebab993ba9105ee068628885d91f"}/>
    </div>
  );
}