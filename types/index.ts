export type MonthIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GenerateRange<Min extends number, Max extends number> = Exclude<
  { [K in Min | Max]: K }[Min | Max],
  undefined
>;
export type Year = GenerateRange<1970, 2024>;
