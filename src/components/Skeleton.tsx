// src/components/Skeleton.tsx
"use client";

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-800 rounded-xl ${className}`}
    ></div>
  );
};

export default Skeleton;
