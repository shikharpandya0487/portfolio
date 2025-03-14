// "use client";
import { RefObject } from "react";
import FormContact from "@/app/_components/FormContact";
import RobotPart from "./RobotPart";

// Define props type properly
interface ContactProps {
  contactRef: RefObject<HTMLDivElement>;
}

function Contact({ contactRef }: ContactProps) {
  return (
    <div ref={contactRef} className="min-h-screen rounded-xl  p-8 border-b">
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 p-2 ">
        <FormContact />
        <div className="hidden md:block">
          <RobotPart />
        </div>
      </div>
    </div>
  );
}

export default Contact;
