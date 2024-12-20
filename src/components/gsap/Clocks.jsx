import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const countries = [
  { name: 'Seoul', timezone: 'Asia/Seoul' },
  { name: 'New York', timezone: 'America/New_York' },
  { name: 'London', timezone: 'Europe/London' },
  { name: 'Sydney', timezone: 'Australia/Sydney' },
];

const Clock = ({ city, timezone }) => {
  const hourRef = useRef();
  const minuteRef = useRef();
  const secondRef = useRef();

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const localTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
      const hours = localTime.getHours();
      const minutes = localTime.getMinutes();
      const seconds = localTime.getSeconds();

      gsap.to(hourRef.current, {
        rotation: (hours % 12) * 30 + minutes / 2,
        duration: 0.5,
        ease: 'power1.out',
      });

      gsap.to(minuteRef.current, {
        rotation: minutes * 6,
        duration: 0.5,
        ease: 'power1.out',
      });

      gsap.to(secondRef.current, {
        rotation: seconds * 6,
        duration: 0.5,
        ease: 'power1.out',
      });
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="text-center">
      <h2 className="text-xl mb-4 font-bold">{city}</h2>
      <div className="relative w-[10rem] h-[15rem] border-2 border-gray-700 bg-yellow-300 rounded-full mx-auto">
        <div
          ref={hourRef}
          className="absolute w-1 h-16 bg-white top-10 left-[77px] origin-bottom transform rotate-0"
        ></div>
        <div
          ref={minuteRef}
          className="absolute w-[3px] h-20 bg-gray-700 top-6 left-[78px] origin-bottom transform rotate-0"
        ></div>
        <div
          ref={secondRef}
          className="absolute w-0.5 h-24 bg-red-500 top-2 left-[79px] origin-bottom transform rotate-0"
        ></div>
        <div className="absolute w-2.5 h-2.5 bg-black rounded-full top-[99px] left-[76px]"></div>
      </div>
    </div>
  );
};

export default function ClocksPage() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {countries.map(({ name, timezone }) => (
        <Clock key={timezone} city={name} timezone={timezone} />
      ))}
    </div>
  );
}
