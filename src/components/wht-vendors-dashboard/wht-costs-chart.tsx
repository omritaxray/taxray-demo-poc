import { Card, Space } from 'antd'
import { Text } from 'components/Text'
import styled from '@emotion/styled'
import React from 'react'
import { Column } from '@ant-design/plots';
import { Datum } from '@antv/g2plot/lib/types';
import { start } from 'repl';
// import { ShapeAttrs } from '@antv/g-base/lib/types'

const Wrapper = styled.div`
margin: 1% 1%;
`;

interface ColumnType {

    risk: string;
    value: number;
    ratio: string;
}

const data: ColumnType[] = [
    { risk: 'Canada', value: 12150000, ratio: "27%" },
    { risk: 'Mexico', value: 9450000, ratio: "21%" },
    { risk: 'Netherlands', value: 6750000, ratio: "15%" },
    { risk: 'Israel', value: 2250000, ratio: "5%" },
    { risk: 'Sri Lanka', value: 4500000, ratio: "10%" },
    { risk: 'India', value: 9900000, ratio: "22%" },
    // { risk: 'Canada', value: "27%" },
    // { risk: 'Mexico', value: "21%" },
    // { risk: 'Netherlands', value: "15%" },
    // { risk: 'Israel', value: "5%" },
    // { risk: 'Sri Lanka', value: "10%" },
    // { risk: 'India', value: "22%" },
];

// const styles: ShapeAttrs = {
//     fill: ((datum: ColumnType) => {
//         if (datum.risk === '<5%') {
//             return (datum.defaultColor);
//         } else if (datum.risk === '5%-50%') {
//             return (datum.defaultColor);
//         } else if (datum.risk === '50%-75%') {
//             return (datum.defaultColor);
//         } else if (datum.risk === '>75%') {
//             return (datum.defaultColor);
//         }
//         return (datum.defaultColor);
//     }).toString(),
// }


const config = {
    data,
    xField: 'risk',
    yField: 'value',
    seriesField: 'value',
    color: (data: Datum) => {
        console.log(data);
        if (data.value === 12150000) {
            return "#FF4B55";
        } else if (data.value === 9450000) {
            return "#73AF00";
        } else if (data.value === 6750000) {
            return "#FD8026";
        } else if (data.value === 2250000) {
            return "#41479B";
        } else if (data.value === 4500000) {
            return "#963C3C";
        } else if (data.value === 9900000) {
            return "#FAB446";
        }

        return data.defaultColor;
    },
    // style: {
    //     fill: '{defaultColor}',
    // },
    columnStyle: {
        radius: [20, 20, 0, 0],
    },
    // color: (data, defaultColor) => {
    //     return data.defaultColor;
    // },
    yAxis: {
        label: {
            formatter: (v: string) => {
                if (v.includes("%")) {
                    return null;
                }
                return `$${v}`
            },
        },
    },
    // xAxis: {
    //     label: {
    //         formatter: (v: string) => {
    //             // console.log("what's", i);
    //             if (v === '50%-75%') {
    //                 return `${v}\n High`
    //             } else if (v === '>75%') {
    //                 return `${v}\n Very High`
    //             } else if (v === '5%-50%') {
    //                 return `${v}\n Medium`
    //             } else if (v === '<5%') {
    //                 return `${v}\n Low`
    //             }

    //         },
    //     },
    // },
    tooltip: {
        formatter: (data: Datum) => {

            let value = data.value.toString();
            let value4 = '';
            if (value.length == 7) {
                let value1 = value.slice(0, 1);
                let value2 = value.slice(-6, -3);
                let value3 = value.slice(-3);
                value4 = value1 + ',' + value2 + ',' + value3;
                console.log("Datum: ", value4);
            } else if (value.length == 8) {
                let value1 = value.slice(0, 2);
                let value2 = value.slice(-6, -3);
                let value3 = value.slice(-3);
                value4 = value1 + ',' + value2 + ',' + value3;
                console.log("Datum: ", value4);
            }

            if (data.risk === "Canada") {
                return {

                    name: `${data.risk}`, value: `$${value4} (27% out of total)`
                }
            } else if (data.risk === "Mexico") {
                return {

                    name: `${data.risk}`, value: `$${value4} (21% out of total)`
                }
            } else if (data.risk === "Netherlands") {
                return {

                    name: `${data.risk}`, value: `$${value4} (15% out of total)`
                }
            } else if (data.risk === "Israel") {
                return {

                    name: `${data.risk}`, value: `$${value4} (5% out of total)`
                }
            } else if (data.risk === "Sri Lanka") {
                return {

                    name: `${data.risk}`, value: `$${value4} (10% out of total)`
                }

            } else if (data.risk === "India") {
                return {

                    name: `${data.risk}`, value: `$${value4} (22% out of total)`
                }
            }
            return {
                name: `${data.risk}`, value: `${data.value}`
            }
        }
    },

    //     }
    // }
    // columnStyle: {
    //     fill: '#FD5526',
    // },

    // columnStyle: (datum: ColumnType) => {
    //     console.log(datum);
    //     return { fill: datum.colors, stroke: datum.colors };
    // },
    // columnBackground: { style: styles },
    // color: (datum, defaultColor) => {
    //     return datum.color;
    // },
};

const WHTCostsChart = () => {
    return (
        <Card bordered={false} style={{ width: "100%", marginLeft: "0.5%", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}
            headStyle={{ padding: "1% 2%" }}
            bodyStyle={{ padding: "3% 3% 0 3%" }}
            title={
                <Space direction="vertical" style={{ gap: "2%" }}>
                    <Space>
                        <Text size="md" style={{ fontWeight: "600" }}>Breakdown of procurement spend on WHT</Text>
                        <Text size="sm" style={{ fontWeight: "600", color: "#656565", display: 'block' }}>(Gross-Ups total of $45M)</Text>
                    </Space>
                    <Text size="sm" style={{ fontWeight: "600" }}>by countries</Text>
                </Space>
            }>
            <Wrapper>
                <Column legend={false} {...config} />
            </Wrapper>
        </Card>
    )
}

export default WHTCostsChart