import { createContext, useState } from "react";

export const MessageContext = createContext({
  message: true,
  SetMessage: () => {},
});

export const MessageProvider = ({ children }) => {
  const [message, SetMessage] = useState(true);
  const value = { message, SetMessage };
  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};
