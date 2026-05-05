"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-linear-to-t from-transparent to-secondarylight py-22.5 dark:bg-blacksection dark:bg-linear-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <Image
            width={280}
            height={345}
            src="/images/shape/corn-01.png"
            alt="Corn"
            className="absolute -left-15 -top-25 -z-1 hidden sm:block sm:w-32 sm:h-auto md:w-48 lg:w-64 lg:left-0 xl:w-[280px]"
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              About Adriana Quintanar Guzmán, PhD
            </h2>
            <p className="mx-auto lg:w-11/12 text-black">
              Adriana Quintanar Guzmán is a Food Scientist and Technology Innovation expert with over 20 years of experience in the global food industry and 18 years in academic research.
            </p>
            <p className="mx-auto mt-4 lg:w-11/12 text-black">
              She specializes in snack food processing, nixtamalization, and product development, helping companies improve product quality, optimize manufacturing processes, and reduce inefficiencies.
            </p>
            <p className="mx-auto mt-4 lg:w-11/12 text-black">
              She has worked with leading food companies across the United States, Latin America, Europe, and Asia, and is the inventor of patented nixtamalization technologies that significantly reduce water usage and improve consistency.
            </p>
            <p className="mx-auto mt-4 lg:w-11/12 text-black">
              Adriana also serves as an expert witness in food manufacturing litigation cases, providing technical expertise in process, equipment, and intellectual property analysis.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Inventor & Patent Holder
              </h3>
              <ul className="mx-auto mt-4 max-w-md space-y-2 text-left text-black">
                <li className="flex items-start gap-3 ">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Instant masa production process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Nixtamalization innovations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Process improvements for snack manufacturing</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                A Lifetime of Food Science Innovation
              </h3>
              <ul className="mx-auto mt-4 max-w-md space-y-2 text-left text-black">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>25+ Years of industry experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>PhD, Food Science</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <span>Process improvements for snack manufacturing</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Fluent in English & Spanish
              </h3>
              <p className="text-lg lg:text-para2">Enabling seamless cross-border operational leadership</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
