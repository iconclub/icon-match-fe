import React, { useMemo, useState, useCallback, useEffect } from "react";
import { toast } from "react-toastify";

import { mentorContext } from "./MentorContext";
import { getMentors } from "~/apis/mentor.api";

const MentorProvider = ({ children }) => {
  const [mentors, setMentors] = useState([]);
  const [goToMentor, setGoToMentor] = useState(0);

  const getMentorList = useCallback(async () => {
    try {
      const data = await getMentors();
      if (!data) {
        throw new Error("List of mentors is empty");
      }
      setMentors(data.mentors);
    } catch (err) {
      toast.error(err.message, { toastId: "fetch-mentors" });
    }
  }, []);

  useEffect(() => {
    getMentorList();
  }, []);

  const value = useMemo(
    () => ({
      mentors,
      setMentors,
      goToMentor,
      setGoToMentor,
      getMentorList,
    }),
    [mentors, goToMentor]
  );

  return <mentorContext.Provider value={value}>{children}</mentorContext.Provider>;
};

export default MentorProvider;
