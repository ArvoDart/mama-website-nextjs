"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      router.push(`/contact?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Transforming Food Manufacturing Through Science, Innovation, and Six Sigma Precision.
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Dr. Adriana Quintanar Guzmán Global Food Industry Consultant
              </h1>
              <p>
                Dr. Adriana Quintanar Guzmán provides global food industry consulting, specializing in snack food optimization, process engineering, and crisis resolution. 
                With over 20 years of experience and groundbreaking patents, she turns complex manufacturing challenges into profitable solutions.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      type="submit"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Contact Me Today
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Schedule a consultation to discover how Dr. Adriana Quintanar Guzmán can revolutionize your food manufacturing processes with her expertise in science, innovation, and Six Sigma precision.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                {/* Decorative background elements */}
                <div className="absolute -right-8 -top-8 -z-10 h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 -z-10 h-64 w-64 rounded-full bg-gradient-to-tr from-secondary/20 to-primary/20 blur-3xl"></div>
                
                <div className="relative aspect-700/444 w-full rounded-2xl border-4 border-gradient-to-r from-primary to-secondary p-2 bg-gradient-to-br from-primary via-white to-secondary shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-xl bg-white dark:bg-black">
                    <Image
                      className="shadow-solid-l dark:hidden"
                      src="/images/hero/milpa.jpg"
                      alt="Hero"
                      fill
                    />
                    <Image
                      className="hidden shadow-solid-l dark:block"
                      src="/images/hero/milpa.jpg"
                      alt="Hero"
                      fill
                    />
                    {/* Overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
