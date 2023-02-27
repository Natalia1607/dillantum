import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Radio,
  Select,
  Upload,
} from 'antd';
const { TextArea } = Input;

const AddContainer = () => {
  const appearance = () => {
    const el = document.querySelector('#form__opacity');
    el.style.opacity = 1;
    el.style.display = 'block';
  };
  return (
    <>
      <button className='btn btn_ad m-auto mb24' onClick={appearance}>Post ad now</button>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
        className='mb24 form__ad-item'
        id='form__opacity'
      >
        <Form.Item label="Purpose">
          <Radio.Group>
            <Radio value="sale"> Sale </Radio>
            <Radio value="rent"> Rent </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Emirate">
          <Select>
            <Select.Option value="Dubai">Dubai</Select.Option>
            <Select.Option value="Abu Dhabi">Abu Dhabi</Select.Option>
            <Select.Option value="Sharjah">Sharjah</Select.Option>
            <Select.Option value="Ajman">Ajman</Select.Option>
            <Select.Option value="Umm Al Quwain">Umm Al Quwain</Select.Option>
            <Select.Option value="Ras Al Khaimah">Ras Al Khaimah</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Location">
          <Input />
        </Form.Item>
        <Form.Item label="Price">
          <Input />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <button className='btn btn-primary hover-diagonal_light'>Place an ad</button>
      </Form>
    </>
  )
}

export default AddContainer