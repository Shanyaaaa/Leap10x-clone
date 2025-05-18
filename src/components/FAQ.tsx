import { useState } from "react"
import { Plus, X } from "lucide-react"

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>("is-lms")

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  const faqItems = [
    {
      id: "is-lms",
      question: "Is Leap10x a LMS?",
      answer:
        "Leap10x provides all the essential LMS features: content creation, hosting, delivery, learner management, and analytics—focused specifically on microlearning. This focus enables rapid content creation, fast deployment, seamless learner engagement, and instant tracking.",
    },
    {
      id: "customize",
      question: "Can we customize the content to meet our specific requirements?",
      answer:
        "Yes, our product boasts a huge range of configurations that will help you customize the content according to your team's specific need or create using Leap10x AI",
    },
    {
      id: "easy-use",
      question: "How easy is it to use Leap10x?",
      answer:
        "For learner: there is no app, no signup, no login. They can simply access with single click via the magic links received on their WhatsApp, SMS, Email, QR For Admin: easy to create content, manage users and track actionable analytics",
    },
    {
      id: "third-party",
      question: "How can I train my third party workers?",
      answer:
        "Training third-party, gig, or contract workers is easy with Leap10x. Our mobile-based, WhatsApp-first training platform delivers quick, app-free learning tailored for workers without email access. Whether for compliance, safety, or upskilling, Leap10x ensures seamless onboarding, training, and tracking—all on their mobile devices.Start training your workforce effortlessly today!",

    },
    
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-gray-900">FAQs</h2>
        <h3 className="text-2xl font-semibold text-purple-700">Any questions? We got you.</h3>
        <p className="mt-4 text-gray-600">
          Get all the answers you need to see how Leap10x simplifies and enhances your training process.
        </p>
      </div>

      <div className="space-y-6">
        {faqItems.map((item) => (
          <div key={item.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-start gap-4 cursor-pointer" onClick={() => toggleItem(item.id)}>
              <div className="mt-1 w-6 h-6 flex items-center justify-center bg-purple-700 text-white rounded">
                {openItem === item.id ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-medium text-gray-900">{item.question}</h4>

                <div
                  className={`mt-2 text-gray-600 transition-all duration-300 ease-in-out ${
                    openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

