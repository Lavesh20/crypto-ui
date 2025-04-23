import Header from "@/components/header"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-purple-800 to-purple-600">
        <Header />
        <PageHeader
          title="About Us"
          description="Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra arci diam. Nibh est vitae suspendisse porttitor sed diam eu."
        />
      </div>

      <main className="flex-1">
        {/* Story Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-purple-600 text-sm font-medium">About Us</span>
              <h2 className="text-3xl font-bold mt-2">Unveiling Nextronium's Story</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra arci diam. Nibh est vitae
                suspendisse porttitor sed diam eu.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-purple-200 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="About Nextronium"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Founding and Early Years</h3>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm font-medium h-fit">
                      2005
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">
                        Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id
                        amet mi.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm font-medium h-fit">
                      2007
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">
                        Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id
                        amet mi.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm font-medium h-fit">
                      2010
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">
                        Dignissim ipsum quisque mauris diam. Amet odio purus orci cursus cursus praesent. Commodo id
                        amet mi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-purple-600 text-white p-8 md:p-12 rounded-lg text-center">
              <p className="text-sm md:text-base leading-relaxed">
                Our vision is to foster widespread adoption and trust in blockchain technology and cryptocurrencies by
                championing innovation, accessibility, and security. We aim to empower individuals and businesses
                globally through user-friendly solutions that simplify complex financial processes and enable seamless
                participation in the digital economy.
              </p>

              <div className="mt-8 flex items-center justify-center">
                <div className="bg-purple-400/50 rounded-full p-4 mr-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="CEO"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Ipan Benjamin</h4>
                  <p className="text-sm opacity-80">CEO of Nextronium</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 md:px-8 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Nextronium's Mission</h2>
                <p className="text-gray-600 mb-8">
                  Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra arci diam.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-purple-900 text-white p-3 rounded-full h-fit">
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
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Secure Crypto Solutions</h3>
                      <p className="text-gray-600 text-sm">
                        Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra arci diam.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-purple-900 text-white p-3 rounded-full h-fit">
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
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Empowering Crypto Education</h3>
                      <p className="text-gray-600 text-sm">
                        Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra arci diam.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-purple-900 text-white p-3 rounded-full h-fit">
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
                        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.24"></path>
                        <path d="M21 3v9h-9"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Advancing Decentralization</h3>
                      <p className="text-gray-600 text-sm">
                        Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra arci diam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="#"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 bg-purple-200 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Our Mission"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
