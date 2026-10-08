import { cookies } from "next/headers";
import { isLocale, messagesFor } from "./index";

export const getServerLocale = () => {
  const savedLocale = cookies().get("nameworlds-locale")?.value;
  return isLocale(savedLocale) ? savedLocale : "en";
};

export const getServerMessages = () => messagesFor(getServerLocale());
