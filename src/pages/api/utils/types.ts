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

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';

export type RequestParams = {
  method?: HttpMethod;
  headers?: any;
  body?: any;
  url: string;
};

export type ArticleCreateType = {
  name: string,
  numberProducts: number,
  enterpriseNIT:number
}