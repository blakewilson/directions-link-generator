import { ADDRESS_LOCAL_STORAGE_NAME } from "../constants";

const useLocalStorage = () => {
  const removeLocalStorageAddress = () => {
    window.localStorage.removeItem(ADDRESS_LOCAL_STORAGE_NAME);
  };

  const setLocalStorageAddress = (address: string) => {
    window.localStorage.setItem(ADDRESS_LOCAL_STORAGE_NAME, address);
  };

  const getLocalStorageAddress = () => {
    return window.localStorage.getItem(ADDRESS_LOCAL_STORAGE_NAME);
  };

  return {
    setLocalStorageAddress,
    removeLocalStorageAddress,
    getLocalStorageAddress,
  };
};

export default useLocalStorage;
