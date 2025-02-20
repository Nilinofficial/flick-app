import { ToastAndroid } from "react-native";

export const showToast = (error: string | undefined) => {
  ToastAndroid.show(error || "", ToastAndroid.SHORT);
};
