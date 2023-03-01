import { LoginForm } from "@/utils/types";
import { makeRequest } from "./https";


export const loginService =  async (loginInfo: LoginForm)=> 
  makeRequest({
    url: '/api/login',
    method: 'POST',
    body: loginInfo
  })
