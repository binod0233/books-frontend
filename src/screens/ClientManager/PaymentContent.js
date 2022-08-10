import React from 'react'

const PaymentContent = () => {
  return (
    <>
    <Form className="pt-5">
    <Row className="py-3">
      <Col>
        <DropdownButton
          size="lg"
          variant="outline-secondary"
          title="Team Lead"
          id="dropdown-basic"
          style={{ width: "fit-content" }}
        >
          <Dropdown.Item href="#">
            <MonetizationOnIcon />
            demo
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">
            <ArchiveIcon />
            demo
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">
            <EditIcon />
            demo
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">
            <DeleteIcon />
            demo
          </Dropdown.Item>
        </DropdownButton>
      </Col>
      <Col>
        <Form.Control
          size="sm"
          name="foo"
          placeholder="Client Name"
          type="name"
          style={{ height: "50px" }}
          className="ms-2"
        />
      </Col>
      <Col>
        <Form.Control
          size="sm"
          name="foo"
          placeholder="Service Plan"
          type="name"
          style={{ height: "50px" }}
          className="ms-2"
        />
      </Col>
      <Col>
        <Form.Control
          size="sm"
          name="foo"
          placeholder="Recepient"
          type="name"
          style={{ height: "50px" }}
          className="ms-2"
        />
      </Col>
      <Col>
        <Form.Control
          size="sm"
          name="foo"
          placeholder="Payment Method"
          type="name"
          style={{ height: "50px" }}
        />
      </Col>
      <Col>
        <Form.Control
          size="sm"
          name="foo"
          placeholder="Date"
          type="name"
          style={{ height: "50px" }}
        />
      </Col>
    </Row>
  </Form>

  <Row
  style={{ background: "#fff", height: "70px" }}
  className="d-flex align-items-center justify-content-center mb-3"
>
  <Col md={2} style={{ fontWeight: "700", fontSize: "18px" }}>
    Lead Name
  </Col>
  <Col md={1} style={{ fontWeight: "700", fontSize: "18px" }}>
    Amount
  </Col>

  <Col md={1} style={{ fontWeight: "700", fontSize: "18px" }}>
    Payment Date
  </Col>

  <Col md={2} style={{ fontWeight: "700", fontSize: "18px" }}>
    Service Type
  </Col>
  <Col md={1} style={{ fontWeight: "700", fontSize: "18px" }}>
    Recepient
  </Col>
  <Col md={1} style={{ fontWeight: "700", fontSize: "18px" }}>
    Payment
  </Col>

  <Col md={1} style={{ fontWeight: "700", fontSize: "18px" }}>
    Receipt
  </Col>

  <Col md={3} style={{ fontWeight: "700", fontSize: "18px" }}>
    Remark
  </Col>
</Row>

{paymentList?.map((payment) => (
    <Row
      key={payment.id}
      style={{ background: "#fff", height: "70px", color: "#64676B" }}
      className="d-flex align-items-center justify-content-center mb-3"
    >
      <Col md={2} style={{ fontWeight: "400", fontSize: "14px" }}>
        <Row>
          <Col
            md={3}
            className="d-flex justify-content-center align-items-center  "
          >
            <div
              style={{
                borderRadius: "50%",
                background: "#ED6F47",
                height: "45px",
                width: "45px",
                color: "#fff",
                fontWeight: "400",
              }}
              className="d-flex justify-content-center align-items-center "
            >
              {payment.payee.split(" ").map((n) => n[0])}
            </div>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            md={9}
            style={{ color: "", fontWeight: "700" }}
          >
            {payment.payee}
          </Col>
        </Row>
      </Col>
      <Col md={1} style={{ fontWeight: "400", fontSize: "14px" }}>
        {payment.amount}
      </Col>

      <Col md={1} style={{ fontWeight: "400", fontSize: "14px" }}>
        {payment.paymentDate}
      </Col>

      <Col md={2} style={{ fontWeight: "400", fontSize: "14px" }}>
        {payment.serviceType}
      </Col>
      <Col md={1} style={{ fontWeight: "400", fontSize: "14px" }}>
        {payment.recipient}
      </Col>
      <Col md={1} style={{ fontWeight: "400", fontSize: "14px" }}>
        {payment.status}
      </Col>

      <Col md={1} style={{ fontWeight: "400", fontSize: "14px" }}>
        {payment.receipt}
      </Col>

      <Col md={3} style={{ fontWeight: "400", fontSize: "14px" }}>
        {payment.remarks}
      </Col>
    </Row>
  ))}




  <div
  style={{
    background: "red",
    height: "70px",
    fontWeight: "700",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
  }}
  className=""
>
  <div className="leadInputs " style={{
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
  }}>
    <Form
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        className="input-group "
        style={{
          height: "45px",
          background: "white",
          border: "0.7px solid grey",
          width: "229px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center px-2">
          <i className="fa-solid fa-user-large"></i>
        </div>
        <input
          type="text"
          style={{ border: "none", width: "5px" }}
          placeholder="Lead Name"
          // value={clientName}
          // onChange={(e) => setClientName(e.target.value)}
          className="form-control"
        />
      </div>
      <div
        className="input-group"
        style={{
          height: "45px",
          background: "white",
          border: "0.7px solid grey",
          width: "195px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center px-2">
          <i className="fa-solid fa-user-large"></i>
        </div>
        <input
          type="text"
          style={{ border: "none", width: "5px" }}
          placeholder="Service Type"
          // value={clientName}
          // onChange={(e) => setClientName(e.target.value)}
          className="form-control"
        />
      </div>
      <div
        className="input-group"
        style={{
          height: "45px",
          background: "white",
          border: "0.7px solid grey",
          width: "165px",
        }}
      >
        <span className="d-flex justify-content-center align-items-center p-2">
          $
        </span>
        <input
          type="text"
          style={{ border: "none" }}
          placeholder="Amount"
          // value={source}
          // onChange={(e) => setSource(e.target.value)}
          className="form-control"
        />
      </div>
      <div
        className="input-group"
        style={{
          height: "45px",
          background: "white",
          border: "0.7px solid grey",
          width: "152px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center px-2">
          <i className="fa-solid fa-user-large"></i>
        </div>
        <input
          type="text"
          style={{ border: "none", width: "5px" }}
          placeholder="Recepient"
          // value={clientName}
          // onChange={(e) => setClientName(e.target.value)}
          className="form-control"
        />
      </div>
      <div
        className="input-group"
        style={{
          height: "45px",
          background: "white",
          border: "0.7px solid grey",
          width: "210px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center px-2">
          <i className="fa-solid fa-user-large"></i>
        </div>
        <input
          type="text"
          style={{ border: "none", width: "5px" }}
          placeholder="Payment Method "
          // value={clientName}
          // onChange={(e) => setClientName(e.target.value)}
          className="form-control"
        />
      </div>

      <div>
        <Form.Control
          size="sm"
          name="foo"
          placeholder="Date"
          type="date"
          // value={date}
          // onChange={(e) => setDate(e.target.value)}
          style={{
            textAlign: "center",
            height: "40px",
            border: "0.7px solid grey",
            width: "185px",
          }}
          className=""
        />
      </div>

      <div>
        <button
          style={{
            height: "45px",
            background: "#176EB3",
            width: "52px",
          }}
          type="reset"
          onClick={() => {
            navigate(`/leads/${clientManager}`);
          }}
          className=""
        >
          <FilterAltOutlinedIcon />
        </button>
      </div>
    </Form>
  </div>
</div>
  </>
  )
}

export default PaymentContent