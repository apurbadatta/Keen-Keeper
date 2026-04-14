"use client";
import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (type, person) => {
    const newActivity = {
      id: Date.now(),
      type: type,
      person: person,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      icon: type === "Call" ? "📞" : type === "Text" ? "💬" : "📹"
    };
    setActivities([newActivity, ...activities]);
  };

  return (
    <TimelineContext.Provider value={{ activities, addActivity }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);