import {  useEffect, useRef, useState } from 'react';

import ContainerLayout from '@/components/layouts/container';
import { getEnterprises } from '@/service/enterprise.service';
import {  COLUMNS_ARTICLES } from '@/utils/enterprise.utils';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { toPng } from 'html-to-image';
const { saveAs } = require('file-saver');
import Image from 'next/image';
import deleteImg from '../../public/images/delete.png'
import articleImg from '../../public/images/shopping_cart2.png'

import Button from 'react-bootstrap/Button';
import Router from 'next/router'
import styles from '../styles/enterprise.module.css'
import { ROL_ADMIN, ROL_ITEM } from '@/utils/constants';
import EnterpriseModal from '@/components/enterpriseModal';
import { getArticles, removeArticle } from '@/service/article.service';
import { ArticlesType } from '@/utils/types';
import EnterpriseInfo from '@/components/enterpriseInfo';


const Articles = () => {

 const [articles, setArticles] = useState<Array<ArticlesType>>();
//  const ref = useRef<HTMLDivElement>(null);




  useEffect(() => {
    loadArticles();
  },[]);

  const loadArticles= () => {
    getArticles().then((response:any) => {
      setArticles(response);
    })
  }

  const removeArticleAndReload = async (id: number)=> {
    try{
      await removeArticle(id);
      loadArticles();
    } catch(err){

    }
  }

  return(
 
   <ContainerLayout >
    <EnterpriseInfo/>
    
   <MDBTable>
      <MDBTableHead>
        <tr>
          {COLUMNS_ARTICLES.map((colunm, index) => (
            <th scope='col' key={index}>{colunm}</th>
          ))}
        </tr>
      </MDBTableHead>
      <MDBTableBody>

        {articles && articles.map((article, index) => (
          <tr key={index}>
            <th scope='row'>{article.id}</th>
            <td>{article.name}</td>
            <td>{article.numberProducts}</td>
            <td> 
              <Button 
                type='submit'
                variant='light' 
                onClick={() => removeArticleAndReload(article.id)} 
                size='sm'> 
                  <Image alt='Delete register' width="20" height="20" src={deleteImg.src}></Image>
                  </Button>
                
           </td>
          </tr>
        ) )
        }
       
      </MDBTableBody>
    </MDBTable>
  { typeof window !== 'undefined' && localStorage.getItem(ROL_ITEM) === ROL_ADMIN &&

    <div className={styles.buttonsContainer}>
      <div className={styles.spaceBtn}>
        <Button variant="dark" onClick={()=> Router.push('/articleCreate')}>Create Article</Button>
        <Button onClick={() => Router.push('/enterprises') } style={{ marginLeft: 20}} variant='secondary'>Return to enterprises</Button>
      </div>
    </div>
  }
    </ContainerLayout> 
  )
};

export default Articles;