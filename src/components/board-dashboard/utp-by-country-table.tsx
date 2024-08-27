import { CheckCircleTwoTone } from '@ant-design/icons'
import { Card, Col, Row, Space } from 'antd'
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

const UTPCountryTable = () => {
    return (
        <Card style={{ height: "56%", marginTop: "1%", padding: "0px 0px 0px 10px", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}>
            <Row>
                <Col span={24}>
                    <h3 style={{ textAlign: "center" }}>Mitigation Strategies Reference</h3>
                </Col>

            </Row>
            <Row style={{ width: "100%", marginTop: "1%" }}>
                <Col span={14} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Text size='md' strong style={{ textAlign: "center" }}>Top 5 highest UTPs by country</Text>
                </Col>
                <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Text size='md' strong style={{ textAlign: "center" }}>Level of risk</Text>
                </Col>
                <Col span={6} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Text size='md' strong style={{ textAlign: "center" }}>Mitigation strategy</Text>
                </Col>
            </Row>
            <Row style={{ width: "100%" }}>
                <Col span={14} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Space style={{ width: "100%", justifyContent: "space-between", padding: "0% 5%" }}>
                        <Text size='sm' style={{ textAlign: "center" }}>India</Text>
                        <Text size='sm' style={{ textAlign: "center" }}>$12,550,431</Text>
                        <Text size='sm' style={{ textAlign: "center" }}>Transfer Pricing</Text>
                    </Space>
                </Col>
                <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Circle color='#FD5526' size={12} />
                </Col>
                <Col span={6} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Text style={{ textAlign: "center" }}>Opinion - EY</Text>
                </Col>
            </Row>
            <Row style={{ width: "100%" }}>
                <Col span={14} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Space style={{ width: "100%", justifyContent: "space-between", padding: "0% 5%" }}>
                        <Text size='sm' style={{ textAlign: "center" }}>Australia</Text>
                        <Text size='sm' style={{ textAlign: "center" }}>$23,400,000</Text>
                        <Text size='sm' style={{ textAlign: "center" }}>Withholding Tax</Text>
                    </Space>
                </Col>
                <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Circle color='#14BA6D' size={12} />
                </Col>
                <Col span={6} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Text style={{ textAlign: "center" }}>TaxRay AI</Text>
                </Col>
            </Row>

            <Row style={{ width: "100%" }}>
                <Col span={14} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Space style={{ width: "100%", justifyContent: "space-between", padding: "0% 5%" }}>
                        <Text size='sm' style={{ textAlign: "center" }}>Mexico</Text>
                        <Text size='sm' style={{ textAlign: "center" }}>$10,050,321</Text>
                        <Text size='sm' style={{ textAlign: "center" }}>VAT/GST</Text>
                    </Space>
                </Col>
                <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Circle color='#FF9B46' size={12} />
                </Col>
                <Col span={6} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Text style={{ textAlign: "center" }}>TaxRay AI</Text>
                </Col>
            </Row>
            <Row style={{ width: "100%" }}>
                <Col span={14} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Space style={{ width: "100%", justifyContent: "space-between", padding: "0% 5%" }}>
                        <Text size='sm' style={{ textAlign: "center" }}>UK</Text>
                        <Text size='sm' style={{ textAlign: "center" }}>$18,430,891</Text>
                        <Text size='sm' style={{ textAlign: "center" }}>Permanent Establishment</Text>
                    </Space>
                </Col>
                <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Circle color='#FD5526' size={12} />
                </Col>
                <Col span={6} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Text style={{ textAlign: "center" }}>Opinion - EY</Text>
                </Col>
            </Row>
            <Row style={{ width: "100%" }}>
                <Col span={14} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Space style={{ width: "100%", justifyContent: "space-between", padding: "0% 5%" }}>
                        <Text size='sm' style={{ textAlign: "center" }}>USA</Text>
                        <Text size='sm' style={{ textAlign: "center" }}>$28,297,000</Text>
                        <Text size='sm' style={{ textAlign: "center" }}>State tax (Remote workers)</Text>
                    </Space>
                </Col>
                <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Circle color='#F8D000' size={12} />
                </Col>
                <Col span={6} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    <Text style={{ textAlign: "center" }}>Memo - Deloitte</Text>
                </Col>
            </Row>

        </Card>
    )
}

export default UTPCountryTable