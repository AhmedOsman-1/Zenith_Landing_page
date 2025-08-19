// src/components/Skeleton.tsx
"use client";

import React from "react";

interface SkeletonProps {
  className?: string; // for width, height, padding etc.
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`}
    ></div>
  );
};

export default Skeleton;
