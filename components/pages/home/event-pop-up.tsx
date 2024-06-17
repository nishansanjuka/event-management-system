"use client";
import { Calendar, Clock, Loader, MapPin } from "lucide-react";
import React, { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { EEvent, useEvents } from "@/hooks";

export const EventPopUP: FC<{ event: EEvent }> = ({ event }) => {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useUser();
  const router = useRouter();
  const [Load, setLoad] = useState(false);
  const { updateEventById } = useEvents();

  const eventParagraphs = event.description
    .split("\n")
    .map((paragraph, index) => (
      <p key={index} className="text-xs text-muted-foreground">
        {paragraph}
      </p>
    ));

  const handleRsvp = async () => {
    setLoad(true);
    const res = await fetch(
      `/api/v1/rsvp?action=${
        event.rsvpList && event.rsvpList.length > 0 ? "cancel" : "set"
      }&event=${event.id}`,
      {
        method: "PUT",
      }
    );
    setLoad(false);
    if (res.ok) {
      const data = await res.json();
      updateEventById(event.id, data.event as EEvent);
    }
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer border p-4 bg-slate-50 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 flex flex-col h-60">
          <div className=" flex flex-col">
            <h1 className="font-extrabold text-xl uppercase line-clamp-2">
              {event.title}
            </h1>
            <h1 className="text-muted-foreground font-bold text-xs">
              {event.category}
            </h1>
          </div>

          <p className=" relative text-xs line-clamp-2 flex-1 lg:line-clamp-4 text-left mb-1">
            {event.description}
            <span className=" absolute left-0 right-0 bottom-0 bg-gradient-to-t from-slate-50 from-20% to-transparent to-80% h-[20%]"></span>
          </p>
          <div className=" mt-1 flex space-y-2 flex-col text-muted-foreground justify-between">
            <div className=" flex space-x-2 items-center justify-between w-full">
              <div className=" flex space-x-2 items-center">
                <Calendar className=" size-4" />
                <p className=" text-xs font-bold">
                  {Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(
                    new Date(event.date)
                  )}
                </p>
              </div>
              <div className=" flex space-x-2 items-center">
                <Clock className=" size-4" />
                <p className=" text-xs font-bold line-clamp-1">
                  {Intl.DateTimeFormat("en-US", { timeStyle: "short" }).format(
                    new Date(event.date)
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
              {event.User.image ? (
                <Image
                  src={event.User.image}
                  width={500}
                  height={500}
                  alt="event"
                  className=" size-6 aspect-square rounded-full bg-blue-500 "
                />
              ) : (
                <div className=" size-6 aspect-square rounded-full bg-blue-500 "></div>
              )}

              <p className="text-xs text-muted-foreground  font-semibold">
                {`${event.User.firstName} ${event.User.lastName}`}
              </p>
            </div>
            <p className="text-xs text-muted-foreground font-bold ">
              {Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(
                new Date(event.date)
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
            <p>{eventParagraphs}</p>
          </div>

          <div className=" w-full flex items-center justify-around text-muted-foreground mt-4">
            <div className=" flex items-center space-x-2 text-xs font-bold">
              <Calendar className="size-4" />
              <p>
                {Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
                  new Date(event.date)
                )}
              </p>
            </div>
            <div className=" flex items-center space-x-2 text-xs font-bold">
              <Clock className="size-4" />
              <p>
                {Intl.DateTimeFormat("en-US", { timeStyle: "medium" }).format(
                  new Date(event.date)
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
          <Button
            onClick={() => setOpen(false)}
            variant={"destructive"}
            className=" w-full"
          >
            Never mind
          </Button>
          <Button
            disabled={Load}
            onClick={() =>
              !isSignedIn ? router.push("/sign-in") : handleRsvp()
            }
            className={cn(
              "w-full",
              isSignedIn
                ? event.rsvpList && event.rsvpList.length > 0
                  ? "bg-orange-500 hover:bg-orange-400"
                  : ""
                : ""
            )}
          >
            {Load ? (
              <span className=" flex items-center animate-pulse">
                {" "}
                <Loader className=" size-4 mr-1 animate-spin" />
                Please wait{" "}
              </span>
            ) : (
              <>
                {isSignedIn
                  ? event.rsvpList && event.rsvpList.length > 0
                    ? "Changed my mind"
                    : "Respond, if it please you"
                  : "Sign in to Respond"}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
