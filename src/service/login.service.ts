import { LoginForm } from "@/utils/types";
import { makeRequest } from "./https";

export const loginService =  async (loginInfo: LoginForm)=> 
  await makeRequest({
      url: '/api/login',
      method: 'POST',
      body: loginInfo
    });
  

export const initDBService = async ()=> {
  makeRequest({
    url: '/api/init'
  })
}
