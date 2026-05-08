import React from "react";
import Solutions from "@/components/Solutions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions - Adriana Consulting Services Inc.",
  description: "Expert food science solutions for product innovation, crisis resolution, and professional training."
};

const SolutionsPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Solutions />
    </div>
  );
};

export default SolutionsPage;
