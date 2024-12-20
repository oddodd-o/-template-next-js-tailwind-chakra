'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const listItems = [
  "커피 ☕", "헬스 🏋️‍♂️", "독서 📚", "요리 🍳",
  "여행 ✈️", "영화 🎬", "음악 🎵", "산책 🚶‍♀️",
  "쇼핑 🛍️", "등산 🏔️", "게임 🎮", "운동 ⚽",
  "사진 📸", "캠핑 ⛺", "낚시 🎣", "공예 🧵",
  "강아지 🐶", "고양이 🐱", "꽃 🌸", "바다 🌊",
  "축제 🎉", "디자인 🎨", "개발 💻", "투자 📈",
  "패션 👗", "미술관 🖼️", "박물관 🏛️", "책 쓰기 🖊️",
  "원예 🌱", "댄스 💃", "음식 탐방 🍜", "음악 감상 🎧",
  "라이브 공연 🎤", "요가 🧘‍♂️", "자전거 🚴‍♀️", "러닝 🏃‍♂️",
  "사진 보정 🖌️", "비디오 편집 🎥", "마라톤 🏅", "도예 🏺",
  "골프 🏌️‍♀️", "서핑 🏄‍♂️", "스키 🎿", "스노우보드 🏂",
  "스케이트 ⛸️", "플라잉 요가 🪂", "피아노 🎹", "기타 🎸",
  "드럼 🥁", "베이킹 🧁", "크로스핏 🏋️‍♀️", "스쿠버다이빙 🤿",
  "카약 🚣", "승마 🐎", "도보 여행 🗺️", "패러글라이딩 🪂",
  "등대 탐방 🏖️", "클라이밍 🧗‍♀️", "국악 연주 🪕", "코스프레 🎭",
  "문학 감상 📖", "자동차 경주 🏎️", "스마트홈 관리 🏡", "트렌드 리서치 🔍",
  "주식 투자 💹", "암호화폐 분석 🪙", "패턴 디자인 🧶", "캐릭터 디자인 ✏️",
  "자연 탐방 🌳", "별 관측 🔭", "AI 공부 🤖", "3D 모델링 🖥️",
  "나무 조각 ✂️", "박람회 방문 🏢", "공연 기획 🎫", "SNS 운영 📱",
  "전자 음악 🎛️", "칼리그라피 ✍️", "핸드드립 커피 ☕", "도서관 탐방 📔",
  "세계 지도 탐험 🌍", "무용 👯‍♀️", "레고 조립 🧱", "보드게임 🎲",
  "퍼즐 맞추기 🧩", "심리학 공부 🧠", "별자리 공부 ✨", "와인 시음 🍷",
  "스무디 만들기 🥤", "정원 가꾸기 🌷", "역사 탐구 🕰️", "차 수집 🚗",
  "도시 스케치 ✏️", "바다낚시 🎣", "양봉 🐝", "희귀 도서 수집 📜",
  "영화 리뷰 작성 📝", "드론 비행 🚁", "공간 디자인 🏙️", "푸드 스타일링 🍽️",
  "네일아트 💅", "웹툰 그리기 🎨", "보컬 트레이닝 🎤", "캣타워 제작 🐈",
  "루프탑 바 탐방 🌃", "펫케어 💕", "비즈니스 강의 📊", "오케스트라 감상 🎻",
  "문구 수집 ✂️", "스탬프 수집 🖋️", "철도 여행 🚂", "카페 디자인 🏠",
  "심리 상담 공부 🛋️", "홈 데코레이션 🖼️", "게임 개발 🎮", "패턴 제작 🧵",
];


export default function AnimatedList() {
  const listRef = useRef();

  useEffect(() => {
    const listElements = listRef.current.querySelectorAll('.list-item');

    listElements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { color: '#A1A1A1', opacity: 0.5 },
        {
          color: '#FFFFFF',
          opacity: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 70%', // 화면의 50% 지점을 기준
            end: '+=100',
            toggleActions: 'play none none reverse', // 스크롤 방향에 따라 애니메이션 실행
          },
          duration: 0.5,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <ul ref={listRef} className="space-y-8 text-lg font-semibold w-1/2">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="text-gray-400 text-7xl font-bold inline transition duration-300 ease-in-out"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
