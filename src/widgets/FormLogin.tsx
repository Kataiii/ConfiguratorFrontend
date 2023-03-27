import { Link, useNavigate } from "react-router-dom";
import Button from "../shared/ui/ButtonPrim";
import styles from "./css/Form.module.css"


const FormLogin = () => {
    return(
        <div className={styles.FormDiv}>
            <h1 className={styles.FormTitle}>Вход</h1>
            <div>
                <p>У вас нет аккаунта?</p>
                <Link to={'/login/register'}>Регистрация</Link>
            </div>
            <div>
                <input type='text' placeholder="Логин или email..."></input>
                <input type='password' placeholder="Пароль..."></input>
            </div>
            <div>
                <Button title="Вход" onClick={()=> {console.log("AAAAAAAAAAAAA")}}></Button>
            </div>
        </div>
    )
}

export default FormLogin;



/*import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const App: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Логин или email..."
      name="username"
      rules={[{ required: true, message: 'Неверный формат' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Пароль..."
      name="password"
      rules={[{ required: true, message: 'Неверный пароль' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
</Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Вход
      </Button>
    </Form.Item>
  </Form>
);

export default App;*/