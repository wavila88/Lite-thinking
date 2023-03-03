import Enterprises from "../models/Enterprises/EnterprisesModel";
import { EnterpriseType } from "../utils/types";

export const createEnterprise = async (enterprise: EnterpriseType) => {
 await Enterprises.create({
    NIT: enterprise.NIT,
    enterpriseName: enterprise.enterpriseName,
    address: enterprise.address,
    phoneNumber: enterprise.phoneNumber
  })
} 