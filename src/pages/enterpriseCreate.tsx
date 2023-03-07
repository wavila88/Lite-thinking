import ContainerLayout from '@/components/layouts/container';
import { useState } from 'react';
import { EnterpriseType } from '@/utils/types';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,

} from 'mdb-react-ui-kit';
import { createEnterprise } from '@/service/enterprise.service';
import config from './api/utils/config';


const EnterpriseCreate = () => {

  console.log(config.sqlConection.user);
  console.log(config.sqlConection.password);
  console.log(config.sqlConection.server);
  console.log(config.sqlConection.database);

  const [enterprise, setEnterprise] = useState<EnterpriseType>(
    {
      NIT: 0,
      address: '',
      enterpriseName: '',
      phoneNumber: ''
    }
    )


  
    const onChange = (e: any) => {
      setEnterprise({ ...enterprise, [e.target.name]: e.target.value });
    };


  return(
  <>
   <ContainerLayout>
      <MDBValidation className='row g-3'>
        <MDBValidationItem className='col-md-12'>
          <MDBInput
            value={enterprise.enterpriseName}
            name='enterpriseName'
            onChange={onChange}
            id='validationCustom01'
            required
            label='Enterprise Name'
          />
        </MDBValidationItem>
        <MDBValidationItem className='col-md-12' >
          <MDBInput
            value={enterprise.address}
            name='address'
            onChange={onChange}
            id='validationCustom02'
            required
            label='Address'
          />
          </MDBValidationItem>
        <MDBValidationItem className='col-md-6' invalid={false}>
          <MDBInput
            value={enterprise.NIT}
            name='NIT'
            onChange={onChange}
            id='validationCustom03'
            required
            type='number'
            label='NIT'
          />
        </MDBValidationItem>
        <MDBValidationItem className='col-md-6' invalid={false}>
          <MDBInput
            value={enterprise.phoneNumber}
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