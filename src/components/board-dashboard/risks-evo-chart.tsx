import { DollarCircleTwoTone } from '@ant-design/icons'
import { Area, AreaConfig } from '@ant-design/plots'
import { Card } from 'antd'
import { Text } from 'components/Text'
import React from 'react'

const RisksEvoChart: React.FC = () => {
    const config: AreaConfig = {
        data: [

            { month: 'January', tax: 'Total', value: 13800890 },
            { month: 'January', tax: 'VAT/GST', value: 10652549 },
            { month: 'January', tax: 'Withholding Tax', value: 1694682 },
            { month: 'January', tax: 'Transfer Pricing', value: 512331 },
            { month: 'January', tax: 'Permanent Establishment', value: 941328 },
            { month: 'February', tax: 'Total', value: 29750120 },
            { month: 'February', tax: 'VAT/GST', value: 13187410 },
            { month: 'February', tax: 'Withholding Tax', value: 6596178 },
            { month: 'February', tax: 'Transfer Pricing', value: 3422371 },
            { month: 'February', tax: 'Permanent Establishment', value: 6544161 },
            { month: 'March', tax: 'Total', value: 40151964 },
            { month: 'March', tax: 'VAT/GST', value: 17711540 },
            { month: 'March', tax: 'Withholding Tax', value: 7324661 },
            { month: 'March', tax: 'Transfer Pricing', value: 5069907 },
            { month: 'March', tax: 'Permanent Establishment', value: 7045856 },
            { month: 'April', tax: 'Total', value: 63912390 },
            { month: 'April', tax: 'VAT/GST', value: 27687926 },
            { month: 'April', tax: 'Withholding Tax', value: 13265091 },
            { month: 'April', tax: 'Transfer Pricing', value: 12466338 },
            { month: 'April', tax: 'Permanent Establishment', value: 10493035 },
            { month: 'May', tax: 'Total', value: 77760130 },
            { month: 'May', tax: 'VAT/GST', value: 29602984 },
            { month: 'May', tax: 'Withholding Tax', value: 20935080 },
            { month: 'May', tax: 'Transfer Pricing', value: 14546474 },
            { month: 'May', tax: 'Permanent Establishment', value: 12675592 },
            { month: 'June', tax: 'Total', value: 94590000 },
            { month: 'June', tax: 'VAT/GST', value: 32443406 },
            { month: 'June', tax: 'Withholding Tax', value: 26012938 },
            { month: 'June', tax: 'Transfer Pricing', value: 21264854 },
            { month: 'June', tax: 'Permanent Establishment', value: 14868802 },
            { month: 'July', tax: 'Total', value: 112409000 },
            { month: 'July', tax: 'VAT/GST', value: 35373632 },
            { month: 'July', tax: 'Withholding Tax', value: 33109740 },
            { month: 'July', tax: 'Transfer Pricing', value: 24964403 },
            { month: 'July', tax: 'Permanent Establishment', value: 18961225 },
            { month: 'August', tax: 'Total', value: 152121000 },
            { month: 'August', tax: 'VAT/GST', value: 47132017 },
            { month: 'August', tax: 'Withholding Tax', value: 42622940 },
            { month: 'August', tax: 'Transfer Pricing', value: 35370909 },
            { month: 'August', tax: 'Permanent Establishment', value: 26995134 },
            { month: 'September', tax: 'Total', value: 185322000 },
            { month: 'September', tax: 'VAT/GST', value: 69582324 },
            { month: 'September', tax: 'Withholding Tax', value: 47032785 },
            { month: 'September', tax: 'Transfer Pricing', value: 40559072 },
            { month: 'September', tax: 'Permanent Establishment', value: 28147819 },

        ],
        xField: 'month',
        yField: 'value',
        seriesField: 'tax',
        areaStyle: { fill: '#1890ff00' },
        animation: true,
        startOnZero: false,
        isStack: false,
        smooth: true,
        legend: { position: 'bottom', marker: { symbol: 'circle' } },
        // legend: { position: 'bottom', marker: { symbol: 'circle', style: { fill: "#F12312" } } },
        yAxis: {
            label: {
                formatter: (v) => {
                    return `$${Number(v) / 1000000}M`;
                },
            },
        },
        tooltip: {
            formatter: (data) => {
                if (data.tax === "Transfer Pricing") {
                    return {
                        name: `${data.tax} (India, Ireland)`, value: `$${data.value}`
                    }
                } else if (data.tax === "Withholding Tax") {
                    return {
                        name: `${data.tax} (India, Brazil)`, value: `$${data.value}`
                    }
                } else if (data.tax === "Permanent Establishment") {
                    return {
                        name: `${data.tax} (Australia, Germany, South-Africa, India)`, value: `$${data.value}`
                    }
                }
                return {
                    name: `${data.tax}`, value: `$${data.value}`
                }

            }
        }
    }

    return (
        <Card style={{ width: "100%", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}
            headStyle={{ padding: "8px 16px" }}
            bodyStyle={{ padding: "24px 24px 0 24px" }}
            title={
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <DollarCircleTwoTone />
                    <Text size="lg" style={{ fontWeight: "600" }}>Tax risks evolvement by scope</Text>
                </div>
            }>
            <Area {...config} style={{
                width: "100%",
                height: "100%",
            }} />
        </Card>
    )
}
export default RisksEvoChart