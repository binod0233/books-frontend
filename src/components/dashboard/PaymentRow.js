import React from "react";
import { Button, Col, Row, Stack, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const localUser = localStorage.getItem('user')
const user = JSON.parse(localUser)
console.log(user)

const PaymentRow = ({ name, totalDealValue, totalEarned, totalDuePayment }) => {

  const navigate = useNavigate();


  return (
    <div className="ps-4 pb-4">
      <Row>
        <Col md={3}>
          <div style={{ background: "white", height: "45vh", width: "100%" }}>
            <div className="d-flex flex-column align-items-center pb-3 ">
              <div
                style={{
                  height: "6vh",
                  width: "6vh",
                  marginTop: "2vh",
                  borderRadius: "50%",
                  background: "#F7E8FB",
                }}
                className="d-flex justify-content-center align-items-center"
              >
                <svg width="20" height="20" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5 0C31.8221 0 41 8.85981 41 19.7896C41 27.9627 35.8668 34.9801 28.5422 37.998L23.3802 25.0358C24.5932 24.4149 25.5561 23.42 26.1155 22.2096C26.6749 20.9992 26.7986 19.6429 26.467 18.3567C26.1353 17.0705 25.3674 15.9285 24.2855 15.1125C23.2036 14.2965 21.8699 13.8534 20.4969 13.8539C19.1239 13.8543 17.7906 14.2983 16.7093 15.1151C15.6279 15.9318 14.8608 17.0744 14.5301 18.3608C14.1994 19.6472 14.3242 21.0034 14.8845 22.2134C15.4447 23.4235 16.4083 24.4177 17.6218 25.0378L12.4599 38C8.76315 36.4771 5.61139 33.9392 3.3962 30.7017C1.18102 27.4641 4.12991e-05 23.6696 0 19.7896C0 8.85981 9.17785 0 20.5 0Z" fill="#5B38D7" />
                </svg>
              </div>
            </div>
            <Stack className="px-3 " style={{}}>
              <span
                style={{
                  fontFamily: "arial",
                  fontWeight: "400",
                  fontSize: "2.5vh",
                  lineHeight: "2.6vh",
                }}
              >
                Website:
              </span>
              <div className="d-flex">
                <Col className="pe-1">
                  <ProgressBar
                    now={40}
                    style={{
                      background: "#B8AAEE",
                      height: '1.2vh',
                    }}
                  />
                </Col>
                <div>
                  <span
                    className="flex-shrink-1"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "2.5vh",
                      lineHeight: "2.6vh",
                      textAlign: "right",
                    }}
                  >
                    700
                  </span>
                </div>
              </div>
              <span
                style={{
                  fontFamily: "arial",
                  fontWeight: "400",
                  fontSize: "2.5vh",
                  lineHeight: "2.6vh",
                }}
              >
                Linkedin:
              </span>
              <div className="d-flex">
                <Col className="pe-1">
                  <ProgressBar
                    now={40}
                    variant="danger"
                    style={{ background: "#F9AAA7", height: "1.2vh" }}
                  />
                </Col>
                <div>
                  <span
                    className="flex-shrink-1"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "2.5vh",
                      lineHeight: "2.6vh",
                      textAlign: "right",
                    }}
                  >
                    700
                  </span>
                </div>
              </div>{" "}
              <span
                style={{
                  fontFamily: "arial",
                  fontWeight: "400",
                  fontSize: "2.5vh",
                  lineHeight: "2.6vh",
                }}
              >
                Facebook:
              </span>
              <div className="d-flex">
                <Col className="pe-1">
                  <ProgressBar
                    now={40}
                    variant="warning"
                    style={{ background: "#F2E3B5", height: "1.2vh" }}
                  />
                </Col>
                <div>
                  <span
                    className="flex-shrink-1"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "2.5vh",
                      lineHeight: "2.6vh",
                      textAlign: "right",
                    }}
                  >
                    700
                  </span>
                </div>
              </div>{" "}
              <span
                style={{
                  fontFamily: "arial",
                  fontWeight: "400",
                  fontSize: "2.5vh",
                  lineHeight: "2.6vh",
                }}
              >
                Instagram:
              </span>
              <div className="d-flex">
                <Col className="pe-1">
                  <ProgressBar
                    now={40}
                    variant="info"
                    style={{ background: "#EBF9FF", height: "1.2vh" }}
                  />
                </Col>
                <div>
                  <span
                    className="flex-shrink-1"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "2.5vh",
                      lineHeight: "2.6vh",
                      textAlign: "right",
                    }}
                  >
                    700
                  </span>
                </div>
              </div>{" "}
              <span
                style={{
                  fontFamily: "arial",
                  fontWeight: "400",
                  fontSize: "2.5vh",
                  lineHeight: "2.6vh",
                }}
              >
                Others:
              </span>
              <div className="d-flex">
                <Col className="pe-1">
                  <ProgressBar
                    now={40}
                    variant="success"
                    style={{ background: "#70E765", height: "1.2vh" }}
                  />
                </Col>
                <div>
                  <span
                    className="flex-shrink-1"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: "2.5vh",
                      lineHeight: "2.6vh",
                      textAlign: "right",
                    }}
                  >
                    700
                  </span>
                </div>
              </div>
              <strong style={{ textAlign: "center", fontSize: '20px', fontWeight: '700' }}>Lead Source</strong>
            </Stack>
          </div>
        </Col>
        <Col md={3}>
          <div
            style={{ background: "white", height: "45vh", width: "100%" }}
            className="d-flex flex-column align-items-center px-3"
          >
            <div
              style={{
                height: "6vh",
                width: "6vh",
                marginTop: "2vh",
                borderRadius: "50%",
                background: "#F7E8FB",
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.539 0C12.9238 0 8.7183 1.45068 6.23035 2.63591C6.00556 2.74287 5.79611 2.84788 5.60095 2.949C5.21473 3.14929 4.88573 3.33597 4.62416 3.50029L7.4544 7.46534L8.78676 7.96997C13.9936 10.4698 20.9762 10.4698 26.184 7.96997L27.6962 7.22324L30.3732 3.50029C29.8186 3.15609 29.2419 2.84531 28.6464 2.5698C26.1718 1.3972 22.0674 0 17.539 0ZM10.9559 4.48815C9.95371 4.30968 8.96385 4.0733 7.99184 3.78031C10.3224 2.79537 13.7964 1.75015 17.538 1.75015C20.1302 1.75015 22.5813 2.25185 24.6085 2.88774C22.2329 3.20568 19.698 3.74531 17.2826 4.40939C15.3821 4.93249 13.1608 4.8761 10.9559 4.48815V4.48815ZM27.263 9.4119L27.0126 9.53246C21.2837 12.2821 13.686 12.2821 7.9571 9.53246L7.72005 9.41773C-0.885086 18.4028 -7.45491 35 17.539 35C42.5309 35 35.8007 18.0926 27.263 9.4119ZM16.4764 17.5015C15.9344 17.5015 15.4147 17.7063 15.0314 18.071C14.6482 18.4357 14.4329 18.9303 14.4329 19.4461C14.4329 19.9618 14.6482 20.4564 15.0314 20.8211C15.4147 21.1858 15.9344 21.3907 16.4764 21.3907V17.5015ZM18.5199 15.5569V14.5845H16.4764V15.5569C15.3925 15.5569 14.3529 15.9666 13.5865 16.696C12.82 17.4253 12.3894 18.4146 12.3894 19.4461C12.3894 20.4775 12.82 21.4668 13.5865 22.1962C14.3529 22.9255 15.3925 23.3353 16.4764 23.3353V27.2245C16.0538 27.2246 15.6416 27.1 15.2964 26.8679C14.9513 26.6358 14.6903 26.3075 14.5494 25.9284C14.4592 25.6852 14.2711 25.4861 14.0266 25.3749C13.7821 25.2637 13.5012 25.2494 13.2457 25.3353C12.9901 25.4212 12.7809 25.6001 12.664 25.8328C12.5471 26.0655 12.5322 26.3328 12.6224 26.576C12.9042 27.3343 13.4262 27.9909 14.1164 28.4553C14.8066 28.9197 15.6311 29.1691 16.4764 29.1691V30.1414H18.5199V29.1691C19.6038 29.1691 20.6434 28.7593 21.4098 28.03C22.1763 27.3006 22.6069 26.3114 22.6069 25.2799C22.6069 24.2484 22.1763 23.2592 21.4098 22.5298C20.6434 21.8004 19.6038 21.3907 18.5199 21.3907V17.5015C19.4088 17.5015 20.1659 18.0411 20.4479 18.7975C20.4898 18.9213 20.5573 19.0358 20.6464 19.1343C20.7356 19.2328 20.8446 19.3133 20.967 19.371C21.0894 19.4287 21.2228 19.4625 21.3591 19.4703C21.4955 19.4781 21.6322 19.4598 21.761 19.4165C21.8898 19.3732 22.0082 19.3058 22.1091 19.2182C22.21 19.1306 22.2915 19.0246 22.3486 18.9065C22.4058 18.7884 22.4375 18.6606 22.4418 18.5307C22.4462 18.4007 22.4231 18.2713 22.3739 18.15C22.0921 17.3916 21.5701 16.735 20.8799 16.2706C20.1897 15.8062 19.3652 15.5569 18.5199 15.5569ZM18.5199 23.3353V27.2245C19.0619 27.2245 19.5816 27.0196 19.9649 26.6549C20.3481 26.2902 20.5634 25.7956 20.5634 25.2799C20.5634 24.7641 20.3481 24.2695 19.9649 23.9048C19.5816 23.5402 19.0619 23.3353 18.5199 23.3353Z"
                  fill="#A326C5"
                />
              </svg>

            </div>
            <span
              style={{
                fontFamily: "sans-serif",
                color: "#D15DF0",
                marginTop: "6vh",
              }}
            >
              $
              <span
                style={{
                  fontFamily: "sans-serif",
                  color: "#A326C5",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                {(totalDealValue).toFixed(2)}
              </span>
            </span>
            <span
              style={{
                fontFamily: "sans-serif",
                fontWeight: "700",
                fontSize: "1.1rem",
                marginTop: "12px",
              }}
            >
              TOTAL DEAL VALUE
            </span>
            <span
              style={{
                fontFamily: "sans-serif",
                color: "#64676B",
                textAlign: "center",
              }}
            >
              {" "}
              It includes the total value of the Deal.
            </span>
            {
              user.role === "clientmanager" ? (<Button onClick={() => navigate(`/leads/${name}`)} style={{ marginTop: "10px",border:'none', background: "#A326C5" }}>
                View All
              </Button>)
                :
                user.role === "teamlead" ? (<Button onClick={() => navigate(`/teamlead/leads/${name}`)} style={{ marginTop: "10px",border:'none', background: "#A326C5" }}>
                  View All
                </Button>)
                  :
                  user.role === "admin" ? (<Button onClick={() => navigate(`/admin/allleads`)} style={{ marginTop: "10px",border:'none', background: "#A326C5" }}>
                    View All
                  </Button>)
                    : null
            }

          </div>
        </Col>
        <Col md={3}>
          <div
            style={{ background: "white", height: "45vh", width: "100%" }}
            className="d-flex flex-column align-items-center px-3"
          >
            <div
              style={{
                height: "6vh",
                width: "6vh",
                marginTop: "2vh",
                borderRadius: "50%",
                background: "#EBF9FF",
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 34 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0379 0C12.5546 0 8.4692 1.49212 6.05234 2.71123C5.83398 2.82124 5.6305 2.92924 5.44093 3.03325C5.06574 3.23927 4.74614 3.43129 4.49205 3.6003L7.24142 7.67864L8.53571 8.19768C13.5938 10.7689 20.3769 10.7689 25.4359 8.19768L26.9049 7.42962L29.5054 3.6003C28.9666 3.24626 28.4064 2.92661 27.8279 2.64322C25.424 1.43712 21.4369 0 17.0379 0ZM10.6429 4.61638C9.66932 4.43282 8.70774 4.18968 7.7635 3.88832C10.0275 2.87524 13.4022 1.80015 17.0369 1.80015C19.555 1.80015 21.9362 2.31619 23.9054 2.97025C21.5977 3.29728 19.1352 3.85232 16.7888 4.53538C14.9426 5.07342 12.7848 5.01542 10.6429 4.61638ZM26.484 9.68081L26.2409 9.80482C20.6756 12.6331 13.295 12.6331 7.72975 9.80482L7.49948 9.68681C-0.859797 18.9286 -7.24191 36 17.0379 36C41.3157 36 34.7778 18.6096 26.484 9.68081ZM16.0057 18.0015C15.4792 18.0015 14.9743 18.2122 14.602 18.5873C14.2297 18.9624 14.0206 19.4712 14.0206 20.0017C14.0206 20.5321 14.2297 21.0409 14.602 21.416C14.9743 21.7911 15.4792 22.0018 16.0057 22.0018V18.0015ZM17.9908 16.0013V15.0013H16.0057V16.0013C14.9527 16.0013 13.9429 16.4228 13.1983 17.173C12.4537 17.9232 12.0354 18.9407 12.0354 20.0017C12.0354 21.0626 12.4537 22.0801 13.1983 22.8303C13.9429 23.5805 14.9527 24.002 16.0057 24.002V28.0023C15.5951 28.0024 15.1947 27.8743 14.8594 27.6355C14.5242 27.3968 14.2706 27.0592 14.1337 26.6692C14.046 26.4191 13.8634 26.2143 13.6258 26.0999C13.3883 25.9855 13.1154 25.9708 12.8672 26.0592C12.619 26.1475 12.4157 26.3316 12.3022 26.5709C12.1886 26.8102 12.1741 27.0852 12.2617 27.3353C12.5355 28.1153 13.0426 28.7907 13.7131 29.2683C14.3835 29.746 15.1845 30.0025 16.0057 30.0025V31.0026H17.9908V30.0025C19.0437 30.0025 20.0536 29.581 20.7981 28.8308C21.5427 28.0806 21.961 27.0631 21.961 26.0022C21.961 24.9412 21.5427 23.9237 20.7981 23.1735C20.0536 22.4233 19.0437 22.0018 17.9908 22.0018V18.0015C18.8543 18.0015 19.5898 18.5565 19.8637 19.3346C19.9044 19.4619 19.9699 19.5797 20.0565 19.681C20.1431 19.7823 20.249 19.8651 20.368 19.9245C20.4869 19.9838 20.6164 20.0186 20.7489 20.0266C20.8814 20.0346 21.0141 20.0158 21.1392 19.9713C21.2644 19.9267 21.3794 19.8574 21.4774 19.7673C21.5755 19.6771 21.6546 19.5681 21.7101 19.4467C21.7656 19.3252 21.7964 19.1938 21.8006 19.0601C21.8048 18.9265 21.7824 18.7933 21.7347 18.6686C21.4609 17.8885 20.9538 17.2132 20.2834 16.7355C19.6129 16.2578 18.8119 16.0013 17.9908 16.0013ZM17.9908 24.002V28.0023C18.5172 28.0023 19.0222 27.7916 19.3944 27.4165C19.7667 27.0414 19.9759 26.5326 19.9759 26.0022C19.9759 25.4717 19.7667 24.9629 19.3944 24.5878C19.0222 24.2127 18.5172 24.002 17.9908 24.002Z"
                  fill="#1DB7DB"
                />
              </svg>

              {/* <img src="/images/dashboard/thailo.png" alt="thailo" style={{height:"1.1rem"}}/> */}
            </div>
            <span
              style={{
                fontFamily: "sans-serif",
                color: "#52D2EF",
                marginTop: "6vh",
              }}
            >
              $
              <span
                style={{
                  fontFamily: "sans-serif",
                  color: "#1DB7DB",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                1000{(totalEarned)}
              </span>
            </span>
            <span
              style={{
                fontFamily: "sans-serif",
                fontWeight: "700",
                fontSize: "1.1rem",
                marginTop: "12px",
              }}
            >
              TOTAL PAYMENT
            </span>
            <span
              style={{
                fontFamily: "sans-serif",
                color: "#64676B",
                textAlign: "center",
              }}
            >
              {" "}
              It includes the total payment recieved.
            </span>

            {
              user.role === "clientmanager" ? (<Button onClick={() => navigate(`/payment/${name}`)} style={{ marginTop: "10px", background: "#1DB7DB",border:'none' }}>
                View All
              </Button>)
                :
                user.role === "teamlead" ? (<Button onClick={() => navigate(`/teamlead/payment/${name}`)} style={{ marginTop: "10px", background: "#1DB7DB",border:'none' }}>
                  View All
                </Button>)
                  :
                  user.role === "admin" ? (<Button onClick={() => navigate(`/admin/allleads`)} style={{ marginTop: "10px", background: "#1DB7DB",border:'none' }}>
                    View All
                  </Button>)
                    : null
            }

          </div>
        </Col>
        <Col md={3}>
          <div
            style={{ background: "white", height: "45vh", width: "100%" }}
            className="d-flex flex-column align-items-center px-3"
          >
            <div
              style={{
                height: "6vh",
                width: "6vh",
                marginTop: "2vh",
                borderRadius: "50%",
                background: "#E6FCF5",
              }}
              className="d-flex justify-content-center align-items-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 34 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0379 0C12.5546 0 8.4692 1.49212 6.05234 2.71123C5.83398 2.82124 5.6305 2.92924 5.44093 3.03325C5.06574 3.23927 4.74614 3.43129 4.49205 3.6003L7.24142 7.67864L8.53571 8.19768C13.5938 10.7689 20.3769 10.7689 25.4359 8.19768L26.9049 7.42962L29.5054 3.6003C28.9666 3.24626 28.4064 2.92661 27.8279 2.64322C25.424 1.43712 21.4369 0 17.0379 0ZM10.6429 4.61638C9.66932 4.43282 8.70774 4.18968 7.7635 3.88832C10.0275 2.87524 13.4022 1.80015 17.0369 1.80015C19.555 1.80015 21.9362 2.31619 23.9054 2.97025C21.5977 3.29728 19.1352 3.85232 16.7888 4.53538C14.9426 5.07342 12.7848 5.01542 10.6429 4.61638ZM26.484 9.68081L26.2409 9.80482C20.6756 12.6331 13.295 12.6331 7.72975 9.80482L7.49948 9.68681C-0.859797 18.9286 -7.24191 36 17.0379 36C41.3157 36 34.7778 18.6096 26.484 9.68081ZM16.0057 18.0015C15.4792 18.0015 14.9743 18.2122 14.602 18.5873C14.2297 18.9624 14.0206 19.4712 14.0206 20.0017C14.0206 20.5321 14.2297 21.0409 14.602 21.416C14.9743 21.7911 15.4792 22.0018 16.0057 22.0018V18.0015ZM17.9908 16.0013V15.0013H16.0057V16.0013C14.9527 16.0013 13.9429 16.4228 13.1983 17.173C12.4537 17.9232 12.0354 18.9407 12.0354 20.0017C12.0354 21.0626 12.4537 22.0801 13.1983 22.8303C13.9429 23.5805 14.9527 24.002 16.0057 24.002V28.0023C15.5951 28.0024 15.1947 27.8743 14.8594 27.6355C14.5242 27.3968 14.2706 27.0592 14.1337 26.6692C14.046 26.4191 13.8634 26.2143 13.6258 26.0999C13.3883 25.9855 13.1154 25.9708 12.8672 26.0592C12.619 26.1475 12.4157 26.3316 12.3022 26.5709C12.1886 26.8102 12.1741 27.0852 12.2617 27.3353C12.5355 28.1153 13.0426 28.7907 13.7131 29.2683C14.3835 29.746 15.1845 30.0025 16.0057 30.0025V31.0026H17.9908V30.0025C19.0437 30.0025 20.0536 29.581 20.7981 28.8308C21.5427 28.0806 21.961 27.0631 21.961 26.0022C21.961 24.9412 21.5427 23.9237 20.7981 23.1735C20.0536 22.4233 19.0437 22.0018 17.9908 22.0018V18.0015C18.8543 18.0015 19.5898 18.5565 19.8637 19.3346C19.9044 19.4619 19.9699 19.5797 20.0565 19.681C20.1431 19.7823 20.249 19.8651 20.368 19.9245C20.4869 19.9838 20.6164 20.0186 20.7489 20.0266C20.8814 20.0346 21.0141 20.0158 21.1392 19.9713C21.2644 19.9267 21.3794 19.8574 21.4774 19.7673C21.5755 19.6771 21.6546 19.5681 21.7101 19.4467C21.7656 19.3252 21.7964 19.1938 21.8006 19.0601C21.8048 18.9265 21.7824 18.7933 21.7347 18.6686C21.4609 17.8885 20.9538 17.2132 20.2834 16.7355C19.6129 16.2578 18.8119 16.0013 17.9908 16.0013ZM17.9908 24.002V28.0023C18.5172 28.0023 19.0222 27.7916 19.3944 27.4165C19.7667 27.0414 19.9759 26.5326 19.9759 26.0022C19.9759 25.4717 19.7667 24.9629 19.3944 24.5878C19.0222 24.2127 18.5172 24.002 17.9908 24.002Z"
                  fill="#04CA8E"
                />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "sans-serif",
                color: "#3DF0BB",
                marginTop: "6vh",
              }}
            >
              $
              <span
                style={{
                  fontFamily: "sans-serif",
                  color: "#04CA8E",
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                {(totalDuePayment).toFixed(2)}
              </span>
            </span>
            <span
              style={{
                fontFamily: "sans-serif",
                fontWeight: "700",
                fontSize: "1.1rem",
                marginTop: "12px",
              }}
            >
              DUE PAYMENT
            </span>
            <span
              style={{
                fontFamily: "sans-serif",
                color: "#64676B",
                textAlign: "center",
              }}
            >
              {" "}
              It includes the total due amt. left to pay.
            </span>

            {
              user.role === "clientmanager" ? (<Button onClick={() => navigate(`/payment/${name}`)} style={{ marginTop: "10px", background: "#04CA8E" ,border:'none'}}>
                View All
              </Button>)
                :
                user.role === "teamlead" ? (<Button onClick={() => navigate(`/teamlead/payment/${name}`)} style={{ marginTop: "10px", background: "#04CA8E" ,border:'none'}}>
                  View All
                </Button>)
                  :
                  user.role === "admin" ? (<Button onClick={() => navigate(`/admin/allpayments`)} style={{ marginTop: "10px", background: "#04CA8E",border:'none' }}>
                    View All
                  </Button>)
                    : null
            }



          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentRow;
