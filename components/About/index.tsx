"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              {/* Image frame with industrial styling */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-solid-8">
                <Image
                  src="/images/about/weighing_index.jpg"
                  alt="Potato chip bagging line in production"
                  className="object-cover dark:hidden"
                  fill
                />
                <Image
                  src="/images/about/weighing_index.jpg"
                  alt="Potato chip bagging line in production"
                  className="hidden object-cover dark:block dark:brightness-75"
                  fill
                />
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-secondarylight px-4.5 py-1 text-metatitle uppercase text-dark ">
                  Tortilla chip and Corn Snack Optimization
                </span>{" "}
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Improve product quality, consistency, and innovation in tortilla chips and similar corn-based snacks.
              </h2>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Services:
              </h2>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    1
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Tortilla chip texture and appearance improvement.
                  </h3>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    2
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Development of new tortilla chip products.
                  </h3>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    3
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Deployment of new tortilla chip processes.
                  </h3>
                </div>
              </div>
              {/* Value proposition */}
              <div className="mt-7.5 rounded-xl border border-stroke bg-zumthor/50 px-5 py-4 dark:border-strokedark dark:bg-blacksection">
                <p className="mb-1.5 text-metatitle font-semibold uppercase tracking-widest text-primary dark:text-secondary">Value</p>
                <p className="text-metatitle2 text-black dark:text-white">
                  Improve product performance, reduce variability, and ensure consistent quality across applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              {/* Category badge */}
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-primarylight px-4.5 py-1 text-metatitle uppercase text-dark">
                  Corn Flour & Masa
                </span>
              </span>

              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Nixtamalized Corn Flour Process and Product Optimization
              </h2>

              <p className="mb-6 text-black dark:text-white">
                Optimize the development, functionality, and consistency of nixtamalized corn flour and its applications.
              </p>

              {/* Services */}
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Services:
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-5">
                  <div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">1</p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      Development and implementation of product and process specifications
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">2</p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      Equipment selection and process parameter definition
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">3</p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-2 text-metatitle2 text-black dark:text-white">
                      Establishment of functional quality parameters for:
                    </h3>
                    <ul className="space-y-1.5 border-l border-stroke pl-4 dark:border-strokedark">
                      <li className="text-metatitle2 text-black dark:text-white">Tortillas</li>
                      <li className="text-metatitle2 text-black dark:text-white">Tortilla chips</li>
                      <li className="text-metatitle2 text-black dark:text-white">Corn chips</li>
                      <li className="text-metatitle2 text-black dark:text-white">Taco shells</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">4</p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      Development of new technologies for masa and extruded products
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">5</p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      Identification and correction of weak process points
                    </h3>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="flex h-15 w-15 flex-shrink-0 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">6</p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      Process adjustments to improve texture and appearance
                    </h3>
                  </div>
                </div>
              </div>

              {/* Value proposition */}
              <div className="mt-7.5 rounded-xl border border-stroke bg-zumthor/50 px-5 py-4 dark:border-strokedark dark:bg-blacksection">
                <p className="mb-1.5 text-metatitle font-semibold uppercase tracking-widest text-primary dark:text-secondary">Value</p>
                <p className="text-metatitle2 text-black dark:text-white">
                  Improve product performance, reduce variability, and ensure consistent quality across applications.
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden self-stretch md:block md:w-1/2"
            >
              <div className="sticky top-8 h-full min-h-[400px] overflow-hidden rounded-2xl shadow-solid-8">
                <Image
                  src="/images/about/x-ray-white-paper-image-resized.jpg"
                  alt="About"
                  className="object-cover dark:hidden"
                  fill
                />
                <Image
                  src="/images/about/about-dark-02.svg"
                  alt="About"
                  className="hidden object-cover dark:block"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
