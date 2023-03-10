import { RequestParams } from "@/utils/types";

/**
 * Reusable request.
 * @returns 
 */
export const makeRequest = async ({
  method = 'GET',
  url,
  headers = {
    'Content-Type': 'application/json',
  },
  body = {},
}: RequestParams) => {
  const response = await fetch(url, {
    method,
    headers,
    body: method === 'POST' ? JSON.stringify(body) : null,
  });
  const json = await response.json();
  console.log(json);
  if (!response.ok) {
    const errorMessage =
    json.response ||
    'Something went wrong,';
  throw new Error(errorMessage);
  }

  return json;
};


