import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ThumbPopUpForm.css";
import FirstStep from "../Popup/FirstStep";
import SecondStep from "../Popup/SecondStep";
import ThirdStep from "../Popup/ThirdStep";
const ThumbPopUpForm = (props) => {
  // Quản lý trạng thái của modal và bước hiện tại
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);

  // Hàm đóng mở modal
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setStep(1); // Đặt lại về bước đầu tiên khi mở modal
    setShow(true);
  };

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrevious = () => setStep((prev) => prev - 1);

  // Nội dung cho từng bước
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <FirstStep product={props.product}/>;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      default:
        return null;
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Mua Ngay
      </Button>

      <Modal show={show} onHide={handleClose}scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Bước {step}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderStepContent()}</Modal.Body>
        <Modal.Footer>
          {step > 1 && (
            <Button variant="secondary" onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {step < 3 ? (
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="success" onClick={handleClose}>
              Finish
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ThumbPopUpForm;
