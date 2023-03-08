import { EnterpriseType, EnterpriseTypeForm } from "@/utils/types";
import { url } from "inspector";
import Router from "next/router";
import { makeRequest } from "./https";

export const getEnterprises = async () => {
  return await makeRequest({
    url: "/api/getEnterprises",
  });
};

export const createEnterprise = async (enterprise: EnterpriseTypeForm) => {

  await makeRequest({
    method: "POST",
    body: {
      NIT: enterprise.NIT.element,
      enterpriseName: enterprise.enterpriseName.element,
      address: enterprise.address.element,
      phoneNumber: enterprise.phoneNumber.element,
    },
    url: "/api/enterprise",
  });
  Router.push("/enterprises");
};
/**
 * 
 * Normaly in http request we use delete api routes can be accesed with get, so is not a fiable example of http request
 */
export const removeEnterprise = async (NIT: number) => {
  await makeRequest({
    method:'POST',
    body:{
      NIT
    },
    url:'/api/deleteEnterprise'
  })
}

/**
 * Back end will get verified emails and all enterprises to send emails
 */
export const sendEmails = async (emails: Array<string>) => {
  await makeRequest({
    method: "POST",
    url: "/api/emailEnterprise",
    body: emails
  });
};
