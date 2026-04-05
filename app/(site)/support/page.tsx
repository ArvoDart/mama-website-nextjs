import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Support page for Solid Pro"
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default SupportPage;
