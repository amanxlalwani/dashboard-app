"use client";

import Card from "./Card";


interface Activity {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    action: "Created a new project",
    time: "2 minutes ago",
  },
  {
    id: 2,
    user: {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    },
    action: "Updated dashboard layout",
    time: "5 minutes ago",
  },
  {
    id: 3,
    user: {
      name: "Emily Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    action: "Added new team member",
    time: "10 minutes ago",
  },
  {
    id: 4,
    user: {
      name: "David Wilson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    action: "Completed task review",
    time: "15 minutes ago",
  },
];

export default function ActivityFeed() {
  return (
    
 <Card CardTitle="Recent Activity" >
      <div className="mt-6 space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <img
              src={activity.user.avatar}
              alt={activity.user.name}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-white truncate">{activity.user.name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {activity.action}
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{activity.time}</p>
          </div>
        ))}
      </div>
    
    </Card>
  );
}