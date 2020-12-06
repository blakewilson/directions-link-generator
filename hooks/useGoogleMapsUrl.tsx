import { useStore } from "../store";
import { GOOGLE_MAPS_URL } from "../constants";

const useGoogleMapsUrl = () => {
  const { state } = useStore();
  const { address } = state;

  return () => {
    if (!address) {
      return null;
    }

    return `${GOOGLE_MAPS_URL}${encodeURI(address)}`;
  };
};

export default useGoogleMapsUrl;
