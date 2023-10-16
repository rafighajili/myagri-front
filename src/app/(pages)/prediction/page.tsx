"use client";

import { Card, Select } from "#/lib";
import { Item } from "react-stately";
import regionsNames from "#/constants/regionsNames";
import { useState } from "react";
import { useGetPredictionQuery } from "#/redux/apiSlice";
import { Prediction } from "#/types/prediction";

const filteredData: Record<
  keyof Prediction["random_plant"],
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
  const [regionId, setRegionId] = useState<string>("");

  const { data, isLoading, isFetching } = useGetPredictionQuery({
    city: regionsNames.find((region) => region.id === regionId)?.name,
  });

  const dataKeys = !!data
    ? (Object.keys(data.random_plant) as Array<
        keyof Prediction["random_plant"]
      >)
    : [];

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
        {isLoading ? (
          <div>loading...</div>
        ) : isFetching ? (
          <div>fetching...</div>
        ) : !data ? (
          <div>no data</div>
        ) : (
          dataKeys.map((key) => (
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
                {filteredData[key].description(data.random_plant[key])}
              </p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
