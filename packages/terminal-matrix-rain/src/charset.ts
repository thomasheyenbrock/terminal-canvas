const charset = [
  "\u00FE",
  "\u0184",
  "\u01BC",
  "\u01BF",
  "\u01F6",
  "\u021C",
  "\u03EA",
  "\u04C5",
  "\u0504",
  "\u0540",
  "\u05E4",
  "\u05DC",
  "\u06B0",
  "\u071B",
  "\u0763",
  "\u078D",
  "\u07C0",
  "\u0815",
  "\u0853",
  "\u0980",
  "\u0980",
  "\u0C68",
  "\u0CB0",
  "\u0E2B",
  "\u0EA1",
  "\u0F4A",
  "\u0F6A",
  "\u0F6B",
  "\u1009",
  "\u1043",
  "\u1044",
  "\u10AF",
  "\u10B0",
  "\u10BC",
  "\u10C5",
  "\u10F5",
  "\u1225",
  "\u123F",
  "\u1283",
  "\u12B5",
  "\u12E8",
  "\u1320",
  "\u13E5",
  "\u16EF",
  "\u172B",
  "\u1749",
  "\u174C",
  "\u1788",
  "\u17A0",
  "\u183D",
  "\u184B",
  "\u1859",
  "\u1862",
  "\u1873",
  "\u1902",
  "\u1903",
  "\u1905",
  "\u1909",
  "\u190D",
  "\u1912",
  "\u1916",
  "\u1918",
  "\u194F",
  "\u1960",
  "\u1982",
  "\u1993",
  "\u19C8",
  "\u1A03",
  "\u1B83",
  "\u1BA0",
  "\u1BC0",
  "\u1C01",
  "\u1C04",
  "\u1C09",
  "\u1C12",
  "\u1C15",
  "\u1C42",
  "\u1C46",
  "\u1C4D",
  "\u1C4E",
  "\u1C56",
  "\u1C61",
  "\u1C62",
  "\u1C64",
  "\u1C65",
  "\u1C74",
  "\u2128",
  "\u2280",
  "\u2281",
  "\u22E0",
  "\u22E1",
  "\u2C10",
  "\u2C2C",
  "\u2CC4",
  "\u2CDE"
];

export const getRandomCharacter = () =>
  charset[Math.floor(Math.random() * charset.length)];

export const getRandomCharacterArray = (length: number) =>
  Array.from({ length }).map(getRandomCharacter);