import type { RefineThemedLayoutV2HeaderProps } from "@refinedev/antd";
import { useGetIdentity } from "@refinedev/core";
import debounce from "lodash/debounce";
import taxrayIcon from "components/icons/taxrayIcon.png";
import {
    Avatar,
    Layout as AntdLayout,
    Space,
    Switch,
    theme,
    Typography,
    Grid,
    Row,
    Col,
    AutoComplete,
    Button,
    MenuProps,

} from "antd";
import React, { useState, useContext } from "react";
import { ColorModeContext } from "../../contexts/color-mode";
import { UserOutlined } from "@ant-design/icons";

interface IOptionGroup {
    value: string;
    label: string | React.ReactNode;
}

interface IOptions {
    label: string | React.ReactNode;
    options: IOptionGroup[];
}

const { Text } = Typography;
const { useToken } = theme;
const { useBreakpoint } = Grid;

type IUser = {
    id: number;
    name: string;
    avatar: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({
    isSticky,
}) => {
    const { token } = useToken();
    const { data: user } = useGetIdentity<IUser>();
    const { mode, setMode } = useContext(ColorModeContext);
    const screens = useBreakpoint();
    const [value, setValue] = useState<string>("");
    const [options, setOptions] = useState<IOptions[]>([]);
    const headerStyles: React.CSSProperties = {
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "0px 24px",
        height: "64px",
        borderBottom: `1px solid #EAECF0`,
    };

    if (isSticky) {
        headerStyles.position = "sticky";
        headerStyles.top = 0;
        headerStyles.zIndex = 1;
    }

    return (
        <AntdLayout.Header style={headerStyles}>
            <Row
                align="middle"
                style={{
                    justifyContent: screens.sm ? "space-between" : "end",
                }}
            >
                <Col>
                    <Space align="center">
                        <Text
                            ellipsis
                            style={{
                                color: "#667085",
                                display: "flex",
                            }}
                        >
                            Settings
                        </Text>
                        <Text
                            ellipsis
                            style={{
                                display: "flex",
                            }}
                        >

                        </Text>
                        <Text
                            ellipsis
                            style={{
                                display: "flex",
                            }}
                        >

                        </Text>
                    </Space>
                </Col>
                <Col>
                    <Space align="center">
                        <Text
                            ellipsis
                            style={{
                                color: "#667085",
                                display: "flex",
                            }}
                        >
                            Help
                        </Text>
                        <Text
                            ellipsis
                            style={{
                                display: "flex",
                            }}
                        >

                        </Text>
                        <Text
                            ellipsis
                            style={{
                                display: "flex",
                            }}
                        >

                        </Text>
                    </Space>
                </Col>
                <Col>
                    <Space >
                        {/* <Avatar
                            size={20}
                            src={'taxrayIcon'}
                        /> */}
                        <UserOutlined style={{ fontSize: "16px" }} />
                        <Text
                            color="#667085"
                            strong
                            style={{
                                display: "flex",
                            }}
                        >
                            Omri
                        </Text>
                    </Space>
                </Col>
            </Row>
        </AntdLayout.Header>
    );
};
