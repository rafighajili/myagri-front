"use client";

import { useState } from "react";
import { Button, TextField } from "#/lib";

export default function Elqa() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <div className="space-y-8">
      <h1 className="text-primary-500 font-bold text-3xl">Elqa center</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmitted(true);
        }}
        className="grid sm:grid-cols-2 gap-8"
      >
        <TextField label="Name" />
        <TextField label="Surname" />
        <TextField label="Phone number" />
        <TextField label="Email" />
        <TextField label="Your feedback" className="sm:col-span-2" />
        <Button type="submit" className="sm:col-span-2 ml-auto">
          Submit
        </Button>
      </form>

      {isSubmitted && (
        <p className="text-green-500 text-lg text-center">
          Your feedback has been sent! We will contact you soon...
        </p>
      )}
    </div>
  );
}
