"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { EEvent, EventsHook } from "@/hooks";

interface EventContextType {
  events: EEvent[];
  getEvents: () => EEvent[];
  addEvent: (newEvent: EEvent) => void;
  setAllEvents: (newEvents: EEvent[]) => void;
  updateEventById: (id: string, updatedData: Partial<EEvent>) => void;
}

export const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const { events, getEvents, setAllEvents, updateEventById, addEvent } =
    EventsHook();

  return (
    <EventContext.Provider
      value={{ events, getEvents, setAllEvents, updateEventById, addEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};