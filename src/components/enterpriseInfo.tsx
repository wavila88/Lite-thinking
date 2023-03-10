import { getEnterpriseIfo } from "@/utils/utils"
import { memo } from 'react';
import styles from '../styles/enterprise.module.css';

const EnterpriseInfo = () => {
  const enterprise = getEnterpriseIfo();
  return (
    <div className={styles.InfoContainer}>
        <div className="row">
          <div className="col-sm-2">
            <p className="mb-0 bold">Enterprise Name:</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">{enterprise.enterpriseName}</p>
          </div>
        </div>
      <div className="row">
        <div className="col-sm-2">
          <p className="mb-0 bold">NIT:</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0">{enterprise.NIT}</p>
        </div>
      </div>
  
  
          <div className="row">
            <div className="col-sm-2">
              <p className="mb-0 bold">Address:</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{enterprise.address}</p>
            </div>
          </div>
   
            <div className="row">
              <div className="col-sm-2">
                <p className="mb-0 bold">Phone Number:</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{enterprise.phoneNumber}</p>
              </div>
            </div>

          </div>
          )
}

          export default memo(EnterpriseInfo);