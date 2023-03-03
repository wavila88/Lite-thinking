export type ErrorMessage = string | null;

export type LoginErrorMessages = {
  emailMessage: ErrorMessage,
  isReadyToSubmit: boolean
};

export type LoginForm = {
  email: string,
  password: string,
}

type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT';
//Used for Api request params
export type RequestParams = {
  method?: HttpMethod;
  headers?: any;
  body?: any;
  url: string;
};

export type EnterpriseType = {
  NIT: number,  
  enterpriseName: string,
  address: string,
  phoneNumber: string

}