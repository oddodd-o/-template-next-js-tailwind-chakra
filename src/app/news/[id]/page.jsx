import { mockNews } from '@/data/newsData';
import Image from 'next/image';
import React from 'react';

const NewsDetail = ({ params }) => {
  // URL 파라미터에서 id 값 가져오기
  const { id } = params;

  // 해당 뉴스 데이터 찾기
  const news = mockNews.find((item) => item.id === id);

  if (!news) {
    return <p>해당 뉴스가 없습니다.</p>;
  }

  return (
    <>
      <h1 className="text-4xl font-bold mt-4">{news.title}</h1>
      <p className="text-sm text-gray-400 mt-2 block mb-10">{news.date}</p>
      <div className='flex flex-col gap-4'>
        <Image
          src={news.imageUrl}
          alt={news.title}
          width={800}
          height={500}
          className="w-full h-auto rounded-lg"
        />
        <p className="mt-4 text-lg leading-7">{news.content}</p>
      </div>
    </>
  );
};

export default NewsDetail;
