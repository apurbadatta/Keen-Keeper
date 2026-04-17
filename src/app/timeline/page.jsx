"use client";
import { useState } from "react";
import { useTimeline } from "@/context/TimelineContext";
import { ClockIcon } from "@heroicons/react/24/outline";

const TimelinePage = () => {
  const { activities } = useTimeline();

  const [filterType, setFilterType] = useState("All");

  const filteredActivities = activities.filter((item) => {
    if (filterType === "All") return true;
    return item.type === filterType;
  });

  return (
    <div className="max-w-7xl p-6 min-h-[60vh]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Timeline</h2>

        {activities.length > 0 && (
          <select
            className="p-2 border border-gray-300 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">Filter timeline</option>
            <option value="Text">Text</option>
            <option value="Call">Call</option>
            <option value="Video">Video</option>
          </select>
        )}
      </div>

      {activities.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-300">
          <ClockIcon className="h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-500">
            No activities yet
          </h3>
          <p className="text-sm text-gray-400 mt-1">
            Call or text a friend to see your history here!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm transition-all hover:shadow-md"
              >
                <span className="text-3xl p-2 bg-slate-50 rounded-lg">
                  {item.icon}
                </span>
                <div>
                  <p className="font-bold text-slate-800">
                    {item.type}{" "}
                    <span className="font-normal text-gray-500 text-sm">
                      with
                    </span>{" "}
                    {item.person}
                  </p>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">
                    {item.date}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 py-10">
              No {filterType} history found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
