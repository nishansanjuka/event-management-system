"use client";
import { ChevronDown, LogOut, Menu, Plus, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { usePathname, useRouter } from "next/navigation";
import { routes } from "@/data/RoutesData";
import { cn } from "@/lib/utils";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FormEvent } from "./ui/event-form";

export default function NavHeader() {
  const router = useRouter();
  const pathName = usePathname();

  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  return (
    <header
      className={cn(
        "absolute z-10 w-full top-0 h-16 items-center gap-4 border-b bg-background px-4 md:pl-6",
        pathName.includes("sign") ? "hidden" : "flex"
      )}
    >
      <nav className="hidden w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 min-w-fit text-lg font-semibold md:text-base"
        >
          <Image src={logo} alt="logo" className=" w-[160px]" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <ScrollArea className="  w-fit">
          <div className=" max-w-fit flex items-center space-x-6">
            {routes.map(({ name, href }, index) => (
              <Link
                key={`route-${index}`}
                href={href}
                className={cn(
                  "transition-colors hover:text-foreground",
                  pathName === href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {name}
              </Link>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image
                src={logo}
                alt="logo"
                className=" w-[160px] relative bottom-2"
              />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link href="#" className="hover:text-foreground">
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            {isSignedIn ? (
              <FormEvent>
                <Button className=" flex items-center bg-orange-500 hover:bg-orange-400">
                  <Plus className="w-4 h-4 mr-2" />
                  New Event
                </Button>
              </FormEvent>
            ) : (
              <Button onClick={() => router.push("/sign-in")} className=" flex items-center bg-orange-500 hover:bg-orange-400">
                <Plus className="w-4 h-4 mr-2" />
                New Event
              </Button>
            )}
          </div>
        </div>
        {isLoaded && (
          <>
            {isSignedIn && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className=" flex items-center space-x-2 outline-none ">
                  <p className="text-muted-foreground font-medium text-sm min-w-fit">
                    {`${user.firstName} ${user.lastName}`}
                  </p>
                  <button className=" flex items-center space-x-1 hover:bg-slate-100 transition-colors duration-300 p-1 rounded-full text-muted-foreground">
                    <Image
                      src={user.imageUrl}
                      alt="usr"
                      width={500}
                      height={500}
                      className=" max-w-8 max-h-8 aspect-square rounded-full border bg-slate-200"
                    ></Image>
                    <ChevronDown className=" h-4 w-4 relative right-1" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className=" text-xs uppercase tracking-tight">
                    User Actions
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href={"/dashboard/settings"}
                        className=" flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        <Settings className=" h-4 w-4 mr-2" /> Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button
                        onClick={() => signOut({ redirectUrl: "/" })}
                        className=" flex items-center space-x-2  hover:text-red-500 text-muted-foreground w-full p-[0.5] rounded-sm transition-colors duration-200"
                      >
                        <LogOut className=" h-4 w-4 mr-1" /> Sign Out
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => router.push("/sign-in")}
                variant={"ghost"}
                className="border bg-slate-50 uppercase"
              >
                Sign In
              </Button>
            )}
          </>
        )}
      </div>
    </header>
  );
}
