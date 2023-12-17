import React, { useState } from "react";
import { Button, Modal } from "antd";
import Form from "./Form";
const Popup = ({ showModal, setShowModal, singleUser }) => {
  console.log(showModal, "modal");
  const handleOk = () => {
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={showModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form singleUser={singleUser} />
      </Modal>
    </>
  );
};
export default Popup;
