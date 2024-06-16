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
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Loader } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { TimePickerDemo } from "./time-picker-demo";
import { SelectSingleEventHandler } from "react-day-picker";

export const FormEvent: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[60vw] lg:max-w-[30vw]">
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
          <DialogDescription>Tell them about your next step</DialogDescription>
        </DialogHeader>
        <FormRegister setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};

export interface EventForm {
  title: string;
  description: string;
  date: Date;
  venue: string;
}

const FormRegister: FC<{ setOpen: Dispatch<SetStateAction<boolean>> }> = ({
  setOpen,
}) => {
  const [isLoading, setisLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<EventForm>();

  const onSubmit: SubmitHandler<EventForm> = (data) => {
    setisLoading(true);
    setisLoading(false);
    setOpen(false);
  };

  const date = watch("date");

  const handleDateChange = (eventDate: SelectSingleEventHandler | Date) => {
    setValue("date", eventDate as Date);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-full space-y-4">
      <div>
        <Input
          placeholder="Topic"
          {...register("title", { required: "Title is requiered!" })}
          className="focus-visible:ring-transparent focus-visible:bg-slate-100 transition-colors duration-200"
        />
        <p className=" text-xs relative left-1 text-red-500 mt-1">
          {errors.title?.message}
        </p>
      </div>

      <div>
        <Textarea
          className="focus-visible:ring-transparent focus-visible:bg-slate-100 transition-colors duration-200"
          placeholder=" Describe your goal"
          rows={8}
          {...register("description", {
            required: "Description is requiered!",
          })}
        />
        <p className=" text-xs relative left-1 text-red-500 mt-1">
          {errors.description?.message}
        </p>
      </div>

      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? (
                format(date, "PPP HH:mm:ss")
              ) : (
                <span>When do you want to held on</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateChange as SelectSingleEventHandler}
              initialFocus
              {...register("date", { required: "date and time are required!" })}
            />
            <div className="p-3 border-t border-border">
              <TimePickerDemo
                setDate={handleDateChange as (date: Date | undefined) => void}
                date={date}
              />
            </div>
          </PopoverContent>
        </Popover>
        <p className=" text-xs relative left-1 text-red-500 mt-1">
          {errors.date?.message}
        </p>
      </div>

      <div>
        <Input
          className="focus-visible:ring-transparent focus-visible:bg-slate-100 transition-colors duration-200"
          placeholder="Venue - ex: Lotus Tower, Colombo Sri Lanka"
          {...register("venue", { required: "Venue is required!" })}
        />
        <p className=" text-xs relative left-1 text-red-500 mt-1">
          {errors.venue?.message}
        </p>
      </div>

      <div className=" space-y-2">
        <Button
          disabled={isLoading}
          type="submit"
          className=" w-full bg-orange-500 hover:bg-orange-400"
        >
          {isLoading ? (
            <span className=" flex w-fit items-center space-x-1 animate-pulse">
              {" "}
              <Loader className=" size-4 animate-spin mr-1" /> Please wait
            </span>
          ) : (
            "Tell them"
          )}
        </Button>
        <Button
          onClick={() => setOpen(false)}
          variant={"outline"}
          className=" w-full"
          type="button"
        >
          Never mind
        </Button>
      </div>
    </form>
  );
};
