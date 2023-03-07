import { ARRAY_EMAIL_PATTERN, EMAIL_PATTERN, ROL_ADMIN, ROL_EXTERNAL } from "./constants";

export const emailValidation = new RegExp(EMAIL_PATTERN);

export const arrayEmailRegex = new RegExp(ARRAY_EMAIL_PATTERN);

export const getRolName = (rol_id: number): string => rol_id === 1 ? ROL_ADMIN :ROL_EXTERNAL;