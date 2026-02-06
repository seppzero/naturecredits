import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import NatureCreditsExplained from '../components/NatureCreditsExplained'
import LocalImpact from '../components/LocalImpact'
import DigitalMRV from '../components/DigitalMRV'
import ScienceInnovation from '../components/ScienceInnovation'
import FoundingTeam from '../components/FoundingTeam'
import Features from '../components/Features'
import Contact from '../components/Contact'
import YoutubeVideo from '../components/YouTubeVideo'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <YoutubeVideo />
      <NatureCreditsExplained />
      <LocalImpact />
      <DigitalMRV />
      <ScienceInnovation />
      <FoundingTeam />
      <Contact />
    </Layout>
  )
}

export default IndexPage

