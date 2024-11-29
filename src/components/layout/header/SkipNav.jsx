import React from 'react';

const skipTo = [
  { id: 'gnb', text: '메뉴 바로가기' },
  { id: 'container', text: '본문 바로가기' },
];

const SkipNav = () => {
  return (
    <div id="u_skip" className="relative z-50">
      {skipTo.map((item, index) => (
        <a
          key={index}
          href={`#${item.id}`}
          className="
            absolute -top-8 left-0 w-36
            border border-green-500 bg-neutral-800 text-center opacity-0
            focus:top-0 focus:opacity-100 focus:z-30 focus:no-underline
            active:top-0 active:opacity-100 active:z-30 active:no-underline
          "
        >
          <span className="inline-block pr-2 pt-0.5 text-sm leading-7 text-white tracking-tight whitespace-nowrap">
            {item.text}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SkipNav;