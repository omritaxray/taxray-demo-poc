import { useNavigation } from '@refinedev/core';
import { Calendar, Col, Divider, Row } from 'antd';
import FilingCompliance from 'components/calendar/tasks/filingCompliance';
import TasksCard from 'components/calendar/tasks/tasksCard';
import { CalendarUpcomingEvents } from 'components/calendar/upcoming-events';
import KPIsCard from 'components/dashboard/kpis-card';
import React, { useState } from 'react'
import WHTVendorsKPIsCard, { WHTVendorsTasksCard } from './kpis-card';
import RiskyTasks from './risky-tasks';
import WHTWorkflowStatus from './workflow-status';
import CostsChart, { VendorsCountryDistributionChart } from './costs-chart';
import FormsCompliance from './forms-compliance';
import WHTCostsChart from './wht-costs-chart';

const WHTDashboardWrapper: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const { show } = useNavigation();
    const [selectedEventCategory, setSelectedEventCategory] = useState<string[]>(
        [],
    );
    return (
        <div className="page-container">
            <h1 style={{ marginLeft: "0.3%" }}>Dashboard - Withholding Tax - Non-US Vendors</h1>
            <Row>
                <Col xs={24} xl={14}>
                    <h2 style={{ marginLeft: "0.75%", color: "#656565" }}>Strategy</h2>
                </Col>
                <Col xs={24} xl={10} style={{ borderLeft: "1px solid #E5E5E5" }}>
                    <h2 style={{ marginLeft: "2%", color: "#656565" }}>Compliance</h2>
                </Col>
            </Row>
            <Row gutter={[32, 32]} style={{ marginTop: "1%" }}>
                <Col xs={24} xl={14}>
                    <div style={{ width: "100%", display: "flex" }}>
                        <WHTVendorsKPIsCard isLoading={false} totalCount={"$25,000,000"} trend={""} cardTitle='Gross-Up Costs' cardSubtitle='2023' />
                        <WHTVendorsKPIsCard isLoading={false} totalCount={"$45,000,000"} trend="+55.55%" cardTitle='Gross-Up Costs' cardSubtitle='2024' />
                        <WHTVendorsKPIsCard isLoading={false} totalCount={"$85,000,000"} trend={"+88.89%"} cardTitle='Gross-Up Costs' cardSubtitle='2025 (projection)' />
                    </div>
                </Col>
                <Col xs={24} xl={10} style={{ borderLeft: "1px solid #E5E5E5" }}>
                    <div style={{ width: "100%", display: "flex", verticalAlign: "top" }}>
                        <RiskyTasks></RiskyTasks>
                        <WHTVendorsTasksCard isLoading={false} totalCount={"$67,917,420"} trend={""} cardTitle='Gross-Up Costs' cardSubtitle='Total net exposure' />
                    </div>
                </Col>
            </Row>
            <Row gutter={[32, 32]}>
                <Divider></Divider>
            </Row>
            <Row gutter={[32, 32]} style={{ marginTop: "1%" }}>
                <Col xs={24} xl={14}>
                    <div style={{ width: "100%", display: "flex" }}>
                        <WHTCostsChart></WHTCostsChart>
                    </div>
                </Col>
                {/* <Col xs={24} xl={7}>
                    <div style={{ width: "100%", display: "flex" }}>
                        <VendorsCountryDistributionChart></VendorsCountryDistributionChart>
                    </div>
                </Col> */}
                <Col xs={24} xl={10} style={{ borderLeft: "1px solid #E5E5E5" }}>
                    <WHTWorkflowStatus></WHTWorkflowStatus>
                    <FormsCompliance></FormsCompliance>
                </Col>
            </Row>
            {children}
        </div>
    );

}

export default WHTDashboardWrapper