import { DollarCircleTwoTone } from '@ant-design/icons'
import { Area, AreaConfig } from '@ant-design/plots'
import PieChart from '@ant-design/plots/es/components/pie'
import styled from '@emotion/styled'
import { Card, Space } from 'antd'
import { Text } from 'components/Text'
import React from 'react'

const Wrapper = styled.div`
margin: 1% 1%;
`;

const ComplianceSavingsChart: React.FC = () => {

    type TaxType = "WHT Vendors" | "WHT Customers" | "Transfer Pricing" | "Permanent Establishment" | "Remote workers & Relocation Scheme" | "Costs deductions" | "FTC - Pillar 1";

    interface PieChartData {
        type: TaxType;
        value: number;
    }

    const pieChartData: PieChartData[] = [
        {
            type: "WHT Vendors",
            value: 15069
        },
        {
            type: "WHT Customers",
            value: 10808
        },
        {
            type: "Transfer Pricing",
            value: 20756
        },
        {
            type: "Permanent Establishment",
            value: 6477
        },
        {
            type: "Remote workers & Relocation Scheme",
            value: 4178
        },
        {
            type: "Costs deductions",
            value: 2372
        },
        {
            type: "FTC - Pillar 1",
            value: 1512
        },
    ];

    const config = {
        appendPadding: 10,
        data: pieChartData,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.5,
        label: {
            type: "inner",
            offset: "-50%",
            content: "${value}",
            style: {
                textAlign: "center",
                fontSize: 14
            }
        },
        interactions: [{ type: "element-selected" }, { type: "element-active" }],
        statistic: {
            title: false as const,
            content: {
                style: {
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                formatter: function formatter() {
                    return `total\n$61,172`;
                }
            }
        }
    };

    // const config: AreaConfig = {
    //     data: [
    //         { Tax: 'WHT Vendors', entity: 'Acme Brazil LTD', value: 30.2 },
    //         { Tax: 'WHT Customers', entity: 'Acme India LTD', value: 30.9 },
    //         { Tax: 'Transfer Pricing', entity: 'Acme - All Entities', value: 32.7 },
    //         { Tax: 'Permanent Establishment', entity: 'Acme US Delaware LTD', value: 33.1 },
    //         { Tax: 'Remote workers & Relocation Scheme', entity: 'Acme US Iowa LTD', value: 8.2 },
    //         { Tax: 'Costs deductions', entity: 'Acme Brazil LTD', value: 29.7 },
    //         { Tax: 'FTC Pillar 1', entity: 'Acme India LTD', value: 32.6 },
    //     ],
    //     xField: 'quarterYear',
    //     yField: 'value',
    //     areaStyle: { fill: '#1890ff00' },
    //     seriesField: 'entity',
    //     animation: true,
    //     startOnZero: false,
    //     isStack: false,
    //     smooth: true,
    //     legend: {
    //         offsetY: -8,
    //     },
    //     yAxis: {
    //         label: {
    //             formatter: (v: string) => {
    //                 return `${v}% ETR`
    //             },
    //         },
    //     },
    //     tooltip: {
    //         formatter: (data) => {
    //             return {
    //                 name: `${data.entity} - ETR`, value: `${data.value}%`
    //             }

    //         }
    //     }
    // }

    return (
        <Card style={{ width: "100%", marginLeft: "0.5%", marginTop: "1%", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}
            headStyle={{ padding: "1% 2%" }}
            bodyStyle={{ padding: "3% 3% 0 3%" }}
            title={
                <Space direction='vertical'>
                    <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                        <DollarCircleTwoTone />
                        <Text size="lg" style={{ fontWeight: "600" }}>Compliance savings</Text>
                    </div>
                    <Text size="md" style={{ fontWeight: "600", marginLeft: "7%" }}>by tax scope</Text>
                    <Text size="md" style={{ fontWeight: "600", marginLeft: "7%", color: "#A5A5A5" }}>from 1 January 2024</Text>
                </Space >
            }>
            <Wrapper>
                <PieChart {...config} />
            </Wrapper>
        </Card>
    )
}

export const StrategySavingsChart = () => {
    type TaxType = "WHT Vendors" | "WHT Customers" | "Transfer Pricing" | "Permanent Establishment" | "Remote workers & Relocation Scheme" | "Costs deductions" | "FTC - Pillar 1";

    interface PieChartData {
        type: TaxType;
        value: number;
    }

    const pieChartData: PieChartData[] = [
        {
            type: "WHT Vendors",
            value: 134155
        },
        {
            type: "WHT Customers",
            value: 105266
        },
        {
            type: "Transfer Pricing",
            value: 12854
        },
        {
            type: "Permanent Establishment",
            value: 28705
        },
        {
            type: "Remote workers & Relocation Scheme",
            value: 14463
        },
        {
            type: "Costs deductions",
            value: 11341
        },
        {
            type: "FTC - Pillar 1",
            value: 6519
        },
    ];

    const config = {
        appendPadding: 10,
        data: pieChartData,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.5,
        label: {
            type: "inner",
            offset: "-50%",
            content: "${value}",
            style: {
                textAlign: "center",
                fontSize: 14
            }
        },
        interactions: [{ type: "element-selected" }, { type: "element-active" }],
        statistic: {
            title: false as const,
            content: {
                style: {
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                formatter: function formatter() {
                    return `total\n$313,303`;
                }
            }
        }
    };

    // const config: AreaConfig = {
    //     data: [
    //         { Tax: 'WHT Vendors', entity: 'Acme Brazil LTD', value: 30.2 },
    //         { Tax: 'WHT Customers', entity: 'Acme India LTD', value: 30.9 },
    //         { Tax: 'Transfer Pricing', entity: 'Acme - All Entities', value: 32.7 },
    //         { Tax: 'Permanent Establishment', entity: 'Acme US Delaware LTD', value: 33.1 },
    //         { Tax: 'Remote workers & Relocation Scheme', entity: 'Acme US Iowa LTD', value: 8.2 },
    //         { Tax: 'Costs deductions', entity: 'Acme Brazil LTD', value: 29.7 },
    //         { Tax: 'FTC Pillar 1', entity: 'Acme India LTD', value: 32.6 },
    //     ],
    //     xField: 'quarterYear',
    //     yField: 'value',
    //     areaStyle: { fill: '#1890ff00' },
    //     seriesField: 'entity',
    //     animation: true,
    //     startOnZero: false,
    //     isStack: false,
    //     smooth: true,
    //     legend: {
    //         offsetY: -8,
    //     },
    //     yAxis: {
    //         label: {
    //             formatter: (v: string) => {
    //                 return `${v}% ETR`
    //             },
    //         },
    //     },
    //     tooltip: {
    //         formatter: (data) => {
    //             return {
    //                 name: `${data.entity} - ETR`, value: `${data.value}%`
    //             }

    //         }
    //     }
    // }

    return (
        <Card style={{ width: "100%", marginLeft: "0.5%", marginTop: "1%", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}
            headStyle={{ padding: "1% 2%" }}
            bodyStyle={{ padding: "3% 3% 0 3%" }}
            title={

                <Space direction='vertical'>
                    <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                        <DollarCircleTwoTone />
                        <Text size="lg" style={{ fontWeight: "600" }}>Intelligent risk management savings</Text>
                    </div>
                    <Text size="md" style={{ fontWeight: "600", marginLeft: "7%" }}>by tax scope</Text>
                    <Text size="md" style={{ fontWeight: "600", marginLeft: "7%", color: "#A5A5A5" }}>from 1 January 2024</Text>
                </Space >

            }>
            <Wrapper>
                <PieChart {...config} />
            </Wrapper>
        </Card >
    )
}

export default ComplianceSavingsChart