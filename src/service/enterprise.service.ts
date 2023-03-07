import { EnterpriseType, EnterpriseTypeForm } from "@/utils/types";
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
 * Back end will get verified emails and all enterprises to send emails
 */
export const sendEmails = async (emails: Array<string>) => {
  debugger
  await makeRequest({
    method: "POST",
    url: "/api/emailEnterprise",
    body: emails
  });
};
