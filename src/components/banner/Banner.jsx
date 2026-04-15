import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

const statItems = [
  { id: 1, title: "Total Friends", value: "12" },
  { id: 2, title: "On Track", value: "3" },
  { id: 3, title: "Need Attention", value: "6" },
  { id: 4, title: "Interactions This Month", value: "12" },
];

const Banner = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight max-w-2xl">
            Friends to keep close in your life
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button
            type="button"
            className="mt-10 flex items-center gap-2.5 px-6 py-3 bg-emerald-800 text-white rounded-lg text-sm font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all"
          >
            <PlusIcon className="h-5 w-5" />
            Add a Friend
          </button>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center transition-shadow hover:shadow-lg"
            >
              <p className="text-6xl font-black text-emerald-800 tracking-tight mb-2">
                {item.value}
              </p>

              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
