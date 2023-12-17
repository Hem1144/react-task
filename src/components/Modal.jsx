import { Modal } from "antd";
import Form from "./Form";
const Popup = ({
  showModal,
  setShowModal,
  singleData,
  setSingleData,
  handleOk,
}) => {
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
        <Form singleData={singleData} setSingleData={setSingleData} />
      </Modal>
    </>
  );
};
export default Popup;
