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
      <section className="relative overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <Image
              className="object-cover dark:hidden"
              src="/images/hero/milpa.jpg"
              alt="Hero Background"
              fill
              priority
            />
            <Image
              className="hidden object-cover dark:block"
              src="/images/hero/milpa.jpg"
              alt="Hero Background"
              fill
              priority
            />
            {/* Overlay to darken image for better text readability */}
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex min-h-[600px] items-center justify-center py-10 md:min-h-[700px] md:py-20">
            {/* Text Content Card */}
            <div className="w-full max-w-4xl">
              <div className="rounded-3xl bg-gradient-to-br from-primary/80 via-logogreen/30 to-secondary/50 p-10 shadow-2xl backdrop-blur-lg dark:bg-gradient-to-br dark:from-primary/40 dark:via-black/95 dark:to-secondary/30 md:p-14 lg:p-20">
                <h4 className="mb-4.5 text-center text-lg font-bold text-black dark:text-white md:text-xl">
                  Fix your snack production problems and optimize your processes with proven food science expertise.
                </h4>
                <h1 className="mb-5 text-center text-3xl font-medium text-black dark:text-white md:text-4xl xl:text-hero">
                  PhD Food Scientist with 20+ years of experience, patented nixtamalization technology, and a global track record helping food companies improve quality, reduce costs, and scale production.
                </h1>
                <p className="text-center text-lg font-semibold text-black dark:text-white">
                  Book a Consultation
                </p>

                <div className="mt-10">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Enter your email address"
                        className="w-full rounded-full border border-stroke bg-white px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary sm:w-auto"
                      />
                      <button
                        aria-label="get started button"
                        type="submit"
                        className="w-full rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-secondary dark:bg-btndark dark:hover:bg-blackho sm:w-auto"
                      >
                        Contact Me Today
                      </button>
                    </div>
                  </form>

                  <p className="mt-5 text-center text-black dark:text-white">
                    Explore Solutions
                  </p>
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
