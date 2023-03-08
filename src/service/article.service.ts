import { getNit } from "@/utils/utils";
import { makeRequest } from "./https";



export const getArticles = async () => {
  return await makeRequest({
    url: "/api/getArticles",
    method: 'POST',
    body:{
      NIT: getNit()
    }
  });
};