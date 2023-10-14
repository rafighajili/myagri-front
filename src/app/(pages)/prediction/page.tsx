"use client";

import { Card, Select } from "#/lib";
import { Item } from "react-stately";
import regionsNames from "#/constants/regionsNames";
import { useState } from "react";

type PredictionType = {
  city: string;
  temperature: number;
  random_plant: {
    name: string;
    price: number;
    money_spend: number;
  };
};

const dummyData: PredictionType = {
  city: "Quba",
  temperature: 27,
  random_plant: {
    name: "Nar",
    price: 1500,
    money_spend: 522,
  },
};

const filteredData: Record<
  keyof PredictionType["random_plant"],
  {
    heading: string;
    headingClassName: string;
    description: (value: string | number) => string | number;
  }
> = {
  name: {
    heading: "Name of plant",
    headingClassName: "text-primary-500",
    description: (value) => value,
  },
  price: {
    heading: "Price",
    headingClassName: "text-green-500",
    description: (value) => `${value} AZN`,
  },
  money_spend: {
    heading: "Money spent",
    headingClassName: "text-red-500",
    description: (value) => `${value} AZN`,
  },
};

export default function Prediction() {
  const [regionId, setRegionId] = useState<string | number | null>(null);

  const dataKeys = Object.keys(dummyData.random_plant) as Array<
    keyof PredictionType["random_plant"]
  >;

  return (
    <div>
      <Select
        label="Pick a region"
        items={regionsNames}
        selectedKey={regionId}
        onSelectionChange={setRegionId as any}
      >
        {(item) => <Item>{item.name}</Item>}
      </Select>

      <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6">
        {dataKeys.map((key) => (
          <Card
            key={key}
            hasHoverStyles
            className="col-span-2 flex flex-col items-center gap-y-2 px-4 py-8 last:sm:col-start-2 last:lg:col-start-auto"
          >
            <h2
              className={`text-lg font-bold ${filteredData[key].headingClassName}`}
            >
              {filteredData[key].heading}
            </h2>

            <p className="font-medium">
              {filteredData[key].description(dummyData.random_plant[key])}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
