export type salaryPerType = {
  id: string;
  salaryPerEn: string;
  salaryPerEl: string;
};

export const salaryPer: salaryPerType[] = [
  { id: "1", salaryPerEn: "Ώρα", salaryPerEl: "Time" },
  { id: "2", salaryPerEn: "Ημέρα", salaryPerEl: "Day" },
  { id: "3", salaryPerEn: "Εβδομάδα", salaryPerEl: "Week" },
  { id: "4", salaryPerEn: "Μήνας", salaryPerEl: "Month" },
  { id: "5", salaryPerEn: "Έτος", salaryPerEl: "Year" },
];
