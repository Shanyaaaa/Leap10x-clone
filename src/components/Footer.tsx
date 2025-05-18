import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              
            </div>
            <div className="space-y-2">
              <a href="mailto:hello@leap10x.in" className="block hover:text-purple-300 transition-colors">
                hello@leap10x.in
              </a>
              <a href="tel:+918950223219" className="block hover:text-purple-300 transition-colors">
                +91 89502 23219
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Quick Links:</h4>
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:text-purple-300 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-purple-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-purple-300 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Follow us:</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="hover:text-purple-300 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" className="hover:text-purple-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://facebook.com" className="hover:text-purple-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-purple-300 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="col-span-1">
            <div className="space-y-4">
              <div className="bg-white p-2 rounded">
                <img src="https://cdn.prod.website-files.com/651e6c7313b882d4e31aab7d/6730db2b24ef2f2d72c95b00_GDPR.png" alt="GDPR Compliant" className="w-full h-auto" />
              </div>
              <div className="bg-white p-2 rounded">
                <img src="https://cdn.prod.website-files.com/651e6c7313b882d4e31aab7d/6730db2b91a5402c4228d5ad_ISO.png" alt="ISO 27001:2013 Certified" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p>© 2024 Leap10x Training Pvt Ltd</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
