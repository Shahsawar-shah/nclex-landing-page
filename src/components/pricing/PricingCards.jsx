/**
 * PricingCards Component
 * Container for all pricing cards with data
 */

import PricingCard from './PricingCard'

function PricingCards() {
  
  // Pricing plans data
  const plans = [
    {
      title: "1 Month",
      originalPrice: "$79",
      salePrice: "$59",
      savings: 20,
      description: "Great for students on a tight schedule or who are taking the NCLEX® soon.",
      afterpayPrice: "14.75",
      hasGuarantee: false,
      isPopular: false,
      features: [
        "1,900+ NCLEX® Questions",
        "50 NCLEX® Cases",
        "4 Readiness Exams",
        "140+ Cheat Sheets",
        "75+ Crash Course Videos",
        "Study Schedule Creator",
        "Bootcamp AI™ Tutor",
        "Accurate Pass Prediction",
        "Create Unlimited Tests",
        "Mobile App Access"
      ]
    },
    {
      title: "2 Months",
      originalPrice: "$159",
      salePrice: "$99",
      savings: 60,
      description: "Great for students following Bootcamp's recommended NCLEX® study schedule.",
      afterpayPrice: "24.75",
      hasGuarantee: true,
      isPopular: true,
      features: [
        "Pass Guarantee",
        "1,900+ NCLEX® Questions",
        "50 NCLEX® Cases",
        "4 Readiness Exams",
        "140+ Cheat Sheets",
        "75+ Crash Course Videos",
        "Study Schedule Creator",
        "Bootcamp AI™ Tutor",
        "Accurate Pass Prediction",
        "Create Unlimited Tests",
        "Mobile App Access"
      ]
    },
    {
      title: "3 Months",
      originalPrice: "$239",
      salePrice: "$129",
      savings: 110,
      description: "Great for students working full-time or who want to study at a relaxed pace.",
      afterpayPrice: "32.25",
      hasGuarantee: true,
      isPopular: false,
      features: [
        "Pass Guarantee",
        "1,900+ NCLEX® Questions",
        "50 NCLEX® Cases",
        "4 Readiness Exams",
        "140+ Cheat Sheets",
        "75+ Crash Course Videos",
        "Study Schedule Creator",
        "Bootcamp AI™ Tutor",
        "Accurate Pass Prediction",
        "Create Unlimited Tests",
        "Mobile App Access"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              originalPrice={plan.originalPrice}
              salePrice={plan.salePrice}
              savings={plan.savings}
              description={plan.description}
              afterpayPrice={plan.afterpayPrice}
              hasGuarantee={plan.hasGuarantee}
              isPopular={plan.isPopular}
              features={plan.features}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PricingCards