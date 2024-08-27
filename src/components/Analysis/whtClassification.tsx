import { ArrowRightOutlined, CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled } from '@ant-design/icons'
import { Col, List, Row, Space } from 'antd'
import { Text } from 'components/Text'
import React from 'react'

const WhtClassification = () => {
    return (
        <div>
            <div className="page-container">
                <h2 style={{ marginLeft: "0.75%" }}>Withholding Tax - Transaction Classification</h2>
                <Row gutter={[64, 64]}>

                    <Col xl={14}>
                        <Row style={{ alignSelf: "center" }}><h2 style={{ marginLeft: "8px", marginTop: "8px" }}>Contract & US Law</h2></Row>
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={6} style={{ alignContent: "center" }}>
                                <Row>

                                    <Space direction="horizontal">
                                        <CheckCircleFilled style={{ color: "#FD5526", fontSize: "14px" }} />

                                        <Text size='md' strong>Transfer of copyright rights</Text>
                                    </Space>
                                </Row>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>
                                <ArrowRightOutlined style={{ fontSize: "24px" }} />
                            </Col>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%", alignContent: "center" }}>
                                <Space direction="horizontal">
                                    <CloseCircleFilled style={{ color: "#FD5526" }} />
                                    <div style={{ display: "block" }}>
                                        <div><Text strong size='md'>Transfer of substantial right in the copyright</Text></div>
                                        {/* <div><Text strong size="md"> in the copyright</Text></div> */}
                                    </div>
                                </Space>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>
                                <ArrowRightOutlined style={{ fontSize: "24px" }} />
                            </Col>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%", alignContent: "center" }}>
                                <Space direction="horizontal">
                                    <ExclamationCircleFilled style={{ color: "#FD5526" }} />
                                    <Text size='md' strong>License transaction (Royalties income)</Text>
                                </Space>
                            </Col>
                            <Col xl={1} style={{ padding: "0px", paddingTop: "0.5%" }}>
                                <ArrowRightOutlined style={{ marginTop: "5%", fontSize: "30px" }}></ArrowRightOutlined>
                            </Col>
                        </Row>
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={6}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <br />
                                    <Space direction="horizontal">
                                        <CheckCircleFilled style={{ color: "#FD5526" }} />
                                        <Text>Right to make copies for purpose of distribution to the public</Text>
                                    </Space>
                                    <Space direction="horizontal">

                                        <CloseCircleFilled style={{ color: "#14BA6D" }} />
                                        <Text>Right to prepare derivative computer programs from the program</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <Space direction="horizontal">
                                        <CloseCircleFilled style={{ color: "#14BA6D" }} />
                                        <Text>Right to make public performance of the computer program</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <Space direction="horizontal">
                                        <CheckCircleFilled style={{ color: "#FD5526" }} />
                                        <Text>Right to publicly display the computer program</Text>
                                    </Space>
                                    <br />
                                </Space>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>

                            </Col>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%", alignContent: "center" }}>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>

                            </Col>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%", alignContent: "center" }}>
                                <Text>30% US WHT</Text>
                            </Col>
                        </Row>
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%" }}>
                                <Row>

                                    <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                        <Space direction="horizontal">
                                            <Text strong> Found in contract sections 2.1 & 4.13</Text>
                                        </Space>
                                        <Space direction="horizontal">
                                            <Text strong>IRC,S. 1.861-18(c)(2)(i)+(iv)</Text>
                                            {/* <Text strong> - Not found</Text> */}
                                        </Space>
                                    </Space>
                                </Row>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>
                            </Col>
                            <Col xs={24} xl={6} style={{ alignContent: "center" }}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <Text strong> Found in contract section 3.8</Text>
                                    </Space>
                                </Space>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>
                            </Col>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%", alignContent: "center" }}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <Text strong>IRC,S. 861(a)(4)</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                    {/* <Col xl={1} style={{ padding: "0px", paddingTop: "4.7%", paddingRight: "4%" }}>
                        <ArrowRightOutlined style={{ marginTop: "5%", fontSize: "24px" }}></ArrowRightOutlined>
                    </Col> */}
                    <Col xl={10} style={{ textAlign: "center" }}>
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={6}>
                                {/* <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <div style={{ display: "block" }}>
                                            <div><Text strong size='md'>W8</Text></div>
                                            <Text strong size='md'>Form</Text>
                                        </div>
                                    </Space>


                                </Space> */}
                            </Col>
                            <Col xl={12} style={{ padding: "0px", paddingTop: "0.5%" }}>
                                <h2 style={{ marginTop: "8px" }}>Tax Treaty Benefit</h2>
                            </Col>
                            <Col xs={24} xl={6}>
                                {/* <Space direction="horizontal">
                                    <div style={{ display: "block" }}>
                                        <div><Text strong size='md'>Tax</Text></div>
                                        <Text strong size='md'>Treaty</Text>
                                    </div>
                                </Space> */}
                            </Col>
                        </Row>
                        {/* <Row><h2 style={{ marginTop: "8px" }}>Tax Treaty Benefit</h2></Row> */}
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={2}>
                                {/* <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <div style={{ display: "block" }}>
                                            <div><Text strong size='md'>W8</Text></div>
                                            <Text strong size='md'>Form</Text>
                                        </div>
                                    </Space>


                                </Space> */}
                            </Col>
                            <Col xs={24} xl={9}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <div style={{ display: "block" }}>
                                            <div><Text strong size='md'>W8</Text></div>
                                            <Text strong size='md'>Form</Text>
                                        </div>
                                    </Space>


                                </Space>
                            </Col>
                            <Col xl={3} style={{ padding: "0px", paddingTop: "0.5%" }}>
                                <ArrowRightOutlined style={{ marginTop: "5%", fontSize: "30px" }}></ArrowRightOutlined>
                            </Col>
                            <Col xs={24} xl={9} style={{ marginLeft: "4%" }}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <div style={{ display: "block" }}>
                                            <div><Text strong size='md'>Tax</Text></div>
                                            <Text strong size='md'>Treaty</Text>
                                        </div>
                                    </Space>


                                </Space>
                            </Col>
                        </Row>
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={2}>
                                {/* <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <div style={{ display: "block" }}>
                                            <div><Text strong size='md'>W8</Text></div>
                                            <Text strong size='md'>Form</Text>
                                        </div>
                                    </Space>


                                </Space> */}
                            </Col>
                            <Col xs={24} xl={9}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", justifyContent: "space-between" }}>
                                    <br />
                                    <Space direction="horizontal">
                                        <Text>Entity: </Text>
                                        <Text strong>Zensar Technologies Limited</Text>
                                    </Space>
                                    <Space direction="horizontal">
                                        <Text>Vendor declaration: </Text>
                                        <Text strong>No Permanent Establishment in the US</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <Space direction="horizontal">
                                        <Text>Resident of: </Text>
                                        <Text strong>India</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <Space direction="horizontal">
                                        <Text>TIN </Text>
                                        <CheckCircleFilled style={{ color: "#14BA6D" }} />
                                        <Text strong>Valid</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <br />
                                </Space>
                            </Col>
                            <Col xs={24} xl={3} style={{ alignContent: "center" }}>
                            </Col>
                            <Col xs={24} xl={9} style={{ marginLeft: "4%", marginTop: "5%" }}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <Text>US - India</Text>
                                    </Space>
                                    <Space direction="horizontal">
                                        <Text>Rate: 20% </Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <br />
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export const WhtIdealClassification = () => {
    return (
        <div>
            <div className="page-container">
                <h2 style={{ marginLeft: "0.75%" }}>Withholding Tax - Transaction Classification</h2>
                <Row gutter={[64, 64]}>

                    <Col xl={14}>
                        <Row><h2 style={{ marginLeft: "8px", marginTop: "8px" }}>Contract & US Law</h2></Row>
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={6} style={{ alignContent: "center" }}>
                                <Row>

                                    <Space direction="horizontal">
                                        <CloseCircleFilled style={{ color: "#14BA6D", fontSize: "14px" }} />

                                        <Text size='md' strong>Transfer of copyright rights</Text>
                                    </Space>
                                </Row>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>
                                <ArrowRightOutlined style={{ fontSize: "24px" }} />
                            </Col>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%", alignContent: "center" }}>
                                <Space direction="horizontal">
                                    <CloseCircleFilled style={{ color: "#14BA6D" }} />
                                    <div style={{ display: "block" }}>
                                        <div><Text strong size='md'>Transfer of substantial right in the copyright</Text></div>
                                        {/* <div><Text strong size="md"> in the copyright</Text></div> */}
                                    </div>
                                </Space>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>
                                <ArrowRightOutlined style={{ fontSize: "24px" }} />
                            </Col>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%", alignContent: "center" }}>
                                <Space direction="horizontal">
                                    <CloseCircleFilled style={{ color: "#14BA6D" }} />
                                    <Text size='md' strong>Service transaction</Text>
                                </Space>
                            </Col>
                            <Col xl={1} style={{ padding: "0px", paddingTop: "0.5%" }}>
                                <ArrowRightOutlined style={{ marginTop: "5%", fontSize: "30px" }}></ArrowRightOutlined>
                            </Col>
                        </Row>
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={6}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <br />
                                    <Space direction="horizontal">
                                        <CloseCircleFilled style={{ color: "#14BA6D" }} />
                                        <Text>Right to make copies for purpose of distribution to the public</Text>
                                    </Space>
                                    <Space direction="horizontal">

                                        <CloseCircleFilled style={{ color: "#14BA6D" }} />
                                        <Text>Right to prepare derivative computer programs from the program</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <Space direction="horizontal">
                                        <CloseCircleFilled style={{ color: "#14BA6D" }} />
                                        <Text>Right to make public performance of the computer program</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <Space direction="horizontal">
                                        <CloseCircleFilled style={{ color: "#14BA6D" }} />
                                        <Text>Right to publicly display the computer program</Text>
                                    </Space>
                                    <br />
                                </Space>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>

                            </Col>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%", alignContent: "center" }}>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>

                            </Col>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%", alignContent: "center" }}>
                                <Text>30% US WHT</Text>
                            </Col>
                        </Row>
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%" }}>
                                <Row>

                                    <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                        <Space direction="horizontal">
                                            <Text strong> Found in contract sections 5.7</Text>
                                        </Space>
                                        <Space direction="horizontal">
                                            <Text strong>IRC,S. 1.861-18(c)(2)</Text>
                                            {/* <Text strong> - Not found</Text> */}
                                        </Space>
                                    </Space>
                                </Row>
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>
                            </Col>
                            <Col xs={24} xl={6} style={{ alignContent: "center" }}>
                                {/* <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <Text strong> Found in contract section 3.8</Text>
                                    </Space>
                                </Space> */}
                            </Col>
                            <Col xs={24} xl={1} style={{ alignContent: "center" }}>
                            </Col>
                            <Col xs={24} xl={6} style={{ marginLeft: "1%", alignContent: "center" }}>
                                {/* <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <Text strong>IRC,S. 861(a)(4)</Text>
                                    </Space>
                                </Space> */}
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={10}>
                        <Row><h2 style={{ marginTop: "8px" }}>Tax Treaty Benefit</h2></Row>
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={11}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <div style={{ display: "block" }}>
                                            <div><Text strong size='md'>W8</Text></div>
                                            <Text strong size='md'>Form</Text>
                                        </div>
                                    </Space>


                                </Space>
                            </Col>
                            <Col xl={3} style={{ padding: "0px", paddingTop: "0.5%" }}>
                                <ArrowRightOutlined style={{ marginTop: "5%", fontSize: "30px" }}></ArrowRightOutlined>
                            </Col>
                            <Col xs={24} xl={9} style={{ marginLeft: "4%" }}>
                                <Space direction="horizontal">
                                    <div style={{ display: "block" }}>
                                        <div><Text strong size='md'>Tax</Text></div>
                                        <Text strong size='md'>Treaty</Text>
                                    </div>
                                </Space>
                            </Col>
                        </Row>
                        <Row gutter={[32, 32]}>
                            <Col xs={24} xl={11}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", justifyContent: "space-between" }}>
                                    <br />
                                    <Space direction="horizontal">
                                        <Text>Entity: </Text>
                                        <Text strong>Figma Ireland LTD</Text>
                                    </Space>
                                    <Space direction="horizontal">
                                        <Text>Vendor declaration: </Text>
                                        <Text strong>No Permanent Establishment in the US</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <Space direction="horizontal">
                                        <Text>Resident of: </Text>
                                        <Text strong>Ireland</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <Space direction="horizontal">
                                        <Text>TIN </Text>
                                        <CheckCircleFilled style={{ color: "#14BA6D" }} />
                                        <Text strong>Valid</Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <br />
                                </Space>
                            </Col>
                            <Col xs={24} xl={3} style={{ alignContent: "center" }}>
                            </Col>
                            <Col xs={24} xl={9} style={{ marginLeft: "4%", marginTop: "5%" }}>
                                <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                                    <Space direction="horizontal">
                                        <Text>US - Ireland</Text>
                                    </Space>
                                    <Space direction="horizontal">
                                        <Text>Rate: 0% </Text>
                                        {/* <Text strong> - Not found</Text> */}
                                    </Space>
                                    <br />
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default WhtClassification