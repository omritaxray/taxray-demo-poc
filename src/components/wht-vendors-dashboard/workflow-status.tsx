import { Card, ConfigProvider, Progress, Space } from 'antd'
import { ThemeConfig } from 'antd/lib';
import { Text } from 'components/Text'
import React from 'react'

const Circle = ({ color = 'blue', size = 50 }) => {
    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                backgroundColor: color,
                display: 'inline-block', // This makes it easy to use the circle inline with other elements
                margin: 'auto',
            }}
        />
    );
};
const Bar = ({ color = 'blue', size = 50 }) => {
    return (
        <div
            style={{
                width: `${size}px`,
                height: `10px`,
                backgroundColor: color,
                display: 'inline-block', // This makes it easy to use the circle inline with other elements
                margin: 'auto',
            }}
        />
    );
};

const ToDoBar = ({ color = 'blue', size = 50, multiple = 0.03 }) => {
    return (
        <div
            style={{
                width: `${size * multiple}px`,
                height: `10px`,
                backgroundColor: color,
                display: 'inline-block', // This makes it easy to use the circle inline with other elements
                margin: 'auto',
            }}
        />
    );
};

const openSansConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Open Sans' },
    components: {
        Typography: {
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        },
        Progress: {
            colorText: "#000",
        }
    },
};

const openSansWhiteConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Open Sans' },
    components: {
        Typography: {
            colorText: "#FAFAFA",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        },
        Progress: {
            colorText: "#000",
        }
    },
};


const WHTWorkflowStatus = () => {
    return (
        <Card style={{ width: "100%", padding: 0, backgroundColor: "#FAFAFA", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}>
            <Space style={{ width: "100%", justifyContent: "space-between" }}>
                <ConfigProvider theme={openSansConfig}>
                    <Progress type='dashboard' percent={45} strokeColor={"#6039F5"} showInfo={true} size={150} format={(percent = 42) => <Space direction='vertical' size={1}><Text strong size='lg'>45%</Text><Text>completed</Text></Space>} />
                </ConfigProvider>
                <Space direction='vertical' style={{ width: "100%" }}>
                    <Text>Total tasks at risk</Text>
                    <div style={{ width: "100%" }}>
                        <Space style={{ width: "100%" }}>
                            <ToDoBar color='#FD5526' size={380} multiple={0.03}></ToDoBar>
                            <ToDoBar color='#FD8026' size={380} multiple={0.30}></ToDoBar>
                            <ToDoBar color='#FDA726' size={380} multiple={0.20}></ToDoBar>
                            <ToDoBar color='#A594F7' size={380} multiple={0.07}></ToDoBar>
                            <ToDoBar color='#6039F5' size={380} multiple={0.50}></ToDoBar>
                        </Space>
                    </div>
                    <Space direction='horizontal' style={{ width: "95%", justifyContent: "space-between" }}>
                        <Space direction='vertical' style={{ width: "100%" }}>
                            <Space style={{ justifyContent: "space-between", width: "100%" }}>
                                <Space >
                                    <Circle color='#FD5526' size={10} />
                                    <Text strong>Overdue</Text>

                                </Space>
                                <Space>
                                    <Text>4</Text>
                                    <Text strong>3%</Text>
                                </Space>
                            </Space>
                            <Space style={{ justifyContent: "space-between", width: "100%" }}>
                                <Space >
                                    <Circle color='#FD8026' size={10} />
                                    <Text strong>To do</Text>
                                </Space>
                                <Space>
                                    <Text>38</Text>
                                    <Text strong>30%</Text>
                                </Space>
                            </Space>
                            <Space style={{ justifyContent: "space-between", width: "100%" }}>
                                <Space >
                                    <Circle color='#FDA726' size={10} />
                                    <Text strong>Waiting for approval</Text>
                                </Space>
                                <Space>
                                    <Text>25</Text>
                                    <Text strong>20%</Text>
                                </Space>
                            </Space>
                        </Space>
                        <Space direction='vertical' style={{ width: "100%" }}>
                            <Space style={{ justifyContent: "space-between", width: "100%" }}>
                                <Space >
                                    <Circle color='#A594F7' size={10} />
                                    <Text strong>Completed Late</Text>
                                </Space>
                                <Space>
                                    <Text>9</Text>
                                    <Text strong>7%</Text>
                                </Space>
                            </Space>
                            <Space style={{ justifyContent: "space-between", width: "100%" }}>
                                <Space >
                                    <Circle color='#6039F5' size={10} />
                                    <Text strong>Completed</Text>
                                </Space>
                                <Space>
                                    <Text>50</Text>
                                    <Text strong>40%</Text>
                                </Space>
                            </Space>
                            <Space style={{ justifyContent: "space-between", width: "100%" }}>
                                <ConfigProvider theme={openSansWhiteConfig}>
                                    <Space >
                                        <Circle color='#FAFAFA' size={10} />
                                        <Text strong>Medium</Text>
                                    </Space>
                                    <Space>
                                        <Text>4</Text>
                                        <Text strong>3%</Text>
                                    </Space>
                                </ConfigProvider>
                            </Space>
                        </Space>
                    </Space>
                </Space>
            </Space>
        </Card>
    )
}

export default WHTWorkflowStatus