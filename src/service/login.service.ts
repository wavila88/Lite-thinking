import { LoginForm } from "@/utils/types";
import { makeRequest } from "./https";
import Router from 'next/router'

export const loginService =  async (loginInfo: LoginForm)=> {
  try {
   const user= await makeRequest({
      url: '/api/login',
      method: 'POST',
      body: loginInfo
    });
    Router.push('/enterprises');
  } catch (error:any) {
    // console.log(error.response);
  }
}
  

export const initDBService = async ()=> {
  makeRequest({
    url: '/api/init'
  })
}
