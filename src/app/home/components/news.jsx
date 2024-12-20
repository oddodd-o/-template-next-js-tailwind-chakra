import { Section } from '@/components/layout/Main'
import ListCha from '@/components/list/ListCha';
import ListTail from '@/components/list/ListTail';
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