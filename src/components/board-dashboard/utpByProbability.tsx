import { Card } from 'antd'
import { Text } from 'components/Text'
import styled from '@emotion/styled'
import React from 'react'
import { Column } from '@ant-design/plots';
import { Datum } from '@antv/g2plot/lib/types';
// import { ShapeAttrs } from '@antv/g-base/lib/types'

const Wrapper = styled.div`
margin: 1% 1%;
`;

interface ColumnType {

    defaultColor: string;
    risk: string;
    value: number;
}

const data: ColumnType[] = [
    { defaultColor: '#14BA6D', risk: '<5%', value: 10, },
    { defaultColor: '#F8D000', risk: '5%-50%', value: 10 },
    { defaultColor: '#FD8026', risk: '50%-75%', value: 15 },
    { defaultColor: '#FD5526', risk: '>75%', value: 10 }
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
    seriesField: 'defaultColor',
    color: (data: Datum) => {
        console.log(data);
        if (data.risk === '<5%' || data.risk === '30+分') {
            return "#FD5526";
        }

        return data.defaultColor;
    },
    style: {
        fill: '{defaultColor}',
    },
    // color: (data, defaultColor) => {
    //     return data.defaultColor;
    // },
    xAxis: {
        label: {
            formatter: (v: string) => {
                // console.log("what's", i);
                if (v === '50%-75%') {
                    return `${v}\n High`
                } else if (v === '>75%') {
                    return `${v}\n Very High`
                } else if (v === '5%-50%') {
                    return `${v}\n Medium`
                } else if (v === '<5%') {
                    return `${v}\n Low`
                }

            },
        },
    },
    tooltip: {
        formatter: (data: Datum) => {
            return {
                name: `${data.risk}`, value: `${data.value}`
            }

        }
    }
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

const UTPByProbability = () => {
    return (
        <Card bordered={false} style={{ width: "100%", marginLeft: "0.5%", boxShadow: "0px 5px 11px rgba(0, 0, 0, 0.25)" }}
            headStyle={{ padding: "1% 2%" }}
            bodyStyle={{ padding: "3% 3% 0 3%" }}
            title={
                <div style={{ alignItems: "center", gap: "2%" }}>
                    <Text size="md" style={{ fontWeight: "600", display: 'block' }}>Breakdown of UTPs</Text>
                    <Text size="sm" style={{ fontWeight: "600" }}>by probability of risk</Text>
                </div>
            }>
            <Wrapper>
                <Column legend={false} {...config} />
            </Wrapper>
        </Card>
    )
}

export default UTPByProbability