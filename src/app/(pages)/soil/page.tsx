"use client";

import { Card, Select } from "#/lib";
import { Item } from "react-stately";
import regionsNames from "#/constants/regionsNames";
import { ReactNode, useState } from "react";

type SoilType = {
  Rayon: string;
  "Su_seviyesi(bu_gun)": number;
  Aylıq_ortalama_su_seviyesi: number;
  Torpaq_rutubetliyi: number;
  "Torpaq_rutubetliyi(gelen_ay)": number;
  "Qerarlasmis_su_seviyyesi(3_hefte_erzinde)": number;
  Max_su_seviyyesi: number;
  Dasqin_Ehtimali: number;
  Author: string;
};

const dummyData: SoilType = {
  Rayon: "Quba",
  "Su_seviyesi(bu_gun)": 1.38,
  Aylıq_ortalama_su_seviyesi: 1.44,
  Torpaq_rutubetliyi: 3.99,
  "Torpaq_rutubetliyi(gelen_ay)": 0.05,
  "Qerarlasmis_su_seviyyesi(3_hefte_erzinde)": 1.58,
  Max_su_seviyyesi: 2.3,
  Dasqin_Ehtimali: 68.59,
  Author: "Abid Qurbanov (Elqa center:)",
};

const filteredData: Record<
  keyof SoilType,
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
  const [regionId, setRegionId] = useState<string | number | null>(null);

  const dataKeys = Object.keys(dummyData) as Array<keyof SoilType>;

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
        {dataKeys.map((key) => (
          <Card
            key={key}
            hasHoverStyles
            className="col-span-2 flex flex-col items-center text-center gap-y-2 px-4 py-8 last:sm:col-start-2 last:lg:col-start-auto"
          >
            <h2 className="text-lg font-bold">{filteredData[key].heading}</h2>

            <p className="font-medium">
              {filteredData[key].description(dummyData[key])}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
