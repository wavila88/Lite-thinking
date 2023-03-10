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

export type EnterpriseTypeForm = {
  NIT: RegexValidation<number>,  
  enterpriseName: RegexValidation<string>,
  address: RegexValidation<string>,
  phoneNumber: RegexValidation<string>

};
export type ArticleTypeForm = {
  name: RegexValidation<string>,
  numberProducts: RegexValidation<number>,
};

export type ArticlesType = {
  id: number,
  name: string,
  numberProducts: number,
}

/**
 * Using Generics for validation
 */
export type RegexValidation<T> = {
  element: T
  isInvalid: boolean,
  feedBack: string
};


export type EmailsArray = {
  emails: string,
  isvalid: boolean
}

export type ValitationReturn = {
  isInvalid:boolean,
  feedBack: string
}

export type VariantType = 'primary'|
'secondary'|
'success'|
'danger'|
'warning'|
'info'|
'light'|
'dark';

export type BannerRenderType = {
  message: string,
  variant: VariantType
  show: boolean
}