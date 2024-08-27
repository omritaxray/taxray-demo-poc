import React, { FC, useState } from "react";
import { IResourceComponentsProps, useList, useMany } from "@refinedev/core";
import { Button, Col, List, Row, Space } from "antd";
import { IRiskLevel, ITaxIssue } from "../../interfaces";
import type { CollapseProps } from 'antd';
import { Collapse, Select, theme } from 'antd';
import RiskLevelItem from "components/risk-levels/RiskLevelItem";
import TaxButton from "components/tax-issues/taxButton";
import { useDrawerForm, useModal } from "@refinedev/antd";
import { Text } from "components/Text";


export const RiskLevelList: FC<IResourceComponentsProps> = () => {
    const { data, isLoading } = useList<ITaxIssue>({
        resource: "taxIssues",
    });

    return (
        <Space wrap direction="vertical" style={{ width: "100%" }}>
            <div>
                <h1>Tax Policies</h1>
                <Text size='md' type="secondary" style={{ alignContent: 'center' }} >Choose a tax type to create its strategy</Text>
            </div>
            <Row gutter={[30, 30]} wrap={false} justify={'center'} align="middle">
                <List
                    itemLayout="horizontal"
                    grid={{
                        gutter: 30,
                        column: 5,
                    }}
                    dataSource={data?.data || []}
                    renderItem={(item) => {
                        const taxIssue = (data?.data.find((taxIssue) => taxIssue.id === item.id))!;

                        console.log("taxIssue", taxIssue);
                        return (

                            <List.Item>
                                <TaxButton taxIssue={taxIssue} ></TaxButton>
                            </List.Item>
                        );
                    }}>
                </List>
            </Row>
        </Space >
    );
}
// export const RiskLevelList: React.FC<IResourceComponentsProps> = () => {
//     const { Panel } = Collapse;
//     type ExpandIconPosition = 'start' | 'end';
//     const [expandIconPosition, setExpandIconPosition] = useState<ExpandIconPosition>('start');
//     const { data, isLoading } = useList<IRiskLevel>({
//         resource: "risk-level",



//     });


//     // let arr1 = [99, 98, 34, 23,
//     // arr1.forEach(function (myans) {
//     //     console.log(myans);
//     // });

//     const riskLevelsCollapsed: CollapseProps['items'] = data?.data.map((item) => {
//         return {

//             key: item.id,
//             label: item.title,
//             children: <RiskLevelItem item={item} />,
//             style: {
//                 border: "6px solid #FD5526",
//                 borderLeftColor: item.color,
//                 borderRightColor: "#00000000",
//                 borderBottomColor: "#00000000",
//                 borderTopColor: "#00000000",
//                 background: "#FBF9F9",
//                 boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
//                 marginBottom: 24
//             },
//         }
//     });


//     console.log(riskLevelsCollapsed);
//     const onChange = (key: string | string[]) => {
//         console.log(key);
//     };

//     return (
//         <Collapse
//             defaultActiveKey={['1']}
//             items={riskLevelsCollapsed}
//             style={{
//                 //backgroundColor: "#FBF9F9",
//                 background: "#FBF9F900",
//                 // borderLeftColor: "#FD5526",
//                 // borderLeftWidth: "6px"
//             }}
//             ghost={true}
//         >
//         </Collapse>

//     );
// }