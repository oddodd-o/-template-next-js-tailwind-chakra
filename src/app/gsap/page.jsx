"use client"

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HorizontalScrollSection from "../../components/gsap/HorizontalScrollSection";
import VerticalScrollSection from "../../components/gsap/VerticalScrollSection";
import TwoWaySection from "../../components/gsap/TwoWaySection";
import Link from "next/link";

export default function App() {

  return (
    <div>
      <ul>
        <li>GSAP</li>
        <li>ScrollTrigger</li>
        <li><Link href="/gsap/horizontal"> Horizontal Scroll </Link></li>
        <li><Link href="/gsap/vertical"> Vertical Scroll </Link></li>
        <li><Link href="/gsap/twoway"> Two Way Scroll </Link></li>
      </ul>
    </div>
  );
}