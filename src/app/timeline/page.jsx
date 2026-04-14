"use client";
import { useTimeline } from "@/context/TimelineContext";
import { ClockIcon } from "@heroicons/react/24/outline"; 
const TimelinePage = () => {
  const { activities } = useTimeline();

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-8 text-slate-800">Timeline</h2>

      
      {activities.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-300">
          <ClockIcon className="h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-500">No activities yet</h3>
          <p className="text-sm text-gray-400 mt-1">
            Call or text a friend to see your history here!
          </p>
        </div>
      ) : (
       
        <div className="space-y-4">
          {activities.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm transition-all hover:shadow-md">
              <span className="text-3xl p-2 bg-slate-50 rounded-lg">{item.icon}</span>
              <div>
                <p className="font-bold text-slate-800">
                  {item.type} <span className="font-normal text-gray-500 text-sm">with</span> {item.person}
                </p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;