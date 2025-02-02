"use client";

import { DivideIcon as LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: typeof LucideIcon;
  change: {
    value: string;
    timeframe: string;
  };
}

export default function StatCard({ title, value, icon: Icon, change }: StatCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-black">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
        <Icon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
      </div>
      <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">{value}</p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {change.value} {change.timeframe}
      </p>
    </div>
  );
}