import { Card, Progress, Row, Space } from 'antd'
import { Text } from 'components/Text'
import { green, red } from '@ant-design/colors';
import React from 'react'
import { WHTVendorsTasksCard } from './kpis-card';

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
const Bar = ({ color = 'blue', size = '100%' }) => {
    return (
        <div
            style={{
                width: size,
                height: `10px`,
                backgroundColor: color,
                display: 'inline-block', // This makes it easy to use the circle inline with other elements
                margin: 'auto',
            }}
        />
    );
};

const RiskyTasks = () => {
    return (

        <Space direction='horizontal' size={20} style={{ height: "100%", width: "100%" }}>
            <Card size="small" style={{ height: "100%", width: "100%", padding: 0, backgroundColor: "#FAFAFA", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}>
                <Space direction='vertical' style={{ width: "100%" }}>
                    <Text>Total tasks at risk</Text>
                    <Space style={{ width: "100%" }}>
                        <Bar color='#6039F5' size='20px'></Bar>
                        <Bar color='#A594F7' size='80px'></Bar>
                        <Bar color='#D3CCF5' size='150px'></Bar>
                    </Space>
                    {/* <Progress type='line' percent={100} steps={3} strokeColor={["#6039F5", "#A594F7", "#D3CCF5"]} style={{ width: "100%" }} showInfo={false} size={["100%", 10]} /> */}

                    <Space direction='vertical' style={{ width: "100%" }}>
                        <Space style={{ justifyContent: "space-between", width: "100%" }}>
                            <Space >
                                <Circle color='#6039F5' size={10} />
                                <Text strong>High</Text>
                                <Text>3</Text>
                            </Space>
                            <Text>$12,000,000</Text>
                        </Space>
                        <Space style={{ justifyContent: "space-between", width: "100%" }}>
                            <Space >
                                <Circle color='#A594F7' size={10} />
                                <Text strong>Medium</Text>
                                <Text>12</Text>
                            </Space>
                            <Text>$7,397,320</Text>
                        </Space>
                        <Space style={{ justifyContent: "space-between", width: "100%" }}>
                            <Space >
                                <Circle color='#D3CCF5' size={10} />
                                <Text strong>Low</Text>
                                <Text>22</Text>
                            </Space>
                            <Text>$28,520,100</Text>
                        </Space>
                    </Space>
                </Space>
            </Card>

            {/* <Space direction='vertical' style={{ width: "100%" }}>
                <WHTVendorsTasksCard isLoading={false} totalCount={"$47,917,420"} trend={""} cardTitle='Gross-Up Costs' cardSubtitle='Total net exposure' />
            </Space> */}
        </Space>
    )
}

export default RiskyTasks