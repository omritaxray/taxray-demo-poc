import React from "react";
import { IResourceComponentsProps, BaseRecord, useShow, useList, useMany } from "@refinedev/core";
import { useTable, List, useDrawerForm, useModal, CreateButton, ShowButton } from "@refinedev/antd";
import { Table, Space, Tag, Avatar, Typography, Image, Button, Form, Input, Modal, ThemeConfig, ConfigProvider, Row, Col } from "antd";
import { TableProps } from "antd/lib";
import { DownOutlined, SearchOutlined, MinusCircleOutlined, CloudDownloadOutlined, SlidersOutlined, ExclamationCircleFilled, ArrowRightOutlined, CheckCircleFilled } from "@ant-design/icons";
import {
    ClockCircleTwoTone,
    CheckCircleTwoTone,
    MinusCircleTwoTone,
} from '@ant-design/icons';
import { IProduct, IStore, ISupplier, ISuppliers } from "../../interfaces";
import { CreateProduct } from "components/product";
import { StoreProducts } from "components/store/StoreProducts";
import { SuppliersItem } from "components/suppliers/SuppliersItem";
import { log } from "console";
import { Text } from "components/Text";
import TaxAnalysisReview from "components/Analysis/taxAnalysisReview";
import TaxAnalysisReviewBad from "components/Analysis/taxAnalysisReviewBad";
import { ComplianceCheckListIdeal } from "components/Analysis/complianceCheckList";
import FileDownloadCard from "components/Analysis/fileDownloadCard";
import Actions from "components/Analysis/actions";

const { useState } = React;



const statusTextStyle = {
    color: "#667085",
    fontFamily: "Arial"
};

const pdfIconStyle = {
    color: "white",
    backgroundImage: `url("http://takeof.me/pdfIcon.svg")`,
    // img: "/images/pdfIcon.svg",
    padding: "10px",
    fontFamily: "Arial"
};
const takeActionIconStyle = {
    color: "white",
    backgroundImage: `url("http://takeof.me/takeActionIcon.svg")`,
    // width: "20%",
    // height: "100%",
    padding: "15px 10px 10px 75px",
    backgroundRepeat: "no-repeat",
    //padding: "10% 10% 10% 20%",
    fontFamily: "Arial"
};

const editIconStyle = {
    color: "white",
    // width: "20%",
    // height: "100%",
    backgroundImage: `url("http://takeof.me/editIcon.svg")`,
    padding: "15px 10px 10px 45px",
    backgroundRepeat: "no-repeat",
    fontFamily: "Arial"
};




export const SupplierList: React.FC<IResourceComponentsProps> = () => {

    const alloyTOSExample = 'https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/alloycontract/view?project=64ea6567e57f4a43d7f9&mode=admin';
    const w8beneExample = 'https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/w8bene/view?project=64ea6567e57f4a43d7f9&mode=admin'

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
    const modalStyles = {
        header: {
            borderLeft: `5px solid #333`,
            borderRadius: 0,
            paddingInlineStart: 5,
        },
        body: {
            boxShadow: 'inset 0 0 5px #999',
            borderRadius: 5,
        },
        mask: {
            backdropFilter: 'blur(10px)',
        },
        footer: {
            borderTop: '1px solid #333',
        },
        content: {
            boxShadow: '0 0 30px #999',
        },
    };



    const { queryResult, setShowId } = useShow<IStore>();
    const { data: showQueryResult } = queryResult;
    const record = showQueryResult?.data;

    const { modalProps, show } = useModal();
    const {
        drawerProps: createDrawerProps,
        formProps: createFormProps,
        saveButtonProps: createSaveButtonProps,
        show: createShow,
    } = useDrawerForm<ISupplier>({
        action: "create",
        resource: "suppliers",
        redirect: false,
    });
    const { tableProps } = useTable<ISupplier>({
        syncWithLocation: true,
    });
    const supplierIds =
        tableProps?.dataSource?.map((item) => item.id) ?? [];
    const { data, isLoading } = useMany<ISupplier>({
        resource: "653b35bc06b566cb800c",
        ids: supplierIds,
        queryOptions: {
            enabled: supplierIds.length > 0,
        },
    });


    // const { data: listData, isLoading, isError } = useList<ISupplier>({
    //     resource: "653b35bc06b566cb800c"
    // });
    // const suppliers = listData?.data ?? [];
    let recordItemId = 0;
    return (
        <List title=""
            headerProps={{
                backIcon: true,
                style: {
                    backgroundColor: "white",
                    padding: "16px",
                }
                ,
            }}
        >
            <ConfigProvider
                theme={{
                    components: {
                        Modal: {
                            titleLineHeight: 2,
                        }
                    }
                }}
            >
                <Modal title={<h1 style={{ marginLeft: "8px" }}>Tax Analysis Report</h1>} width={1600} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <ComplianceCheckListIdeal />

                        <Row style={{ borderTop: "3px solid #E5E5E5" }}>
                            <TaxAnalysisReview />
                        </Row>
                        {/* <TaxAnalysisReviewBad /> */}

                        <Row style={{ borderTop: "3px solid #E5E5E5" }}>
                            <Col flex={1} style={{ borderRight: "3px solid #E5E5E5" }}>
                                <Actions taxPolicy='Something' />
                            </Col>
                            <Col flex={2}>
                                <Space direction="vertical" style={{ width: "100%" }}>
                                    <h2 style={{ marginTop: "8px", marginLeft: "16px" }}>Documentation</h2>
                                    <div className="ant-space-item"
                                        style={{ textAlign: "center" }}>
                                        <Space direction="horizontal" align="baseline" style={{ textAlign: "center", width: "80%", justifyContent: "space-evenly" }}>
                                            <FileDownloadCard fileName='Terms of Service.pdf' fileURL={alloyTOSExample} />
                                            <FileDownloadCard fileName='W8 BEN-E.pdf' fileURL={w8beneExample} />
                                        </Space>
                                    </div>
                                    <br></br>
                                </Space>
                            </Col>
                        </Row>
                    </Space>
                </Modal>
            </ConfigProvider >
            <Form layout="inline">
                <Space></Space>
                <Form layout="vertical">
                    <Form
                        layout="inline"
                        className="components-table-demo-control-bar"
                        style={{ marginBottom: 8 }}
                    >
                        <Text
                            strong
                            ellipsis
                            style={{
                                padding: "0px 10px 0px 10px",
                                display: "flex",
                            }}
                        >
                            Transactions{"  "}
                        </Text>
                        {/* <Tag color="white">

                        </Tag> */}
                        <Tag color="purple" bordered={false}>
                            10,232
                        </Tag>

                    </Form>
                    <Form
                        layout="vertical"
                        //className="components-table-demo-control-bar"
                        style={{ marginBottom: 16 }}
                    >
                        <Text
                            ellipsis
                            style={{
                                color: "#667085",
                                display: "flex",
                                padding: "0px 10px 0px 10px",
                            }}
                        >
                            January 1 - August 23, 2023
                        </Text>
                    </Form>

                </Form>
                <Form layout="horizontal">
                    <Space>
                        {/* <Tag icon={<MinusCircleOutlined />} color="white" bordered={false}>
                            <Text style={statusTextStyle} ></Text>
                        </Tag> */}
                    </Space>
                    <Form.Item name="name" noStyle style={{
                        padding: "50px 0px 0px 10px"
                    }}>
                        <Input
                            style={{
                                // width: "600px" //if right menu is closed
                                width: "900px" //if right menu is closed


                            }}
                            placeholder={("Search by Supplier Name, Contract Title, Deal Size, Risk, Status")}
                            prefix={<SearchOutlined />}
                        />
                    </Form.Item>
                    {/* <Tag color="white">
                        a
                    </Tag> */}
                    {/* <SlidersOutlined /> */}
                    <Button ghost type="text" icon={<SlidersOutlined />} style={{
                        padding: "0px 30px 0px 30px"
                    }}>Filters
                    </Button>
                    {/* <Tag color="white">

                    </Tag> */}
                    {/* <Tag icon={<FilterTwoTone twoToneColor="black" />} color="white" bordered={false} >
                        <Text style={statusTextStyle} >Filters</Text>
                    </Tag> */}
                    <Button type="default" icon={<CloudDownloadOutlined />} title="Export" style={{
                        padding: "0px 10px 0px 10px"
                    }}>
                        Export
                    </Button>
                </Form>
            </Form>


            <Table {...tableProps} rowKey="id">
                <Table.Column dataIndex="id" title="id"
                    align="center"
                    render={(value) => {
                        recordItemId = value;
                        return (
                            <Text strong>{value}</Text>
                        )
                    }}
                />
                <Table.Column dataIndex="supplierName" title="Supplier Name"
                    align="center"
                    render={(value) => {
                        return (
                            <Text strong>{value}</Text>
                        )
                    }}
                />
                <Table.Column
                    dataIndex="supplierCountry"
                    title="Supplier Country"
                    align="center"
                    render={(value) => {
                        return (
                            <Space>
                                <Image
                                    //size={16}

                                    src={`/images/flags/${value}.svg`}
                                    style={{

                                        marginBottom: "2px",
                                    }}
                                />
                                <div>
                                    {value}
                                    {/* <DownOutlined
                                        style={{
                                            fontSize: "12px",
                                            marginLeft: "6px",
                                        }}
                                    /> */}
                                </div>
                            </Space>
                        )
                    }}

                />
                <Table.Column
                    dataIndex="contractTitle"
                    title="Contract Title"
                    align="center"
                />
                <Table.Column
                    dataIndex="dealSize"
                    title="Deal Size"
                    align="center" />


                <Table.Column
                    dataIndex="risk"
                    title="Risk"
                    width={100}
                    align="center"
                    render={(value, riskColor: String) => {
                        let riskValue = value;
                        if (riskValue === 1) {
                            return (
                                <Space>
                                    <Tag color="#14BA6D" >
                                        {riskValue}
                                        {/* show();
                    setShowId(id); */}
                                    </Tag>
                                </Space>
                            )
                        } else if (riskValue === 2) {
                            const themeConfig: ThemeConfig = {
                                token: {
                                    colorPrimary: "#F8D000",
                                    colorBgContainer: "#F8D000",
                                    colorBgLayout: "#F8D000",
                                    colorBorderBg: "#E8E9EA",
                                    colorText: "#FFF",
                                }
                            };
                            return (
                                <ConfigProvider theme={themeConfig}>
                                    <ShowButton hideText={true} icon={riskValue} style={{ height: "100%", width: "100%" }} recordItemId={recordItemId} onClick={showModal}>

                                    </ShowButton>
                                </ConfigProvider>
                                // <Tag color="#F8D000">
                                //     {riskValue}
                                // </Tag>
                            )
                        } else if (riskValue === 3) {
                            return (
                                < Tag color="#FD5526" >
                                    {riskValue}
                                </Tag>
                            )
                        }
                    }}
                />
                <Table.Column dataIndex="status" title="Status" align="center" render={(value) => {

                    if (value === -1) {
                        return (
                            <Tag icon={<MinusCircleTwoTone twoToneColor="#FD5526" />} color="white" bordered={false}>
                                <Text style={statusTextStyle} >Declined</Text>
                            </Tag>
                        )
                    } else if (value === 0) {
                        return (
                            <Tag icon={<ClockCircleTwoTone twoToneColor="#a0a0a0" />} color="white" bordered={false} >
                                <Text style={statusTextStyle} >Under Negotiation</Text>
                            </Tag>
                        )

                    } else if (value === 1) {
                        return (
                            <Space>
                                <Tag icon={<CheckCircleTwoTone twoToneColor="#69b1ff" />} color="white" bordered={false}>
                                    <Text style={statusTextStyle} >Approved</Text>
                                </Tag>
                            </Space>
                        )
                    }

                }} />
                < Table.Column
                    dataIndex="contract"
                    title="Contract"
                    render={(value) => {
                        return (
                            <Button ghost type="text">
                                <div style={pdfIconStyle} ></div>
                            </Button>
                        )
                    }} />

                {/* <Upload>
      
    </Upload> */}
                <Table.Column dataIndex="action" key="image"
                    align="center"
                    render={(value) => {

                        if (value === 1) {
                            return (
                                <Button ghost type="text" onClick={() => createShow()}>
                                    <div style={takeActionIconStyle} ></div>
                                </Button>
                            )
                        } else if (value === 2) {
                            return (
                                <Button ghost type="text" onClick={() => {
                                    show();
                                    setShowId(1);
                                }}>
                                    <div style={editIconStyle} ></div>
                                </Button>
                            )
                        }

                    }} />
            </Table>
            {/* <CreateProduct
                drawerProps={createDrawerProps}
                formProps={createFormProps}
                saveButtonProps={createSaveButtonProps}
            /> */}
            {
                record && (
                    <StoreProducts modalProps={modalProps} record={record} />
                )
            }
        </List >

    );
};
