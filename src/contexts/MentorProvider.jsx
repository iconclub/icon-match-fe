import React, { useMemo, useState } from "react";

import { mentorContext } from "./MentorContext";

const MentorProvider = ({ children }) => {
  const [mentors, setMentors] = useState([]);
  const [goToMentor, setGoToMentor] = useState(0);

  const value = useMemo(
    () => ({
      mentors,
      setMentors,
      goToMentor,
      setGoToMentor,
    }),
    [mentors, goToMentor]
  );

  return <mentorContext.Provider value={value}>{children}</mentorContext.Provider>;
};

export default MentorProvider;
