import { createContext, useContext } from "react";

export const mentorContext = createContext(null);

export const useMentorContext = () => useContext(mentorContext);
