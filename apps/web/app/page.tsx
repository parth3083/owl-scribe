import React from "react";
import MaxWidth from "../components/MaxWidth";
import { Button } from "../../../packages/ui/components/ui/button";
import { ArrowRight, BookOpen, Check } from "lucide-react";

function page() {
  return (
    <div className=" flex-1 w-screen ">
      <MaxWidth className="w-full flex flex-col items-center gap-10 pt-10">
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
        <section className="feature-section w-full flex flex-col items-center gap-10 relative"></section>
      </MaxWidth>
    </div>
  );
}

export default page;
