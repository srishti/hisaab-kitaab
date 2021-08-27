export enum LStoreKeys {
  isAuthenticated = "authenticated",
  currentUser = "user",
  accessToken = "accessToken",
}

export const getItemFromLocalStorage = (key: string): any => {
  const value = localStorage.getItem(key);
  if (value) {
    JSON.parse(value);
  }
  return value;
};

export const setItemInLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeItemFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
