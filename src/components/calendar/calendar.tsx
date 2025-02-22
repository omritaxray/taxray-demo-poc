import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import { useList } from "@refinedev/core";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import FullCalendar from "@fullcalendar/react";
import { Button, Card, Grid, Radio } from "antd";

import { Text } from "components/Text";

import styles from "./calendar.module.css";
import { IEvent } from "interfaces";

const FullCalendarWrapper = lazy(() => import("./full-calendar"));

type Event = IEvent;

type View =
    | "dayGridMonth"
    | "timeGridWeek"
    | "timeGridDay"
    | "listMonth"
    | "listDay"
    | "listWeek";

type CalendarProps = {
    categoryId?: string[];
    onClickEvent?: (event: Event) => void;
};

const dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

const Calendar: React.FC<CalendarProps> = ({
    categoryId,
    onClickEvent,
}) => {
    const [calendarView, setCalendarView] = useState<View>("dayGridMonth");
    const calendarRef = useRef<FullCalendar>(null);
    const [title, setTitle] = useState(calendarRef.current?.getApi().view.title);
    const { md } = Grid.useBreakpoint();

    useEffect(() => {
        calendarRef.current?.getApi().changeView(calendarView);
    }, [calendarView]);

    useEffect(() => {
        if (md) {
            setCalendarView("dayGridMonth");
        } else {
            setCalendarView("listMonth");
        }
    }, [md]);

    const { data } = useList<Event>({
        pagination: {
            mode: "off",
        },
        // filters: [
        //     {
        //         field: "eventCategory.id",
        //         operator: "eq",
        //         value: categoryId?.length ? categoryId[0] : undefined,
        //     },
        // ]
    });

    const events = (data?.data ?? []).map(
        ({ id, title, startDate, endDate, color }) => ({
            id: id,
            title: title,
            start: startDate,
            end: endDate,
            color: color,
            allDay: dayjs(endDate).utc().diff(dayjs(startDate).utc(), "hours") >= 23,
        }),
    );

    return (
        <Card style={{ marginTop: "1%" }}>
            <div className={styles.calendar_header}>
                <div className={styles.actions}>
                    <Button
                        onClick={() => {
                            calendarRef.current?.getApi().prev();
                        }}
                        shape="circle"
                        icon={<LeftOutlined />}
                    />
                    <Button
                        onClick={() => {
                            calendarRef.current?.getApi().next();
                        }}
                        shape="circle"
                        icon={<RightOutlined />}
                    />
                    <Text className={styles.title} size="lg">
                        {title}
                    </Text>
                </div>

                <Radio.Group value={calendarView}>
                    {[
                        {
                            label: "Month",
                            desktopView: "dayGridMonth",
                            mobileView: "listMonth",
                        },
                        {
                            label: "Week",
                            desktopView: "timeGridWeek",
                            mobileView: "listWeek",
                        },
                        {
                            label: "Day",
                            desktopView: "timeGridDay",
                            mobileView: "listDay",
                        },
                    ].map(({ label, desktopView, mobileView }) => {
                        const view = md ? desktopView : mobileView;
                        return (
                            <Radio.Button
                                key={label}
                                value={view}
                                onClick={() => {
                                    setCalendarView(view as View);
                                }}
                            >
                                {label}
                            </Radio.Button>
                        );
                    })}
                    {md && (
                        <Radio.Button
                            value="listMonth"
                            onClick={() => {
                                setCalendarView("listMonth");
                            }}
                        >
                            List
                        </Radio.Button>
                    )}
                </Radio.Group>
            </div>
            <Suspense>
                <FullCalendarWrapper
                    {...{ calendarRef, events, onClickEvent, setTitle }}
                />
            </Suspense>
        </Card>
    );
};

export default Calendar