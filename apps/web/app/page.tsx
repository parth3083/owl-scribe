import React from "react";
import MaxWidth from "../components/MaxWidth";
import { Button } from "../../../packages/ui/components/ui/button";
import { ArrowRight, BookOpen, Check } from "lucide-react";
import Heading from "../components/Heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../packages/ui/components/ui/card";
import { dataDisplay, featureData } from "../data/displayData";
import Link from "next/link";

function page() {
  return (
    <div className=" flex-1  overflow-x-hidden mb-10">
      <MaxWidth className=" flex flex-col items-center gap-20 pt-10">
        {/* HERO SECTION 1 */}
        <section className="hero1 w-full flex flex-col gap-5 lg:flex-row  items-center  lg:h-[70vh] relative ">
          <div className="left flex-1 h-full  flex flex-col gap-5 items-start justify-center">
            <h1 className="font-bold text-4xl lg:text-7xl tracking-tighter">
              Enhance Your Writing with AI
            </h1>
            <p className="text-md text-black max-w-prose  font-medium">
              OwlScribe helps you summarize, rewrite, fix grammar, and adjust
              tone for perfect content every time.
            </p>
            <Button className="px-4  py-1 border border-[#8B4513]  text-[#8B4513] rounded-full cursor-pointer hover:bg-[#8B4513] flex items-center gap-2 hover:text-white transition-colors text-xl  duration-200 ease-in-out">
              Add to Chrome
              <ArrowRight className="size-5" />
            </Button>
          </div>
          <div className="right hover:scale-105 transition-all ease-linear duration-500  flex-1 h-full lg:p-20 reltaive">
            <div className="w-full pointer-events-none h-full flex flex-col items-center gap-3  rounded-md border-gray-300 border p-5">
              <div className="upper-part px-3 flex h-14 items-center justify-between w-full ">
                <div className="flex items-center gap-3">
                  <div className="size-10 text-white bg-[#8B4513] flex items-center justify-center rounded-full p-1">
                    <BookOpen />
                  </div>
                  <h3 className="font-semibold text-lg ">Owl Scribe</h3>
                </div>

                <div className="flex items-center gap-2">
                  <div className="size-3 bg-red-500 rounded-full" />
                  <div className="size-3 bg-yellow-500 rounded-full" />
                  <div className="size-3 bg-green-500 rounded-full" />
                </div>
              </div>
              <div className="lower-part p-2 flex flex-1 flex-col items-center gap-3 w-full border-2 border-gray-300 rounded-md">
                <p className="font-medium ">
                  In today&apos;s digital landscape, effective communication is
                  essential. The ability to convey ideas clearly and concisely
                  can make the difference between engaging your audience or
                  losing their attention.
                </p>
                <div className="border-2 p-1 rounded-md bg-amber-950/20 font-medium">
                  OwlScribe summary: Clear communication is vital in digital
                  spaces. Concise writing helps engage audiences and prevents
                  losing their attention.
                </div>
                <div className="w-full flex items-center justify-end">
                  <Button className="px-4 py-1 bg-yellow-500 text-white  rounded-full cursor-pointer  flex items-center gap-1 transition-colors text-md duration-200 ease-in-out">
                    <Check className="size-5" />
                    Summarized
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FEATURES SECTION  */}
        <section className="feature-section  overflow-x-hidden flex flex-col items-center gap-10 relative">
          <Heading description="Our powerful AI tools help you create perfect content that&apos;s clear, concise, and compelling.">
            Features
          </Heading>
          <div className="w-full flex flex-col gap-3 lg:flex-row items-center justify-center flex-wrap lg:gap-10">
            {featureData.map((items, index) => (
              <Card
                key={index}
                className="w-full  lg:h-[400px] sm:w-xl  rounded-md p-3"
              >
                <CardHeader>
                  <CardTitle className="flex flex-col gap-2">
                    <div className="size-14 flex items-center justify-center bg-[#8B4513] text-white rounded-full">
                      {items.icon}
                    </div>
                    <h1 className="text-2xl font-semibold">{items.title}</h1>
                  </CardTitle>
                  <CardDescription className="text-md font-medium text-black">
                    {items.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-3">
                  <div className="w-full  p-2 rounded-md border border-gray-300  flex flex-col items-center">
                    <div className="upper-part py-1 w-full flex flex-col gap-1 flex-1 border-b-2 border-gray-300">
                      <p className="text-md font-medium text-gray-700">
                        Before
                      </p>
                      <p className="text-sm text-clip-2 text-black/80">
                        {items.beforeData}
                      </p>
                    </div>
                    <div className="lower-part py-1 w-full flex flex-col gap-1 flex-1 ">
                      <p className="text-md font-medium text-gray-700">After</p>
                      <p className="text-sm text-clip-2">{items.afterData}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* DATA SECTION  */}
        <section className="data-section w-full relative h-32 rounded-md border p-3 flex items-center justify-evenly bg-[#FAF8F3]">
          {dataDisplay.map((items, index) => (
            <div
              key={index}
              className="flex-1 flex items-center justify-center flex-col"
            >
              <h1 className="text-4xl font-bold">{items.value}</h1>
              <p className="text-black font-medium text-lg">{items.title}</p>
            </div>
          ))}
        </section>
        {/* HOW IT WORKS SECTION  */}
        <section className="how-it-works w-full  flex flex-col items-center gap-10 relative">
          <Heading description="Get started with OwlScribe in just three simple steps and transform your writing instantly.">
            How It Works
          </Heading>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 mb-16">
            <div className="w-full md:w-1/3 group">
              <div className="bg-white rounded-lg border border-neutral-200 p-6 h-full relative transition-all duration-300 hover:border-[#8B4513] hover:shadow-sm">
                <div className="absolute -top-5 -left-2 w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center text-white font-bold shadow-sm font-Fraunces">
                  1
                </div>
                <div className="pt-6">
                  <div className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#8B4513]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#8B4513] mb-3 text-center font-Fraunces">
                    Install the Extension
                  </h3>
                  <p className="text-neutral-700 text-center font-Nunito">
                    Add OwlScribe to your Chrome browser with a single click. No
                    account creation or complex setup required.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-[-25px] transform translate-y-[-50%] z-10">
                  <svg
                    width="50"
                    height="24"
                    viewBox="0 0 50 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#8B4513]/30"
                  >
                    <path
                      d="M49.0607 13.0607C49.6464 12.4749 49.6464 11.5251 49.0607 10.9393L39.5147 1.3934C38.9289 0.807611 37.9792 0.807611 37.3934 1.3934C36.8076 1.97919 36.8076 2.92893 37.3934 3.51472L45.8787 12L37.3934 20.4853C36.8076 21.0711 36.8076 22.0208 37.3934 22.6066C37.9792 23.1924 38.9289 23.1924 39.5147 22.6066L49.0607 13.0607ZM0 13.5H48V10.5H0V13.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="block md:hidden mt-6 text-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#8B4513]/30 mx-auto"
                  >
                    <path
                      d="M12 5V19M12 19L19 12M12 19L5 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 group">
              <div className="bg-white rounded-lg border border-neutral-200 p-6 h-full relative transition-all duration-300 hover:border-[#8B4513] hover:shadow-sm">
                <div className="absolute -top-5 -left-2 w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center text-white font-bold shadow-sm font-Fraunces">
                  2
                </div>
                <div className="pt-6">
                  <div className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#8B4513]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#8B4513] mb-3 text-center font-Fraunces">
                    Highlight Text
                  </h3>
                  <p className="text-neutral-700 text-center font-Nunito">
                    Select any text on a webpage or paste content into the
                    OwlScribe editor to begin transforming it.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-[-25px] transform translate-y-[-50%] z-10">
                  <svg
                    width="50"
                    height="24"
                    viewBox="0 0 50 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#8B4513]/30"
                  >
                    <path
                      d="M49.0607 13.0607C49.6464 12.4749 49.6464 11.5251 49.0607 10.9393L39.5147 1.3934C38.9289 0.807611 37.9792 0.807611 37.3934 1.3934C36.8076 1.97919 36.8076 2.92893 37.3934 3.51472L45.8787 12L37.3934 20.4853C36.8076 21.0711 36.8076 22.0208 37.3934 22.6066C37.9792 23.1924 38.9289 23.1924 39.5147 22.6066L49.0607 13.0607ZM0 13.5H48V10.5H0V13.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="block md:hidden mt-6 text-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#8B4513]/30 mx-auto"
                  >
                    <path
                      d="M12 5V19M12 19L19 12M12 19L5 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 group">
              <div className="bg-white rounded-lg border border-neutral-200 p-6 h-full relative transition-all duration-300 hover:border-[#8B4513] hover:shadow-sm">
                <div className="absolute -top-5 -left-2 w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center text-white font-bold shadow-sm font-Fraunces">
                  3
                </div>
                <div className="pt-6">
                  <div className="w-16 h-16 bg-[#8B4513]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#8B4513]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#8B4513] mb-3 text-center font-Fraunces">
                    Apply Transformations
                  </h3>
                  <p className="text-neutral-700 text-center font-Nunito">
                    Choose the action you need — summarize, rewrite, fix
                    grammar, or adjust tone — and watch OwlScribe work its
                    magic.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border w-full border-neutral-200 p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100 relative">
                <div className="absolute top-0 left-0 bg-[#8B4513]/10 text-[#8B4513] text-sm py-1 px-3 rounded-tl-lg rounded-br-lg font-Nunito">
                  Before
                </div>
                <div className="mt-6">
                  <div className="w-full h-4 bg-neutral-200 rounded mb-2"></div>
                  <div className="w-full h-4 bg-neutral-200 rounded mb-2"></div>
                  <div className="w-3/4 h-4 bg-neutral-200 rounded mb-2"></div>
                  <div className="w-full h-4 bg-neutral-200 rounded mb-2"></div>
                  <div className="w-5/6 h-4 bg-neutral-200 rounded mb-2"></div>
                  <div className="w-full h-4 bg-neutral-200 rounded mb-2"></div>
                  <div className="w-2/3 h-4 bg-neutral-200 rounded"></div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative w-20 h-20 bg-[#8B4513] rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    ></path>
                  </svg>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#D4AF37] rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#D4AF37] rounded-full"></div>
                </div>
                <p className="font-bold text-[#8B4513] mb-2 font-Fraunces">
                  OwlScribe Processing
                </p>
                <div className="flex">
                  <span className="px-2 py-1 bg-[#8B4513]/10 text-[#8B4513] text-xs rounded-full mr-2 font-Nunito">
                    AI-Powered
                  </span>
                  <span className="px-2 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs rounded-full font-Nunito">
                    Instant
                  </span>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-100 relative">
                <div className="absolute top-0 left-0 bg-[#D4AF37]/10 text-[#D4AF37] text-sm py-1 px-3 rounded-tl-lg rounded-br-lg font-Nunito">
                  After
                </div>
                <div className="mt-6">
                  <div className="w-full h-4 bg-[#8B4513]/20 rounded mb-2"></div>
                  <div className="w-2/3 h-4 bg-[#8B4513]/20 rounded mb-2"></div>
                  <div className="w-3/4 h-4 bg-[#8B4513]/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* DEMO SECTION  */}
        <section className="w-full  flex flex-col items-center gap-10 relative">
          <Heading description="See OwlScribe in action and discover how it can enhance your writing workflow.">
          Demo
          </Heading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
       
        <div className="bg-white rounded-lg border border-neutral-200 shadow-sm p-6 order-2 lg:order-1">
         
          <div className="mb-6" id="demo-tabs">
            <div className="flex border-b border-neutral-200">
              <button className="px-4 py-2 font-medium border-b-2 font-Nunito text-neutral-500 border-transparent hover:border-[#8B4513]/30" data-tab="summarize">
                Summarize
              </button>
              <button className="px-4 py-2 hover:text-[#8B4513] font-medium border-b-2 transition-colors duration-200 font-Nunito text-[#8B4513] border-[#8B4513]" data-tab="rewrite">
                Rewrite
              </button>
              <button className="px-4 py-2 hover:text-[#8B4513] font-medium border-b-2 transition-colors duration-200 font-Nunito text-neutral-500 border-transparent hover:border-[#8B4513]/30" data-tab="grammar">
                Grammar
              </button>
              <button className="px-4 py-2 hover:text-[#8B4513] font-medium border-b-2 transition-colors duration-200 font-Nunito text-neutral-500 border-transparent hover:border-[#8B4513]/30" data-tab="tone">
                Tone
              </button>
            </div>
          </div>

         
          <div className="relative">
           
            <div id="summarize-content" className="demo-content hidden" data-tab-content="summarize">
              <div className="mb-4">
                <label className="block text-neutral-700 font-medium mb-2 font-Nunito">Original Text</label>
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 h-40 overflow-y-auto">
                  <p className="text-neutral-700 font-Nunito">
                    Artificial intelligence has made significant strides in recent years, transforming industries and reshaping how we interact with technology. Machine learning algorithms, neural networks, and natural language processing have enabled computers to perform tasks that once required human intelligence. From self-driving cars to voice assistants, AI applications continue to expand. However, these advancements also raise important ethical considerations about privacy, bias, and the future of human work. As AI becomes more integrated into daily life, balancing innovation with responsible development remains a crucial challenge for technologists, policymakers, and society as a whole.
                  </p>
                </div>
              </div>
              <div className="text-center mb-4">
                <button id="summarize-btn" className="bg-[#8B4513] hover:bg-[#6d3610] text-white py-2 px-6 rounded-full inline-flex items-center font-Nunito transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                  Summarize
                </button>
              </div>
              <div>
                <label className="block text-neutral-700 font-medium mb-2 font-Nunito">OwlScribe Summary</label>
                <div className="bg-[#8B4513]/5 border border-[#8B4513]/20 rounded-lg p-4">
                  <p className="text-[#8B4513] font-Nunito" id="summary-result">
                    AI has advanced rapidly, transforming industries through machine learning, neural networks, and natural language processing. While AI applications like self-driving cars and voice assistants proliferate, they raise ethical concerns about privacy, bias, and employment. Balancing innovation with responsible development remains essential.
                  </p>
                </div>
              </div>
            </div>

          
            <div id="rewrite-content" className="demo-content block" data-tab-content="rewrite">
              <div className="mb-4">
                <label className="block text-neutral-700 font-medium mb-2 font-Nunito">Original Text</label>
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 h-40 overflow-y-auto">
                  <p className="text-neutral-700 font-Nunito">
                    Our company sells products that are good for people who want to save money and get stuff that works well. We have been selling things for a long time and our customers like us. You should buy from us because we are better than other companies.
                  </p>
                </div>
              </div>
              <div className="text-center mb-4">
                <button id="rewrite-btn" className="bg-[#D4AF37] hover:bg-[#ba9729] text-white py-2 px-6 rounded-full inline-flex items-center font-Nunito transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                  Rewrite
                </button>
              </div>
              <div>
                <label className="block text-neutral-700 font-medium mb-2 font-Nunito">OwlScribe Rewrite</label>
                <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg p-4">
                  <p className="text-[#8B4513] font-Nunito" id="rewrite-result">
                    Our established company offers cost-effective, high-quality solutions designed for budget-conscious consumers seeking reliable performance. With a proven track record of customer satisfaction, we distinguish ourselves from competitors through superior value and service excellence.
                  </p>
                </div>
              </div>
            </div>

           
            <div id="grammar-content" className="demo-content hidden" data-tab-content="grammar">
              <div className="mb-4">
                <label className="block text-neutral-700 font-medium mb-2 font-Nunito">Original Text</label>
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 h-40 overflow-y-auto">
                  <p className="text-neutral-700 font-Nunito">
                    Im going to the store to buy some apple&apos;s and orange&apos;s for the party. Their going to be alot of people their, and we need to make sure we have enough food. Me and my friend John is setting up the decorations early, so everything look good for when the guest arrive.
                  </p>
                </div>
              </div>
              <div className="text-center mb-4">
                <button id="grammar-btn" className="bg-[#8B4513] hover:bg-[#6d3610] text-white py-2 px-6 rounded-full inline-flex items-center font-Nunito transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Fix Grammar
                </button>
              </div>
              <div>
                <label className="block text-neutral-700 font-medium mb-2 font-Nunito">OwlScribe Grammar Fix</label>
                <div className="bg-[#8B4513]/5 border border-[#8B4513]/20 rounded-lg p-4">
                  <p className="text-[#8B4513] font-Nunito" id="grammar-result">
                    I&apos;m going to the store to buy some apples and oranges for the party. There&apos;s going to be a lot of people there, and we need to make sure we have enough food. My friend John and I are setting up the decorations early, so everything looks good for when the guests arrive.
                  </p>
                </div>
              </div>
            </div>

      
            <div id="tone-content" className="demo-content hidden" data-tab-content="tone">
              <div className="mb-4">
                <label className="block text-neutral-700 font-medium mb-2 font-Nunito">Original Text (Casual)</label>
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 h-40 overflow-y-auto">
                  <p className="text-neutral-700 font-Nunito">
                    Hey everyone! Just wanted to let you know that we&apos;re pushing back the deadline to next Friday. No big deal, but make sure you get your stuff in by then. If you have any questions, just shoot me a message whenever.
                  </p>
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="inline-flex bg-neutral-100 rounded-full p-1">
                  <button data-tone="professional" className="tone-btn py-1 px-4 rounded-full font-Nunito text-sm bg-transparent text-neutral-500 hover:text-[#8B4513]">Professional</button>
                  <button data-tone="academic" className="tone-btn py-1 px-4 rounded-full font-Nunito text-sm bg-[#D4AF37] text-white">Academic</button>
                  <button data-tone="friendly" className="tone-btn py-1 px-4 rounded-full font-Nunito text-sm bg-transparent text-neutral-500 hover:text-[#8B4513]">Friendly</button>
                </div>
              </div>
              <div>
                <label className="block text-neutral-700 font-medium mb-2 font-Nunito">OwlScribe Tone Adjustment</label>
                <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg p-4">
                  <p className="text-[#8B4513] font-Nunito" id="tone-result">The deadline for submission has been extended to the forthcoming Friday. It is imperative that all materials be submitted by this date. Should any inquiries arise regarding this matter, communication is welcomed at your convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-[#8B4513] mb-4 font-Fraunces">Experience the Power of OwlScribe</h3>
          <p className="text-neutral-700 mb-6 font-Nunito">
            OwlScribe transforms how you write with powerful AI that adapts to your needs. Try our interactive demo to see how it works.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B4513]/10 flex items-center justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-neutral-700 font-Nunito"><span className="font-bold text-[#8B4513]">Instant Results:</span> Get transformations in seconds, not minutes.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B4513]/10 flex items-center justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-neutral-700 font-Nunito"><span className="font-bold text-[#8B4513]">Multiple Transformations:</span> Switch between summarize, rewrite, fix, and tone adjust.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B4513]/10 flex items-center justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-neutral-700 font-Nunito"><span className="font-bold text-[#8B4513]">Context-Aware:</span> Smart AI that understands your text&apos;s meaning and purpose.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8B4513]/10 flex items-center justify-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8B4513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-neutral-700 font-Nunito"><span className="font-bold text-[#8B4513]">Works Everywhere:</span> Use in emails, documents, social media, and more.</p>
              </div>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="bg-[#8B4513] hover:bg-[#6d3610] text-white font-Nunito py-3 px-8 rounded-full text-center transition-colors duration-300 flex items-center justify-center">
              <span>Add to Chrome</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
            <button id="watch-demo-btn" className="border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513]/10 font-Nunito py-3 px-8 rounded-full text-center transition-colors duration-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
              </svg>
              <span>Watch Video Demo</span>
            </button>
          </div>
        </div>
      </div>
        </section>
      </MaxWidth>
    </div>
  );
}

export default page;
