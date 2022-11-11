import React, { useCallback, useEffect } from "react";

import styles from '../MentorList.module.scss'
import avatar from "~/assets/hinh-meo.png";


const Profiles = (mentors) => {
  return (
    <div id={styles['profile']}>
      {Item(mentors.mentor)}
    </div>
  )
}

function Item(mentors) {
    return (
      <div>
        {mentors.length > 0 ? (
        <>
          {mentors.map((data,index) => (
            <div className={styles['flex']} key={index}>
              <div className={styles['item']}>
                  <img src={avatar} alt="" />
                  <div className={styles['info']}>
                    <h3 className={styles['name text-darks']}>{data.nickname}</h3>
                    <div className={styles['item']} style={{whiteSpace:"pre-wrap"}}>
                      
                      {data.mentees.length > 0 ? 
                      <>
                        <ul style={{listStyleType : "none", paddingLeft : "16px"}}>
                          {
                            <span>
                              {
                                data.mentees.map((m, index) => (
                                   <li key={index}>{m.studentId} </li>
                                ))
                              }
                            </span>
                          }
                        </ul>
                      </>
                      : <span > Chưa có mentee</span> }
                    </div>
                  </div>
              </div>
              <div className={styles['item']}>
                <span>{data.mentees.length > 0 ? data.mentees.length : 0 }/5</span>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div>No mentor</div>
      )}

      </div>
    )
}

export default Profiles;