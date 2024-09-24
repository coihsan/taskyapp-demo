"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NewCalenderSchema } from "@/lib/schema";
import { Textarea } from "../ui/textarea";
import { Calendar24Regular } from "@fluentui/react-icons";
import { cn } from "@/lib/utils";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const CreateNewCalenderForm = () => {
  const [date, setDate] = React.useState<Date>();
  const form = useForm<z.infer<typeof NewCalenderSchema>>({
    resolver: zodResolver(NewCalenderSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      dates: new Date(),
      notes: "",
      times: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof NewCalenderSchema>) => {
    try {
      console.log(values);
    } catch (error) {}
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dates"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <Calendar24Regular className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <FormLabel>Time</FormLabel>
              {/* <Select>
                      <SelectTrigger className="w-20">
                        <SelectValue placeholder="12" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => (
                          <SelectItem key={i} value={i + 1}>
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-20">
                        <SelectValue placeholder="00" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 60 }, (_, i) => (
                          <SelectItem key={i} value={i.toString().padStart(2, "0")}>
                            {i.toString().padStart(2, "0")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-20">
                        <SelectValue placeholder="AM" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AM">AM</SelectItem>
                        <SelectItem value="PM">PM</SelectItem>
                      </SelectContent>
                    </Select> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
export default CreateNewCalenderForm;
