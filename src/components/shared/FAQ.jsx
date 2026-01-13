import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  // Sample FAQs
  const faqs = [
    {
      question: "What is NCLEX Bootcamp?",
      answer: "NCLEX Bootcamp is an online resource that will fully prepare you for the NCLEX-RN®. We have 1,900+ high-yield questions, case studies, readiness exams, and more."
    },
    {
      question: "How is NCLEX Bootcamp different from other question banks?",
      answer: "The Next Gen NCLEX® is an updated test. Our questions are created specifically for the Next Gen NCLEX® format with video walkthroughs that teach you how to think like a nurse."
    },
    {
      question: "Does NCLEX Bootcamp have a pass guarantee?",
      answer: "Yes! Our 2 month and 3 month memberships come with a pass guarantee if you complete all the content."
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Frequently asked questions
        </h2>

        {/* FAQ Items */}
        <div className="bg-white rounded-xl shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 px-6 flex items-center justify-between text-left hover:text-blue-600 transition-colors"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span className="ml-4">
                  {openIndex === index ? (
                    <FaChevronUp className="text-blue-600" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ