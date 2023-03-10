import { BannerRenderType } from "./types";

export const  COLUMNS = [
 'NIT',
 'Name',
 'Address',
 'Phone Number',
 'Articles'
];

export const COLUMNS_ARTICLES =[
  'Article id',
  'Article name',
  'Number on Inventary'
]

export const enterpriseInitialBanner:BannerRenderType =
{
  message: '',
  variant: 'danger',
  show: false
}