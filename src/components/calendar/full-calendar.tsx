import { Dispatch, FC, RefObject, SetStateAction, createContext, useContext } from "react";

import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

import { IEvent } from "interfaces"
import { ConfigProvider } from "antd";

const ThemeColor = createContext('')

type FullCalendarWrapperProps = {
    calendarRef: RefObject<FullCalendar>;
    events: (Partial<IEvent> & { allDay: boolean })[];
    onClickEvent?: (event: IEvent) => void;
    setTitle: Dispatch<SetStateAction<string | undefined>>;
};

const FullCalendarWrapper: FC<FullCalendarWrapperProps> = ({
    calendarRef,
    events,
    onClickEvent,
    setTitle,
}) => {
    const themeColor = useContext(ThemeColor);
    return (
        // div className="fc-scroller" color="#54F2AC" style={{ color: "#54F2AC" }}>
        // <ConfigProvider theme={{
        //     token: {
        //         fontFamilyCode: 'Open Sans',
        //         colorLink: "#6039F5",
        //         colorText: "#6039F5",
        //         colorTextSecondary: "#6039F5",
        //         colorTextTertiary: "#6039F5",
        //         colorPrimary: "#6039F5",
        //         colorBgContainer: "#F5F5F5",
        //         colorBgLayout: "#F5F5F5",
        //         colorBorderBg: "#E8E9EA",
        //         colorPrimaryActive: "#6039F5",
        //     },
        //     components: {
        //         Button: {
        //             colorText: "#6039F5",
        //         },
        //         Typography: {
        //             fontFamilyCode: 'Open Sans',
        //             colorText: "#6039F5",

        //         }


        //     },
        // }}>
        <a className="fc-col-header-cell-cushion" color="#54F2AC" style={{ color: "#000" }}>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                initialView={"dayGridMonth"}
                events={events}
                eventTimeFormat={{
                    hour: "2-digit",
                    minute: "2-digit",
                    meridiem: false,
                }}
                eventClick={({ event }) => {
                    onClickEvent?.(events.find(({ id }) => id === event.id) as IEvent);
                }}
                datesSet={({ view }) => {
                    setTitle(view.title);
                }}
                headerToolbar={false}
                timeZone="UTC"
                height={600}
            />
        </a>
    );
};

export default FullCalendarWrapper;