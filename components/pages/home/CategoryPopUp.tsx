"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categoriesData } from "@/data";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { FC, PropsWithChildren, useState } from "react";

export const CategoryPopUp: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState("");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[40vw]">
        <DialogHeader>
          <DialogTitle>All Categories</DialogTitle>
        </DialogHeader>
        <section className="w-full mt-5 flex items-center border border-slate-400 rounded-sm bg-slate-50 pr-1">
          <input
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className=" font-medium flex-1 ring-0 bg-slate-100 text-xs border-none p-2 outline-none"
          />
          <Search className=" h-full aspect-square text-slate-600 p-1" />
        </section>

        <ScrollArea className=" max-h-[60vh] w-full px-4">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-2">
            {categoriesData
              .filter((obj) =>
                obj.name.toLowerCase().includes(search.toLowerCase())
              )
              .map(({ name, description, image }) => (
                <>
                  <div className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <Image
                        width={1000}
                        height={667}
                        src={image}
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        {name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      {description}
                    </p>
                  </div>
                </>
              ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
