"use client";

import React from "react";
import { AlertBadge24Filled } from "@fluentui/react-icons";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useParams } from "next/navigation";
import { useGetNotificationAndUser } from "@/lib/hooks/use-swr";

const NotificationUser = () => {
  const params = useParams<{ workspaceid: string }>();
  const { notification: allNotification } = useGetNotificationAndUser(
    params.workspaceid
  );

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button
            variant="outline" size="icon" className="ml-auto h-8 w-8"
          >
            <AlertBadge24Filled />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="CardStyle">
          <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
            <SheetDescription>
              <div>
                {allNotification?.length === 0 ? (
                  <div className="text-muted-foreground text-center text-xs py-4 italic">
                    No Notification
                  </div>
                ) : (
                  allNotification?.map((notification) => (
                    <div
                      className="w-full flex flex-col overflow-x-scroll text-ellipsis"
                      key={notification.id}
                    >
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage
                            src={notification.user.image?.toString()}
                            alt="@shadcn"
                          />
                          <AvatarFallback>
                            {notification.user.name}
                          </AvatarFallback>
                        </Avatar>
                        <span>{notification.user.name}</span>
                      </div>
                      <div className="flex flex-col">
                        <p>{notification.notification}</p>
                        <small className="text-xs text-muted-foreground">
                          {new Date(notification.created_at).toLocaleDateString()}
                        </small>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NotificationUser;
