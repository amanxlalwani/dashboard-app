"use client";

import { Bell, IndianRupee, CreditCard, Moon, Settings, Sun, Users,Activity } from "lucide-react";
import { useState } from "react";
import StatCard from "@/components/StatCard";
import RevenueChart from "@/components/RevenueChart";
import ActivityFeed from "@/components/ActivityFeed";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  
  return (

    <>
     
        <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard
            title="Total Revenue"
            value="₹4,50,231.89"
            icon={IndianRupee}
            change={{ value: "+20.1%", timeframe: "from last month" }}
          />
          <StatCard
            title="Active Users"
            value="+2350"
            icon={Users}
            change={{ value: "+180.1%", timeframe: "from last month" }}
          />
          <StatCard
            title="Sales"
            value="+12,234"
            icon={CreditCard}
            change={{ value: "+19%", timeframe: "from last month" }}
          />
          <StatCard
            title="Active Now"
            value="+573"
            icon={Activity}
            change={{ value: "+201", timeframe: "since last hour" }}
          />
        </div>

        <div className="grid grid-cols-1 px-4 lg:grid-cols-3 gap-4 mb-4 lg:gap-4">
          <div className="lg:col-span-2 h-[415px]">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1 h-[415px]">
            <ActivityFeed />
          </div>
        </div>
    </>
    
  );
}