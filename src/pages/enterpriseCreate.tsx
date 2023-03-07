import ContainerLayout from '@/components/layouts/container';
import { useState, useEffect } from 'react';
import { EnterpriseType, EnterpriseTypeForm } from '@/utils/types';
import Router from 'next/router'
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,

} from 'mdb-react-ui-kit';
import { createEnterprise } from '@/service/enterprise.service';
import config from './api/utils/config';
import { FEED_BACK_ADDRESS, FEED_BACK_ENTERPRISE, FEED_BACK_NIT, FEED_BACK_PHONE_NUMBER, ROL_ADMIN, ROL_ITEM } from '@/utils/constants';


const EnterpriseCreate = () => {
  

  useEffect(() => {
    const rol = localStorage.getItem(ROL_ITEM);
    rol !== ROL_ADMIN &&  Router.push('/enterprises');
  },[])

  const [enterprise, setEnterprise] = useState<EnterpriseTypeForm>(
    {
      NIT: {element: 0, isInvalid: true, feedBack:FEED_BACK_NIT},
      address: {element:'', isInvalid: true, feedBack: FEED_BACK_ADDRESS},
      enterpriseName: {element:'', isInvalid: true, feedBack: FEED_BACK_ENTERPRISE},
      phoneNumber: {element:'', isInvalid: true, feedBack: FEED_BACK_PHONE_NUMBER}
    }
    );
  
    const onChange = (e: any) => {
      setEnterprise({ ...enterprise, [e.target.name]: {...[e.target.name], element: e.target.value } });
    };





  return(
  <>
   <ContainerLayout>
      <MDBValidation className='row g-3' isValidated>
        <MDBValidationItem className='col-md-12' invalid={enterprise.enterpriseName.isInvalid} feedback={enterprise.enterpriseName.feedBack}>
          <MDBInput
            value={enterprise.enterpriseName.element}
            name='enterpriseName'
            onChange={onChange}
            id='validationCustom01'
            label='Enterprise Name'
            required
          />
        </MDBValidationItem>
        <MDBValidationItem className='col-md-12' invalid={enterprise.address.isInvalid} feedback={enterprise.address.feedBack}>
          <MDBInput
            value={enterprise.address.element}
            name='address'
            onChange={onChange}
            id='validationCustom02'
            required
            label='Address'
          />
          </MDBValidationItem>
        <MDBValidationItem className='col-md-6' invalid={enterprise.NIT.isInvalid} feedback={enterprise.NIT.feedBack}>
          <MDBInput
            value={enterprise.NIT.element}
            name='NIT'
            onChange={onChange}
            id='validationCustom03'
            required
            type='number'
            label='NIT'
          />
        </MDBValidationItem>
        <MDBValidationItem className='col-md-6' invalid={enterprise.phoneNumber.isInvalid} feedback={enterprise.phoneNumber.feedBack}>
          <MDBInput
            value={enterprise.phoneNumber.element}
            name='phoneNumber'
            onChange={onChange}
            id='phoneNumber'
            required
            label='Phone Number'
          />
        </MDBValidationItem>
        <div className='col-12'>
        <MDBBtn type='submit' onClick={ ()=> createEnterprise(enterprise) }>Save Enterprise</MDBBtn>
        
      </div>
      </MDBValidation>

    </ContainerLayout> 
  </>
  )
};

export default EnterpriseCreate;