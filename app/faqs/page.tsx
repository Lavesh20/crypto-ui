import Header from "@/components/header"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-purple-800 to-purple-600">
        <Header />
      </div>

      <main className="flex-1 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">FAQs</h1>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Input type="search" placeholder="Search" className="pr-10 border-gray-300 rounded-lg" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="space-y-2">
              <div className="bg-purple-100 text-purple-800 p-3 rounded-md flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className="font-medium">General</span>
              </div>

              <div className="text-gray-600 p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Account</span>
              </div>

              <div className="text-gray-600 p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M6 8h.01"></path>
                  <path d="M2 8h.01"></path>
                  <path d="M2 12h.01"></path>
                  <path d="M2 16h.01"></path>
                  <path d="M6 16h.01"></path>
                  <path d="M10 8h.01"></path>
                  <path d="M10 16h.01"></path>
                  <path d="M14 8h.01"></path>
                  <path d="M14 16h.01"></path>
                  <path d="M18 8h.01"></path>
                  <path d="M18 16h.01"></path>
                </svg>
                <span>Wallet and Asset</span>
              </div>

              <div className="text-gray-600 p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
                <span>Trading</span>
              </div>

              <div className="text-gray-600 p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Disputes</span>
              </div>

              <div className="text-gray-600 p-3 rounded-md flex items-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span>Advertising</span>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <h3 className="text-left font-medium">What is A-Crypto?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 border-t">
                    <p className="text-gray-600">
                      A-Crypto is a leading crypto trading platform offering a wide range of services including P2P
                      trading, token swaps, and more.
                    </p>
                    <p className="text-gray-600 mt-2">
                      Our platform is designed to provide a secure, user-friendly, and efficient trading experience for
                      both beginners and experienced traders.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <h3 className="text-left font-medium">How does A-Crypto ensure the security of my funds?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 border-t">
                    <p className="text-gray-600">
                      We implement industry-leading security measures including cold storage for the majority of assets,
                      two-factor authentication, and regular security audits by third-party experts.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <h3 className="text-left font-medium">What cryptocurrencies can I trade on A-Crypto?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 border-t">
                    <p className="text-gray-600">
                      A-Crypto supports trading of over 100 cryptocurrencies including Bitcoin, Ethereum, Solana, and
                      many more. We regularly add new tokens based on market demand and thorough security assessments.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <h3 className="text-left font-medium">Is A-Crypto available worldwide?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 border-t">
                    <p className="text-gray-600">
                      A-Crypto is available in over 180 countries. However, due to regulatory requirements, our services
                      may be limited in certain jurisdictions. Please check our Terms of Service for the most up-to-date
                      information on supported regions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <h3 className="text-left font-medium">What are the fees for using A-Crypto?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 border-t">
                    <p className="text-gray-600">
                      Our fee structure is tiered based on your trading volume. Basic accounts start at 0.1% per trade,
                      with discounts available for high-volume traders and holders of our native token.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <h3 className="text-left font-medium">How can I get started with A-Crypto?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 border-t">
                    <p className="text-gray-600">
                      Getting started is easy! Simply create an account, complete the verification process, deposit
                      funds, and you're ready to trade. We offer comprehensive guides for beginners in our Learning
                      Center.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                    <h3 className="text-left font-medium">Does A-Crypto offer customer support?</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-2 border-t">
                    <p className="text-gray-600">
                      Yes, we offer 24/7 customer support through live chat, email, and a comprehensive help center.
                      Premium account holders also have access to dedicated account managers.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="text-center mt-8">
                <button className="text-purple-600 hover:text-purple-800 font-medium">Load more...</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
