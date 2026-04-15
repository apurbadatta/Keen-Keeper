"use client";

import React from "react";
import {
  BellIcon,
  ArchiveBoxIcon,
  TrashIcon,
  PhoneIcon,
  ChatBubbleLeftIcon,
  VideoCameraIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { useTimeline } from "@/context/TimelineContext";
import { toast } from "react-toastify";

const FriendDetails = ({ friend, onBack }) => {
  const { addActivity } = useTimeline();

  const handleAction = (type) => {
    addActivity(type, friend.name);
    toast.success(`${type} added to timeline!`, { position: "top-center" });
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 md:p-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 mb-8 hover:text-emerald-800 font-medium"
      >
        <ArrowLeftIcon className="h-5 w-5" /> Back
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-28 h-28 mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-bold text-slate-800">{friend.name}</h2>
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="px-3 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full uppercase">
                {friend.status}
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full uppercase">
                {friend.tags[0]}
              </span>
            </div>
            <p className="mt-6 text-gray-500 text-sm">{friend.bio}</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <button className="w-full p-4 flex items-center justify-center gap-2 text-slate-700 border-b border-gray-50 hover:bg-gray-50">
              <BellIcon className="h-5 w-5" /> Snooze 2 Weeks
            </button>
            <button className="w-full p-4 flex items-center justify-center gap-2 text-slate-700 border-b border-gray-50 hover:bg-gray-50">
              <ArchiveBoxIcon className="h-5 w-5" /> Archive
            </button>
            <button className="w-full p-4 flex items-center justify-center gap-2 text-red-500 hover:bg-red-50">
              <TrashIcon className="h-5 w-5" /> Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h4 className="text-4xl font-bold text-emerald-900">
                {friend.days_since_contact}
              </h4>
              <p className="text-gray-400 text-xs mt-2 uppercase font-semibold">
                Days Since Contact
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h4 className="text-4xl font-bold text-emerald-900">
                {friend.goal}
              </h4>
              <p className="text-gray-400 text-xs mt-2 uppercase font-semibold">
                Goal (Days)
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center shadow-sm">
              <h4 className="text-2xl font-bold text-emerald-900">
                {friend.next_due_date}
              </h4>
              <p className="text-gray-400 text-xs mt-2 uppercase font-semibold">
                Next Due
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div>
              <p className=" font-bold  ">Relationship Goal</p>
              <p className="text-gray-400 text-xs mt-2 font-semibold">
                Connect every {friend.goal} days
              </p>
            </div>
            
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-emerald-900 font-bold mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleAction("Call")}
                className="flex flex-col items-center gap-2 p-6 bg-slate-50 rounded-xl hover:bg-emerald-50"
              >
                <PhoneIcon className="h-8 w-8 text-slate-600" /> Call
              </button>
              <button
                onClick={() => handleAction("Text")}
                className="flex flex-col items-center gap-2 p-6 bg-slate-50 rounded-xl hover:bg-emerald-50"
              >
                <ChatBubbleLeftIcon className="h-8 w-8 text-slate-600" /> Text
              </button>
              <button
                onClick={() => handleAction("Video")}
                className="flex flex-col items-center gap-2 p-6 bg-slate-50 rounded-xl hover:bg-emerald-50"
              >
                <VideoCameraIcon className="h-8 w-8 text-slate-600" /> Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
