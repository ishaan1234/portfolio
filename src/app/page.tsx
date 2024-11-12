// app/page.tsx or pages/index.tsx
"use client";
import React from "react";
import { AboutMe } from "./AboutMe";
import { Home } from "./Home";
import Projects from "./projects";
import Experience from "./experience";
import FloatingNavDemo from "./FloatingNavDemo";


export default function App() {
  return (
    <div className="bg-slate-900">
      {/* Add Floating Navigation */}
      <FloatingNavDemo />

      
      
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>

      {/* <div id="extraco">
        <Extraco />
      </div> */}


    </div>
  );
}
