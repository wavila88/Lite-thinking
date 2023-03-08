import { useCallback, useEffect, useRef, useState } from 'react';

import ContainerLayout from '@/components/layouts/container';
import { getEnterprises, removeEnterprise, sendEmails } from '@/service/enterprise.service';
import { COLUMNS } from '@/utils/enterprise.utils';
import { EnterpriseType } from '@/utils/types';
import { MDBTable, MDBTableHead, MDBTableBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
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


const Enterprises = () => {

 const [enterprises, setEnterprises] = useState<Array<EnterpriseType>>();
 const ref = useRef<HTMLDivElement>(null);

 const handleScreenshot = useCallback(() => {
  if (ref.current === null) {
    return
  }

  toPng(ref.current, { cacheBust: true, })
    .then((dataUrl) => {
      const link = document.createElement('a');
      //image
      link.download = 'report.png'
      link.href = dataUrl
      link.click()
    })
    .catch((err) => {
      console.log(err)
    })
}, [ref])


  useEffect(() => {
    getEnterprises().then(response => {
 
      setEnterprises(response);
    })

  },[]);

  const removeEnterpriseAndReload = (NIT: number) =>{
    removeEnterprise(NIT); 
    window.location.reload()
  }

  const loadArticles = (NIT: number) => {
    localStorage.setItem('NIT', NIT.toString());
    Router.push("/articles");
  }


  return(
  <div ref={ref}>
   <ContainerLayout >
    
   <MDBTable>
      <MDBTableHead>
        <tr>
          {COLUMNS.map((colunm, index) => (
            <th scope='col' key={index}>{colunm}</th>
          ))}
        </tr>
      </MDBTableHead>
      <MDBTableBody>

        {enterprises && enterprises.map((enterprise, index) => (
          <tr key={index}>
            <th scope='row'>{enterprise.NIT}</th>
            <td>{enterprise.enterpriseName}</td>
            <td>{enterprise.address}</td>
            <td>{enterprise.phoneNumber}</td>
            <td>
              <Button color='black' variant='light' onClick={() => loadArticles(enterprise.NIT)} >
              <Image alt='Delete register' width="20" height="20" src={articleImg.src}></Image>
                </Button></td>
            <td> 
              <Button 
                type='submit'
                variant='light' 
                onClick={() =>  removeEnterpriseAndReload(enterprise.NIT)} 
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
        <Button variant="dark" onClick={()=> Router.push('/enterpriseCreate')}>Create Enterprise</Button>
      </div>
      <div className={styles.spaceBtn}>
        <Button variant="dark" onClick={handleScreenshot}>Download Report</Button>
      </div>
      <div className={styles.spaceBtn}>
        <EnterpriseModal/>
      </div>
    </div>
  }
   
    </ContainerLayout> 
  </div>
  )
};

export default Enterprises;