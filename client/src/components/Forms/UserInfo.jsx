import React, { useState } from "react";
import { Form, Input, Row, Col, Space, InputNumber } from "antd";

const UserInfo = () => {
  const form = Form.useFormInstance();
  const firstName = Form.useWatch("firstName", form);
  const lastName = Form.useWatch("lastName", form);
  const city = Form.useWatch("city", form);
  const state = Form.useWatch("state", form);
  const zip = Form.useWatch("zip", form);
  const phone = Form.useWatch("phone", form);
  // const professionalEmail = Form.useWatch("professionalEmail", form);
  // const socials = Form.useWatch("socials", form);
  const github = Form.useWatch("github", form);
  const linkedin = Form.useWatch("linkedin", form);
  // const portfolio = Form.useWatch("portfolio", form);

  return (
    <>
      <Row>
        <Col span={24}>
          <Form.Item title="This field is required." label="First Name" name="firstName" required>
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item title="This field is required." label="Last Name" name="lastName" required>
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item title="This field is required." label="City" name="city" required>
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item title="This field is required." label="State" name="state" required>
            <Input maxLength={2} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Zip" name="zip">
            <InputNumber minLength={5} maxLength={9} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item title="This field is required." label="Phone" name="phone" required>
            <InputNumber minLength={10} maxLength={10} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Professional Email" name="professionalEmail">
            <Input type="email" />
          </Form.Item>
        </Col>

        {/* <Form.Item label="Socials" name="socials"> */}
        {/* <Input.Group> */}
        <Form.Item title="This field is required." label="Github" name="github" required>
          <Input addonBefore="https://" placeholder="Github" name="github" />
        </Form.Item>

        <Form.Item title="This field is required." label="Linkedin" name="linkedin" required>
          <Input
            addonBefore="https://"
            placeholder="LinkedIn"
            name="linkedin"
          />
        </Form.Item>

        <Form.Item label="Portfolio" name="portfolio">
          <Input
            addonBefore="https://"
            placeholder="Portfolio"
            name="portfolio"
          />
          {/* </Input.Group> */}
        </Form.Item>
      </Row>
    </>
  );
};
export default UserInfo;
