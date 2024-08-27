import { Card, Space } from 'antd'
import { Text } from 'components/Text'
import React from 'react'

const AmountsRecorded = () => {
    return (
        <Card
            style={{ width: "100%", padding: 0, backgroundColor: "#FAFAFA", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}

            size="small"
        >
            <div
            >
                <Space direction='vertical' size={5} style={{ width: "100%" }}>
                    {/* <Text size="sm" className="secondary" style={{ marginLeft: "8px" }}>Totals</Text> */}

                    <Text
                        style={{
                            width: "100%",
                            fontSize: "18px",
                            fontWeight: "600",
                            marginLeft: "1%",
                            color: "#858585"
                        }}
                    >

                        Amounts recorded for tax positions

                    </Text>
                    <Text size="md" type='secondary' className="secondary" style={{
                        width: "100%",
                        fontSize: "20px",
                        fontWeight: "600",
                        marginLeft: "1%",
                        color: "#000"
                    }}>
                        $33,393,500
                    </Text>
                    <Space style={{ width: "100%" }}>
                        <Text size="md" type='secondary' className="secondary" style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "8px",
                            color: "#FA5847"
                        }}>
                            90%
                        </Text>
                        <Text size="md" type='secondary' className="secondary" style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "8px",
                        }}>
                            High Risk
                        </Text>
                    </Space>
                    <Space>
                        <Text size="md" type='secondary' className="secondary" style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#FA5847",
                            marginLeft: "8px"
                        }}>
                            10%
                        </Text>
                        <Text size="md" type='secondary' className="secondary" style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "8px",
                        }}>
                            Medium risk
                        </Text>
                    </Space>
                </Space>
            </div>
        </Card>
    )
}

export const AmountsRecordedComparison = () => {
    return (
        <Card
            style={{ width: "100%", padding: 0, backgroundColor: "#FAFAFA", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}

            size="small"
        >
            <div
            >
                <Space direction='vertical' size={5} style={{ width: "100%" }}>
                    {/* <Text size="sm" className="secondary" style={{ marginLeft: "8px" }}>Totals</Text> */}

                    <Text
                        style={{
                            width: "100%",
                            fontSize: "20px",
                            fontWeight: "600",
                            marginLeft: "1%",
                            color: "#858585"
                        }}
                    >

                        Amounts recorded for tax positions (2023)

                    </Text>
                    <Space direction='vertical' style={{ width: "100%", marginLeft: "1%" }}>
                        <Text size="md" type='secondary' className="secondary" style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#353535"
                        }}>
                            Last year (2023)
                        </Text>
                        <Space style={{ width: "100%" }}>
                            <Text size="md" type='secondary' className="secondary" style={{
                                width: "100%",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#000"
                            }}>
                                recorded: $33,393,500
                            </Text>
                            <Text size="md" type='secondary' className="secondary" style={{
                                width: "100%",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#000"
                            }}>
                                out of: $63,800,500 UTPs
                            </Text>
                        </Space>
                    </Space>
                    <Text size="md" type='secondary' className="secondary" style={{
                        width: "100%",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginLeft: "1%",
                        color: "#555555"
                    }}>
                        Distribution by risk level:
                    </Text>
                    <Space style={{ width: "100%" }}>
                        <Text size="md" type='secondary' className="secondary" style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "8px",
                            color: "#FA5847"
                        }}>
                            90%
                        </Text>
                        <Text size="md" type='secondary' className="secondary" style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "8px",
                        }}>
                            High Risk
                        </Text>
                    </Space>
                    <Space>
                        <Text size="md" type='secondary' className="secondary" style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#FA5847",
                            marginLeft: "8px"
                        }}>
                            10%
                        </Text>
                        <Text size="md" type='secondary' className="secondary" style={{
                            width: "100%",
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "8px",
                        }}>
                            Medium risk
                        </Text>
                    </Space>
                </Space>
            </div>
        </Card>
    )
}

export default AmountsRecorded