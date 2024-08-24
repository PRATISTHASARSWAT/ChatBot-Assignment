import axios from "axios";

const URL = "http://localhost:5000/get-ans";
export async function getAns(query) {
  const result = await axios.post(URL, { query: query });

  return result;
}
