import { FEED_BACK_EMAILS } from '@/utils/constants';
import { EmailsArray } from '@/utils/types';
import { arrayEmailRegex } from '../utils/utils';
import { MDBInput, MDBValidationItem, MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ErrorLabel from './errolLabel';
import { sendEmails } from '@/service/enterprise.service';

function EnterpriseModal() {
  const [show, setShow] = useState(false);
  const [emails,setEmails] = useState<EmailsArray>({
    emails: '',
    isvalid: false
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const callSendEmails = () => {
    sendEmails(emails.emails.split(','));
  };


  const setAndValidateValue = (value: string) => {
   
    const validEmail =arrayEmailRegex.test(value);
    setEmails({
      emails: value,
      isvalid: validEmail
    })
   
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Send Email
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please add Emails separated by ,</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     
          <MDBInput
              value={emails.emails}
              name='emails'
              onChange={(event) => setAndValidateValue(event.target.value)}
              id='validationCustom02'
              required
            />
          {!emails.isvalid && <ErrorLabel errorMessage={FEED_BACK_EMAILS} /> }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={callSendEmails}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EnterpriseModal;