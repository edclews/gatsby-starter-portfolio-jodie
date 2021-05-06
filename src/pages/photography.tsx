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
      <SEO title="Photography | Ed Clews" desc="Ed Clews - illustrator, photographer and designer" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        
        <h1>Photography details go here</h1>

        <h2>Miaow miaow miaow miaow</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a fringilla tortor, eget mollis ex. Cras facilisis nulla sed consequat fringilla. Donec vitae dapibus tellus. Proin congue risus lectus, non bibendum dolor rhoncus id. Donec quis cursus nisl. Aenean elementum vulputate nibh, ut bibendum erat ornare sed. Vivamus consectetur mi sagittis pretium convallis. Nunc tristique nisi sed risus tempus rutrum. Ut porttitor viverra ex, a venenatis dolor scelerisque vel. Cras eget risus vel turpis laoreet rutrum non et lorem. Nulla non mauris felis. Donec ornare ligula ornare, condimentum metus vitae, imperdiet justo. Sed nibh dui, tristique tempor nunc quis, tincidunt congue velit.</p>
     
      </AnimatedBox>
    </Layout>
  )
}

export default About
