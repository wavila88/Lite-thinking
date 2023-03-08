import { ARRAY_EMAIL_PATTERN, EMAIL_PATTERN, NAME_ARTICLE_REGEX, NUMBER_PRODUCTS_REGEX, ROL_ADMIN, ROL_EXTERNAL } from "./constants";

export const emailValidation = new RegExp(EMAIL_PATTERN);

export const arrayEmailRegex = new RegExp(ARRAY_EMAIL_PATTERN);

export const articleNameRegex = new RegExp(NAME_ARTICLE_REGEX);

export const productsNumberRegex = new RegExp(NUMBER_PRODUCTS_REGEX);

export const getRolName = (rol_id: number): string => rol_id === 1 ? ROL_ADMIN :ROL_EXTERNAL;

export const getNit = () => typeof window !== 'undefined'&& Number(localStorage.getItem('NIT'))