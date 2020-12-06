import { ADDRESS_INPUT_ID, ADDRESS_INPUT_NAME } from "../lib/constants";
import useAddress from "../hooks/useAddress";
import styles from "../styles/addressInput.module.css";

const AddressInput = () => {
  const { address, setAddress } = useAddress();

  return (
    <>
      <input
        name={ADDRESS_INPUT_NAME}
        className={styles.addressInput}
        id={ADDRESS_INPUT_ID}
        autoFocus
        placeholder="Enter an address or business name"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <p className={styles.helperText}>
        The more precise you are, the better the results will be.{" "}
        <a href="#examples">Take a look at the examples.</a>
      </p>
    </>
  );
};

export default AddressInput;
