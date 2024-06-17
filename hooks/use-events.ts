"use client";
import { useContext, useState } from "react";
import { Event, RSVP, User } from "@prisma/client";
import { EventContext } from "@/providers/events-provider";

export interface EEvent extends Event {
  User: Pick<User, "firstName" | "lastName" | "image">;
  rsvpList?: RSVP[];
}

export const EventsHook = () => {
  const [events, setEvents] = useState<EEvent[]>([]);

  const getEvents = () => events;

  const setAllEvents = (newEvents: EEvent[]) => {
    setEvents(newEvents);
  };

  const updateEventById = (id: string, updatedData: Partial<EEvent>) => {
    console.log('first')
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, ...updatedData } : event
      )
    );
  };

  const addEvent = (newEvent: EEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return {
    events,
    getEvents,
    addEvent,
    setAllEvents,
    updateEventById,
  };
};

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within an EventsProvider");
  }
  return context;
};
