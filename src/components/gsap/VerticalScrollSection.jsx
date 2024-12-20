'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VerticalScrollSection() {
  const main = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray('.box');
      
      boxes.forEach((box) => {
        gsap.to(box, {
          scale: 0.9, // 박스 크기를 절반으로 축소
          scrollTrigger: {
            trigger: box,
            start: "bottom 70%", // 박스가 화면 상단 20% 지점에 도달했을 때
            end: "bottom 0",  // 박스가 화면 상단을 -20% 지점 통과할 때까지
            scrub: 1,         // 부드러운 스크롤 효과
            pin: true,        // 박스를 고정
            markers: true,  // 디버깅용 마커
          }
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={main}>
      {/* 첫 번째 섹션 */}
      <section className="min-h-screen w-full p-8 flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Vertical Scroll Animation</h2>
        <p className="text-gray-600">Scroll down to see the scale effect!</p>
      </section>

      {/* 박스들의 세로 나열 섹션 */}
      <section className="min-h-screen w-full flex flex-col items-center">
        <div className="box w-full h-screen flex justify-center items-center text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
          Box 1
        </div>
        <div className="box w-full h-screen flex justify-center items-center text-white font-bold bg-gradient-to-r from-purple-500 to-pink-500">
          Box 2
        </div>
        <div className="box w-full h-screen flex justify-center items-center text-white font-bold bg-gradient-to-r from-yellow-500 to-red-500">
          Box 3
        </div>
      </section>

      {/* 마지막 섹션 */}
      <section className="min-h-screen w-full p-8 flex flex-col justify-center items-center bg-gray-100 relative">
        <h2 className="text-2xl font-bold mb-4">End Section</h2>
        <p className="text-gray-600">You&apos;ve reached the end!</p>
      </section>
    </div>
  );
}