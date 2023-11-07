"use client";

import { Card } from "#/lib";

const members: { fullName: string; position: string }[] = [
  {
    fullName: "Rafig Hajili",
    position: "Software Developer",
  },
  {
    fullName: "Abid Gurbanov",
    position: "CEO",
  },
  {
    fullName: "Polad Ibrahimov",
    position: "AI Developer",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-primary-500 [&>section]:space-y-4">
      <section>
        <h1>About us</h1>
        <p>
          Bizim idea kend teseruffati ucundur , yetişdirilən məhsullar haqqında
          məlumat verən proqramdır. Bu, coğrafi ərazini müəyyən etməyə və
          optimal məhsul yığım müddəti daxil olmaqla, lazımi göstəriciləri əldə
          etməyə imkan verir. Torpaq analizi sistemi müəyyən bir sahə üçün uyğun
          məhsulların müəyyən edilməsinə kömək edir.
        </p>
        <p>
          Sensorlar bitkilərin sağlam böyüməsini təmin etmək üçün torpaq şəraiti
          haqqında davamlı məlumat verir və lazım gəldikdə torpaq örtüyünün
          yaxşılaşdırılması üçün tövsiyələr verir. Torpağın kifayət qədər
          rütubəti olmadıqda, sistem suvarma ehtiyacı haqqında bildirişlər
          təqdim edir.
        </p>
        <p>
          Məhsul kənd təsərrüfatı məhsullarının məhsuldarlığını və keyfiyyətini
          artırmağa kömək edir. Təqdim olunan məlumatlardan səmərəli istifadə
          kənd təsərrüfatının davamlı inkişafına kömək edir.
        </p>
      </section>

      <section>
        <h1>Our team</h1>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6">
          {members.map(({ fullName, position }) => (
            <Card
              key={fullName}
              hasHoverStyles
              className="space-y-4 text-center px-4 py-8 last:sm:col-start-2 last:lg:col-start-auto col-span-2"
            >
              <p className="text-xl font-medium">{fullName}</p>
              <p className="text-primary-500">{position}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
