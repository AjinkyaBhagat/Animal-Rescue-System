import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap';
import "./AdminPage.css";

function AdminPage() {

    let data = JSON.parse(window.localStorage.getItem('data'));

    return (
        <div>
            <div className='she-reg-cont'>

                <h1>Admin Dashboard 👤</h1>
                <div className='form-cont'>
                    <Row className="mb-3">
                        <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridUserName">
                            <Form.Label className='frm-lbl'  >Admin Name </Form.Label><br />
                            <Form.Label className='frm-lbl1'  > {data.a_name} </Form.Label>
                        </Form.Group>

                        <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridPhno">
                            <Form.Label className='frm-lbl'>Phone Number</Form.Label><br />
                            <Form.Label className='frm-lbl1'>{data.a_phno}</Form.Label>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className='frm-grp-fild' as={Col} md="6" controlId="formGridEmail">
                            <Form.Label className='frm-lbl' >Email</Form.Label><br />
                            <Form.Label className='frm-lbl1' >{data.a_email}</Form.Label>

                        </Form.Group>

                        <Form.Group className="mb-3 frm-grp-fild" as={Col} md="6" controlId="formGridAddress1">
                            <Form.Label className='frm-lbl'>Address</Form.Label><br />
                            <Form.Label className='frm-lbl1'>{data.a_addr}</Form.Label>

                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className='frm-grp-fild' as={Col} controlId="formGridCity">
                            <Form.Label className='frm-lbl'>City</Form.Label><br />
                            <Form.Label className='frm-lbl1'>{data.a_city}</Form.Label>
                        </Form.Group>

                        <Form.Group className='frm-grp-fild' as={Col} controlId="formGridState">
                            <Form.Label className='frm-lbl'>State</Form.Label><br />
                            <Form.Label className='frm-lbl1'>{data.a_state}</Form.Label>
                        </Form.Group>

                        <Form.Group className='frm-grp-fild' as={Col} controlId="formGridZip">
                            <Form.Label className='frm-lbl'>Zip Code</Form.Label><br />
                            <Form.Label className='frm-lbl1'>{data.a_zip}</Form.Label>
                        </Form.Group>
                    </Row>


                    <Button className='reg-sub-btn' variant="primary" type="submit">
                        Update
                    </Button>




                </div>
            </div>
        </div>
    )
}

export default AdminPage;