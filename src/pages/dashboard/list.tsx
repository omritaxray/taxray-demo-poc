import { ThemeProvider } from '@emotion/react';
import { Col, ConfigProvider, Row, Space, ThemeConfig } from 'antd';
import DashboardHead from 'components/dashboard/dashboardHead';
import DashboardHeader from 'components/dashboard/dashboardHeader'
import EntitiesMap from 'components/dashboard/entities-map';
import ETRChart, { ETREntitiesChart } from 'components/dashboard/etrChart';
import KPIsCard from 'components/dashboard/kpis-card'
import ComplianceSavingsChart, { StrategySavingsChart } from 'components/dashboard/savingsChart';
import React from 'react'

const themeConfig: ThemeConfig = {
    token: {
        colorPrimary: "#353535",
        colorBgContainer: "#353535",
        colorBgLayout: "#353535",
        colorBorderBg: "#E8E9EA",
    }
};

const DashboardPage: React.FC = () => {
    return (
        <ConfigProvider theme={themeConfig}>
            <div className='page-container'>
                {/* <Space direction='vertical'> */}
                <Space direction='vertical' style={{ width: "100%" }}>
                    <DashboardHeader />

                    <Row
                        gutter={[24, 24]}
                        style={{
                            width: "75%",
                            padding: "0px",
                            marginTop: "1%",
                            marginLeft: "2.85%",

                        }}
                    >
                        <Col
                            xs={24}
                            sm={24}
                            xl={24}
                            style={{
                                height: "100%",

                            }}
                        >
                            <ETREntitiesChart />
                        </Col>
                        {/* <Col
                            xs={24}
                            sm={24}
                            xl={12}
                            style={{
                                height: "100%",

                            }}
                        >
                            <ETRChart />
                        </Col> */}
                    </Row>
                    <Row
                        gutter={[24, 24]}
                        style={{
                            width: "90%",
                            padding: "0%",
                            marginTop: "1%",
                            marginLeft: "2.85%",

                        }}
                    >
                        <Col
                            xs={24}
                            sm={24}
                            xl={12}
                            style={{
                                height: "100%",

                            }}
                        >
                            <ComplianceSavingsChart />
                        </Col>
                        <Col
                            xs={24}
                            sm={24}
                            xl={12}
                            style={{
                                height: "100%",
                            }}
                        >
                            <StrategySavingsChart />
                        </Col>
                        {/* <Col
                            xs={24}
                            sm={24}
                            xl={12}
                            style={{
                                height: "100%",

                            }}
                        >
                            <ComplianceSavingsChart />
                        </Col> */}
                    </Row>
                    {/* <Row
                        gutter={[24, 24]}
                        style={{
                            width: "90.5%",
                            padding: "24px",
                            marginLeft: "3%",
                            position: "relative",

                        }}
                    >
                        <Col
                            xs={24}
                            sm={24}
                            xl={24}
                        >
                            <EntitiesMap />
                        </Col>
                    </Row> */}
                </Space>
                {/* <ETRChart /> */}
            </div>
        </ConfigProvider>

    )
}

export default DashboardPage