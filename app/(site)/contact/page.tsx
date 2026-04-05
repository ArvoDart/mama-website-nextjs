import React, { Suspense } from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page - Adriana Consulting Services Inc.",
  description: "This is the Contact page for Adriana Consulting Services Inc."
};

const ContactPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default ContactPage;
