import instance from "./http-client";

export const getMentors = async () => {
  const data = await instance.get("/mentors");
  if (!data) {
    console.log("Cannot get list of mentors from server");
    throw new Error("Cannot get list of mentors from server");
  }
  return data;
};
