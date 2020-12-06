import { useStore } from "../lib/store";
import { GOOGLE_MAPS_URL } from "../lib/constants";

const useGoogleMapsUrl = () => {
  const { state } = useStore();
  const { address } = state;

  if (!address) {
    return null;
  }

  return `${GOOGLE_MAPS_URL}${encodeURI(address)}`;
};

export default useGoogleMapsUrl;
