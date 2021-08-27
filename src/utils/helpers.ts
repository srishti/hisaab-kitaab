export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export interface Date {
  day: number;
  month: number;
  year: number;
}

export const getDateObject = (dateString: string): Date => {
  const date = new Date(dateString);

  const dateObject: Date = {
    day: date.getUTCDate(),
    month: date.getUTCMonth(),
    year: date.getUTCFullYear(),
  };

  return dateObject;
};

export const getAllValuesInObjectOrEnum = (input: any): any[] => {
  return Object.values(input);
};

export const getLocalTimezonFormattedDate = (
  timeInMilliseconds: number
): string => {
  return new Date(timeInMilliseconds).toLocaleDateString("en-UK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const getLocalTimeZoneFormattedTime = (
  timeInMilliseconds: number
): string => {
  return new Date(timeInMilliseconds).toLocaleTimeString("en-US", {
    hour12: true,
  });
};
