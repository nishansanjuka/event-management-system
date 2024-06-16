"use client";
import { Calendar, Clock, MapPin } from "lucide-react";
import React, { FC } from "react";
import { Event } from "@prisma/client";
import { User } from "@clerk/nextjs/server";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export interface EEvent extends Event {
  user: Pick<User, "firstName" | "lastName">;
}

export const EventPopUP: FC<{ event: EEvent }> = ({ event }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer border p-4 bg-slate-50 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 flex flex-col h-60">
          <div className=" flex flex-col">
            <h1 className="font-extrabold text-xl uppercase">{event.title}</h1>
            <h1 className="text-muted-foreground font-bold text-xs">
              {event.category}
            </h1>
          </div>

          <p className="text-xs line-clamp-2 flex-1 lg:line-clamp-4 text-left mb-1">
            {event.description}
          </p>
          <div className=" mt-1 flex space-y-2 flex-col text-muted-foreground justify-between">
            <div className=" flex space-x-2 items-center justify-between w-full">
              <div className=" flex space-x-2 items-center">
                <Calendar className=" size-4" />
                <p className=" text-xs font-bold">
                  {Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(
                    event.date
                  )}
                </p>
              </div>
              <div className=" flex space-x-2 items-center">
                <Clock className=" size-4" />
                <p className=" text-xs font-bold line-clamp-1">
                  {Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(
                    event.date
                  )}
                </p>
              </div>
            </div>
            <div className=" flex space-x-2 items-center">
              <MapPin className=" size-4" />
              <p className=" text-xs font-bold line-clamp-1">{event.venue}</p>
            </div>
          </div>

          <div className=" mt-2 w-full flex items-center space-x-2">
            <div className="w-full flex items-center space-x-2">
              <div className=" size-6 aspect-square rounded-full bg-blue-500 "></div>
              <p className="text-xs text-muted-foreground  font-semibold">
                {`${event.user.firstName} ${event.user.lastName}`}
              </p>
            </div>
            <p className="text-xs text-muted-foreground font-bold ">
              {Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(
                event.date
              )}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" border-b pb-2">Event Details</DialogTitle>
        </DialogHeader>
        <div className=" w-full">
          <div className=" flex items-center justify-between w-full">
            <h1 className=" text-lg font-extrabold capitalize">
              {event.title}
            </h1>
            <p className=" font-extrabold text-muted-foreground text-xs">
              {event.category}
            </p>
          </div>

          <div className=" w-full mt-2 text-xs">
            <p>{event.description}</p>
          </div>

          <div className=" w-full flex items-center justify-around text-muted-foreground mt-4">
            <div className=" flex items-center space-x-2 text-xs font-bold">
              <Calendar className="size-4" />
              <p>
                {Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                  event.date
                )}
              </p>
            </div>
            <div className=" flex items-center space-x-2 text-xs font-bold">
              <Clock className="size-4" />
              <p>
                {Intl.DateTimeFormat("en-US", { timeStyle: "medium" }).format(
                  event.date
                )}
              </p>
            </div>
            <div className=" flex items-center space-x-2 text-xs font-bold">
              <MapPin className="size-4" />
              <p>{event.venue}</p>
            </div>
          </div>
        </div>
        <DialogFooter className=" w-full">
          <Button className=" w-full">Send an attendance</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
