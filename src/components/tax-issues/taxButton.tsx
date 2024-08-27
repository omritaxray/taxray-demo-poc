import { useDrawerForm } from '@refinedev/antd';
import { useNavigation } from '@refinedev/core';
import { Button, Card, Col, ConfigProvider, List, Space } from 'antd'
import { Text } from 'components/Text'
import { IRiskLevels, ITaxIssue } from 'interfaces'
import React from 'react'


const Circle = ({ color = 'blue', size = 50 }) => {
    return (
        <div
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                backgroundColor: color,
                display: 'inline-block', // This makes it easy to use the circle inline with other elements
                margin: '0 3px',
            }}
        />
    );
};

type ITaxIssueProps = {
    taxIssue: ITaxIssue;
    // updateStock?: (changedValue: number, clickedProduct: IProduct) => void;
    // editShow: (id?: BaseKey) => void;
};

const TaxButton: React.FC<ITaxIssueProps> = ({
    taxIssue
    // updateStock,
    // editShow,
}) => {

    const { show } = useNavigation();

    if (taxIssue.riskLevels.length > 0) {
        console.log("does", taxIssue.riskLevels);
        return (
            <Col style={{
                alignSelf: 'center',
                textAlign: 'center'
            }} span={4} >
                <Card style={{
                    height: "180px",
                    width: "270px",
                    backgroundColor: "#FBF9F9",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}>
                    <Space direction='vertical' style={{ justifyContent: 'center' }} size={15}>
                        <Text strong size='md' style={{ alignContent: 'center' }} >{taxIssue.tax}</Text>

                        <Space style={{ justifyContent: 'center' }}>
                            <Text strong size='sm'>Risk level:</Text>

                            <List
                                itemLayout="horizontal"
                                dataSource={taxIssue.riskLevels || []}
                                renderItem={(item) => {
                                    return (
                                        <Space style={{ justifyContent: "space-around" }}>
                                            <List.Item>
                                                <Circle color={item.color} size={13} />
                                            </List.Item>
                                        </Space>
                                    );
                                }
                                }></List>
                        </Space>

                        <ConfigProvider theme={{
                            components: {
                                Button: {
                                    colorPrimaryHover: "#6039F5",
                                    colorBorder: "#6039F5",
                                    colorText: "#6039F5",
                                },
                                Typography: {
                                    colorText: "#6039F5",

                                }

                            },
                        }}><Button type="default" style={{ width: "50%" }} onClick={() => show("risk-levels", taxIssue.id)}><Text size="sm" strong={true} >
                            Edit
                        </Text>

                            </Button>
                        </ConfigProvider>
                    </Space>
                </Card>
            </Col >
        )

    } else {
        return (
            <Col style={{
                alignSelf: 'center',
                textAlign: 'center',
            }} span={4} >
                <Card style={{
                    height: "180px",
                    width: "270px",
                    backgroundColor: "#FBF9F9",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

                }}>
                    <Space direction='vertical' style={{ justifyContent: 'center' }} size={15}>
                        <Text strong size='md' style={{ alignContent: 'center' }} >{taxIssue.tax}</Text>

                        <Space style={{ justifyContent: 'center' }}>
                            <Text strong size='sm'>Risk level: No risk levels</Text>
                        </Space>

                        <ConfigProvider theme={{
                            components: {
                                Button: {
                                    colorPrimaryHover: "#6039F5",
                                    colorBorder: "#6039F5",
                                    colorText: "#6039F5",
                                },
                                Typography: {
                                    colorText: "#6039F5",

                                }

                            },
                        }}><Button type="default" ><Text size="sm" strong={true}>
                            Create a policy
                        </Text>

                            </Button>
                        </ConfigProvider>
                    </Space>
                </Card>
            </Col >
        )
    }

}

export default TaxButton