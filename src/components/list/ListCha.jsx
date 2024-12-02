import React from 'react'
import { AspectRatio, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image';
import Link from 'next/link';

const ListCha = ({ mockNews }) => {
  return (
    <SimpleGrid as="ul" columns={[1, null, 2, 3, 4]} gap="40px">
        {mockNews.map((news, index) => (
          <li key={index}>
            <Link href={`/news/${news.id}`}>
              {news.imageUrl && (<AspectRatio ratio={2 / 1}>
                <Image 
                  src={news.imageUrl} 
                  alt={news.title} 
                  width={800}
                  height={500}
                  className='w-full h-50 rounded-lg mb-4'
                />
              </AspectRatio>)}            
              <strong className='block text-lg font-semibold mt-5'>{news.title}</strong>
              {news.content && (<p className='mt-1'>{news.content}</p>)}
              {news.date && (<span className='text-sm text-gray-400'>
                {news.date}
              </span>)}
            </Link>
          </li>
        ))}
      </SimpleGrid>
  )
}

export default ListCha