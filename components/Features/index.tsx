"use client";
import React from "react";
import Image from "next/image";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- About Section Start --> */}
          <div className="mb-12.5 lg:mb-15 xl:mb-20">
            <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16 xl:gap-20">
              {/* Text Content */}
              <div className="flex-1">
                <div className="mb-3 inline-block rounded-full bg-zumthor px-4.5 py-2 dark:bg-blacksection">
                  <span className="text-sm font-medium text-primary dark:text-white">
                    WHY ADRIANA
                  </span>
                </div>
                <h2 className="mb-8 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                  Deep Expertise That <br className="hidden sm:block" />
                  Translates Into Results
                </h2>
                
                <div className="space-y-4">
                  <div className="group flex items-start gap-4 rounded-lg border border-stroke bg-white p-5 transition-all hover:shadow-solid-3 dark:border-strokedark dark:bg-blacksection">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="h-3 w-3 rounded-full bg-primary"></span>
                    </div>
                    <span className="text-base leading-relaxed text-black dark:text-white">
                      PhD in Food Science with honors
                    </span>
                  </div>
                  
                  <div className="group flex items-start gap-4 rounded-lg border border-stroke bg-white p-5 transition-all hover:shadow-solid-3 dark:border-strokedark dark:bg-blacksection">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="h-3 w-3 rounded-full bg-primary"></span>
                    </div>
                    <span className="text-base leading-relaxed text-black dark:text-white">
                      20+ years in global food manufacturing
                    </span>
                  </div>
                  
                  <div className="group flex items-start gap-4 rounded-lg border border-stroke bg-white p-5 transition-all hover:shadow-solid-3 dark:border-strokedark dark:bg-blacksection">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="h-3 w-3 rounded-full bg-primary"></span>
                    </div>
                    <span className="text-base leading-relaxed text-black dark:text-white">
                      Former Technology Innovation Manager at Frito-Lay/Sabritas
                    </span>
                  </div>
                  
                  <div className="group flex items-start gap-4 rounded-lg border border-stroke bg-white p-5 transition-all hover:shadow-solid-3 dark:border-strokedark dark:bg-blacksection">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="h-3 w-3 rounded-full bg-primary"></span>
                    </div>
                    <span className="text-base leading-relaxed text-black dark:text-white">
                      Inventor of patented nixtamalization processes
                    </span>
                  </div>
                  
                  <div className="group flex items-start gap-4 rounded-lg border border-stroke bg-white p-5 transition-all hover:shadow-solid-3 dark:border-strokedark dark:bg-blacksection">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="h-3 w-3 rounded-full bg-primary"></span>
                    </div>
                    <span className="text-base leading-relaxed text-black dark:text-white">
                      Experience across the US, Latin America, Europe, and Asia
                    </span>
                  </div>
                  
                  <div className="group flex items-start gap-4 rounded-lg border border-stroke bg-white p-5 transition-all hover:shadow-solid-3 dark:border-strokedark dark:bg-blacksection">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="h-3 w-3 rounded-full bg-primary"></span>
                    </div>
                    <span className="text-base leading-relaxed text-black dark:text-white">
                      Expert witness in food manufacturing litigation
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Portrait Image */}
              <div className="w-full lg:w-auto lg:flex-shrink-0">
                <div className="relative mx-auto h-[400px] w-full max-w-md overflow-hidden rounded-2xl shadow-solid-8 lg:h-[500px] lg:w-[400px]">
                  <Image
                    src="/images/features/adriana_portrait.jpg"
                    alt="Dr. Adriana Quintanar Guzmán"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- About Section End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
