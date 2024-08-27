import { Card, ConfigProvider, Skeleton, Space, ThemeConfig } from "antd";
import { Text } from "components/Text";
import React from "react";

export const BoardUTPCard: React.FC<{
    isLoading: boolean;
    openUTPs?: string;
    totalNetExposure: string;
    matThresh: string;
}> = ({ openUTPs, isLoading, totalNetExposure, matThresh }) => {

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
                        <ConfigProvider theme={openSansConfig}>
                            <Text
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    textAlign: "start",
                                    marginLeft: "7%",
                                    fontVariantNumeric: "tabular-nums",
                                    color: "#FA5847"
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
                                    45
                                )}
                            </Text>
                        </ConfigProvider>
                        <Text size="md" type='secondary' className="secondary" style={{ marginLeft: "8px" }}>
                            Open UTPs
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
            <div>
                <Space direction='vertical' size={3} style={{ marginTop: "3%" }}>
                    <ConfigProvider theme={openSansConfig}>
                        <Text
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                                textAlign: "start",
                                marginLeft: "5%",
                                fontVariantNumeric: "tabular-nums",
                                color: "#FA5847"
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
                                totalNetExposure
                            )}
                        </Text>

                    </ConfigProvider>
                    <Text size="md" type='secondary' className="secondary" style={{ marginLeft: "8px" }}>
                        Total net exposure
                    </Text>
                </Space>
            </div>
            <div>
                <Space direction='vertical' size={3} style={{ width: "100%", marginTop: "3%" }}>
                    <ConfigProvider theme={openSansConfig}>
                        <Text
                            style={{
                                fontSize: "20px",
                                fontWeight: "600",
                                textAlign: "start",
                                marginLeft: "1%",
                                fontVariantNumeric: "tabular-nums",
                                color: "#FA5847"
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
                                matThresh
                            )}
                        </Text>

                    </ConfigProvider>
                    <Text size="md" type='secondary' className="secondary" style={{ marginLeft: "8px" }}>
                        Materiality threshold
                    </Text>
                </Space>
            </div>
            {/* </div> */}
        </Card >
    )
}