import React from 'react'
import { DollarCircleTwoTone } from '@ant-design/icons'
import { Area, Pie } from '@ant-design/plots'
import { Label } from '@antv/g2plot/lib/types/label'
import PieChart, { PieConfig } from '@ant-design/plots/es/components/pie'
import styled from '@emotion/styled'
import { Card } from 'antd'
import { Text } from 'components/Text'

const Wrapper = styled.div`
margin: 1% 1%;
`;

const CostsChart: React.FC = () => {

    type Type = "Netherlands" | "Israel" | "Sri Lanka" | "Canada" | "India" | "United States" | "United Kingdom" | "Germany" | "France" | "Italy" | "Spain" | "Australia" | "Japan" | "China" | "South Korea" | "Brazil" | "Mexico" | "Argentina" | "South Africa" | "Nigeria" | "Kenya" | "Egypt" | "Saudi Arabia" | "United Arab Emirates" | "Qatar" | "Kuwait" | "Oman" | "Bahrain";

    interface PieChartData {
        country: Type;
        value: number;
        amount: string;
        color: string;
    }

    const pieChartData: PieChartData[] = [
        {
            country: "Netherlands",
            value: 15,
            amount: "$127.5M",
            color: "#FD5526"
        },
        {
            country: "Israel",
            value: 5,
            amount: "$42.5M",
            color: "#F8D000"
        },
        {
            country: "Sri Lanka",
            value: 10,
            amount: "$85M",
            color: "#14BA6D"
        },
        {
            country: "Canada",
            value: 27,
            amount: "$229.5M",
            color: "#111111"
        },
        {
            country: "India",
            value: 22,
            amount: "$187M",
            color: "#14BA6D"
        },
        {
            country: "Mexico",
            amount: "$178.5M",
            value: 21,
            color: "#111111"
        }
    ];
    const label: Label = {
        fields: ["amount", "value", "country"],
        autoRotate: false,
        type: 'inner',
        content: (d) => { return (d.country + "\n" + d.value + "%" + "\n" + d.amount) },
        style: {
            textAlign: 'center',
            fontSize: 12,
            dy: 12
        },
    }

    const config: PieConfig = {
        data: pieChartData,
        angleField: "value",
        colorField: "country",
        label: label,
        color: ['#FD5526', "#F8D000", "#14BA6D", "#6ECFBC", "#41479B", "#FD7326"],
        interactions: [{ type: "element-selected" }, { type: "element-active" }],
    };

    return (
        <Card bordered={false} style={{ width: "100%", marginLeft: "0.5%", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}
            headStyle={{ padding: "1% 2%" }}
            bodyStyle={{ padding: "3% 3% 0 3%" }}
            title={
                <div style={{ alignItems: "center", gap: "2%" }}>
                    <Text size="md" style={{ fontWeight: "600", display: 'block' }}>Total deal prices</Text>
                    <Text size="sm" style={{ fontWeight: "600" }}>$850,000,000</Text>
                </div>
            }>
            <Wrapper>
                <Pie legend={false} {...config} />
            </Wrapper>
        </Card>
    )
}

export const VendorsCountryDistributionChart: React.FC = () => {

    type Type = "Netherlands" | "Israel" | "Sri Lanka" | "Canada" | "India" | "United States" | "United Kingdom" | "Germany" | "France" | "Italy" | "Spain" | "Australia" | "Japan" | "China" | "South Korea" | "Brazil" | "Mexico" | "Argentina" | "South Africa" | "Nigeria" | "Kenya" | "Egypt" | "Saudi Arabia" | "United Arab Emirates" | "Qatar" | "Kuwait" | "Oman" | "Bahrain";

    interface PieChartData {
        country: Type;
        value: number;
        amount: string;
        color: string;
    }

    const pieChartData: PieChartData[] = [
        {
            country: "Netherlands",
            value: 15,
            amount: "3,750",
            color: "#FD5526"
        },
        {
            country: "Israel",
            value: 5,
            amount: "1,250",
            color: "#F8D000"
        },
        {
            country: "Sri Lanka",
            value: 10,
            amount: "2,500",
            color: "#14BA6D"
        },
        {
            country: "Canada",
            value: 27,
            amount: "6,750",
            color: "#111111"
        },
        {
            country: "India",
            value: 22,
            amount: "5,500",
            color: "#14BA6D"
        },
        {
            country: "Mexico",
            amount: "5,250",
            value: 21,
            color: "#111111"
        }
    ];

    const label: Label = {
        fields: ["amount", "value", "country"],
        autoRotate: false,
        type: 'inner',
        content: (d) => { return (d.country + "\n" + d.value + "%" + "\n" + d.amount) },
        style: {
            textAlign: 'center',
            fontSize: 12,
            dy: 12
        },
    }

    const config = {
        data: pieChartData,
        angleField: "value",
        colorField: "country",
        label: label,
        color: ['#FD5526', "#F8D000", "#14BA6D", "#6ECFBC", "#41479B", "#FD7326"],
        interactions: [{ type: "element-selected" }, { type: "element-active" }],
    };

    return (
        <Card bordered={false} style={{ width: "100%", marginLeft: "0.5%", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}
            headStyle={{ padding: "1% 2%" }}
            bodyStyle={{ padding: "3% 3% 0 3%" }}
            title={
                <div style={{ alignItems: "center", gap: "2%" }}>
                    <Text size="md" style={{ fontWeight: "600", display: 'block' }}>Total number of transactions</Text>
                    <Text size="sm" style={{ fontWeight: "600" }}>25,000 Transactions</Text>
                </div>
            }>
            <Wrapper>
                <Pie legend={false} {...config} />
            </Wrapper>
        </Card>
    )
}

export default CostsChart