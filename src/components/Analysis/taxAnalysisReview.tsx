import { ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons'
import { Space } from 'antd'
import { Text } from 'components/Text'
import React from 'react'

const TaxAnalysisReview = () => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <h2 style={{ marginLeft: "8px", marginTop: "8px" }}>Tax Analysis - Review No WHT Example</h2>
            <div className="ant-space-item"
                style={{ textAlign: "center" }}>
                <Space direction="horizontal" style={{ textAlign: "center", width: "90%", justifyContent: "space-between" }} size={32}>
                    <Space direction="vertical" align="baseline" style={{ textAlign: "start", width: "100%", justifyContent: "space-between" }}>
                        <Space direction="horizontal">
                            <CheckCircleFilled style={{ color: "#14BA6D" }} />
                            <Text>No right to make copies for purpose of distribution to the public</Text>
                            {/* <Text strong> - Not found</Text> */}
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
                            <CheckCircleFilled style={{ color: "#14BA6D" }} />
                            <Text>No right to publicly display the computer program</Text>
                            {/* <Text strong> - Not found</Text> */}
                        </Space>
                    </Space>
                    <br></br>

                    <ArrowRightOutlined style={{ fontSize: "30px" }} />
                    <br></br>
                    <Space direction="vertical" align="baseline" style={{ textAlign: "center", width: "100%", justifyContent: "space-between" }}>
                        <Space direction="horizontal">
                            <CheckCircleFilled style={{ color: "#14BA6D" }} />

                            <Text>There is a transfer of the benefits and burdens of ownership</Text>
                            {/* <Text strong> Found</Text> */}
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



                        {/* <Text>NO: Is there a transfer of the benefits and burdens of ownership</Text>
                                        <Text>Yes: "Sale of copyrighted article" no withholding</Text>
                                        <Text>No: "Lease of copyrighted article" no withholding</Text> */}

                    </Space>
                    <br></br>
                    <ArrowRightOutlined style={{ fontSize: "30px" }} />
                    <br></br>
                    <Space direction="vertical" style={{ textAlign: "center", width: "100%", justifyContent: "center" }}>
                        <div className="ant-space-item"
                            style={{ textAlign: "center", display: "flex" }}>
                            <Space direction="horizontal" align="baseline" style={{ textAlign: "center", width: "100%", justifyContent: "center" }}>
                                <CheckCircleFilled style={{ color: "#14BA6D", fontSize: "20px" }} />
                                <h3>Transaction is not subject to withholding Taxes</h3>
                            </Space>
                        </div>
                        <div>
                            <Text size="md">According to [IRS something something something: ASK HAGIT FOR TEXT],</Text>
                            <Text strong size="md">This transaction is classified as "Sale of copyrighted article"</Text>
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

export default TaxAnalysisReview