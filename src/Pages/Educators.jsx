/**
 * Educators Page
 * Complete page for educators and institutions
 */

import EducatorsHero from '../components/educators/EducatorsHero'
import BenefitsGrid from '../components/educators/BenefitsGrid'
import DashboardFeature from '../components/educators/DashboardFeature'
import ReadinessExamsSection from '../components/educators/ReadinessExamsSection'
import MobileAppSection from '../components/educators/MobileAppSection'

import ContactSection from '../components/educators/ContactSection'
import EducatorCTA from '../components/educators/EducatorCTA'


function Educators() {
  return (
    <>
      {/* Hero Section */}
      <EducatorsHero />

      {/* Educator CTA */}
      <EducatorCTA />
      


      {/* Benefits Grid */}
      <BenefitsGrid />

      {/* Dashboard Feature */}
      <DashboardFeature />

      {/* Readiness Exams */}
      <ReadinessExamsSection />

      {/* Mobile App */}
      <MobileAppSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}

export default Educators