import React, { useState } from "react";

import { CreateButton } from "@refinedev/antd";
import { useNavigation } from "@refinedev/core";

import { Col, Row } from "antd";

import CalendarUpcomingEvents from "components/calendar/upcoming-events/calendarUpcomingEvents";

import Calendar from "./calendar";
import CalendarManageCategories from "./categories/manage-categories/calendarManageCategories";
import CalendarCategories from "./categories/calendarCategories";
import TasksCard from "./tasks/tasksCard";
import FilingCompliance from "./tasks/filingCompliance";

const CalendarPageWrapper: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const { show } = useNavigation();
    const [selectedEventCategory, setSelectedEventCategory] = useState<string[]>(
        [],
    );

    return (
        <div className="page-container">
            <h1 style={{ marginLeft: "0.75%" }}>Withholding Tax - Statutory Filing and Reporting</h1>
            <Row gutter={[32, 32]}>
                <Col xs={24} xl={7}>
                    {/* <CreateButton block size="large" style={{ marginBottom: "1rem" }}>
                        Create event
                    </CreateButton> */}

                    <CalendarUpcomingEvents
                        limit={3}
                        cardProps={{ style: { marginBottom: "1rem" } }}
                    />

                    <FilingCompliance />
                </Col>
                <Col xs={24} xl={17}>
                    <TasksCard></TasksCard>
                    <Calendar
                        onClickEvent={({ id }) => {
                            show("events", id);
                        }}
                        categoryId={selectedEventCategory}
                    />
                </Col>
            </Row>
            {/* <Row gutter={[32, 32]}>
                <Col xs={24} xl={6}>

                    <CalendarUpcomingEvents
                        limit={3}
                        cardProps={{ style: { marginBottom: "1rem" } }}
                    />

                    <CalendarCategories
                        onChange={(event) => {
                            setSelectedEventCategory((prev) => {
                                if (prev.includes(event.target.value)) {
                                    return prev.filter((item) => item !== event.target.value);
                                }

                                return [...prev, event.target.value];
                            });
                        }}
                    />
                </Col>
                <Col xs={24} xl={18}>
                    <Calendar
                        onClickEvent={({ id }) => {
                            show("events", id);
                        }}
                        categoryId={selectedEventCategory}
                    />
                </Col>
            </Row> */}
            {children}
        </div>
    );
};

export default CalendarPageWrapper