"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState("transportation")
  const [openSection, setOpenSection] = useState<string | null>("onboarding")

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id)
  }

  const categories = [
    { id: "manufacturing", label: "Manufacturing" },
    { id: "transportation", label: "Transportation & Logistics" },
    { id: "retail", label: "Retail" },
  ]

  const faqItems = [
    // Manufacturing items
    {
      id: "safety-manufacturing",
      title: "Safety & Compliance",
      content: [
        "Create a safe, compliant workplace with bite-sized safety training that boosts engagement and drives behavior change.",
        "Train all of your workforce, including fulltime and contract workers across all your factories / warehouses / facilities in regional languages.",
      ],
      category: "manufacturing",
    },
    {
      id: "sop-manufacturing",
      title: "SOP training",
      content: [
        "Easily train your team on new Standard Operating Procedures (SOPs) and assess their knowledge with a click of a button.",
        "Ensure consistent adherence to protocols and enhance operational efficiency.",
      ],
      category: "manufacturing",
    },

    // Transportation & Logistics items
    {
      id: "onboarding",
      title: "Onboarding",
      content: [
        "Streamline the onboarding process with byte-sized, mobile-friendly training modules delivered via WhatsApp.",
        "Ensure new hires quickly understand their roles and responsibilities, leading to faster integration and productivity, even in distributed teams.",
      ],
      category: "transportation",
    },
    {
      id: "safety-training",
      title: "Safety training",
      content: [
        "Implement comprehensive safety training programs to train them on safety regulations, defensive driving, etc.",
        "Ensure the well-being of your workforce while maintaining operational efficiency.",
      ],
      category: "transportation",
    },
    {
      id: "sop-training",
      title: "SOP training",
      content: [
        "Easily train your team on new Standard Operating Procedures (SOPs) and assess their knowledge with a click of a button.",
        "Ensure consistent adherence to protocols and enhance operational efficiency.",
      ],
      category: "transportation",
    },
    {
      id: "retention",
      title: "Retention",
      content: [
        "Reduce churn rate by identifying employee gaps. Send them targeted modules to engage with them regularly.",
        "The more we engage and collect feedback, the more we can improve employee retention.",
      ],
      category: "transportation",
    },
    {
      id: "behavioral-training",
      title: "Behavioral training",
      content: [
        "Enhance your team's soft skills with targeted behavioral training in easily digestible, byte-sized formats.",
        "Improve communication, teamwork, and customer interactions with highly targeted & vernacular content accessible anytime, anywhere.",
      ],
      category: "transportation",
    },

    // Retail items
    {
      id: "customer-service",
      title: "Customer Service",
      content: [
        "Train retail staff on providing exceptional customer service.",
        "Increase customer satisfaction and loyalty through personalized interactions.",
      ],
      category: "retail",
    },
    {
      id: "inventory-management",
      title: "Inventory Management",
      content: [
        "Optimize inventory tracking and management with standardized procedures.",
        "Reduce stockouts and overstock situations with proper training.",
      ],
      category: "retail",
    },
  ]

  const filteredFaqItems = faqItems.filter((item) => item.category === activeCategory)

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Use Cases</h1>
        <h2 className="text-2xl font-semibold text-purple-700">Across All Industries</h2>
      </div>

      {/* Category Tabs */}
      <div className="flex mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-6 py-4 text-lg font-medium transition-colors duration-200 hover:text-purple-700 ${
              activeCategory === category.id
                ? "bg-purple-700 text-white"
                : "bg-gray-50 text-gray-700 hover:bg-purple-100"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="grid gap-6">
        {filteredFaqItems.map((item) => (
          <div key={item.id} className="border-b border-gray-200 pb-6">
            <div className="flex items-start gap-4 cursor-pointer" onClick={() => toggleSection(item.id)}>
              <div className="mt-1 w-6 h-6 flex items-center justify-center bg-purple-700 text-white rounded">
                {openSection === item.id ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>

                <div
                  className={`mt-2 space-y-4 text-gray-600 transition-all duration-300 ease-in-out ${
                    openSection === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {item.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
