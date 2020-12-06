const useLocalStorage = () => {
  const removeLocalStorageAddress = () => {
    window.localStorage.removeItem("address");
  };

  const setLocalStorageAddress = (address: string) => {
    window.localStorage.setItem("address", address);
  };

  return { setLocalStorageAddress, removeLocalStorageAddress };
};

export default useLocalStorage;
