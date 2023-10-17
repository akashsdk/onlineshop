import React, { useRef, useState } from "react";
import "./Style/Contacts.css";
import Footer from "../Components/Footer";

import { Button, Form, Input, Modal, Tooltip } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


export default function Contacts() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const { TextArea } = Input;
  const formRef = useRef(null);

  const onFinish = (values) => {
    console.log(values);
  };
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onReset = () => {
    formRef.current?.resetFields();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const isButtonDisabled =
    newName === "" || newEmail === "" || newPhone === "" || newMessage === "";

  const text = <span>please! fill up the form</span>;

  return (
    <div className="overflowBox">
      <h2 style={{opacity:'.8', marginTop:'50px'}}>Easy To Contact With Us 💁</h2>
      <div className="contactsBody">
        <div className="contactsBox">
        <div className="contactsDiv">
        <Form
          {...layout}
          ref={formRef}
          name="control-ref"
          onFinish={onFinish}
          style={{
            width:'100%'
          }}
        >
          <Form.Item
            name="Name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={(event) => {
                setNewName(event.target.value);
              }}/>
          </Form.Item>

          <Form.Item
            name="Email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={(event) => {
                setNewEmail(event.target.value);
              }} />
          </Form.Item>

          <Form.Item
            name="Phone"
            label="Phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={(event) => {
                setNewPhone(event.target.value);
              }}/>
          </Form.Item>

          <Form.Item
            name="Message"
            label="Message"
            rules={[
              {
                required: true,
              },
            ]}
            
          >
            
            <TextArea showCount maxLength={500} onChange={(event) => {
                setNewMessage(event.target.value);
              }} />
          </Form.Item>

          <Form.Item>
          <Button className="contactsResetButton" htmlType="button" onClick={showModal} danger>
              Reset
            </Button>
          <Tooltip placement="topLeft" title={isButtonDisabled  ? text : ''}>
            <Button className="contactsSubmitButton" type="primary" htmlType="submit" disabled={isButtonDisabled}>
              Submit
            </Button>
            </Tooltip>
            
            <Modal
              title="Confirm to Reset !"
              open={isModalOpen}
              onOk={onReset}
              onCancel={handleCancel}
            >
            </Modal>
          </Form.Item>
        </Form>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
