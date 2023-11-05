import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ProfileForm } from "@/components/Form.jsx";

export default function Home() {
  return (
    <main className="flex h-screen flex-col justify-start gap-4 p-24">
      <div className="flex justify-around">
        <div>
          <h1>DriveLink</h1>
          <p className="w-[60ch] text-lg text-justify">
            Welcome to our DriveLink website, the ultimate platform for finding
            rides and reducing your carbon footprint! Our mission is to connect
            commuters with each other, making it easy and convenient for people
            to share rides to work, school, events, and more.
          </p>
          <div className="flex gap-4 mt-5">
            <Dialog>
              <DialogTrigger className="bg-primary text-white rounded-md px-4 py-2 text-sm font-medium">
                Find Ride
              </DialogTrigger>
              <DialogContent>
                <ProfileForm />
              </DialogContent>
            </Dialog>

            <Button formmethod="dialog">Offer Ride</Button>
          </div>
        </div>
        <>
          <Image
            src="/drivelink.svg"
            width={400}
            height={100}
            alt="drivelink"
          />
        </>
      </div>
    </main>
  );
}
