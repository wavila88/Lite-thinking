import { EnterpriseType } from "@/utils/types"
import Router from 'next/router'
import { makeRequest } from "./https"

export const getEnterprises = async ()=> {
  return await makeRequest({
     url: '/api/getEnterprises'
   })
 }

export const createEnterprise = async (enterprise: EnterpriseType)=> {
 await makeRequest({
    method: 'POST',
    body: enterprise,
    url: '/api/enterprise'
  });
  Router.push('/enterprises');
}