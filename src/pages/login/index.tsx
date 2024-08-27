import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Card, Checkbox, ConfigProvider, Form, Image, Input, Space, ThemeConfig } from 'antd';
import { Text } from 'components/Text';
import { Title } from 'components/Title';
import taxRayIcon from 'components/icons/taxrayIcon.png';
import loginDeco from 'components/icons/loginDeco.png';
import React from 'react'
import { useActiveAuthProvider, useLogin } from '@refinedev/core';


export interface ILoginForm {
    email: string;
    password: string;
    remember: boolean;
}

const openSansConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Open Sans' },
    components: {
        Typography: {
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const openSansWhiteConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Open Sans' },
    components: {
        Typography: {
            colorText: "#FFF",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const poppinsConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Poppins' },
    components: {
        Typography: {
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const interConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Inter' },
    components: {
        Typography: {
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const Login: React.FC = () => {

    const [form] = Form.useForm<ILoginForm>();
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const authProvider = useActiveAuthProvider();
    const { mutate: login, isLoading } = useLogin<ILoginForm>({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
    });

    return (
        <div style={{ width: "100%", height: "100%", backgroundColor: "#E5E5E5", zIndex: 0, position: "absolute" }}>

            <ConfigProvider theme={openSansConfig}>
                <div style={{ backgroundColor: "#FFFFFF", width: "100%", height: "100%", position: 'relative' }}>
                    <Image src={taxRayIcon} preview={false} style={{ width: "66.7px", height: "39px", marginLeft: "42px", marginTop: "31px", position: "absolute" }}></Image>
                    <Space direction='horizontal' style={{ width: "100%", height: "100%", justifyContent: "space-evenly", position: "absolute" }}>
                        <div style={{ backgroundColor: "#FFFFFF", width: "100%", height: "100%", position: 'relative' }}>
                            <div style={{ width: "505px", height: "624px", marginTop: "24px", marginLeft: "111px", borderRadius: "10px", boxShadow: '0px 4px 64px rgba(0, 0, 0, 0.05)', border: '0.50px #878787 solid', position: "relative" }}>
                                <Text style={{ fontSize: "25px", fontWeight: "300", marginLeft: "32px", marginTop: "36px", position: "absolute" }}>Welcome !</Text>
                                <Text style={{ fontSize: "31px", fontWeight: "400", marginLeft: "32px", marginTop: "106px", position: "absolute" }}>Sign in to TaxRay</Text>
                                <Form<ILoginForm> layout="vertical"
                                    form={form}
                                    onFinish={(values) => {
                                        login(values);
                                    }}
                                    requiredMark={false}
                                    initialValues={{
                                        email: "omri@taxray.net",
                                        password: "",
                                        remember: true,
                                    }}
                                >

                                    <Space direction='vertical' style={{ marginLeft: "32px", marginTop: "185px", zIndex: 1, position: "absolute" }}>
                                        <Text style={{ fontSize: "16px", fontWeight: "400" }}>User name</Text>
                                        <Form.Item
                                            name="email"
                                            rules={[{ required: true }]}
                                        >
                                            <Input.TextArea id='email' placeholder='Enter your username' style={{ width: "400px", height: "40px", borderRadius: "8px", border: "1px solid #D9D9D9" }} />
                                        </Form.Item>
                                    </Space>
                                    <Space direction='vertical' style={{ marginLeft: "32px", marginTop: "315px", zIndex: 1, position: "absolute" }}>
                                        <Text style={{ fontSize: "16px", fontWeight: "400" }}>Password</Text>
                                        <Form.Item
                                            name="password"
                                            rules={[{ required: true }]}
                                            style={{ marginBottom: "12px" }}
                                        >
                                            <Input.Password id='password' placeholder='Enter your password' style={{ width: "400px", height: "40px", borderRadius: "8px", border: "1px solid #D9D9D9" }} />
                                        </Form.Item>
                                    </Space>
                                    <Space direction='horizontal' style={{ marginLeft: "32px", marginTop: "430px", position: "absolute", justifyContent: "space-between" }}>
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox id='checked'>
                                                <Text style={{ fontSize: "12px", fontWeight: "400", wordWrap: "break-word" }}>Remember me</Text>
                                            </Checkbox></Form.Item>
                                        <Text style={{ marginLeft: "206px", fontSize: "12px", fontWeight: "400", wordWrap: "break-word" }}>Forgot Password ?</Text>
                                    </Space>

                                    <ConfigProvider theme={openSansWhiteConfig}>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" style={{ width: "423px", height: "57px", marginLeft: "32px", marginTop: "486px", position: "absolute", background: "#6039F5" }}>
                                                <Text style={{ fontSize: "18px", fontWeight: "700", wordWrap: 'break-word' }}>Login</Text>
                                            </Button>
                                        </Form.Item>
                                    </ConfigProvider>
                                    <Space direction='horizontal' style={{ marginLeft: "112px", marginTop: "524px", marginBottom: "63px", position: "absolute" }}>
                                        <Text style={{ fontSize: "16px", fontWeight: "300" }}>Don't have an account ? </Text>
                                        <Text style={{ fontSize: "16px", fontWeight: "600" }}>Register </Text>
                                    </Space>
                                </Form>

                            </div>
                        </div >
                        <Image src={loginDeco} preview={false} style={{ width: "515px", height: "542px", marginTop: "91px", position: "relative" }}></Image>
                    </Space>
                </div>
            </ConfigProvider >

        </div>
    )
}

export default Login