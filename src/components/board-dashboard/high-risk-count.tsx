import React from 'react'
import { DollarCircleTwoTone } from '@ant-design/icons'
import { Area, AreaConfig, Pie } from '@ant-design/plots'
import PieChart from '@ant-design/plots/es/components/pie'
import styled from '@emotion/styled'
import { Card } from 'antd'
import { Text } from 'components/Text'
import { tooltip } from 'leaflet'
import { Datum } from '@antv/g2plot/lib/types';

const Wrapper = styled.div`
margin: 0% 1%;
margin-Top: 0%;
`;

const HighRiskCount: React.FC = () => {

    type Type = "WHT" | "TP" | "PE" | "CIT" | "FTC" | "VAT/GST";

    interface PieChartData {
        type: Type;
        value: number;
        color: string;
    }

    const pieChartData: PieChartData[] = [
        {
            type: "WHT",
            value: 35865388,
            color: "#FD5526"
        },
        {
            type: "TP",
            value: 8303866,
            color: "#F8D000"
        },
        {
            type: "PE",
            value: 18257091,
            color: "#14BA6D"
        },
        {
            type: "CIT",
            value: 2301325,
            color: "#111111"
        },
        {
            type: "FTC",
            value: 2124428,
            color: "#111111"
        },
        {
            type: "VAT/GST",
            value: 8357902,
            color: "#111111"
        }
    ];

    const config = {
        data: pieChartData,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.6,
        label: {
            text: 'label',
            type: 'inner',
            offset: '-50%',
            content: '${value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        tooltip: {
            formatter: (datum: Datum) => {
                return { name: datum.type, value: '$' + datum.value };
            },
        },
        // legend: {
        //     color: {
        //         position: "bottom",
        //         layout: "horizontal",
        //         itemMarginBottom: 5,
        //         itemGap: 5,
        //         marker: { symbol: "square" }
        //     }
        // },
        color: ['#FD5526', "#F8D000", "#14BA6D", "#FF9B46", "#4173CD", "#B5B5B5"],
        interactions: [{ type: "element-selected" }, { type: "element-active" }],
        statistic: {
            title: false as const,
            content: {
                style: {
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    lineHeight: "50px",
                    textOverflow: "ellipsis",
                },
                formatter: function formatter() {
                    return `$75M\nHigh Risks`;
                }
            }
        }
    };

    return (
        <Card bordered={false} style={{ width: "100%", marginLeft: "0.5%", height: "95.5%", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}

            title={
                <div style={{ alignItems: "center", textAlign: "center" }}>
                    <Text size="md" style={{ fontWeight: "600", display: 'block' }}>Total high risks</Text>
                    <Text size="md" style={{ fontWeight: "600" }}>$75,210,000</Text>
                </div>
            }>
            <Wrapper>
                <Pie legend={{ position: 'bottom', marker: { symbol: 'circle' } }}{...config} />
            </Wrapper>
        </Card>
    )
}

export default HighRiskCount