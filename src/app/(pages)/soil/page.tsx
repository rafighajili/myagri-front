"use client";

import { Card, Select } from "#/lib";
import { Item } from "react-stately";
import regionsNames from "#/constants/regionsNames";
import { ReactNode, useState } from "react";
import { useGetSoilQuery } from "#/redux/apiSlice";
import { Soil } from "#/types/soil";

const filteredData: Record<
  keyof Soil,
  {
    icon: ReactNode;
    heading: string;
    description: (value: string | number) => string | number;
  }
> = {
  Rayon: {
    icon: <></>,
    heading: "Region",
    description: (value) => `${value}`,
  },
  "Su_seviyesi(bu_gun)": {
    icon: <></>,
    heading: "Water level (today)",
    description: (value) => `${value}`,
  },
  Aylıq_ortalama_su_seviyesi: {
    icon: <></>,
    heading: "Monthly average of water level",
    description: (value) => `${value}`,
  },
  Torpaq_rutubetliyi: {
    icon: <></>,
    heading: "Soil moisture",
    description: (value) => `${value}`,
  },
  "Torpaq_rutubetliyi(gelen_ay)": {
    icon: <></>,
    heading: "Soil moisture in the next month",
    description: (value) => `${value}`,
  },
  "Qerarlasmis_su_seviyyesi(3_hefte_erzinde)": {
    icon: <></>,
    heading: "Exact water level in the last 3 weeks",
    description: (value) => `${value}`,
  },
  Max_su_seviyyesi: {
    icon: <></>,
    heading: "Maximum water level",
    description: (value) => `${value}`,
  },
  Dasqin_Ehtimali: {
    icon: <></>,
    heading: "Possibility of flood",
    description: (value) => `${value}%`,
  },
  Author: {
    icon: <></>,
    heading: "Author",
    description: (value) => `${value}`,
  },
};

export default function Prediction() {
  const [regionId, setRegionId] = useState<string>("");

  const { data, isLoading, isFetching } = useGetSoilQuery({
    city: regionsNames.find((region) => region.id === regionId)?.name,
  });

  const dataKeys = !!data ? (Object.keys(data) as Array<keyof Soil>) : [];

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

      <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6 items-center">
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
              className="col-span-2 flex flex-col items-center text-center gap-y-2 px-4 py-8 last:sm:col-start-2 last:lg:col-start-auto"
            >
              <h2 className="text-lg font-bold">{filteredData[key].heading}</h2>

              <p className="font-medium">
                {filteredData[key].description(data[key])}
              </p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
