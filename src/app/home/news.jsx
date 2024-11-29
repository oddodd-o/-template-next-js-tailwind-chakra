import { Section } from '@/components/layout/Main'
import ListCha from '@/components/list/ListCha';
import ListTail from '@/components/list/ListTail';
import { AspectRatio, Container, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'

const News = ({ mockNews, title }) => {
  return (
    <Section title={title}>
      <ListTail mockNews={mockNews} />
      <ListCha mockNews={mockNews} />
    </Section>
  );
};

export default News;