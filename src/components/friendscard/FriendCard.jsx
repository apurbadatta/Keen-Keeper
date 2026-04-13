import React from "react";

const FriendCard = ({ friend }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-500 text-white";
      case "almost due":
        return "bg-amber-500 text-white";
      case "on-track":
        return "bg-[#163a2b] text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
      <div className="w-24 h-24 mb-4 overflow-hidden rounded-full border-2 border-gray-100">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-1">{friend.name}</h3>
      <p className="text-sm text-gray-400 mb-4">
        {friend.days_since_contact}d ago
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-5">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase rounded-md tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className={`px-5 py-1.5 rounded-full text-[11px] font-bold capitalize tracking-wide ${getStatusStyle(friend.status)}`}
      >
        {friend.status}
      </span>
    </div>
  );
};

export default FriendCard;
