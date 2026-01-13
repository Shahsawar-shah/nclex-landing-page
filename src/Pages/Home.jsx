import Hero from '../components/shared/Hero'
import Features from '../components/shared/Features'
import Testimonials from '../components/shared/Testimonials'
import About from '../components/shared/About'
import FAQ from '../components/shared/FAQ'
import CheatSheets from '../components/shared/CheatSheets'
import ReadinessExams from '../components/shared/ReadinessExams'
import StudySchedule from '../components/shared/StudySchedule'


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CheatSheets />
      <ReadinessExams />
      <StudySchedule />
      <Testimonials />
      <About />
      <FAQ />
    </>
  )
}

export default Home