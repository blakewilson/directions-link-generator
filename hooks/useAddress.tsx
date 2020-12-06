import { ADDRESS_LOCAL_STORAGE_NAME } from "../constants";
import { useStore } from "../store";

const useAddress = () => {
  const { dispatch } = useStore();

  const setAddress = (newAddress: string) => {
    dispatch({
      type: "SET_ADDRESS",
      payload: newAddress,
    });

    if (window) {
      window.localStorage.setItem(ADDRESS_LOCAL_STORAGE_NAME, newAddress);
    }
  };

  return { setAddress };
};

export default useAddress;
