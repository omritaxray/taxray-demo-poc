import { IRiskLevel, IRiskLevelAction } from 'interfaces';
import React, { useState } from 'react'
import type { SliderSingleProps } from 'antd';
import { Card, Col, Radio, Row, Select, Space, Slider, InputNumber, ConfigProvider, Button, Modal } from 'antd'
import { DashboardOutlined, DollarCircleOutlined, MoneyCollectOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Text } from 'components/Text';
import ActionItem from './actionItem';
import { ComponentToken } from 'antd/lib/slider/style';
import { ConfigProviderProps, ThemeConfig } from 'antd/lib/config-provider';
import { HttpError, useList, useNavigation } from '@refinedev/core';
import { CreateButton, useForm } from '@refinedev/antd';
import CreateActionItem from './createActionItem';
import CreateActionItemForm from './createActionItemForm';
import { set } from 'lodash';
import { Databases, ID } from '@refinedev/appwrite';
import { appwriteClient } from 'utility';

type RiskLevelProps = {
    item: IRiskLevel;
};

let probabilityMode = 1;
let impactMode = 1;

let actionItems = [];

const impactHandleChange = (value = 1) => {
    console.log(`selected ${value}`);
    impactMode = value;
};

const openSansConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Open Sans' },
    // components: {
    //     Typography: {
    //         colorText: "#646464",
    //         colorTextDescription: "rgba(0, 0, 0, 0.65)",
    //         colorTextDisabled: "rgba(0, 0, 0, 0.45)",
    //     }
    // },
};

const openSansWhiteConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Open Sans' },
    components: {
        Typography: {
            colorText: "#FFF",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const poppinsConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Poppins' },
    components: {
        Typography: {
            colorText: "#000",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const interConfig: ThemeConfig = {
    token: { fontFamilyCode: 'Inter' },
    components: {
        Typography: {
            colorText: "#646464",
            colorTextDescription: "rgba(0, 0, 0, 0.65)",
            colorTextDisabled: "rgba(0, 0, 0, 0.45)",
        }
    },
};

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    {
        label: 'Single item risk',
        value: 'Single item risk',
    },
    {
        label: 'Accumulative risk',
        value: 'Accumulative risk',
    }
];

const marks: SliderSingleProps['marks'] = {
    0: {
        style: {
            color: '#0E9154',
        },
        label: <strong>0%</strong>,

    },
    1: {
        style: {
            color: '#14BA6D',
        },
        label: <strong>5%</strong>,

    },
    2: {
        style: {
            color: '#F8D000',
        },
        label: <strong>50%</strong>,

    },
    3: {
        style: {
            color: '#FD7326',
        },
        label: <strong>75%</strong>,

    },
    4: {
        style: {
            color: '#FD5526',
        },
        label: <strong>100%</strong>,

    },
    // 5: '100%',
    // {
    //     style: {
    //         color: '#f50',
    //     },
    //     label: <strong>5</strong>,

    // }
};

type FormValues = {
    action: "Notify"
    riskLevelId: IRiskLevel;
};

const RiskLevelItem: React.FC<RiskLevelProps> = ({ item }) => {

    const databases = new Databases(appwriteClient);

    console.log("Document", item);
    const riskLevelArray = [item];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const { show } = useNavigation();

    const { formProps, saveButtonProps, form, onFinish } = useForm<
        IRiskLevelAction,
        HttpError
    >({ resource: "risk-level-actions" });

    const handleOnFinish = async (values: FormValues) => {
        const actionValue = values.action;
        const riskLevelArray = values.riskLevelId.id;
        console.log("Valuwdqwdes", { values });
        await databases.createDocument(
            '653b35aca8b99e634a57',
            'risk-level-actions',
            ID.unique(),
            {
                action: actionValue,
                riskLevel: [
                    riskLevelArray
                ]
            }

        );
        setIsModalOpen(false);
        const newActionItem: IRiskLevelAction = {
            action: "string", // 0: "Notify", 1: "Update,
            tool: "string",
            notifyCommands: "",
            updateCommands: "Enum",
            user: [],
            actions: [],
            riskLevel: [],
            documentId: 0
        }
        actionItemsView.push(newActionItem);
        // setActionItemsView({ actionItemsView: actionItemsView.concat(newActionItem) });
    };

    const [actionItemsView, setActionItemsView] = useState(item.riskLevelActions);


    let [probabilityRailBg, setprobabilityRailBg] = useState('#EAECF0');
    let [probabilityTrackBg, setProbabilityTrackBg] = useState('#6039F5');
    const probabilityHandleChange = (value = 2) => {
        console.log(`selected ${value}`);
        probabilityMode = value;
        if (probabilityMode === 1) {
            console.log("mode 1");
            setprobabilityRailBg("#EAECF0");
            setProbabilityTrackBg("#6039F5");
        } else if (probabilityMode === 2) {
            console.log("mode 2");
            setProbabilityTrackBg("#6039F5");
            setprobabilityRailBg("#EAECF0");
        }
    };

    const [value3, setValue3] = useState('Single item risk');
    const onChange3 = ({ target: { value = "" } }) => {
        console.log('radio3 checked', value);
        setValue3(value);
    };

    return (
        <Space
            direction="vertical"
            size={'middle'}
            style={{
                width: "90%",
                alignContent: "center",
                margin: "0px 20px",
            }}>
            <ConfigProvider theme={interConfig}>

            </ConfigProvider>
            <ConfigProvider theme={openSansConfig}>
                <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" style={{ marginTop: "10px", height: "32px", width: "315px", justifyContent: 'flex-start' }} />
            </ConfigProvider>
            <Space direction='horizontal' size={16} style={{ width: "100%", justifyContent: "space-between" }} >
                <Card
                    style={{ height: "100%", width: "100%", backgroundColor: "#FBF9F9", borderColor: "#D0D5DD" }}
                    bodyStyle={{
                        padding: "8px 8px 0px 0px",
                    }}
                    headStyle={{
                        borderBlockColor: "#00000000",
                    }}
                    title={
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginLeft: "20px",
                                marginTop: "20px",
                            }}>
                            <DollarCircleOutlined color="#646464" />
                            <ConfigProvider theme={openSansConfig}>
                                <Text style={{ fontSize: "16px", fontWeight: '400' }}>Impact</Text>
                            </ConfigProvider>

                        </div>
                    }
                    size="small"
                >

                    <Space direction='vertical' size={'middle'}
                        style={{
                            width: "464px",
                            height: "86px",
                            margin: "20px",
                        }}>
                        <Select
                            defaultValue={1}
                            style={{
                                width: "100%",
                            }}
                            onChange={impactHandleChange}
                            options={[
                                {
                                    value: 1,
                                    label: 'is more than',
                                },
                                {
                                    value: 2,
                                    label: 'is less than',
                                }
                            ]}
                        />
                        <InputNumber addonAfter="$" defaultValue={item.impact} style={{
                            width: "100%",

                        }} />

                    </Space>
                </Card>
                <ConfigProvider theme={interConfig}>
                    <div className="ant-space-item" style={{ width: "26px" }}><Text style={{ fontSize: "14px", fontWeight: '600' }}>And</Text></div>
                </ConfigProvider>
                <Card
                    bordered={true}
                    style={{ height: "100%", width: "100%", backgroundColor: "#FBF9F9", borderColor: "#D0D5DD" }}
                    bodyStyle={{
                        padding: "8px 8px 0px 0px",
                    }}
                    headStyle={{
                        borderBlockColor: "#00000000",
                    }}
                    title={
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginLeft: "20px",
                                marginTop: "20px",
                            }}>
                            <DashboardOutlined color="#646464" />
                            <ConfigProvider theme={openSansConfig}>
                                <Text style={{ fontSize: "16px", fontWeight: '400' }}>Probability</Text>
                            </ConfigProvider>
                        </div>
                    }
                    size="small"
                >

                    <Space direction='vertical' size={'small'}
                        style={{
                            width: "464px",
                            height: "86px",
                            margin: "20px",
                        }}>
                        <Select
                            defaultValue={1}
                            style={{
                                width: "100%",

                            }}
                            onChange={probabilityHandleChange}
                            options={[
                                {
                                    value: 1,
                                    label: 'is between the range of',
                                },
                                {
                                    value: 2,
                                    label: 'is more than',
                                },
                                {
                                    value: 3,
                                    label: 'is less than',
                                },
                            ]}
                        />
                        <ConfigProvider theme={{
                            components: {
                                Slider: {
                                    controlSize: 10,
                                    dotBorderColor: "#00000000",
                                    dotActiveBorderColor: "#EAECF0",
                                    dotSize: -1,
                                    handleActiveColor: "#6039F5",
                                    handleColor: `#6039F5`,
                                    handleSize: 20,
                                    railBg: probabilityRailBg,
                                    railHoverBg: probabilityRailBg,
                                    railSize: 10,
                                    trackBg: probabilityTrackBg,
                                    trackHoverBg: probabilityTrackBg,
                                    colorPrimaryBorderHover: "#6039F5",
                                    colorBgElevated: "#6039F5",
                                    colorText: "#667085",
                                    borderRadius: 400,
                                    borderRadiusXS: 300
                                },
                            },
                        }}>
                            {item.title.includes("High") ?
                                <Slider range max={4} min={0} marks={marks} step={null} defaultValue={[3, 4]} tooltip={{ open: false }} style={{
                                    height: "10px",
                                    width: "100%",
                                    borderRadius: "400px"
                                }} /> : item.title.includes("Medium") ? <Slider range max={4} min={0} marks={marks} step={null} defaultValue={[2, 3]} tooltip={{ open: false }} style={{
                                    height: "10px",
                                    width: "100%",
                                    borderRadius: "400px"
                                }} /> : <Slider range max={4} min={0} marks={marks} step={null} defaultValue={[0, 1]} tooltip={{ open: false }} style={{
                                    height: "10px",
                                    width: "100%",
                                    borderRadius: "400px"
                                }} />}


                        </ConfigProvider>
                    </Space>

                </Card>
            </Space>
            {/* <Row justify={'center'}>
                <Col flex={4} style={{
                    alignSelf: "center",
                }}>
                    <Card
                        style={{ height: "196px", width: "604px", backgroundColor: "#FBF9F9", borderColor: "#D0D5DD" }}
                        bodyStyle={{
                            padding: "8px 8px 8px 0px",
                        }}
                        headStyle={{
                            borderBlockColor: "#00000000",
                        }}
                        title={
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px"
                                }}>
                                <MoneyCollectOutlined />
                                <Text size="sm" style={{ marginLeft: ".5rem" }}>
                                    Impact
                                </Text>
                            </div>
                        }
                        size="small"
                    >

                        <Space direction='vertical' size={'middle'}
                            style={{
                                width: "100%",
                                margin: "8px 8px",
                            }}>
                            <Select
                                defaultValue={1}
                                style={{
                                    width: "80%",
                                }}
                                onChange={impactHandleChange}
                                options={[
                                    {
                                        value: 1,
                                        label: 'is more than',
                                    },
                                    {
                                        value: 2,
                                        label: 'is less than',
                                    }
                                ]}
                            />
                            <InputNumber addonAfter="$" defaultValue={100} style={{
                                width: "80%",

                            }} />

                        </Space>
                    </Card>
                </Col>
                <Col flex={1} style={{ alignSelf: "center", textAlign: "center" }}>
                    <Text size="sm" style={{ marginLeft: "0rem" }}>
                        AND:
                    </Text>
                </Col>
                <Col flex={4} >
                    <Card
                        bordered={true}
                        style={{ height: "196px", width: "604px", backgroundColor: "#FBF9F9", borderColor: "#D0D5DD" }}
                        bodyStyle={{
                            padding: "8px 8px 8px 12px",
                        }}
                        headStyle={{
                            borderBlockColor: "#00000000",
                        }}
                        title={
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                }}>
                                <UnorderedListOutlined />
                                <Text size="sm" style={{ marginLeft: ".5rem" }}>
                                    Probability
                                </Text>
                            </div>
                        }
                        size="small"
                    >

                        <Space direction='vertical' size={'middle'}
                            style={{
                                width: "100%",
                                margin: "8px 0px",
                            }}>
                            <Select
                                defaultValue={1}
                                style={{
                                    width: "80%",
                                }}
                                onChange={probabilityHandleChange}
                                options={[
                                    {
                                        value: 1,
                                        label: 'is more than',
                                    },
                                    {
                                        value: 2,
                                        label: 'is less than',
                                    }
                                ]}
                            />
                        </Space>
                        <ConfigProvider theme={{
                            components: {
                                Slider: {
                                    controlSize: 10,
                                    dotBorderColor: "#00000000",
                                    dotActiveBorderColor: "#EAECF0",
                                    dotSize: 0,
                                    handleActiveColor: "#6039F5",
                                    handleColor: `#6039F5`,
                                    handleSize: 20,
                                    railBg: probabilityRailBg,
                                    railHoverBg: probabilityRailBg,
                                    railSize: 10,
                                    trackBg: probabilityTrackBg,
                                    trackHoverBg: probabilityTrackBg,
                                    colorPrimaryBorderHover: "#6039F5",
                                    colorBgElevated: "#6039F5",
                                    colorText: "#667085"
                                },
                            },
                        }}>
                            <Slider max={5} min={1} marks={marks} step={null} defaultValue={3} tooltip={{ open: false }} style={{
                                height: "20px",
                                width: "80%",
                            }} />
                        </ConfigProvider>

                    </Card>
                </Col>
            </Row> */}
            <ConfigProvider theme={interConfig}>
                <div style={{ marginTop: "17px" }}><Text style={{
                    fontWeight: "400", fontSize: "16px",

                }}>Do the following:
                </Text>
                </div>


            </ConfigProvider>

            <Space direction='vertical'>
                {actionItemsView.map((actionItem) => (

                    <ActionItem item={actionItem} />
                    // <Button
                    //     key={category.id}
                    //     shape="round"
                    //     type={
                    //         filterCategories.includes(category.id.toString())
                    //             ? "primary"
                    //             : "default"
                    //     }
                    //     onClick={() => toggleFilterCategory(category.id.toString())}
                    // >
                    //     {category.title}
                    // </Button>
                ))}
                <ConfigProvider theme={{
                    token: { fontFamilyCode: 'Open Sans' },
                    components: {
                        Button: {
                            colorText: "#6039F5",
                        },
                        Typography: {
                            fontFamilyCode: 'Open Sans',
                            colorText: "#6039F5",

                        }

                    },
                }}>
                    <Modal
                        title="Create New Action Item"
                        open={isModalOpen}
                        onCancel={() => {
                            setIsModalOpen(false);
                        }}
                        okButtonProps={{
                            ...saveButtonProps,
                        }}
                        okText="Save"
                        width={560}
                    >
                        <CreateActionItemForm
                            riskLevelId={item}
                            action='Notify'
                            form={form}
                            formProps={{
                                ...formProps,
                                onFinish: handleOnFinish,
                            }}
                        />
                    </Modal>
                    <Button type="text" ><Text size="sm" strong={true} onClick={() => setIsModalOpen(true)}>
                        + Add New Notification
                    </Text>

                    </Button>
                </ConfigProvider>
            </Space>
        </Space >
    )
}

export default RiskLevelItem