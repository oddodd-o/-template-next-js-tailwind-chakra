"use client"

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HorizontalScrollSection from "./components/horizontalScrollSection";
import VerticalScrollSection from "./components/verticalScrollSection";

export default function App() {

  return (
    // <HorizontalScrollSection />
    <VerticalScrollSection />
  );
}