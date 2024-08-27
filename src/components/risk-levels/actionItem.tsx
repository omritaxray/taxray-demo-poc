import { ConfigProvider, Image, Input, Select, Space } from 'antd'
import { Text } from 'components/Text';
import React from 'react'
import type { SelectProps } from 'antd';
import { IRiskLevelAction } from 'interfaces';
import gmail from 'components/icons/gmail.png';
import slack from 'components/icons/slack.png';
import ironclad from 'components/icons/ironclad.png';
import netsuite from 'components/icons/netsuite.png';
import docusign from 'components/icons/docusign.png';
import salesforce from 'components/icons/salesforce.png';

let actionType = ""
let actionSystem = ""
let actionTarget = ""
const handleActionTypeChange = (value = "") => {
    actionType = value;
    console.log(`selected ${value}`);
};

const handleActionSystemChange = (value = "") => {
    actionSystem = value;
    console.log(`selected ${value}`);
};

const handleActionTargerChange = (value = "") => {
    actionTarget = value;
    console.log(`selected ${value}`);
};


const actionsOptions: SelectProps['options'] = [];

const handleUsersChange = (value: string[]) => {
    console.log(`selected ${value}`);
};

const { Option } = Select;
type IActionItemProps = {
    item: IRiskLevelAction;
    // updateStock?: (changedValue: number, clickedProduct: IProduct) => void;
    // editShow: (id?: BaseKey) => void;
};

const ActionItem: React.FC<IActionItemProps> = ({ item }) => {
    //pass options of users from DB
    const usersOptions: SelectProps['options'] = [];
    item.user?.map((user) => {
        usersOptions.push({
            label: user.name + " " + user.lastName + " (" + user.role + ")",
            value: user.id,
        });
    });
    item.actions?.map((action) => {
        actionsOptions.push({
            label: action.command,
            value: action.id,
        });
    });

    const notifyActionOptions = {
        items: [
            {
                value: 'Gmail',
                label: 'Gmail',
                emoji: gmail,
                desc: "Description."
            },
            {
                value: 'Slack',
                label: 'Slack',
                emoji: slack,
                desc: "Description."
            },
            {
                value: 'Ironclad',
                label: 'Ironclad',
                emoji: ironclad,
                desc: "Description."
            },
            {
                value: 'Netsuite',
                label: 'Netsuite',
                emoji: netsuite,
                desc: "Description."
            }, {
                value: 'Docusign',
                label: 'Docusign',
                emoji: docusign,
                desc: "Description."
            }
        ]
    }

    if (item === null) {
        return (
            // If action is empty and being created
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
                <Space wrap style={{ width: "100%" }}>
                    <Select
                        defaultValue="choose an option"
                        style={{
                            width: "230px",
                        }}
                        onChange={handleActionTypeChange}
                        options={[
                            {
                                value: 'Notify',
                                label: 'Notify',
                            },
                            {
                                value: 'Update',
                                label: 'Update System',
                            }
                        ]}
                    />
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        via
                    </Text>
                    <Select
                        defaultValue="choose an option"
                        style={{
                            width: "230px",
                        }}
                        onChange={handleActionSystemChange}
                        options={[
                            {
                                value: '1',
                                label: 'Gmail',
                                emoji: { gmail }
                            },
                            {
                                value: '2',
                                label: 'Slack',
                            }
                        ]}
                    />
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        to
                    </Text>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '230px' }}
                        placeholder="Please select"
                        onChange={handleUsersChange}
                        options={usersOptions}
                    />
                    {/* // Add If update/notify then */}
                    {/* <Select
                defaultValue="choose an option"
                style={{
                    width: "20%",
                }}
                onChange={handleChange}
                options={[
                    {
                        value: '1',
                        label: 'Block the deal',
                    },
                    {
                        value: '2',
                        label: 'Negotiate the deal',
                    }
                ]}
            /> */}
                </Space>
            </ConfigProvider>
            //If action is not empty and being edited

        )
    } else {
        console.log("item is not null", item);
        return (
            <ConfigProvider theme={{
                token: { fontFamilyCode: 'Open Sans' },
                components: {
                    Button: {
                        colorText: "#6039F5",
                    },
                    Typography: {
                        fontFamilyCode: 'Open Sans',
                        colorText: "#667085",

                    },
                    Select: {
                        fontFamilyCode: 'Open Sans',
                        colorText: "#667085",
                        colorPrimary: "#111222",
                    },
                    Input: {
                        colorTextPlaceholder: "#667085"
                    }
                },
            }}>
                <Space wrap style={{ width: "100%" }}>
                    {/* <Select
                        defaultValue={
                            item.action.toString()
                        }
                        style={{
                            width: "230px",
                        }}
                        onChange={handleActionTypeChange}
                        options={[
                            {
                                value: "Notify",
                                label: 'Notify',
                            },
                            {
                                value: "Update",
                                label: 'Update System',
                            }
                        ]}
                    /> */}
                    <Input.TextArea style={{ width: "296px", height: "29px" }} disabled={true} placeholder={item.action} />
                    <Text style={{ marginLeft: "20px" }}>
                        via
                    </Text>
                    <Select
                        defaultValue={item.tool}
                        style={{
                            marginTop: "3px",
                            marginLeft: "20px",
                            width: "296px",
                        }}
                        onChange={handleActionSystemChange}
                    >
                        {notifyActionOptions.items.map((item) => (
                            <Option key={item.value}>
                                <Image src={item.emoji} style={{ width: "18px" }} preview={false} />
                                <Text style={{ marginLeft: ".5rem" }}>{item.label}</Text>
                            </Option>
                        ))}
                    </Select>
                    <Text size="sm" style={{
                        marginLeft: "20px",
                    }}>
                        to
                    </Text>
                    {(item.action === "Notify") ? (
                        console.log("item.user", usersOptions),
                        <Select
                            mode="multiple"
                            allowClear
                            style={{
                                marginLeft: "20px",
                                width: "296px",
                            }}
                            placeholder="Please select users"
                            onChange={handleUsersChange}
                            options={usersOptions}
                            defaultValue={item.user?.slice(0, 1).map((user) => user.name + " " + user.lastName + " (" + user.role + ")")}
                        >

                        </Select>
                    ) : (
                        <Input.TextArea style={{ width: "296px", height: "29px" }} defaultValue={item.updateCommands} />
                    )}
                    {/* <Select
                        mode="multiple"
                        allowClear
                        style={{
                            marginLeft: "20px",
                            width: "296px",
                        }}
                        placeholder="Please select users"
                        onChange={handleUsersChange}
                        options={usersOptions}
                        defaultValue={item.user?.map((user) => user.name + " " + user.lastName + " (" + user.role + ")")}
                    >

                    </Select> */}
                    {/* // Add If update/notify then */}
                    {/* <Select
                defaultValue="choose an option"
                style={{
                    width: "20%",
                }}
                onChange={handleChange}
                options={[
                    {
                        value: '1',
                        label: 'Block the deal',
                    },
                    {
                        value: '2',
                        label: 'Negotiate the deal',
                    }
                ]}
            /> */}
                </Space >
            </ConfigProvider >
        )
    }
}

export const UpdateActionItem: React.FC<IActionItemProps> = ({ item }) => {
    //pass options of users from DB
    const usersOptions: SelectProps['options'] = [];
    item.user?.map((user) => {
        usersOptions.push({
            label: user.name + " " + user.lastName + " (" + user.role + ")",
            value: user.id,
        });
    });
    item.actions?.map((action) => {
        actionsOptions.push({
            label: action.command,
            value: action.id,
        });
    });

    const updateActionOptions = {
        items: [
            {
                value: 'Ironclad',
                label: 'Ironclad',
                emoji: ironclad,
                desc: "Description."
            },
            {
                value: 'Netsuite',
                label: 'Netsuite',
                emoji: netsuite,
                desc: "Description."
            }
        ]
    }



    if (item === null) {
        return (
            // If action is empty and being created
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
                <Space wrap style={{ width: "100%" }}>
                    {/* <Select
                        defaultValue="choose an option"
                        style={{
                            width: "230px",
                        }}
                        onChange={handleActionTypeChange}
                        options={[
                            {
                                value: 'Notify',
                                label: 'Notify',
                            },
                            {
                                value: 'Update',
                                label: 'Update System',
                            }
                        ]}
                    /> */}
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        via
                    </Text>
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        via
                    </Text>
                    <Select
                        defaultValue="choose an option"
                        style={{
                            width: "230px",
                        }}
                        onChange={handleActionSystemChange}
                        options={[
                            {
                                value: '1',
                                label: 'Gmail',
                                emoji: { gmail }
                            },
                            {
                                value: '2',
                                label: 'Slack',
                            }
                        ]}
                    />
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        to
                    </Text>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '230px' }}
                        placeholder="Please select"
                        onChange={handleUsersChange}
                        options={usersOptions}
                    />

                </Space>
            </ConfigProvider>
            //If action is not empty and being edited

        )
    } else {
        return (
            <ConfigProvider theme={{
                token: { fontFamilyCode: 'Open Sans' },
                components: {
                    Button: {
                        colorText: "#6039F5",
                    },
                    Typography: {
                        fontFamilyCode: 'Open Sans',
                        colorText: "#667085",

                    },
                    Select: {
                        fontFamilyCode: 'Open Sans',
                        colorText: "#667085",
                        colorPrimary: "#111222",
                    }
                },
            }}>
                <Space wrap style={{ width: "100%" }}>
                    <Input.TextArea style={{ width: "296px", height: "29px" }} disabled={true} placeholder='Update' />
                    {/* <Select
                        defaultValue={
                            item.action.toString()
                        }
                        style={{
                            width: "230px",
                        }}
                        onChange={handleActionTypeChange}
                        options={[
                            {
                                value: "Notify",
                                label: 'Notify',
                            },
                            {
                                value: "Update",
                                label: 'Update System',
                            }
                        ]}
                    /> */}
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        via
                    </Text>
                    <Select
                        defaultValue="choose an option"
                        style={{
                            width: "230px",
                        }}
                        onChange={handleActionSystemChange}
                    >
                        {updateActionOptions.items.map((item) => (
                            <Option key={item.value}>
                                <Image src={item.emoji} style={{ width: "18px" }} preview={false} />
                                <Text size="sm" style={{ marginLeft: ".5rem", paddingTop: "8px" }}>{item.label}</Text>
                            </Option>
                        ))}
                    </Select>
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        to
                    </Text>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '230px' }}
                        placeholder="Please select"
                        onChange={handleUsersChange}
                        options={usersOptions}
                    >

                    </Select>

                </Space >
            </ConfigProvider >
        )
    }
}

export default ActionItem