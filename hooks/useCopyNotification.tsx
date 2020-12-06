import { useStore } from "../lib/store";

const useCopyNotification = () => {
  const { state, dispatch } = useStore();
  const { isCopyNotificationVisible } = state;

  const setNotificationVisibility = (isVisible: boolean) => {
    dispatch({
      type: "SET_IS_COPY_NOTIFICATION_VISIBLE",
      payload: isVisible,
    });
  };

  return { isCopyNotificationVisible, setNotificationVisibility };
};

export default useCopyNotification;
