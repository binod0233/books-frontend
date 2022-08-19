import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const AddPayment = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    remarks: "",
    payee: "",
    recipient: "",
    service: "",
    amount: null,
    date: null,
    receipt: null,
  });
  const { remarks, payee, recipient, service, amount, date, receipt } = values;

  const user = JSON.parse(localStorage.getItem("user"));

  const schema = Yup.object().shape({
    amount: Yup.number().required("Required"),
    remarks: Yup.string().required("Required"),
    recipient: Yup.string().required("Required"),
    payee: Yup.string().required("Required"),
    service: Yup.string().required("Required"),
    // receipt: Yup.required("Required"),
    date: Yup.date().required("Required"),
  });
  const onSubmit = (values, { resetForm }) => {
    resetForm();

    const { remarks, payee, recipient, service, amount, date, receipt } = values;
    console.log("receipt", receipt);
    console.log("values", values);
    const formData = new FormData();
    formData.append("receipt", receipt);
    console.log("formData", formData);

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/api/payment/registerPayment`,
        {
          paymentDate: date,
          userId: user.id,
          remarks,
          updatedBy: "John abraham",
          amount,
          payee,
          recipient,
          serviceType: service,
          receiptImage:"",
          modifiedBy: localStorage.getItem("user").name,
          createdBy: localStorage.getItem("user").name,
        },
        config
      )
      .then((res) => {
        if (res.status === 200) {
          if(user?.role==="admin"){
      navigate('/admin/allpayments')
    }
    else if(user?.role==="teamlead"){
      navigate(`/teamlead/payment/${user.name}`)
    }else if(user?.role==="clientmanager"){
      navigate(`/payments/${user?.name}`)
    
    } 
        } else {
          alert("Something went wrong");
        }
      });
  
  };

  return (
    <div className="d-flex" style={{ width: "100%", height:'90vh' }}>
      <div className=" py-4 d-flex flex-column" style={{ width: "100%" }}>
        <div style={{ background: "#F1F1FA" }}>
          <div className="ps-4 py-4 " style={{ fontFamily: "Arial" }}>
            <h6 style={{ fontWeight: "700", fontSize: "1.2rem" }}>Add New Payment</h6>
            <p style={{ color: "#7B7B7B", fontSize: "1rem" }}>
              Payment From Lead
            </p>
          </div>
          <div className="formContainer mx-5 my-1 bg-white p-3">
            <h6 style={{ fontWeight: "700" , fontSize:'1.5rem'}}>Add a Payment</h6>
            <Formik
              validationSchema={schema}
              onSubmit={onSubmit}
              initialValues={{
                ...values,
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mx-5 pt-4">
                    <Col className="pe-3">
                      <Row>
                        <Col>
                          <Form.Group controlId="leadamount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                              type="number"
                              name="amount"
                              value={values.amount}
                              onChange={handleChange}
                              isInvalid={touched.amount && !!errors.amount}
                              min="0"
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.amount}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>

                        <Col>
                          <Form.Group controlId="leadDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                              type="date"
                              name="date"
                              value={values.date}
                              onChange={handleChange}
                              isInvalid={touched.date && !!errors.date}
                            />
                          </Form.Group>
                          <Form.Control.Feedback type="invalid">
                            {errors.date}
                          </Form.Control.Feedback>
                        </Col>
                      </Row>
                    </Col>

                    <Col className="ps-3">
                      <Form.Group controlId="leadRemarks">
                        <Form.Label>Remarks</Form.Label>
                        <Form.Control
                          type="text"
                          name="remarks"
                          placeholder="First Payment"
                          value={values.remarks}
                          onChange={handleChange}
                          isInvalid={touched.remarks && !!errors.remarks}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.remarks}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mx-5 pt-4">
                    <Col>
                      <Form.Group controlId="Payment">
                        <Form.Label>Payee</Form.Label>
                        <Form.Control
                          type="text"
                          name="payee"
                          placeholder="Ramesh"
                          value={values.payee}
                          onChange={handleChange}
                          isInvalid={touched.payee && !!errors.payee}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.payee}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="Recipient">
                        <Form.Label>Recipient</Form.Label>
                        <Form.Control
                          type="text"
                          name="recipient"
                          placeholder="Sharmila Dangal"
                          value={values.recipient}
                          onChange={handleChange}
                          isInvalid={touched.recipient && !!errors.recipient}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.recipient}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mx-5 pt-4">
                    <Col className="pe-3">
                      <Form.Group controlId="serviceType">
                        <Form.Label>Service Type</Form.Label>
                        <Form.Control
                          type="text"
                          name="service"
                          placeholder="CDR Assessment"
                          value={values.service}
                          onChange={handleChange}
                          isInvalid={touched.service && !!errors.service}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.service}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col className="ps-3">
                      <Form.Group controlId="Receipt">
                        <Form.Label>Receipt</Form.Label>
                        <Form.Control
                          type="file"
                          name="receipt"
                          value={values.receipt}
                          onChange={(e) => {
                            setValues({
                              ...values,
                              receipt: e.target.files[0],
                            });
                          }}
                          // isInvalid={touched.receipt && !!errors.receipt}
                        />
                      </Form.Group>
                      {/* <Form.Control.Feedback type="invalid" tooltip>
                        {errors.receipt}
                      </Form.Control.Feedback> */}
                    </Col>
                  </Row>
                
            <Row className='mt-4'>
            <Col
            className="d-flex justify-content-center align-items-center"
            style={{ width: "100%" }}
          >
          <Button
          type="submit"
          disabled={!isValid}
          className="btn btn-primary me-5 "
        >
          Add Payment
        </Button>
        <Button onClick={() => {

if(user?.role==="admin"){
navigate('/admin/allpayments')
}
else if(user?.role==="teamlead"){
navigate(`/teamlead/payment/${user.name}`)
}else if(user?.role==="clientmanager"){
navigate(`/payments/${user?.name}`)

} 
  }
  }>Cancel</Button>
          </Col>
            </Row>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPayment;
