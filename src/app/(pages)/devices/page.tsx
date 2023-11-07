"use client";

import { Button, Card, Dialog, DialogTrigger, TextField } from "#/lib";
import { useEffect, useState } from "react";

const subscriptions: {
  name: string;
  price: number;
  options: string[];
}[] = [
  {
    name: "AgriAi Basic",
    price: 199,
    options: [
      "Yağınti ehtimalı haqda məlumat",
      "Tarlanın əkin-biçim vaxti haqda məlumat",
    ],
  },
  {
    name: "AgriAi Premium",
    price: 399,
    options: [
      "Tarlaya əkiləcək əkinin tövsiyyəsi",
      "Torpaq sağlamlığının təhlili",
      "Büdcə planın hazırlanması",
    ],
  },
];

export default function Devices() {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {subscriptions.map(({ name, price, options }) => (
        <Card
          key={name}
          hasHoverStyles
          className="p-8 flex flex-col items-center gap-y-8"
        >
          <h2 className="font-bold text-2xl text-primary-500">{name}</h2>
          <p className="text-3xl md:text-4xl">{price} AZN / illik</p>
          <ul className="list-disc pl-4 text-lg space-y-2">
            {options.map((option, key) => (
              <li key={key}>{option}</li>
            ))}
          </ul>
          <SubscriptionForm subscriptionName={name} />
        </Card>
      ))}
    </div>
  );
}

function SubscriptionForm({ subscriptionName }: { subscriptionName: string }) {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    !isFormOpen && setIsSubmitted(false);
  }, [isFormOpen]);

  return (
    <DialogTrigger
      isOpen={isFormOpen}
      onOpenChange={setIsFormOpen}
      isDismissable
    >
      <Button variant="outlined" size="large" fullWidth className="mt-auto">
        Subscribe now
      </Button>
      <Dialog>
        <h3 className="text-primary-500 text-xl lg:text-2xl font-bold mb-8">
          Subscribe to <u>{subscriptionName}</u>
        </h3>
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
          <Button type="submit" className="sm:col-span-2 ml-auto">
            Send a request
          </Button>
        </form>

        {isSubmitted && (
          <p className="text-lg text-green-500 font-medium mt-4">
            Thank you for choosing us! We will contact you soon...
          </p>
        )}
      </Dialog>
    </DialogTrigger>
  );
}
