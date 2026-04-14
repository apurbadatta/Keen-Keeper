"use client";

import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useTimeline } from "@/context/TimelineContext"; 

export default function StatsPage() {
  const { activities } = useTimeline();

  
  const chartData = useMemo(() => {
    const counts = {
      Call: 0,
      Text: 0,
      Video: 0,
    };

   
    activities.forEach((activity) => {
      if (counts[activity.type] !== undefined) {
        counts[activity.type]++;
      }
    });

    return [
      { name: 'Text', value: counts.Text, color: '#8b5cf6' }, 
      { name: 'Call', value: counts.Call, color: '#0C960C' }, 
      { name: 'Video', value: counts.Video, color: '#064e3b' }, 
    ];
  }, [activities]);


  const hasData = activities.length > 0;

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Friendship Analytics</h1>
        
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm min-h-[500px] flex flex-col">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            By Interaction Type
          </h3>
          
          {!hasData ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
              <p>No interaction data available to show stats.</p>
              <p className="text-xs mt-1">Add activities from your friend's profile!</p>
            </div>
          ) : (
            <div className="flex-1 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={chartData}
                    innerRadius="70%"
                    outerRadius="100%"
                    paddingAngle={8}
                    cornerRadius={10}
                    dataKey="value"
                    animationDuration={1000}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}