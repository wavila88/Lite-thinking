import { ARRAY_EMAIL_PATTERN, BETWEN_3_30_CARACTERS, BETWEN_5_40_CARACTERS, EMAIL_PATTERN, NAME_ARTICLE_REGEX, NIT_REGEX, NUMBER_PRODUCTS_REGEX, PHONE_NUMBER_REGEX, ROL_ADMIN, ROL_EXTERNAL, ROL_ITEM } from "./constants";

export const emailValidation = new RegExp(EMAIL_PATTERN);

export const arrayEmailRegex = new RegExp(ARRAY_EMAIL_PATTERN);

export const betwenCaractersRegex = new RegExp(BETWEN_3_30_CARACTERS);
export const betwenCaracters40Regex = new RegExp(BETWEN_5_40_CARACTERS);

//Articles form
export const articleNameRegex = new RegExp(NAME_ARTICLE_REGEX);

export const productsNumberRegex = new RegExp(NUMBER_PRODUCTS_REGEX);
//Enterprises form
export const nitRegex = new RegExp(NIT_REGEX);
export const phoneNumberRegex = new RegExp(PHONE_NUMBER_REGEX); 


export const getRolName = (rol_id: number): string => rol_id === 1 ? ROL_ADMIN :ROL_EXTERNAL;

export const getRol = () =>typeof window !== 'undefined' && localStorage.getItem(ROL_ITEM)

export const getNit = () => typeof window !== 'undefined'&& Number(localStorage.getItem('NIT'));

export const getEnterpriseIfo = () => typeof window !== 'undefined'&& JSON.parse(localStorage.getItem('ENTERPRISE') || '' );

export const validateAllFields = (object: any) =>{
  for (const property in object) {
    //if all fields is filled up and is valid return true;
    if((object[property].element.toString().length === 0) || object[property].isInvalid){
      return false;
    }   
  }
  //if all fields are filled and are not invalid return true
  return true;
}
