export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

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
