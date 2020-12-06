import { useEffect } from "react";
import { ADDRESS_LOCAL_STORAGE_NAME } from "../lib/constants";
import { useStore } from "../lib/store";
import useLocalStorage from "./useLocalStorage";

const useAddress = () => {
  const { state, dispatch } = useStore();
  const { address } = state;
  const { getLocalStorageAddress } = useLocalStorage();

  const setAddress = (newAddress: string) => {
    dispatch({
      type: "SET_ADDRESS",
      payload: newAddress,
    });

    if (window) {
      window.localStorage.setItem(ADDRESS_LOCAL_STORAGE_NAME, newAddress);
    }
  };

  const clearAddress = () => {
    dispatch({
      type: "SET_ADDRESS",
      payload: "",
    });

    if (window) {
      window.localStorage.removeItem(ADDRESS_LOCAL_STORAGE_NAME);
    }
  };

  const setInitialAddress = () => {
    useEffect(() => {
      if (window) {
        const localStorageAddress = getLocalStorageAddress();
        setAddress(localStorageAddress || "");
      }
    }, []);
  };

  return { address, setAddress, clearAddress, setInitialAddress };
};

export default useAddress;
