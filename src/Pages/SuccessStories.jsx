/**
 * Success Stories Page
 * Complete success stories showcase
 */

import SuccessHero from '../components/success/SuccessHero'
import FeaturedStudents from '../components/success/FeaturedStudents'
import TeamPhotos from '../components/success/TeamPhotos'
import ShareStoryCTA from '../components/success/ShareStoryCTA'

function SuccessStories() {
  return (
    <>
      {/* Hero Section */}
      <SuccessHero />

      {/* Featured Students Grid */}
      <FeaturedStudents />

      {/* Team Photos */}
      <TeamPhotos />

      {/* CTA Section */}
      <ShareStoryCTA />
    </>
  )
}

export default SuccessStories