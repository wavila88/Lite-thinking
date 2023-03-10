import ContainerLayout from '@/components/layouts/container';
import { useState, useEffect } from 'react';
import { EnterpriseTypeForm, ValitationReturn } from '@/utils/types';
import Router from 'next/router'

import { createEnterprise } from '@/service/enterprise.service';
import { ENUM_ENTERPRISE_TYPES, FEED_BACK_ADDRESS, FEED_BACK_BETWEN_CARACTERS, FEED_BACK_BETWEN_CARACTERS_40, FEED_BACK_ENTERPRISE, FEED_BACK_NIT, FEED_BACK_PHONE_NUMBER, FORM_NOT_COMPLETE, ROL_ADMIN, ROL_ITEM } from '@/utils/constants';

import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { betwenCaracters40Regex, betwenCaractersRegex, nitRegex, phoneNumberRegex, validateAllFields } from '@/utils/utils';
import Banner from '@/components/banner';


const EnterpriseCreate = () => {


  useEffect(() => {
    const rol = localStorage.getItem(ROL_ITEM);
    rol !== ROL_ADMIN && Router.push('/enterprises');
  }, [])

  const [enterprise, setEnterprise] = useState<EnterpriseTypeForm>(
    {
      enterpriseName: { element: '', isInvalid: false, feedBack: FEED_BACK_ENTERPRISE },
      address: { element: '', isInvalid: false, feedBack: FEED_BACK_ADDRESS },
      NIT: { element: 0, isInvalid: false, feedBack: FEED_BACK_NIT },
      phoneNumber: { element: '', isInvalid: false, feedBack: FEED_BACK_PHONE_NUMBER }
    }
  );
  const [validForm, setValidForm] = useState<boolean>(true);

  const onChange = (e: any) => {
    const { isInvalid, feedBack } = makeValidations(e);
    setEnterprise({ ...enterprise, [e.target.name]: { ...[e.target.name], element: e.target.value, isInvalid, feedBack } });
  };

  const makeValidations = (e: any): ValitationReturn => {
    let isInvalid: boolean = false, feedBack: string = '';

    switch (e.target.name) {
      case ENUM_ENTERPRISE_TYPES.ENTERPRISE_NAME:
        isInvalid = !betwenCaractersRegex.test(e.target.value);
        feedBack = FEED_BACK_BETWEN_CARACTERS;
        break;
      case ENUM_ENTERPRISE_TYPES.ADDRESS:
        isInvalid = !betwenCaracters40Regex.test(e.target.value);
        feedBack = FEED_BACK_BETWEN_CARACTERS_40
        break;
      case ENUM_ENTERPRISE_TYPES.NIT:
        isInvalid = !nitRegex.test(e.target.value);
        feedBack = FEED_BACK_NIT
        break;
      case ENUM_ENTERPRISE_TYPES.PHONE_NUMBER:
        isInvalid = !phoneNumberRegex.test(e.target.value);
        feedBack = FEED_BACK_PHONE_NUMBER
        break;
    }
    return { isInvalid, feedBack };
  };

  const validateSendForm = () => {
   const isValid =validateAllFields(enterprise);
   if(isValid){
    setValidForm(true);
    createEnterprise(enterprise)
   }else{
    setValidForm(false);
   }

  }

  return (
    <>
      <ContainerLayout>
       {!validForm && <Banner variant='danger' message={FORM_NOT_COMPLETE} />}
        <Form>
          <Form.Group className="mb-3" controlId="article">
            <Form.Label>{'Enterprise Name'}</Form.Label>
            <Form.Control
              type="text"
              name='enterpriseName'
              isInvalid={enterprise.enterpriseName.isInvalid}
              onChange={onChange}
              value={enterprise.enterpriseName.element}
              placeholder="Type name" />
            <Form.Control.Feedback type='invalid'>
              {enterprise.enterpriseName.feedBack}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="article">
            <Form.Label>{'Address'}</Form.Label>
            <Form.Control
              type="text"
              name='address'
              isInvalid={enterprise.address.isInvalid}
              onChange={onChange}
              value={enterprise.address.element}
              placeholder="Type valid Colombian address" />
            <Form.Control.Feedback type='invalid'>
              {enterprise.address.feedBack}
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group className="row" >
            <Form.Group className="mb-3 col-6" controlId="article">
              <Form.Label>{'NIT'}</Form.Label>
              <Form.Control
                type="number"
                name='NIT'
                isInvalid={enterprise.NIT.isInvalid}
                onChange={onChange}
                value={enterprise.NIT.element}
                placeholder="Type NIT" />
              <Form.Control.Feedback type='invalid'>
                {enterprise.NIT.feedBack}
              </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3 col-6" controlId="article">
              <Form.Label>{'Phone number'}</Form.Label>
              <Form.Control
                type="text"
                name='phoneNumber'
                isInvalid={enterprise.phoneNumber.isInvalid}
                onChange={onChange}
                value={enterprise.phoneNumber.element}
                placeholder="Type valid cell phone number" />
              <Form.Control.Feedback type='invalid'>
                {enterprise.phoneNumber.feedBack}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Group>
         <Button onClick={() => validateSendForm()} variant='dark'>Save Enterprise</Button>
         <Button onClick={() => Router.push('/enterprises') } style={{ marginLeft: 20}} variant='danger'>Cancel</Button>
        </Form>



      </ContainerLayout>
    </>
  )
};

export default EnterpriseCreate;