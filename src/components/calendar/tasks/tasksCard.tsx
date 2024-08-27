import { Card, ConfigProvider, List, Row, Space, ThemeConfig } from 'antd'
import { Text } from 'components/Text'
import React from 'react'

const tasks = [
    {
        title: "Filings Overdue",
        value: "3",
        color: "#FD5526",
        strong: true
    },
    {
        title: "Filings due this month",
        value: "5",
        color: "#000",
        strong: false
    },
    {
        title: "For my approval",
        value: "1",
        color: "#000",
        strong: false
    },
    {
        title: "Filings due this quarter",
        value: "13",
        color: "#000",
        strong: false
    }

]

const robotoConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Roboto' },
    components: {
        Typography: {
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const TasksCard = () => {
    return (
        <ConfigProvider theme={robotoConfig}>
            <Card title={
                <Text strong size="md" style={{ fontFamily: "Roboto" }}>
                    Tasks
                </Text>
            } style={{ borderRadius: "8px" }
            }>
                <List
                    grid={{
                        gutter: 32,
                        column: 4,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 2,
                        xl: 4,
                    }}
                    dataSource={tasks}
                    renderItem={(item) => (
                        <List.Item>
                            <Card size="small"
                                style={{
                                    border: "0px solid #00000000",
                                    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
                                }}>
                                <Space direction="vertical">
                                    <Text style={{ fontFamily: "Roboto" }}>{item.title}</Text>
                                    <Text strong={item.strong} style={{ fontSize: "24px", fontFamily: "Roboto", color: `${item.color}` }}>{item.value}</Text>
                                </Space>
                            </Card>
                        </List.Item>
                    )}
                ></List>
            </Card>
        </ConfigProvider>
    )
}

export default TasksCard