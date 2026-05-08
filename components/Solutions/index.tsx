"use client";
import React from "react";
import Image from "next/image";
import About from "@/components/About";
import SectionHeader from "../Common/SectionHeader";

const Solutions = () => {
  return (
    <>
    <section>
      <SectionHeader
            headerInfo={{
              title: `SOLUTIONS`,
              subtitle: `Solutions Tailored to Real Food Production Challenges`,
              description: `From product defects to process inefficiencies, solutions are designed to improve performance, consistency, and profitability.`,
            }}
      />
      <div className="pt-16 lg:pt-20">
        <About />
      </div>
    </section>
    </>
  );
};

export default Solutions;
