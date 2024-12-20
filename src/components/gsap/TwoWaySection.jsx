'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Container } from '@chakra-ui/react';
import ClocksPage from './Clocks';
import AnimatedList from './AnimatedList';

gsap.registerPlugin(ScrollTrigger);

const storeLines = [
  ["스타벅스", "투썸플레이스", "이디야", "메가커피", "컴포즈", "할리스", "폴바셋"],
  ["교촌치킨", "BBQ", "BHC", "처갓집", "굽네치킨", "네네치킨", "멕시카나"],
  ["맘스터치", "버거킹", "롯데리아", "맥도날드", "KFC", "노브랜드버거", "쉑쉑버거"],
  ["파리바게뜨", "뚜레쥬르", "던킨도너츠", "삼송빵집", "크리스피크림", "베스킨라빈스", "설빙"],
  ["아리따움", "이니스프리", "에뛰드", "올리브영", "롭스", "미샤", "네이처리퍼블릭"],
  ["GS25", "CU", "세븐일레븐", "이마트24", "미니스톱", "씨스페이스", "familymart"]
];

export default function TwoWaySection() {
  const containerRef = useRef();
  const section2Ref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    
    // 헤더 애니메이션
    tl.fromTo('.header', {
      yPercent: -100,
      opacity: 0
    }, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });

    // 라인 애니메이션 시퀀스
    const lines = gsap.utils.toArray('.line');
    
    // 초기 위치 설정
    lines.forEach((line, index) => {
      gsap.set(line, {
        xPercent: index % 2 === 0 ? -100 : 100,
        opacity: 0
      });
    });

    // 라인들이 중앙으로 이동하는 애니메이션
    tl.to(lines, {
      xPercent: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      stagger: {
        amount: 0.8
      }
    }, "-=0.5");

    // 섹션 전환 애니메이션
    ScrollTrigger.create({
      trigger: ".first-section",
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      trigger: ".second-section",
      start: "top bottom",
      end: "top top",
      onEnter: () => {
        gsap.to(".first-section", {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut"
        });
        gsap.to(".second-section", {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut"
        });
      },
      onLeaveBack: () => {
        gsap.to(".first-section", {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut"
        });
        gsap.to(".second-section", {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut"
        });
      }
    });

    ScrollTrigger.create({
      trigger: ".second-section",
      start: "top top",
      end: "+=100%",
    });

  }, []);

  return (
    <div className="bg-black">
      {/* 헤더 */}
      <header className="header fixed top-0 left-0 w-full bg-black z-50 border-b-2 border-yellow-300">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <h1 className="text-yellow-300 text-2xl font-bold">TERA TOWER</h1>
          <button className="text-yellow-300 flex flex-col gap-2">
            <div className="w-8 h-0.5 bg-yellow-300"></div>
            <div className="w-8 h-0.5 bg-yellow-300"></div>
          </button>
        </div>
      </header>

      {/* 첫 번째 섹션 - 움직이는 라인들 */}
      <section className="first-section min-h-screen">
        <Container ref={containerRef} className="relative w-full h-screen flex flex-col justify-center pt-20">
          {storeLines.map((stores, i) => (
            <div key={i} className="line relative w-full h-16 px-8 mb-8 overflow-hidden">
              <div 
                className={`w-full h-full flex items-center gap-4`} 
                style={{
                  animation: `${i % 2 === 0 ? 'marqueeRight' : 'marqueeLeft'} 30s linear infinite`
                }}>
                {/* 첫 번째 세트 */}
                {stores.map((store, j) => (
                  <strong 
                    key={j} 
                    className="rounded-full whitespace-nowrap border-2 border-yellow-300 text-white py-4 px-6 text-7xl font-bold"
                  >
                    {store}
                  </strong>
                ))}
                {/* 두 번째 세트 */}
                {stores.map((store, j) => (
                  <strong 
                    key={`${j}-clone`} 
                    className="rounded-full whitespace-nowrap border-2 border-yellow-300 text-yellow-300 py-4 px-6 text-2xl"
                  >
                    {store}
                  </strong>
                ))}
              </div>
            </div>
          ))}
          <style jsx>{`
            @keyframes marqueeRight {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marqueeLeft {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
          `}</style>
        </Container>
      </section>

      {/* 두 번째 섹션 - 새로운 컨텐츠 */}
      <section ref={section2Ref} className="second-section min-h-screen flex items-center justify-center opacity-0">
        <Container className="text-center text-yellow-300">
          <AnimatedList />
        </Container>
      </section>

      <section ref={section2Ref} className="second-section min-h-screen flex items-center justify-center opacity-0">
        <div className="text-center text-yellow-300">
          <ClocksPage />
        </div>
      </section>
    </div>
  );
}