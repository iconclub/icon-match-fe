import instance from "./http-client";

export const getMentors = async () => {
  const data = await instance.get("/mentors");
  if (!data) {
    throw new Error("Cannot get list of mentors from server");
  }
  return data;
};
