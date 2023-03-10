import { VariantType } from '@/utils/types';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

type BannerProps = {
  variant: VariantType
  message: string,
}

function Banner(props:BannerProps) {

  return (
    <>
     <Alert key={props.variant} variant={props.variant} >
     {props.message} 
    </Alert>     
    </>
  );
}

export default Banner;