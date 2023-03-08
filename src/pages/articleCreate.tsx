import ContainerLayout from '@/components/layouts/container';
import { useState, useEffect } from 'react';
import { ArticleTypeForm, EnterpriseType, EnterpriseTypeForm } from '@/utils/types';
import Router from 'next/router'
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,

} from 'mdb-react-ui-kit';
import { createEnterprise } from '@/service/enterprise.service';
import config from './api/utils/config';
import { FEED_BACK_ADDRESS, FEED_BACK_ENTERPRISE, FEED_BACK_NAME_ARTICLE, FEED_BACK_NIT, FEED_BACK_NUMBER_PRODUCTS, FEED_BACK_PHONE_NUMBER, ROL_ADMIN, ROL_ITEM } from '@/utils/constants';
import ErrorLabel from '@/components/errolLabel';
import { articleNameRegex, productsNumberRegex } from '@/utils/utils';


const ArticleCreate = () => {
  

  useEffect(() => {
    const rol = localStorage.getItem(ROL_ITEM);
    rol !== ROL_ADMIN &&  Router.push('/enterprises');
  },[])

  const [article, setArticle] = useState<ArticleTypeForm>(
    {
      name: {element: '', isInvalid: true, feedBack:FEED_BACK_NAME_ARTICLE },
      numberProducts: {element:0, isInvalid: true, feedBack: FEED_BACK_NUMBER_PRODUCTS},
    }
    );
  
    const onChange = (e: any) => {
      debugger
      let isInvalid, feedBack;
      switch(e.target.name){
        case 'name':
          isInvalid = !articleNameRegex.test(e.target.value);
          feedBack = FEED_BACK_NAME_ARTICLE;
          break;
        case 'numberProducts':
          isInvalid= !productsNumberRegex.test(e.target.value);
          feedBack = FEED_BACK_NUMBER_PRODUCTS
        break;
      }
      setArticle({ ...article, [e.target.name]: {...[e.target.name], element: e.target.value, isInvalid, feedBack } });
    };





  return(
  <>
   <ContainerLayout>
  
    
          <MDBInput
            value={article.name.element}
            name='name'
            onChange={onChange}
            id='validationCustom01'
            label='Article name'
            required
          />

         {article.name.isInvalid && <ErrorLabel errorMessage={article.name.feedBack}/>}

        
          <MDBInput
            value={article.numberProducts.element}
            name='numberProducts'
            onChange={onChange}
            id='validationCustom02'
            required
            label='Number of products'
          />
           {article.numberProducts.isInvalid &&<ErrorLabel errorMessage={article.numberProducts.feedBack}/>}
         
        <div className='col-12'>
        <MDBBtn type='submit' onClick={ ()=> {} }>Save Article</MDBBtn>
        
      </div>
 

    </ContainerLayout> 
  </>
  )
};

export default ArticleCreate;