import ContainerLayout from '@/components/layouts/container';
import { getEnterprises } from '@/service/enterprise.service';
import { COLUMNS } from '@/utils/enterprise.utils';
import { EnterpriseType } from '@/utils/types';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Router from 'next/router'
import styles from '../styles/enterprise.module.css'

const Enterprises = () => {

 const [enterprises, setEnterprises] = useState<Array<EnterpriseType>>();

  useEffect(() => {
    // setEnterprises( getEnterprises());
    getEnterprises().then(response => {
 
      setEnterprises(response);
    })

  },[]);


  return(
  <>
   <ContainerLayout>
 
   <MDBTable>
      <MDBTableHead>
        <tr>
          {COLUMNS.map(colunm => (
            <th scope='col'>{colunm}</th>
          ))}
        </tr>
      </MDBTableHead>
      <MDBTableBody>

        {enterprises && enterprises.map(enterprise => (
          <tr>
            <th scope='row'>{enterprise.NIT}</th>
            <td>{enterprise.enterpriseName}</td>
            <td>{enterprise.address}</td>
            <td>{enterprise.phoneNumber}</td>
          </tr>
        ) )
        }
       
      </MDBTableBody>
    </MDBTable>

    <div className={styles.buttonsContainer}>
        <div className={styles.spaceBtn}>
          <Button variant="dark" onClick={()=> Router.push('/enterpriseCreate')}>Create Enterprise</Button>
        </div>
        <div className={styles.spaceBtn}>
          <Button variant="dark">Print Report</Button>
        </div>
        <div className={styles.spaceBtn}>
          <Button variant="dark">Send Report</Button>
        </div>
      </div>
    </ContainerLayout> 
  </>
  )
};

export default Enterprises;