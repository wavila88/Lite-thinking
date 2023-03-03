export type LoginForm = {
  email: string,
  password: string,
}

export type RolType ={
  name: string
}

export type UserType ={
  email: string,
  password: string,
  rol_id: number
}

export type UserToReturn ={
  email: string,
  rol:number
}

export type ResponseString ={
  response: string
}

export type EnterpriseType = {
  NIT: number,  
  enterpriseName: string,
  address: string,
  phoneNumber: string

}