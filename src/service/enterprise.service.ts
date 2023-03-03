import { EnterpriseType } from "@/utils/types"
import { makeRequest } from "./https"

export const createEnterprise = async (enterprise: EnterpriseType)=> {
 await makeRequest({
    method: 'POST',
    body: enterprise,
    url: '/api/enterprise'
  })
}