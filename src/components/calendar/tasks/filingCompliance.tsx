import React from 'react'
import { DollarCircleTwoTone } from '@ant-design/icons'
import { Area, AreaConfig, Pie } from '@ant-design/plots'
import PieChart from '@ant-design/plots/es/components/pie'
import styled from '@emotion/styled'
import { Card } from 'antd'
import { Text } from 'components/Text'

const Wrapper = styled.div`
margin: 1% 1%;
`;

const FilingCompliance: React.FC = () => {

    type Type = "Missed due date" | "Filed late" | "Filed on time" | "Needs to be filed";

    interface PieChartData {
        type: Type;
        value: number;
        color: string;
    }

    const pieChartData: PieChartData[] = [
        {
            type: "Missed due date",
            value: 8,
            color: "#FD5526"
        },
        {
            type: "Filed late",
            value: 12,
            color: "#F8D000"
        },
        {
            type: "Filed on time",
            value: 35,
            color: "#14BA6D"
        },
        {
            type: "Needs to be filed",
            value: 45,
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
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        color: ['#FD5526', "#F8D000", "#14BA6D", "#B5B5B5"],
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
                    return `55%`;
                }
            }
        }
    };

    return (
        <Card bordered={false} style={{ marginLeft: "0.5%", marginTop: "1%" }}
            headStyle={{ padding: "1% 2%" }}
            bodyStyle={{ padding: "3% 3% 0 3%" }}
            title={
                <div style={{ alignItems: "center", gap: "2%" }}>
                    <Text size="md" style={{ fontWeight: "600", display: 'block' }}>Ongoing Compliance</Text>
                    <Text size="sm" style={{ fontWeight: "600" }}>Current status of tax filings</Text>
                </div>
            }>
            <Wrapper>
                <Pie {...config} />
            </Wrapper>
        </Card>
    )
}

export default FilingCompliance