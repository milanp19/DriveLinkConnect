"use client";
import React, { useRef } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProfileForm } from "./Form";

const Dialog = () => {
  const dialogRef = useRef(null);
  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-primary text-white rounded-md px-4 py-2 text-sm font-medium">
          Find Ride
        </DialogTrigger>
        <DialogContent>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dialog;
