/**
 * Pricing Page
 * Complete pricing page with all sections
 */

import PricingHero from '../components/pricing/PricingHero'
import PricingCards from '../components/pricing/PricingCards'
import QuizBanner from '../components/pricing/QuizBanner'
import VideoReviewsCarousel from '../components/pricing/VideoReviewsCarousel'
import PassGuarantee from '../components/pricing/PassGuarantee'

// Import sections from home page to reuse
import Features from '../components/shared/Features'
import CheatSheets from '../components/shared/CheatSheets'
import ReadinessExams from '../components/shared/ReadinessExams'
import StudySchedule from '../components/shared/StudySchedule'
import Testimonials from '../components/shared/Testimonials'
import FAQ from '../components/shared/FAQ'

function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <PricingHero />
      

      {/* Pricing Cards */}
      <PricingCards />

      {/* Quiz Banner */}
      <QuizBanner />

      {/* Video Reviews */}
      <VideoReviewsCarousel />

      {/* Why Choose Section - Reuse from home */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why are students choosing NCLEX Bootcamp?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            We make it easy for you to pass the NCLEX®.
          </p>
        </div>
      </section>

      {/* Features sections */}
      <Features />
      <CheatSheets />
      <ReadinessExams />
      <StudySchedule />

      {/* Pass Guarantee */}
      <PassGuarantee />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />
    </>
  )
}

export default Pricing
// ```

// ---

// ## 📁 **UPDATED FOLDER STRUCTURE**
// ```
// src/
// ├── components/
// │   ├── pricing/               ✅ NEW
// │   │   ├── PricingHero.jsx   ✅
// │   │   ├── PricingCard.jsx   ✅
// │   │   ├── PricingCards.jsx  ✅
// │   │   ├── QuizBanner.jsx    ✅
// │   │   ├── VideoReviewsCarousel.jsx ✅
// │   │   └── PassGuarantee.jsx ✅
// │   ├── Navbar.jsx
// │   ├── Hero.jsx
// │   ├── Features.jsx
// │   ├── CheatSheets.jsx
// │   ├── ReadinessExams.jsx
// │   ├── StudySchedule.jsx
// │   ├── Testimonials.jsx
// │   ├── About.jsx
// │   ├── FAQ.jsx
// │   └── Footer.jsx
// ├── pages/
// │   ├── Home.jsx
// │   └── Pricing.jsx           ✅ UPDATED
// └── App.jsx