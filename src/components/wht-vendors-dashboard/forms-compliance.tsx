import { CheckCircleTwoTone } from '@ant-design/icons'
import { Card, Col, ConfigProvider, Row, ThemeConfig } from 'antd'
import { Text } from 'components/Text'
import React from 'react'

const openSansConfig: ThemeConfig = {
    components: {
        Typography: {
            fontFamily: 'Open Sans',
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        },
        Progress: {
            colorText: "#000",
        }
    },
};

const FormsCompliance = () => {
    return (
        <ConfigProvider theme={openSansConfig}>
            <Card style={{ height: "56%", marginTop: "1%", padding: "0px 0px 0px 5px", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}>
                {/* <Row>
                    <Col span={24}>
                        <h3 style={{ textAlign: "center" }}>Forms Compliance</h3>
                    </Col>

                </Row> */}
                <Row style={{ marginTop: "-4%" }}>
                    <Col span={24}>
                        <h4 style={{ textAlign: "center" }}>1042-S</h4>
                    </Col>

                </Row>
                <Row style={{ width: "100%", marginTop: "1%" }}>
                    <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>

                    </Col>
                    <Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>Q1</Text>
                    </Col>
                    <Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>Q2</Text>
                    </Col><Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>Q3</Text>
                    </Col><Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>Q4</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>Vendors</Text>
                    </Col>
                    <Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <CheckCircleTwoTone color='blue' style={{ textAlign: "center" }} />
                    </Col>
                    <Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <CheckCircleTwoTone color='blue' style={{ textAlign: "center" }} />
                    </Col><Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    </Col><Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>IRS</Text>
                    </Col>
                    <Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <CheckCircleTwoTone color='blue' style={{ textAlign: "center" }} />
                    </Col>
                    <Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <CheckCircleTwoTone color='blue' style={{ textAlign: "center" }} />
                    </Col><Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    </Col><Col span={5} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} style={{ marginTop: "1%", textAlign: "center" }}>
                        <h4 style={{ textAlign: "center" }}>1042</h4>
                    </Col>

                </Row>
                <Row style={{ width: "100%", marginTop: "1%" }}>
                    <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>

                    </Col>
                    <Col span={10} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>2023</Text>
                    </Col>
                    <Col span={10} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>2024</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>IRS</Text>
                    </Col>
                    <Col span={10} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <CheckCircleTwoTone color='blue' style={{ textAlign: "center" }} />
                    </Col>
                    <Col span={10} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <CheckCircleTwoTone color='blue' style={{ textAlign: "center" }} />
                    </Col>
                </Row>

                <Row>
                    <Col span={24} style={{ marginTop: "1%", textAlign: "center" }}>
                        <h4 style={{ textAlign: "center" }}>W8</h4>
                    </Col>

                </Row>
                <Row style={{ width: "100%", marginTop: "1%" }}>
                    <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>

                    </Col>
                    <Col span={10} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>Collected</Text>
                    </Col>
                    <Col span={10} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>Missing</Text>
                    </Col>
                </Row>
                <Row>
                    <Col span={4} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>Vendors</Text>
                    </Col>
                    <Col span={10} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>55%</Text>
                    </Col>
                    <Col span={10} style={{ border: "1px solid #A5A5A5", textAlign: "center" }}>
                        <Text style={{ textAlign: "center" }}>45%</Text>
                    </Col>
                </Row>

            </Card>
        </ConfigProvider>
    )
}

export default FormsCompliance