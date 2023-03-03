import Enterprises from "../models/Enterprises/EnterprisesModel";
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
  console.log('TODO BIEN');
  
}; 