import React from "react";
import FriendCard from "./FriendCard";
import friendsData from "../../../public/friends.json";

const FriendList = () => {
  return (
    <section className="bg-[#fcfdfd] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800">Your Friends</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friendsData.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendList;
