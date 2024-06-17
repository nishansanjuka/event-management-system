"use client";
import { FC, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { EventPopUP } from "./event-pop-up";
import { useEvents } from "@/hooks";
export const LatestEvents: FC = () => {
  const [Load, setLoad] = useState(false);

  const { setAllEvents, events } = useEvents();
  const { isSignedIn } = useUser();

  useEffect(() => {
    async function getLatestEvents() {
      setLoad(true);
      const res = await fetch("/api/v1/events?take=3", {
        method: "GET",
      });
      setLoad(false);

      if (res.ok) {
        setAllEvents((await res.json()).events);
      } else {
        throw new Error(JSON.stringify(res));
      }
    }
    getLatestEvents();
  }, [isSignedIn]);

  useEffect(() => {
    console.clear();
    console.log(events);
  }, [events]);

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
      {!Load && events ? (
        events.map((event, index) => (
          <EventPopUP event={event as any} key={`${index}`} />
        ))
      ) : (
        <>
          <div className="relative cursor-pointer animate-pulse p-4 bg-slate-50 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 flex flex-col h-60"></div>
          <div className="relative cursor-pointer animate-pulse p-4 bg-slate-50 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 flex flex-col h-60"></div>
          <div className="relative cursor-pointer animate-pulse p-4 bg-slate-50 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 flex flex-col h-60"></div>
        </>
      )}
    </div>
  );
};
