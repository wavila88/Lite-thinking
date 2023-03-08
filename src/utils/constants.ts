export const EMAIL_PATTERN = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
export const ARRAY_EMAIL_PATTERN = '^[\\W]*([\\w+\\-.%]+@[\\w\\-.]+\\.[A-Za-z]{2,4}[\\W]*,{1}[\\W]*)*([\\w+\\-.%]+@[\\w\\-.]+\\.[A-Za-z]{2,4})[\\W]*$';
export const EMAIL_ERROR_MESSAGE = 'Email format not valid.'
export const FEED_BACK_NIT = 'Should be eight numbers';
export const FEED_BACK_ADDRESS = 'Should be Colombian address like Calle 103 # 42B BIS - 45';
export const FEED_BACK_ENTERPRISE = 'At least 3 caracters';
export const FEED_BACK_PHONE_NUMBER = 'Is a Colombian cell phone number 3128945672';
export const FEED_BACK_EMAILS = 'Should give following format: email1@gmail.com, email2@hotmail.com'
export const FEED_BACK_NAME_ARTICLE ='should be betwen 3 and 30 caracters';
export const FEED_BACK_NUMBER_PRODUCTS ='should be betwen 0 and 100 products';

export const NAME_ARTICLE_REGEX ='(.*[a-z,A-Z]){3,30}$'
export const NUMBER_PRODUCTS_REGEX ='\b([0-9]|[1-9][0-9]|100)\b'
export const ROL_ADMIN ='Admin'
export const ROL_EXTERNAL ='External'
export const ROL_ITEM = 'ROL'
