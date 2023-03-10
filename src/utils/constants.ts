export const EMAIL_PATTERN = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
export const ARRAY_EMAIL_PATTERN = '^[\\W]*([\\w+\\-.%]+@[\\w\\-.]+\\.[A-Za-z]{2,4}[\\W]*,{1}[\\W]*)*([\\w+\\-.%]+@[\\w\\-.]+\\.[A-Za-z]{2,4})[\\W]*$';
export const EMAIL_ERROR_MESSAGE = 'Email format not valid.'
export const FEED_BACK_ADDRESS = 'Should be Colombian address like Calle 103 # 42B BIS - 45';
export const FEED_BACK_ENTERPRISE = 'At least 3 caracters';
export const FEED_BACK_PHONE_NUMBER = 'Is a Colombian cell phone number 3128945672';
export const FEED_BACK_EMAILS = 'Should give following format: email1@gmail.com, email2@hotmail.com'
export const FEED_BACK_NAME_ARTICLE ='should be betwen 3 and 30 caracters';
export const FEED_BACK_NUMBER_PRODUCTS ='should be betwen 0 and 100 products';
export const FEED_BACK_BETWEN_CARACTERS ='should be betwen 3 and 30 caracters';
export const FEED_BACK_BETWEN_CARACTERS_40 ='should be betwen 5 and 40 caracters';
//enterprise feedback
export const FEED_BACK_NIT = 'Should be eight numbers';
export const FEED_BACK_PHONE ='Should be Colombian valid number';


export const BETWEN_3_30_CARACTERS = '^[0-9A-Za-z!@\.;: ?-]{3,30}$'
export const BETWEN_5_40_CARACTERS = '^[0-9A-Za-z!@\.;: ?-]{5,40}$'
//Article form regex
export const NAME_ARTICLE_REGEX = BETWEN_3_30_CARACTERS
export const NUMBER_PRODUCTS_REGEX ='\\b([0-9]|[1-9][0-9]|100)\\b'
//Enterprise Regex
export const NIT_REGEX = '^[0-9]{8}$'
export const PHONE_NUMBER_REGEX = '(3)[0-9]{9,9}$';


export const ROL_ADMIN ='Admin'
export const ROL_EXTERNAL ='External'
export const ROL_ITEM = 'ROL'


export enum ENUM_ENTERPRISE_TYPES {
  ENTERPRISE_NAME= 'enterpriseName',
  ADDRESS= 'address',
  NIT= 'NIT',
  PHONE_NUMBER = 'phoneNumber'
}

export const FORM_NOT_COMPLETE = 'This form does not meet the requirements to be sent'
