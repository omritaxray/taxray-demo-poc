import { CheckCircleFilled } from '@ant-design/icons';
import { Button, Col, Image, Row, Space, Tag } from 'antd';
import { Text } from 'components/Text';
import gmail from 'components/icons/gmail.png';
import slack from 'components/icons/slack.png';
import salesforce from 'components/icons/salesforce.png';
import ironclad from 'components/icons/ironclad.png';
import netsuite from 'components/icons/netsuite.png';
import netsuiteExample from 'components/icons/netsuiteExamples.jpg';
import ironcladExample from 'components/icons/ironcladExample.png';
import salesforceExample from 'components/icons/salesforceExample.png';
import React, { useState } from 'react'

const Action: React.FC<{
    taxPolicy: string;
}> = (taxPolicy) => {
    return (
        <Row>
            <Col flex={4}>
                <Text size='md'>Notification was sent via</Text>
            </Col>
            <Col flex={3}>
                <Tag>
                    <Space>
                        <Image
                            width={20}
                            src={gmail}
                            style={{

                                marginBottom: "2px",
                            }}
                        />
                        <Text size='md'>Gmail </Text>
                    </Space>
                </Tag>
            </Col>
            <Col flex={2}>
                <Text size='md'>to: </Text>
            </Col>
            <Col flex={2}>
                <Tag>
                    <Space>
                        <Text size='md'>Daniel Robbins (CFO)</Text>
                    </Space>
                </Tag>
            </Col>
            <Col flex={2}>
                <Tag color={"green"} icon={<CheckCircleFilled color='green'></CheckCircleFilled>}>
                    <Space>
                        <Text size='md'>Notified</Text>
                    </Space>
                </Tag>
            </Col>
            <Col flex={2}>
                <Tag>
                    <Space>
                        {/* <Text size='md' onClick={() => setVisible(true)}>Example</Text> */}
                    </Space>
                </Tag>
            </Col>
        </Row>
        // <Space direction="horizontal" style={{ width: "100%" }}>
        //     <Text size='md'>Notification was sent via</Text>
        //     <Tag>
        //         <Space>
        //             <Image
        //                 width={20}
        //                 src={gmail}
        //                 style={{

        //                     marginBottom: "2px",
        //                 }}
        //             />
        //             <Text size='md'>Gmail </Text>
        //         </Space>
        //     </Tag>
        //     <Text size='md'>to: </Text>
        //     <Tag>
        //         <Space>
        //             <Text size='md'>Daniel Robbins (CFO)</Text>
        //         </Space>
        //     </Tag>
        //     <br />
        //     <br />
        //     <Text size='md'>Example</Text>
        // </Space>

    )
}

export const SlackAction: React.FC<{
    taxPolicy: string;
}> = (taxPolicy) => {
    return (

        <Row>
            <Col flex={4}>
                <Text size='md'>Notification was sent via</Text>
            </Col>
            <Col flex={3}>
                <Tag>
                    <Space>
                        <Image
                            width={20}
                            src={slack}
                            style={{

                                marginBottom: "2px",
                            }}
                        />
                        <Text size='md'>Slack </Text>
                    </Space>
                </Tag>
            </Col>
            <Col flex={2}>
                <Text size='md'>to: </Text>
            </Col>
            <Col flex={2}>
                <Tag>
                    <Space>
                        <Text size='md'>Daniel Robbins (CFO)</Text>
                    </Space>
                </Tag>
            </Col>
            <Col flex={2}>
                <Tag color={"green"} icon={<CheckCircleFilled color='green'></CheckCircleFilled>}>
                    <Space>
                        <Text size='md'>Notified</Text>
                    </Space>
                </Tag>
            </Col>
            <Col flex={2}>
                <Tag>
                    <Space>
                        {/* <Text size='md' onClick={() => setVisible(true)}>Example</Text> */}
                    </Space>
                </Tag>
            </Col>
        </Row>
        // <Space direction="horizontal" style={{ width: "100%" }}>
        //     <Text size='md'>Notification was sent via</Text>
        //     <Tag>
        //         <Space>
        //             <Image
        //                 width={20}
        //                 src={gmail}
        //                 style={{

        //                     marginBottom: "2px",
        //                 }}
        //             />
        //             <Text size='md'>Gmail </Text>
        //         </Space>
        //     </Tag>
        //     <Text size='md'>to: </Text>
        //     <Tag>
        //         <Space>
        //             <Text size='md'>Daniel Robbins (CFO)</Text>
        //         </Space>
        //     </Tag>
        //     <br />
        //     <br />
        //     <Text size='md'>Example</Text>
        // </Space>

    )
}

export const IroncladAction: React.FC<{
    taxPolicy: string;
}> = (taxPolicy) => {

    const [visible, setIroncladVisible] = useState(false);

    const [scaleStep, setScaleStep] = useState(0.5);
    return (
        <div>
            <Row gutter={[24, 24]}>
                <Col flex={4}>
                    <Text size='md'>Notification was sent via</Text>
                </Col>
                <Col flex={3}>
                    <Tag>
                        <Space>
                            <Image
                                width={18}
                                src={ironclad}

                            />
                            <Text size='md'>Ironclad </Text>
                        </Space>
                    </Tag>
                </Col>
                <Col flex={2}>
                    <Text size='md'>to: </Text>
                </Col>
                <Col flex={8}>
                    <Tag>
                        <Space>
                            <Text size='md'>Negotiate Gross-up</Text>
                        </Space>
                    </Tag>
                </Col>
                <Col flex={2}>
                    <Tag color={"green"} icon={<CheckCircleFilled color='green'></CheckCircleFilled>}>
                        <Space>
                            <Text size='md'>Succeed</Text>
                        </Space>
                    </Tag>
                </Col>
                <Col flex={2}>
                    <Tag>
                        <Space>
                            <Text size='md' onClick={() => setIroncladVisible(true)}>Example</Text>
                        </Space>
                    </Tag>
                </Col>
            </Row>
            <Image
                width={600}
                style={{
                    display: 'none',
                    position: 'absolute',
                }}
                src={ironcladExample}
                preview={{
                    visible,
                    scaleStep,
                    src: ironcladExample,
                    onVisibleChange: (value) => {
                        setIroncladVisible(value);
                    },
                }}
            />
        </div>


    )
}

export const SalesforceAction: React.FC<{
    taxPolicy: string;
}> = (taxPolicy) => {
    return (
        <Space direction="horizontal" style={{ width: "100%" }}>
            <Text size='md'>Notification was sent via</Text>
            <Tag>
                <Space>
                    <Image
                        width={20}
                        src={salesforce}
                        style={{

                            marginBottom: "2px",
                        }}
                    />
                    <Text size='md'>Gmail </Text>
                </Space>
            </Tag>
            <Text size='md'>to: </Text>
            <Tag>
                <Space>
                    <Text size='md'>Daniel Robbins (CFO)</Text>
                </Space>
            </Tag>
            <br />
            <br />
            <Text size='md'>Example</Text>
        </Space>

    )
}

export const NetsuiteAction: React.FC<{
    taxPolicy: string;
}> = (taxPolicy) => {
    const [visible, setVisible] = useState(false);
    const [scaleStep, setScaleStep] = useState(0.5);
    return (
        <div>
            <Row>
                <Col flex={4}>
                    <Text size='md'>Notification was sent via</Text>
                </Col>
                <Col flex={3}>
                    <Tag>
                        <Space>
                            <Image
                                width={20}
                                src={netsuite}
                                style={{

                                    marginBottom: "2px",
                                }}
                            />
                            <Text size='md'>Netsuite </Text>
                        </Space>
                    </Tag>
                </Col>
                <Col flex={2}>
                    <Text size='md'>to field: </Text>
                </Col>
                <Col flex={2}>
                    <Tag>
                        <Space>
                            <Text size='md'>TaxRay AI</Text>
                        </Space>
                    </Tag>
                </Col>
                <Col flex={2}>
                    <Tag color={"green"} icon={<CheckCircleFilled color='green'></CheckCircleFilled>}>
                        <Space>
                            <Text size='md'>Withheld</Text>
                        </Space>
                    </Tag>
                </Col>
                <Col flex={2} style={{ textAlign: "end" }}>
                    <Space>
                        <Text size='md' onClick={() => setVisible(true)}>Example</Text>
                    </Space>
                </Col>
            </Row>
            <Image
                width={600}
                style={{
                    display: 'none',
                    position: 'absolute'
                }}
                src={netsuiteExample}
                preview={{
                    visible,
                    scaleStep,
                    src: netsuiteExample,
                    onVisibleChange: (value) => {
                        setVisible(value);
                    },
                }}
            />
        </div>
    )
}

export default Action