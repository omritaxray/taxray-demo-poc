import React from 'react'
import { Col, Row } from "antd"
import { Text } from "components/Text"
import WHTVendorsKPIsCard from 'components/wht-vendors-dashboard/kpis-card'
import { BoardUTPCard } from './kpis-card'
import UTPByProbability from './utpByProbability'
import AmountsRecorded, { AmountsRecordedComparison } from './amounts-recorded'
import RisksEvoChart from './risks-evo-chart'
import HighRisksChart from './high-risks-chart'
import HighRiskCount from './high-risk-count'
import UTPCountryTable from './utp-by-country-table'

const BoardDashboard = () => {
    return (
        <div className="page-container">
            <h1 style={{ marginLeft: "0.75%" }}>Risk Management</h1>
            <Row gutter={[32, 32]}>
                <Col xs={24} xl={14} style={{ marginLeft: "0.75%" }}>
                    <div style={{ width: "100%", display: "flex" }}>
                        <Text size="lg" style={{ fontWeight: "600", display: 'block' }}>Overall Tax Exposure</Text>
                    </div>
                </Col>
            </Row>
            <Row gutter={[32, 32]} style={{ marginTop: "1%" }}>
                <Col xs={24} xl={10}>
                    <div style={{ width: "100%", display: "flex", verticalAlign: "top" }}>
                        <RisksEvoChart></RisksEvoChart>
                        {/* <RiskyTasks></RiskyTasks>
                        <WHTVendorsTasksCard isLoading={false} totalCount={"$47,917,420"} trend={""} cardTitle='Gross-Up Costs' cardSubtitle='Total net exposure' /> */}
                    </div>
                </Col>
                <Col xs={24} xl={7}>
                    {/* <div style={{ width: "100%", display: "flex", marginTop: "5%" }}>
                        <AmountsRecorded></AmountsRecorded>
                    </div> */}
                    <div style={{ width: "100%", height: "100%", display: "flex" }}>
                        <HighRiskCount></HighRiskCount>

                    </div>

                </Col>
                <Col xs={24} xl={7}>
                    <HighRisksChart></HighRisksChart>
                </Col>

            </Row>
            <Row gutter={[32, 32]}>
                <Col xs={24} xl={14} style={{ marginLeft: "0.75%" }}>
                    <div style={{ width: "100%", display: "flex" }}>
                        <Text size="lg" style={{ fontWeight: "600", display: 'block' }}>Uncertain Tax Positions (UTP) - 2024</Text>
                    </div>
                </Col>
            </Row>
            <Row gutter={[32, 32]} style={{ marginTop: "1%" }}>

                <Col xs={24} xl={7}>

                    <div style={{ width: "100%", display: "flex" }}>
                        <BoardUTPCard isLoading={false} openUTPs={"45"} totalNetExposure='$58,510,000' matThresh='$75K per item / year' />

                    </div>
                    <div style={{ width: "100%", display: "flex", marginTop: "5%" }}>
                        <AmountsRecordedComparison></AmountsRecordedComparison>
                    </div>
                </Col>
                <Col xs={24} xl={7}>
                    <UTPByProbability></UTPByProbability>
                </Col>
                <Col xs={24} xl={10}>
                    <UTPCountryTable></UTPCountryTable>
                </Col>
            </Row>
        </div>
    )
}

export default BoardDashboard