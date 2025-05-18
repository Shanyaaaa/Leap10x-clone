"use client"

import PriyaImg from "../assets/priya.png"
import VaibhavImg from "../assets/vaibhav.png"

export default function TestimonialSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Testimonials</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Priya's Testimonial Card */}
        <div className="flex items-center bg-gray-50 rounded-lg shadow-md p-6">
          {/* Image */}
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-6">
            <img
              src={PriyaImg}
              alt="Priya Maheshwari"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-700 text-lg mb-4">
              “Leap10x has been an incredible partner, they were able to reduce our content creation time by{" "}
              <span className="font-bold text-black">50%</span> and cost by{" "}
              <span className="font-bold text-black">75%</span> using their training product. What's even more
              impressive is how they prioritize customer feedback and consistently make improvements based on it. We
              have been able to train our drivers and hosts (conductors) across different regions in regional
              languages.”
            </p>
            <h3 className="text-xl font-bold text-gray-900">Priya Maheshwari</h3>
            <p className="text-purple-700 font-medium">Senior Manager, Special Projects</p>
          </div>
        </div>

        {/* Vaibhav's Testimonial Card */}
        <div className="flex items-center bg-gray-50 rounded-lg shadow-md p-6">
          {/* Image */}
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 mr-6">
            <img
              src={VaibhavImg}
              alt="Vaibhav Varshney"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gray-700 text-lg mb-4">
              “First time, we experienced technology that is built for the blue-collar workers. We have been able to
              reach to our contract workforce spread across regions seamlessly without any change management or app
              install. The team is really great to work with, goes above and beyond to help us achieve our business
              objectives.”
            </p>
            <h3 className="text-xl font-bold text-gray-900">Vaibhav Varshney</h3>
            <p className="text-purple-700 font-medium">Health, Safety & Sustainability Head</p>
          </div>
        </div>
      </div>
    </div>
  )
}
