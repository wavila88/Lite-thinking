import { makeRequest } from "../utils/https";
import Enterprises from "../models/Enterprises/EnterprisesModel";
import { API_EMAIL_SERVICE, ARRAY_VERIFIED_EMAILS } from "../utils/constants";
import { EnterpriseType } from "../utils/types";

export const getEnterprises = async () =>  await Enterprises.findAll({attributes: ['NIT', 'enterpriseName','address','phoneNumber']});
 


export const createEnterprise = async (enterprise: EnterpriseType) => {
  console.log(`ENTERPRISE DATA => ${JSON.stringify(enterprise)}`);
  
 return await Enterprises.create({
    NIT: enterprise.NIT,
    enterpriseName: enterprise.enterpriseName,
    address: enterprise.address,
    phoneNumber: enterprise.phoneNumber
  });
  
}; 


export const sendEmailWithEnterprises = async() => {
 const enterprises = await getEnterprises();
 let message= '';

 enterprises.forEach((enterprise: any) => {
    message += `NIT: ${enterprise.NIT}, Enterprise: ${enterprise.enterpriseName}, address: ${enterprise.address}, Phone number: ${enterprise.phoneNumber} \n`
 });

 const body = {
  emails : ARRAY_VERIFIED_EMAILS,
  message: message
 }

await makeRequest({
  url: API_EMAIL_SERVICE,
  method: 'POST',
  body
 })
}


