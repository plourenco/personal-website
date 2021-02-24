import React from 'react';
import About from 'components/about';
import Education from 'components/about/education';
import Why from 'components/about/why';
import Layout from 'components/layout';

export default function AboutPage() {
  return (
    <Layout>
      <About />
      <Education />
      <Why />
    </Layout>
  );
}
