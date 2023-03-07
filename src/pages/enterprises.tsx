import { useCallback, useEffect, useRef, useState } from 'react';

import ContainerLayout from '@/components/layouts/container';
import { getEnterprises, sendEmails } from '@/service/enterprise.service';
import { COLUMNS } from '@/utils/enterprise.utils';
import { EnterpriseType } from '@/utils/types';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { toPng } from 'html-to-image';
const { saveAs } = require('file-saver');

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