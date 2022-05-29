import { Card, Form, Input, Checkbox, Button } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'

function Login () {

  return <>
    <div className="login">
      <Card className="login-container">
        <img src={logo} alt="" className="login-logo" />
        <Form
          initialValues={{
            remeber: true
          }}
        >
          <Form.Item>
            <Input size='large' placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item>
            <Input size='large' placeholder='请输入验证码' />
          </Form.Item>

          <Form.Item
            name={'remeber'}
            valuePropName='checked'
          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  </>
}

export default Login