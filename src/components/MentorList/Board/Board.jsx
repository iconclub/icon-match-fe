import React, { useState, useCallback, useEffect } from "react";

import styles from '../MentorList.module.scss'
import Profiles from '../Profiles/Profiles'
import { toast } from "react-toastify";
import { getMentors } from "~/apis/mentor.api";

const Board = () => {
  const [profiles, setProfiles] = useState([]);

  const getMentorList = useCallback(async () => {
    try {
      const { mentors } = await getMentors();
      if (!mentors) {
        throw new Error("List of mentors is empty");
      }
      setProfiles(mentors);
    } catch (err) {
      toast.error(err.message, { toastId: "list-of-mentors" });
    }
  }, []);
  
  
  useEffect(() => {
    getMentorList();
  }, []);


  return (
      <div className={styles['board']} style={{overflowY: "scroll", height: "500px", width:"50%"}}>
        <h1 className={styles['leaderboard']}>Mentor List</h1>
        <Profiles mentor={profiles} style={{marginRight: '30px'}}/>

      </div>
      
  )
}



export default Board;
