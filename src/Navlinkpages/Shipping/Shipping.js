import React from "react";
import "../Shipping/Shipping.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Shipping() {
  return (
    <div>
      <div className="ship-header">
        <img
          id="ship-img"
          src={require("../../images/ShipImages/shipimg.png")}
        />
        <div className="ship-text">
          <h1>Shipping and returns</h1>
          <p>Any question about your order? We have you covered.</p>
        </div>
      </div>

      <div className="question-row">
        <div className="white-space-ques">
          <h2 id="ques-head">Frequently asked questions</h2>

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button ques-btn bor-1 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How long will it take for my order to arrive?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body body-con">
                  We aim to ship orders out within 2 business days. Depending on
                  the shipping method you selected, and your destination
                  address, orders can take 3-7 business days to reach you.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button ques-btn collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How can I check the status of my order?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body body-con">
                  You'll receive a confirmation email with a tracking link once
                  your order has been shipped out.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button ques-btn collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How do I modify or cancel my order?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body body-con">
                  We do our best to ship orders out within 2 business days,
                  which means we might not catch yours in time to modify or
                  cancel it. If you'd like to modify or cancel an order, please
                  contact us ASAP and we'll do our best. You can either email us
                  or chat us at the bottom right corner of this window..
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button ques-btn bor-4 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  What's the return/refund policy?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body body-con">
                  Our products were manufactured with you in mind. We’re
                  confident that you’ll love them, but if you’re unhappy for any
                  reason, please reach out to us within 30 days of your purchase
                  and we'll be able to assist with processing the return and a
                  refund.
                </div>
                <div className="accordion-body list body-con">
                  Our return/refund guarantee for our Eye Stick 2.0 extends an
                  additional 30 days (60 total), given we recommend you use it
                  2x+ daily for 60 days to achieve the best results.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
