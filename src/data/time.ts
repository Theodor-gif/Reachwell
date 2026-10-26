export type daysType = {
  id: string;
  daysEl: string;
  daysEn: string;
};

export const daysRange: daysType[] = [
  { id: "1", daysEl: "Χωρίς προτίμηση", daysEn: "No preference" },
  { id: "2", daysEl: "Έως 7 ημέρες", daysEn: "Up to 7 days" },
  { id: "3", daysEl: "7-14 ημέρες", daysEn: "7-14 days" },
  { id: "4", daysEl: "14-30 ημέρες", daysEn: "14-30 days" },
  { id: "5", daysEl: "30+ ημέρες", daysEn: "30+ days" },
];
