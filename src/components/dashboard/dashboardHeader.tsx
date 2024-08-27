import { Card, ConfigProvider, Divider, Space, ThemeConfig } from 'antd'
import { Text } from 'components/Text'
import React from 'react'
import KPIsCard from './kpis-card'
import DashboardBackground from './DashboardBackground.png'
import { ThemeProvider } from '@emotion/react'

const themeConfig: ThemeConfig = {

    components: {
        Typography: {
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const textConfig: ThemeConfig = {
    token: { fontFamily: "'Poppins', 'Inter', 'Open Sans'" },
    components: {
        Typography: {
            colorText: "#ffffff",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
            fontFamily: "Poppins",
        }
    },
};

const openSansConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Open Sans' },
    // components: {
    //     Typography: {
    //         colorText: "#646464",
    //         colorTextDescription: "rgba(0, 0, 0, 0.65)",
    //         colorTextDisabled: "rgba(0, 0, 0, 0.45)",
    //     }
    // },
};

const openSansWhiteConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Open Sans' },
    components: {
        Typography: {
            colorText: "#FFF",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const robotoConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Roboto' },
    components: {
        Typography: {
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const robotoWhiteConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Roboto' },
    components: {
        Typography: {
            colorText: "#FFF",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const interConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Inter' },
    components: {
        Typography: {
            colorText: "#646464",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const DashboardHeader: React.FC = () => {
    return (
        <div style={{ width: "100%", height: "100%", marginLeft: "45px", zIndex: 0 }}>
            <Card

                style={{ width: "90%", marginRight: "3px", }}
                bodyStyle={{
                    padding: "0px 8px 0px 12px",
                }}
                headStyle={{ padding: 0, position: "absolute", zIndex: 1, marginLeft: "3.5%" }}
                size="small"
                cover={<img alt="example" src={DashboardBackground} style={{
                }} />}
                title={
                    <ConfigProvider theme={robotoWhiteConfig}>
                        <Space size={1} direction='vertical' style={{ marginTop: "16px", zIndex: 1, position: "absolute" }}>
                            <Text style={{ fontSize: "32px", fontWeight: "600" }}>
                                Dashboard
                            </Text>
                            <Text style={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: "500" }}>
                                Monitor
                            </Text>
                        </Space>
                    </ConfigProvider>
                }
            >
            </Card>
            <div style={{ width: "90%", height: "100%", marginLeft: "3.5%" }}>
                <div style={{ width: "110%", marginTop: "-8%", display: "flex" }}>
                    <KPIsCard isLoading={false} totalCount={"32.7%"} trend={"-0.78%"} cardTitle='ETR' cardSubtitle='Consolidated ETR' />
                    <KPIsCard isLoading={false} totalCount={"$61,172"} trend="+12.65%" cardTitle='Total Savings - Compliance' cardSubtitle='from 1 January 2024' />
                    <KPIsCard isLoading={false} totalCount={"$313,303"} trend={"+27.31%"} cardTitle='Total Savings - Strategy' cardSubtitle='from 1 January 2024' />
                </div>
            </div>

            {/* <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                    }}
                >
                    <Space direction='vertical'>

                        <Text size="xl" className="secondary" style={{ marginLeft: "8px" }}>
                            METRIC 1
                        </Text>
                        <Text size="md" type='secondary' className="secondary" style={{ marginLeft: "8px" }}>
                            Subtitle
                        </Text>
                    </Space>
                </div>
                <div
                    style={{
                        // display: "flex",
                        // justifyContent: "space-between",
                    }}
                >
                    <Divider></Divider>
                    <Text
                        size="xxxl"
                        strong
                        style={{
                            textAlign: "start",
                            marginLeft: "48px",
                            fontVariantNumeric: "tabular-nums",
                        }}
                    >
                    </Text>
                </div>
                <Space direction='horizontal' size={100}
                    style={{
                        width: "80%",
                        justifyContent: "space-evenly",
                        margin: "20px 0px",
                    }}>
                    <KPIsCard isLoading={false} totalCount={4} cardTitle='ETR' cardSubtitle='ETR of the entire group' />
                    <KPIsCard isLoading={false} totalCount={4} cardTitle='Total Savings' cardSubtitle='from 1 January 2024' />
                    <KPIsCard isLoading={false} totalCount={4} cardTitle='High Risk Transactions' cardSubtitle='from 1 January 2024' />
                </Space> */}
        </div>
    )
}

export default DashboardHeader