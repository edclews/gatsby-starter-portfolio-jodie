import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Ed Clews" desc="Ed Clews - illustrator, photographer and designer" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        
        <h1>About Ed Clews...</h1>

        <h2>Miaow miaow miaow miaow</h2>
        <p>I’m a designer by day, <a href="https://edclews.com">illustrator</a> and <a href="https://www.edclewsphoto.co.uk/">photographer</a> by night based in York, North Yorkshire. I create character portrait illustrations for print and social media campaigns, illustrated gifts and private commissions.</p>

        <p>I also work on everything from small business websites and magazines to print and digital engagement projects for multinational blue chip clients.</p>

        <p>You can contact me at <a href="mailto:ed@edclews.com">ed@edclews.com.</a></p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
