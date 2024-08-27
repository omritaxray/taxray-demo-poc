import { ArrowRightOutlined, CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons'
import { Space } from 'antd'
import { Text } from 'components/Text'
import React from 'react'

const TaxAnalysisReviewBad = () => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <h2 style={{ marginLeft: "8px", marginTop: "8px" }}>Tax Analysis - WHT Review</h2>
            <div className="ant-space-item"
                style={{ textAlign: "center" }}>
                <Space direction="horizontal" style={{ textAlign: "center", width: "90%", justifyContent: "space-between" }} size={32}>
                    <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                        <Space direction="horizontal">
                            <ExclamationCircleFilled style={{ color: "#FD5526" }} />
                            <Text>Right to make copies for purpose of distribution to the public</Text>
                            <Text strong> Found in section 2.1</Text>
                        </Space>
                        <Space direction="horizontal">
                            <CheckCircleFilled style={{ color: "#14BA6D" }} />
                            <Text>No right to prepare derivative computer programs from the program</Text>
                            {/* <Text strong> - Not found</Text> */}
                        </Space>
                        <Space direction="horizontal">
                            <CheckCircleFilled style={{ color: "#14BA6D" }} />
                            <Text>No right to make public performance of the computer program</Text>
                            {/* <Text strong> - Not found</Text> */}
                        </Space>
                        <Space direction="horizontal">
                            <ExclamationCircleFilled style={{ color: "#FD5526" }} />
                            <Text>Right to publicly display the computer program</Text>
                            <Text strong> Found in section 4.13</Text>
                        </Space>
                    </Space>
                    <br></br>
                    <ArrowRightOutlined style={{ fontSize: "30px" }} />
                    <br></br>
                    <Space direction="vertical" align="baseline" style={{ textAlign: "center", width: "100%", justifyContent: "space-between" }}>
                        <Space direction="horizontal">
                            <ExclamationCircleFilled style={{ color: "#FD5526" }} />

                            <div>
                                <Text size="sm">"License of copyright rights" was found in </Text>
                                <Text strong size="sm">section 3.8 - "Non-exclusive term license for period of 12 months"</Text>
                            </div>
                            {/* <Text strong> - Not found</Text> */}
                        </Space>
                        {/* <Space direction="horizontal">
                                            <CheckCircleFilled style={{ color: "#14BA6D" }} />

                                            <Text>Yes: "Sale of copyright rights" no withholding</Text>
                                            <Text strong> - Not found</Text>
                                        </Space>
                                        <Space direction="horizontal">
                                            <CheckCircleFilled style={{ color: "#14BA6D" }} />

                                            <Text>No: "License of copyright rights" yes withholding</Text>
                                            <Text strong> - Not found</Text>
                                        </Space> */}

                    </Space>
                    <br></br>
                    <ArrowRightOutlined style={{ fontSize: "30px" }} />
                    <br></br>
                    <Space direction="vertical" style={{ textAlign: "center", width: "100%", justifyContent: "center" }}>
                        <div className="ant-space-item"
                            style={{ textAlign: "center", display: "flex" }}>
                            <Space direction="horizontal" align="baseline" style={{ textAlign: "center", width: "100%", justifyContent: "center" }}>
                                <ExclamationCircleFilled style={{ color: "#FD5526", fontSize: "20px" }} />
                                <h3>Transaction is subject to withholding Taxes</h3>
                            </Space>
                        </div>
                        <div>
                            <Text size="md">According to [IRS something something something: ASK HAGIT FOR TEXT],</Text>
                            <Text strong size="md">this is a royalties transaction, and is subjected to Withholding Tax</Text>
                        </div>


                        {/* <Text>NO: Is there a transfer of the benefits and burdens of ownership</Text>
                                        <Text>Yes: "Sale of copyrighted article" no withholding</Text>
                                        <Text>No: "Lease of copyrighted article" no withholding</Text> */}

                    </Space>
                </Space>
            </div>
            <br></br>
        </Space>
    )
}

export default TaxAnalysisReviewBad