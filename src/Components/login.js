import React, { Component, useState } from 'react'
import { Form, Input, Button,Checkbox, Anchor } from 'antd';
import 'antd/dist/antd.css';

function LoginForm({login, error}){

  const [details, setDetails] = useState({username:"",password:""})
  const layout = {
    labelCol: {
      span: 18,
    },
    wrapperCol: {
      span: 5,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 17,
      span: 5,
    },
  };
  
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
      

    const submitHandler = e =>{
      
      e.preventDefault();
      login(details);
    }

        return(
           <div>
           <div style={{textAlignLast:'right', margin:'5% 8%', fontWeight:'700', fontSize:'40px'}}>Application Login</div>
           <Form
           {...layout}
           name="basic"
           initialValues={{
             remember: true,
           }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           onSubmitCapture={submitHandler}
         >
           <Form.Item
             label="Username"
             name="username"
             rules={[
               {
                 required: true,
                 message: 'Please input your username!',
               },
             ]}
           >
             <Input onChange={e=> setDetails({...details, username:e.target.value})} value={details.username}/>
           </Form.Item>
     
           <Form.Item
             label="Password"
             name="password"
             rules={[
               {
                 required: true,
                 message: 'Please input your password!',
               },
             ]}
           >
             <Input.Password onChange={e=> setDetails({...details, password:e.target.value})} value={details.password}/>
           </Form.Item>
     
           <Form.Item {...tailLayout} name="remember" valuePropName="checked">
             <div style={{display:"flex", justifyContent:'space-between'}}>
             <Checkbox>Remember me</Checkbox>
             <Button type="link">Forgot password</Button>
             </div>
             </Form.Item>
           <Form.Item {...tailLayout}>
             <Button type="primary" htmlType="submit" style={{padding:'0px 55%'}}>
               Sign in
             </Button>
           </Form.Item>
         </Form>
           </div>
        )
}


export default LoginForm;
