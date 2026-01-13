/**
 * About Component
 * Founder story section - matches real website design
 */

function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
            Preparing for the NCLEX® can feel overwhelming - I know, I've been there.
          </h2>
          
          {/* Intro Text */}
          <p className="text-gray-700 mb-6 italic">
            Stop me if this sounds familiar...
          </p>

          {/* Problem List */}
          <div className="space-y-4 mb-6 text-gray-700">
            <p>
              You <strong>feel overwhelmed by how much you have to learn</strong> in such a short amount of time, it's like drinking water from a firehose…
            </p>
            <p>
              You <strong>don't have the time to learn all of it,</strong> and can't decide what's important to study and what's not...
            </p>
            <p>
              You feel like you <strong>don't even know where to begin</strong>...
            </p>
          </div>

          {/* Transition */}
          <p className="text-gray-700 mb-8">
            If it does, don't worry. I've been there:
          </p>

          {/* Graduation Photo */}
          <div className="mb-8">
            <img 
              src="https://cdn.prod.website-files.com/606392a644232d174453ec02/64a71aed9d81b94aac306130_emily_graduating.jpg" 
              alt="Dr. Emily Wilson at graduation"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
            <p className="text-center text-sm text-gray-600 mt-3 italic">
              that's me on the left!
            </p>
          </div>

          {/* Solution Text */}
          <p className="text-gray-700 mb-6">
            That's why I created a <em>better</em> way to study for the NCLEX® - built for students like you.
          </p>

          {/* Benefits List */}
          <div className="space-y-4 mb-8 text-gray-700">
            <p>
              Our Next Gen practice questions are exactly like real NCLEX® in content, format, and vagueness. When you sit for the actual NCLEX, <strong>it'll feel like another Bootcamp test!</strong>
            </p>
            <p>
              Our Next Gen NCLEX® strategy course and case study walkthroughs are meant to give you the <strong>same learning experience you get in real clinical settings,</strong> from real nurses, that you can apply to take care of real clients.
            </p>
            <p>
              Our proven NCLEX® study schedule helps you stay organized and on track to exam day. <strong>All the hard work has been done for you.</strong>
            </p>
          </div>

          {/* Closing Text */}
          <p className="text-gray-700 mb-8">
            NCLEX Bootcamp is exactly what I wish I had when I was studying for the NCLEX®. I know you're going to love it.
          </p>

          {/* Creator Signature */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
            <img 
              src="https://cdn.prod.website-files.com/606392a644232d174453ec02/63ee3e7ccabe517e41ec1db5_emily_profile_small.jpeg" 
              alt="Dr. Emily Wilson"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-lg text-gray-900">Dr. Emily Wilson</p>
              <p className="text-sm text-gray-600">Creator of NCLEX Bootcamp</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About


// ```
// ---
// ## 🎨 **KEY CHANGES TO MATCH SCREENSHOT:**

// ### **1. Layout Structure:**
// - ✅ Single column card (not 2-column grid)
// - ✅ White card with shadow on gray background
// - ✅ Centered content
// - ✅ Photo in the middle (not side-by-side)

// ### **2. Content Format:**
// - ✅ Paragraphs instead of bullet points
// - ✅ Bold emphasis on key phrases
// - ✅ Italic for "Stop me..." and "better"
// - ✅ No bullet symbols (•)

// ### **3. Styling:**
// - ✅ `bg-white` card on `bg-gray-50` section
// - ✅ `rounded-2xl shadow-xl` for card
// - ✅ Proper spacing with `space-y-4`
// - ✅ Border top on signature section

// ### **4. Image Placement:**
// - ✅ Photo centered in middle
// - ✅ Max width `max-w-md`
// - ✅ Caption below photo
// - ✅ Signature at bottom with border

// ---

// ## 📋 **STRUCTURE:**
// ```
// ┌─────────────────────────────────┐
// │  WHITE CARD                     │
// │                                 │
// │  Heading                        │
// │  "Stop me if..."                │
// │                                 │
// │  Problem paragraphs (3)         │
// │                                 │
// │  "If it does..."                │
// │                                 │
// │  [Graduation Photo]             │
// │  "that's me on the left!"       │
// │                                 │
// │  "That's why I created..."      │
// │                                 │
// │  Benefits paragraphs (3)        │
// │                                 │
// │  Closing message                │
// │                                 │
// │  ─────────────────────          │
// │  [Profile] Dr. Emily Wilson     │
// │           Creator...            │
// └─────────────────────────────────┘