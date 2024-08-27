import React, { useState } from "react";
import { HttpError, IResourceComponentsProps, useList, useMany, useNavigation, useResource } from "@refinedev/core";
import { ConfigProvider, List, Space } from "antd";
import { IRiskLevel, IRiskLevelAction } from "../../interfaces";
import type { CollapseProps, ThemeConfig } from 'antd';
import { Collapse, Select, theme } from 'antd';
import RiskLevelItem from "components/risk-levels/RiskLevelItem";
import { Text } from "components/Text";
import { useForm } from "@refinedev/antd";

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

const poppinsConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Poppins' },
    components: {
        Typography: {
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const interConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Inter' },
    components: {
        Typography: {
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

// const themeConfig: ThemeConfig = {
//     token: { fontFamilyCode: 'Inter' },
//     components: {
//         Collapse: {
//             colorText: "#000",
//             colorTextDescription: "rgba(0, 0, 0, 0.65)",
//             colorTextDisabled: "rgba(0, 0, 0, 0.45)",
//         }
//     },
// };
type FormValues = {
    action: "0"
};

export const RiskLevelShow: React.FC<IResourceComponentsProps> = () => {

    const { id } = useResource();
    type ExpandIconPosition = 'start' | 'end';
    const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>('start');
    const { data, isLoading } = useList<IRiskLevel>({
        resource: "risk-level",

    });
    const riskLevels = data?.data.filter((item) => item?.taxIssue[0]?.id == id) || [];

    const riskLevelsCollapsed: CollapseProps['items'] = riskLevels.map((item) => {
        return {

            key: item.id,
            //header: <ConfigProvider theme={openSansConfig}><Text>{item.title}</Text></ConfigProvider>,
            label: <ConfigProvider theme={openSansConfig}><Text strong style={{ fontSize: "18px", fontWeight: '600', marginLeft: "20px" }}>{item.title}</Text></ConfigProvider>,
            children: <RiskLevelItem item={item} />,
            style: {
                header: <ConfigProvider theme={openSansConfig}><Text>{item.title}</Text></ConfigProvider>,
                border: "6px solid #FD5526",
                borderLeftColor: item.color,
                borderRightColor: "#00000000",
                borderBottomColor: "#00000000",
                borderTopColor: "#00000000",
                background: "#FBF9F9",
                boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
                marginBottom: 24
            },
        }
    });
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <Space wrap direction="vertical" style={{ width: "100%" }} size={16}>
            <Space direction="horizontal" style={{ width: "100%" }}>
                <Text size='xxl' type="secondary" style={{ alignContent: 'center' }} >Tax Policies {' >'}</Text>
                <Text strong size='xxl' style={{ alignContent: 'center' }} >{riskLevels[0]?.taxIssue[0]?.tax}</Text>
            </Space>
            <Text size='md' type="secondary" style={{ alignContent: 'center' }} >Create a risk escalation strategy by creating an automatic tax-risk rule book</Text>
            {/* <br /> */}
            <Collapse
                expandIconPosition="end"
                defaultActiveKey={['1']}
                items={riskLevelsCollapsed}
                style={{
                    background: "#FBF9F900",
                }}
                ghost={true}
            >
            </Collapse>
        </Space>

    );
}