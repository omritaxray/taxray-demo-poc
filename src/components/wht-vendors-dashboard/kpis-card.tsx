import { DollarOutlined, RightCircleOutlined } from '@ant-design/icons'
import { Button, Card, ConfigProvider, Divider, Skeleton, Space, Tag, ThemeConfig } from 'antd'
import { Text } from 'components/Text'
import React from 'react'

const WHTVendorsKPIsCard: React.FC<{
    isLoading: boolean;
    totalCount?: string;
    cardTitle: string;
    cardSubtitle: string;
    trend: string;
}> = ({ totalCount, isLoading, cardTitle, cardSubtitle, trend }) => {

    const openSansConfig: ThemeConfig = {
        token: { fontFamilyCode: 'Open Sans' },
        components: {
            Typography: {
                colorText: "#000",
                colorTextDescription: "rgba(0, 0, 0, 0.65)",
                colorTextDisabled: "rgba(0, 0, 0, 0.45)",
            }
        },
    };

    const robotoConfig: ThemeConfig = {
        token: { fontFamilyCode: 'Roboto' },
        components: {
            Typography: {
                colorText: "#037847",
                colorTextDescription: "rgba(0, 0, 0, 0.65)",
                colorTextDisabled: "rgba(0, 0, 0, 0.45)",
            }
        },
    };

    return (
        <Card
            style={{ height: "100%", width: "100%", padding: 0, marginRight: "20px", backgroundColor: "#FAFAFA", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}
            bodyStyle={{
                padding: "3% 8px 4% 12px",
            }}
            size="small"
        >
            <ConfigProvider theme={openSansConfig}>
                <div
                >
                    <Space direction='vertical'>

                        <Text size="xl" className="secondary" style={{ marginLeft: "8px" }}>
                            {cardTitle}
                        </Text>
                        <Text size="md" type='secondary' className="secondary" style={{ marginLeft: "8px" }}>
                            {cardSubtitle}
                        </Text>
                    </Space>
                </div>

                <div style={{ width: "93%" }}>
                    <Divider style={{ borderColor: "#C0C0C0", marginLeft: "2%", marginRight: "20%" }}></Divider>
                </div>
            </ConfigProvider>
            {/* <div
                style={{
                    display: "flex",
                    // justifyContent: "space-between",
                }}
            > */}
            <Space>
                <ConfigProvider theme={openSansConfig}>
                    <Text
                        style={{
                            fontSize: "18px",
                            fontWeight: "600",
                            textAlign: "start",
                            marginLeft: "12px",
                            fontVariantNumeric: "tabular-nums",
                        }}
                    >
                        {isLoading ? (
                            <Skeleton.Button
                                style={{
                                    marginTop: "8px",
                                    width: "74px",
                                }}
                            />
                        ) : (
                            totalCount
                        )}
                    </Text>
                </ConfigProvider>
                <Tag color='#ECFDF3'><ConfigProvider theme={robotoConfig}><Text style={{ fontSize: "14px" }}>{trend}</Text></ConfigProvider></Tag>
            </Space>
            {/* </div> */}
        </Card >
    )
}

export const WHTVendorsTasksCard: React.FC<{
    isLoading: boolean;
    totalCount?: string;
    cardTitle: string;
    cardSubtitle: string;
    trend: string;
}> = ({ totalCount, isLoading, cardTitle, cardSubtitle, trend }) => {

    const openSansConfig: ThemeConfig = {
        token: { fontFamilyCode: 'Open Sans' },
        components: {
            Typography: {
                colorText: "#000",
                colorTextDescription: "rgba(0, 0, 0, 0.65)",
                colorTextDisabled: "rgba(0, 0, 0, 0.45)",
            }
        },
    };

    const robotoConfig: ThemeConfig = {
        token: { fontFamilyCode: 'Roboto' },
        components: {
            Typography: {
                colorText: "#037847",
                colorTextDescription: "rgba(0, 0, 0, 0.65)",
                colorTextDisabled: "rgba(0, 0, 0, 0.45)",
            }
        },
    };

    return (
        <Card
            style={{ height: "100%", width: "100%", padding: 0, backgroundColor: "#FAFAFA", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)" }}

            size="small"
        >
            <ConfigProvider theme={openSansConfig}>
                <div
                >
                    <Space direction='vertical' size={5}>
                        <Text size="sm" className="secondary" style={{ marginLeft: "8px" }}>Totals</Text>
                        <ConfigProvider theme={openSansConfig}>
                            <Text
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    textAlign: "start",
                                    marginLeft: "12px",
                                    fontVariantNumeric: "tabular-nums",
                                }}
                            >
                                {isLoading ? (
                                    <Skeleton.Button
                                        style={{
                                            marginTop: "8px",
                                            width: "74px",
                                        }}
                                    />
                                ) : (
                                    totalCount
                                )}
                            </Text>
                        </ConfigProvider>
                        <Text size="md" type='secondary' className="secondary" style={{ marginLeft: "8px" }}>
                            {cardSubtitle}
                        </Text>
                    </Space>
                </div>
            </ConfigProvider>
            {/* <div
                style={{
                    display: "flex",
                    // justifyContent: "space-between",
                }}
            > */}
            <Space direction='vertical' size={3}>
                <ConfigProvider theme={openSansConfig}>
                    <Text
                        style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            textAlign: "start",
                            marginLeft: "12px",
                            fontVariantNumeric: "tabular-nums",
                        }}
                    >
                        {isLoading ? (
                            <Skeleton.Button
                                style={{
                                    marginTop: "8px",
                                    width: "74px",
                                }}
                            />
                        ) : (
                            30
                        )}
                    </Text>

                </ConfigProvider>
                <Text size="md" type='secondary' className="secondary" style={{ marginLeft: "8px" }}>
                    Open risks
                </Text>
            </Space>
            {/* </div> */}
        </Card >
    )
}

export default WHTVendorsKPIsCard