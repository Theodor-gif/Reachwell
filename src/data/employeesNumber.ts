export type employeesType = {
  id: string;
  employeesEl: string;
  employeesEn: string;
};

export const employeesNum: employeesType[] = [
  { id: "1", employeesEl: "Χωρίς προτίμηση", employeesEn: "No preference" },
  { id: "2", employeesEl: "1 εργαζόμενος", employeesEn: "1 employee" },
  { id: "3", employeesEl: "2-4 εργαζόμενοι", employeesEn: "2-4 employees" },
  { id: "4", employeesEl: "5+ εργαζόμενοι", employeesEn: "5+ employees" },
];
