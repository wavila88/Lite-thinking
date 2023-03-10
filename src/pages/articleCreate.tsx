import ContainerLayout from '@/components/layouts/container';
import { useState, useEffect } from 'react';
import { ArticleTypeForm, EnterpriseType, EnterpriseTypeForm } from '@/utils/types';
import Router from 'next/router'

import {createArticle} from '../service/article.service';
import {  FEED_BACK_NAME_ARTICLE, FEED_BACK_NUMBER_PRODUCTS, FORM_NOT_COMPLETE, ROL_ADMIN, ROL_ITEM } from '@/utils/constants';
import { articleNameRegex, getNit, productsNumberRegex, validateAllFields } from '@/utils/utils';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import styles from '../styles/enterprise.module.css';
import Banner from '@/components/banner';
import EnterpriseInfo from '@/components/enterpriseInfo';


const ArticleCreate = () => {
  

  useEffect(() => {
    const rol = localStorage.getItem(ROL_ITEM);
    rol !== ROL_ADMIN &&  Router.push('/enterprises');
  },[])

  const [article, setArticle] = useState<ArticleTypeForm>(
    {
      name: {element: '', isInvalid: false, feedBack:FEED_BACK_NAME_ARTICLE },
      numberProducts: {element:0, isInvalid: false, feedBack: FEED_BACK_NUMBER_PRODUCTS},
    }
    );
  const [validForm, setValidForm] = useState<boolean>(true);
  
    const onChange = (e: any) => {
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


    const validateSendForm = () => {
      const isValid =validateAllFields(article);
      if(isValid){
       setValidForm(true);
       createArticle(article,getNit());
      }else{
       setValidForm(false);
      }
     }


  return(
  <>
   <ContainerLayout>
   <EnterpriseInfo/>
   <Form>
   {!validForm && <Banner variant='danger' message={FORM_NOT_COMPLETE} />}
      <Form.Group className="mb-3"  controlId="article">
        <Form.Label>{'Article Name'}</Form.Label>
        <Form.Control 
          type="text"
          name='name'
          isInvalid={article.name.isInvalid}
          onChange={onChange}
          value={article.name.element}
          placeholder="Name of article" />
        <Form.Control.Feedback type='invalid'>
          {article.name.feedBack}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-1 col-5"  controlId="numberProducts">
        <Form.Label>{'Number of products'}</Form.Label>
        <Form.Control 
          type="number"
          name='numberProducts'
          isInvalid={article.numberProducts.isInvalid}
          onChange={onChange}
          value={article.numberProducts.element}
          placeholder="" />
        <Form.Control.Feedback type='invalid'>
          {article.numberProducts.feedBack}
        </Form.Control.Feedback>
      </Form.Group>
      <div className={styles.spaceTop}>
        <Button onClick={() => validateSendForm()} variant='dark'>Save Article</Button>
        <Button onClick={() => Router.push('/enterprises') } style={{ marginLeft: 20}} variant='danger'>Cancel</Button>
      </div>
      
    </Form>   
    </ContainerLayout> 
  </>
  )
};

export default ArticleCreate;