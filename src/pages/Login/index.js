import { Card, Form, Input, Checkbox, Button, message } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'

function Login () {

  const { loginStore } = useStore()
  const navigate = useNavigate()
  async function onFinish (values) {
    await loginStore.getToken({
      mobile: values.username,
      code: values.password
    })
    navigate('/', { replace: true })
    message.success('登录成功')
  }

  return <>
    <div className="login">
      <Card className="login-container">
        <img src={logo} alt="" className="login-logo" />
        <Form
          initialValues={{
            remeber: true,
          }}
          validateTrigger={['onBlur']}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入手机号！'

              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号！',
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input size='large' placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码'
              }
            ]}
          >
            <Input size='large' placeholder='请输入密码' />
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