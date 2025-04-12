"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
function page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      
      <Meteors number={40} className="h-1 w-0.5 fixed inset-0 z-0" />
    </div>
  );
}

export default page;
