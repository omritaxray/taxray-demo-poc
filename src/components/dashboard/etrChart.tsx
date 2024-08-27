import { DollarCircleTwoTone } from '@ant-design/icons'
import { Area, AreaConfig } from '@ant-design/plots'
import Card from 'antd/es/card/Card'
import { Text } from 'components/Text'
import React from 'react'

const ETRChart: React.FC = () => {
    const config: AreaConfig = {
        data: [
            { month: 'October', tax: 'All Tax Types', value: 20.1 },
            { month: 'October', tax: 'Withholding Taxes - Vendors', value: 34.3 },
            { month: 'October', tax: 'Withholding Taxes - Customers', value: 39.5 },
            { month: 'October', tax: 'Permanent Establishment', value: 13.4 },
            { month: 'November', tax: 'All Tax Types', value: 30.1 },
            { month: 'November', tax: 'Withholding Taxes - Vendors', value: 34.7 },
            { month: 'November', tax: 'Withholding Taxes - Customers', value: 30.5 },
            { month: 'November', tax: 'Permanent Establishment', value: 14.7 },
            { month: 'December', tax: 'All Tax Types', value: 27.7 },
            { month: 'December', tax: 'Withholding Taxes - Vendors', value: 33.7 },
            { month: 'December', tax: 'Withholding Taxes - Customers', value: 28.5 },
            { month: 'December', tax: 'Permanent Establishment', value: 18.7 },
            { month: 'January', tax: 'All Tax Types', value: 31.7 },
            { month: 'January', tax: 'Withholding Taxes - Vendors', value: 33.5 },
            { month: 'January', tax: 'Withholding Taxes - Customers', value: 33.5 },
            { month: 'January', tax: 'Permanent Establishment', value: 11.7 },
            { month: 'February', tax: 'All Tax Types', value: 30.2 },
            { month: 'February', tax: 'Withholding Taxes - Vendors', value: 33.1 },
            { month: 'February', tax: 'Withholding Taxes - Customers', value: 31.9 },
            { month: 'February', tax: 'Permanent Establishment', value: 14.7 },
            { month: 'March', tax: 'All Tax Types', value: 29.7 },
            { month: 'March', tax: 'Withholding Taxes - Vendors', value: 32.7 },
            { month: 'March', tax: 'Withholding Taxes - Customers', value: 33.1 },
            { month: 'March', tax: 'Permanent Establishment', value: 8.2 },

        ],
        xField: 'month',
        yField: 'value',
        seriesField: 'tax',
        areaStyle: { fill: '#1890ff00' },
        animation: true,
        startOnZero: false,
        isStack: false,
        smooth: true,
        tooltip: {
            formatter: (data) => {
                return {
                    name: `${data.tax} - ETR`, value: `${data.value}%`
                }

            }
        }
    }

    return (
        <Card style={{ width: "100%", marginTop: "3%", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}
            headStyle={{ padding: "8px 16px" }}
            bodyStyle={{ padding: "24px 24px 0 24px" }}
            title={
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <DollarCircleTwoTone />
                    <Text size="lg" style={{ fontWeight: "600" }}>ETR - By Tax Type</Text>
                </div>
            }>
            <Area {...config} style={{
                width: "100%",
                height: "100%",
            }} />
        </Card>
    )
}

export const ETREntitiesChart: React.FC = () => {
    const config: AreaConfig = {
        data: [
            { quarterYear: '2nd 2021', entity: 'Acme - All Entities', value: 34.7 },
            { quarterYear: '2nd 2021', entity: 'Acme US Delaware LTD', value: 30.5 },
            { quarterYear: '2nd 2021', entity: 'Acme UK LTD', value: 14.7 },
            { quarterYear: '2nd 2021', entity: 'Acme Brazil LTD', value: 30.1 },
            { quarterYear: '2nd 2021', entity: 'Acme India LTD', value: 36.1 },
            { quarterYear: '3rd 2021', entity: 'Acme - All Entities', value: 33.7 },
            { quarterYear: '3rd 2021', entity: 'Acme US Delaware LTD', value: 28.5 },
            { quarterYear: '3rd 2021', entity: 'Acme UK LTD', value: 18.7 },
            { quarterYear: '3rd 2021', entity: 'Acme Brazil LTD', value: 27.7 },
            { quarterYear: '3rd 2021', entity: 'Acme India LTD', value: 32.1 },
            { quarterYear: '4th 2021', entity: 'Acme - All Entities', value: 33.5 },
            { quarterYear: '4th 2021', entity: 'Acme US Delaware LTD', value: 33.5 },
            { quarterYear: '4th 2021', entity: 'Acme UK LTD', value: 11.7 },
            { quarterYear: '4th 2021', entity: 'Acme Brazil LTD', value: 31.7 },
            { quarterYear: '4th 2021', entity: 'Acme India LTD', value: 35.7 },
            { quarterYear: '1st 2022', entity: 'Acme - All Entities', value: 33.1 },
            { quarterYear: '1st 2022', entity: 'Acme US Delaware LTD', value: 31.9 },
            { quarterYear: '1st 2022', entity: 'Acme UK LTD', value: 14.7 },
            { quarterYear: '1st 2022', entity: 'Acme Brazil LTD', value: 30.2 },
            { quarterYear: '1st 2022', entity: 'Acme India LTD', value: 30.9 },
            { quarterYear: '2nd 2022', entity: 'Acme - All Entities', value: 32.7 },
            { quarterYear: '2nd 2022', entity: 'Acme US Delaware LTD', value: 33.1 },
            { quarterYear: '2nd 2022', entity: 'Acme UK LTD', value: 8.2 },
            { quarterYear: '2nd 2022', entity: 'Acme Brazil LTD', value: 29.7 },
            { quarterYear: '2nd 2022', entity: 'Acme India LTD', value: 32.6 },
            { quarterYear: '3rd 2022', entity: 'Acme - All Entities', value: 34.3 },
            { quarterYear: '3rd 2022', entity: 'Acme US Delaware LTD', value: 39.5 },
            { quarterYear: '3rd 2022', entity: 'Acme UK LTD', value: 0 },
            { quarterYear: '3rd 2022', entity: 'Acme Brazil LTD', value: 20.1 },
            { quarterYear: '3rd 2022', entity: 'Acme India LTD', value: 46.1 },
            { quarterYear: '4th 2022', entity: 'Acme - All Entities', value: 34.7 },
            { quarterYear: '4th 2022', entity: 'Acme US Delaware LTD', value: 30.5 },
            { quarterYear: '4th 2022', entity: 'Acme UK LTD', value: 14.7 },
            { quarterYear: '4th 2022', entity: 'Acme Brazil LTD', value: 30.1 },
            { quarterYear: '4th 2022', entity: 'Acme India LTD', value: 36.1 },
            { quarterYear: '1st 2023', entity: 'Acme - All Entities', value: 33.7 },
            { quarterYear: '1st 2023', entity: 'Acme US Delaware LTD', value: 28.5 },
            { quarterYear: '1st 2023', entity: 'Acme UK LTD', value: 18.7 },
            { quarterYear: '1st 2023', entity: 'Acme Brazil LTD', value: 27.7 },
            { quarterYear: '1st 2023', entity: 'Acme India LTD', value: 32.1 },
            { quarterYear: '2nd 2023', entity: 'Acme - All Entities', value: 33.5 },
            { quarterYear: '2nd 2023', entity: 'Acme US Delaware LTD', value: 33.5 },
            { quarterYear: '2nd 2023', entity: 'Acme UK LTD', value: 11.7 },
            { quarterYear: '2nd 2023', entity: 'Acme Brazil LTD', value: 31.7 },
            { quarterYear: '2nd 2023', entity: 'Acme India LTD', value: 35.7 },
            { quarterYear: '3rd 2023', entity: 'Acme - All Entities', value: 33.1 },
            { quarterYear: '3rd 2023', entity: 'Acme US Delaware LTD', value: 31.9 },
            { quarterYear: '3rd 2023', entity: 'Acme UK LTD', value: 14.7 },
            { quarterYear: '3rd 2023', entity: 'Acme Brazil LTD', value: 30.2 },
            { quarterYear: '3rd 2023', entity: 'Acme India LTD', value: 30.9 },
            { quarterYear: '4th 2023', entity: 'Acme - All Entities', value: 32.7 },
            { quarterYear: '4th 2023', entity: 'Acme US Delaware LTD', value: 33.1 },
            { quarterYear: '4th 2023', entity: 'Acme UK LTD', value: 8.2 },
            { quarterYear: '4th 2023', entity: 'Acme Brazil LTD', value: 29.7 },
            { quarterYear: '4th 2023', entity: 'Acme India LTD', value: 32.6 },
            { quarterYear: '1st 2024', entity: 'Acme - All Entities', value: 34.3 },
            { quarterYear: '1st 2024', entity: 'Acme US Delaware LTD', value: 39.5 },
            { quarterYear: '1st 2024', entity: 'Acme UK LTD', value: 0 },
            { quarterYear: '1st 2024', entity: 'Acme Brazil LTD', value: 20.1 },
            { quarterYear: '1st 2024', entity: 'Acme India LTD', value: 46.1 },
        ],
        xField: 'quarterYear',
        yField: 'value',
        areaStyle: { fill: '#1890ff00' },
        seriesField: 'entity',
        animation: true,
        startOnZero: false,
        isStack: false,
        smooth: true,
        legend: {
            offsetY: -8,
        },
        yAxis: {
            label: {
                formatter: (v: string) => {
                    return `${v}% ETR`
                },
            },
        },
        tooltip: {
            formatter: (data) => {
                return {
                    name: `${data.entity} - ETR`, value: `${data.value}%`
                }

            }
        }
    }

    return (
        <Card style={{ width: "120%", marginLeft: "0.5%", marginTop: "1%", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}
            headStyle={{ padding: "1% 2%" }}
            bodyStyle={{ padding: "3% 3% 0 3%" }}
            title={
                <div style={{ display: "flex", alignItems: "center", gap: "1%" }}>
                    <DollarCircleTwoTone />
                    <Text size="lg" style={{ fontWeight: "600" }}>ETR - By Entity</Text>
                </div>
            }>
            <Area {...config} style={{
                width: "100%",
                height: "100%",
            }} />
        </Card>
    )
}

export default ETRChart