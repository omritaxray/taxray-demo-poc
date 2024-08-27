import React from "react";

import { useNavigation } from "@refinedev/core";

import { Badge } from "antd";


import { Text } from "../../Text";
import styles from "./upcomingEvent.module.css";
import { IEvent } from "interfaces";

type CalendarUpcomingEventProps = {
    item: IEvent; //Needs to manipulate like they did on query
};

const dayjs = require('dayjs')
var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)

export const CalendarUpcomingEvent: React.FC<CalendarUpcomingEventProps> = ({
    item,
}) => {
    const { show } = useNavigation();
    const { id, title, startDate, endDate, color } = item;
    const isToday = dayjs.utc(startDate).isSame(dayjs.utc(), "day");
    const isTomorrow = dayjs
        .utc(startDate)
        .isSame(dayjs.utc().add(1, "day"), "day");
    const isAllDayEvent =
        dayjs.utc(startDate).startOf("day").isSame(startDate) &&
        dayjs.utc(endDate).endOf("day").isSame(endDate);

    const renderDate = () => {
        if (isToday) {
            return "Today";
        }

        if (isTomorrow) {
            return "Tomorrow";
        }

        return dayjs(startDate).format("MMM DD");
    };

    const renderTime = () => {
        if (isAllDayEvent) {
            return "All day";
        }

        return `${dayjs(startDate).format("HH:mm")} - ${dayjs(endDate).format(
            "HH:mm",
        )}`;
    };

    return (
        <div
            onClick={() => {
                show("events", item.id);
            }}
            key={id}
            className={styles.item}
        >
            <div className={styles.date}>
                <Badge color={color} className={styles.badge} />
                <Text size="xs">{`${renderDate()}, ${renderTime()}`}</Text>
            </div>
            <Text ellipsis={{ tooltip: true }} strong className={styles.title}>
                {title}
            </Text>
        </div>
    );
};