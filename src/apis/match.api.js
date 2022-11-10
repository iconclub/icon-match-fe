import instance from "./http-client";

export const sendChooseMentor = async (payload) => {
  const data = await instance.post("/match/choose-mentor", payload);
  return data;
};
