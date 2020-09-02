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
      <SEO title="About | Ed Clews" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        
        <h1>Hi. I'm Ed.</h1>

        <h2>Miaow miaow miaow miaow</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed imperdiet tellus, ac cursus velit. Nunc mattis ante vel urna vestibulum, vitae pulvinar tellus aliquam. Donec tincidunt a erat sit amet imperdiet. Nam congue purus eu ante viverra, a malesuada dui lacinia. Morbi eu lobortis ante, a cursus arcu. Sed dolor augue, vulputate vel lorem sed, rhoncus tincidunt purus. Nam at congue odio. </p>

        <p>I deleted the references to instagram and it published finally.</p>
        
          <p>Nunc dictum turpis sapien, a pretium quam venenatis iaculis. Donec eu condimentum massa. Cras interdum felis elit. Suspendisse in pharetra velit, nec consectetur diam. Integer nisi mauris, pulvinar quis iaculis ac, luctus vitae arcu. In risus nisl, dapibus sit amet fermentum vel, pellentesque quis mi. Nam tempus imperdiet sapien ullamcorper accumsan. In at mauris bibendum, luctus nisi et, ultrices nisl.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
