import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import CreateNewCalenderButton from "@/components/global/create-new-calender-button";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full p-4">
      <div className="flex-1 grid grid-cols-[1fr_300px] gap-8">
        <div className="grid gap-8">
          <div className="flex items-center justify-between">
            <div className="grid gap-1">
              <h1 className="text-2xl font-semibold">Calendar</h1>
              <p className="text-muted-foreground">Manage your daily tasks, events, and meetings.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <ChevronLeftIcon className="w-4 h-4" />
                Previous
              </Button>
              <div className="text-lg font-medium">April 2023</div>
              <Button variant="outline" size="sm">
                Next
                <ChevronRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-4">
            <div className="text-center text-muted-foreground">Sun</div>
            <div className="text-center text-muted-foreground">Mon</div>
            <div className="text-center text-muted-foreground">Tue</div>
            <div className="text-center text-muted-foreground">Wed</div>
            <div className="text-center text-muted-foreground">Thu</div>
            <div className="text-center text-muted-foreground">Fri</div>
            <div className="text-center text-muted-foreground">Sat</div>
            {Array.from({ length: 35 }, (_, i) => (
              <div
                key={i}
                className={`rounded-lg p-2 text-center transition-colors hover:bg-background ${
                  i % 7 === 0 ? "text-red-500" : i % 7 === 6 ? "text-blue-500" : "text-foreground"
                } ${i < 7 ? "text-muted-foreground" : ""}`}
              >
                {i + 1}
                <div className="mt-2 flex flex-col gap-1">
                  <div className="bg-primary-foreground/20 rounded-md px-2 py-1 text-xs text-primary">Meeting</div>
                  <div className="bg-accent-foreground/20 rounded-md px-2 py-1 text-xs text-accent">Event</div>
                  <div className="bg-secondary-foreground/20 rounded-md px-2 py-1 text-xs text-secondary">Task</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-8">
          <div className="grid gap-4">
            <h2 className="text-xl font-semibold">Upcoming</h2>
            <Card>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-foreground/20 rounded-full w-10 h-10 flex items-center justify-center text-primary">
                    <CalendarCheckIcon className="w-5 h-5" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Weekly Team Meeting</div>
                    <div className="text-sm text-muted-foreground">April 5, 2023 - 2:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent-foreground/20 rounded-full w-10 h-10 flex items-center justify-center text-accent">
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Company Picnic</div>
                    <div className="text-sm text-muted-foreground">April 15, 2023 - 12:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-secondary-foreground/20 rounded-full w-10 h-10 flex items-center justify-center text-secondary">
                    <CalendarIcon className="w-5 h-5" />
                  </div>
                  <div className="grid gap-1">
                    <div className="font-medium">Finish Quarterly Report</div>
                    <div className="text-sm text-muted-foreground">April 20, 2023 - 5:00 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <CreateNewCalenderButton />
        </div>
      </div>
    </div>
  )
}

function CalendarCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  )
}


function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}