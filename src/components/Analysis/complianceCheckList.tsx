import { CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons'
import { Col, Row, Space } from 'antd'
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
                margin: '0 3px',
            }}
        />
    );
};

const ComplianceCheckList = () => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <h2 style={{ marginLeft: "8px", marginTop: "8px" }}>Results</h2>
            <div className="ant-space-item"
                style={{ textAlign: "center" }}>
                <Space direction="horizontal" align="baseline" style={{ width: "95%", justifyContent: "space-between" }}>


                    <Space direction="horizontal">
                        <ExclamationCircleFilled style={{ color: "#FD5526", fontSize: "16px" }} />
                        <Text size='lg'>Subject to Withholding Taxes</Text>
                    </Space>
                    <Space direction="horizontal">
                        <Text size='lg'>Rate: 20%</Text>
                    </Space>
                    <Space direction="horizontal">
                        <Text size='lg'>Impact: $88,455</Text>
                    </Space>
                    <Space direction="horizontal">
                        <Text size='lg'>Probability: 75%</Text>
                    </Space>
                    <Space direction="horizontal">
                        <Circle color="#F8D000" size={18} />
                        <Text size='lg'>Risk Level: Medium</Text>
                    </Space>
                </Space>
            </div>
            <br></br>
        </Space>
    )
}

export const ComplianceIdealCheckList = () => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <h2 style={{ marginLeft: "8px", marginTop: "8px" }}>Results</h2>
            <div className="ant-space-item"
                style={{ textAlign: "center" }}>
                <Space direction="horizontal" align="baseline" style={{ width: "95%", justifyContent: "space-between" }}>


                    <Space direction="horizontal">
                        <CheckCircleFilled style={{ color: "#14BA6D", fontSize: "16px" }} />
                        <Text size='lg'>No Withholding Tax</Text>
                    </Space>
                    <Space direction="horizontal">
                        <Text size='lg'>Rate: 0%</Text>
                    </Space>
                    <Space direction="horizontal">
                        <Text size='lg'>Impact: 0%</Text>
                    </Space>
                    <Space direction="horizontal">
                        <Text size='lg'>Probability: 0%</Text>
                    </Space>
                    <Space direction="horizontal">
                        <Circle color="#858585" size={18} />
                        <Text size='lg'>Risk Level: None</Text>
                    </Space>
                </Space>
            </div>
            <br></br>
        </Space>
    )
}

export const ComplianceCheckListIdeal = () => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <h2 style={{ marginLeft: "8px", marginTop: "8px" }}>Complaince Check List</h2>
            <div className="ant-space-item"
                style={{ textAlign: "center" }}>
                <Row>
                    <Col flex={1} style={{ borderRight: "3px solid #C5C5C5", marginTop: "16px", }}>
                        <Space direction="horizontal">
                            <CheckCircleFilled style={{ color: "#14BA6D", fontSize: "20px", marginTop: "5px" }} />
                            <Text size='xl'>Contract reviewed</Text>
                        </Space>
                    </Col>
                    <Col flex={1} style={{ borderRight: "3px solid #C5C5C5", marginTop: "16px" }}>
                        <Space direction="horizontal">
                            <CheckCircleFilled style={{ color: "#14BA6D", fontSize: "20px", marginTop: "5px" }} />
                            <Text size='xl'>W8 form is found</Text>
                        </Space>
                    </Col>
                    <Col flex={1} style={{ marginBottom: "16px", marginTop: "16px" }}>
                        <Space direction="horizontal">
                            <ExclamationCircleFilled style={{ color: "#F8D000", fontSize: "20px", marginTop: "5px" }} />
                            <Text size='xl'>1042 needs to be filed</Text>
                        </Space>
                    </Col>
                </Row>
                {/* <Space direction="horizontal" align="baseline" style={{ textAlign: "center", width: "80%", justifyContent: "space-between" }}>

                    <Space direction="horizontal">
                        <CheckCircleFilled style={{ color: "#14BA6D" }} />
                        <Text>Contract reviewed</Text>
                    </Space>
                    <Space direction="horizontal">
                        <CheckCircleFilled style={{ color: "#14BA6D" }} />
                        <Text>W8 form is found</Text>
                    </Space>
                    <Space direction="horizontal">
                        <ExclamationCircleFilled style={{ color: "#F8D000" }} />
                        <Text>1042 needs to be filed</Text>
                    </Space>
                </Space> */}
            </div>
            <br></br>
        </Space>
    )
}

export default ComplianceCheckList