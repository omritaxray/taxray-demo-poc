import React, { useState } from 'react'

import { List, useModal, useTable } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";

import {
    AppstoreOutlined,
    SearchOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons";
import { Col, ConfigProvider, Form, Grid, Input, Modal, Radio, Row, Space, Spin, Tag } from "antd";
import debounce from "lodash/debounce";
import { TableView } from "components/transactions/table-view";
import { ITransactionVendor } from 'interfaces';
import { Text } from 'components/Text';
import { ComplianceCheckListIdeal } from 'components/Analysis';
import TaxAnalysisReview from 'components/Analysis/taxAnalysisReview';
import Actions from 'components/Analysis/actions';
import FileDownloadCard from 'components/Analysis/fileDownloadCard';

type Props = React.PropsWithChildren;
type View = "card" | "table";

const TransactionsList: React.FC<Props> = ({ children }) => {
    const [view, setView] = useState<View>("table");
    const screens = Grid.useBreakpoint();

    const {
        tableProps,
        searchFormProps,
        setCurrent,
        setPageSize,
        filters,
        sorters,
        setFilters,
        tableQueryResult,
    } = useTable<
        ITransactionVendor,
        HttpError,
        { name: string | undefined }
    >({
        pagination: {
            pageSize: 12,
        },
        // sorters: {
        //     initial: [
        //         {
        //             field: "createdAt",
        //             order: "asc",
        //         },
        //     ],
        // },
        filters: {
            initial: [
                {
                    field: "vendorName",
                    value: undefined,
                    operator: "contains",
                },
                {
                    field: "entity",
                    value: undefined,
                    operator: "contains",
                },
                {
                    field: "whtRequired",
                    value: undefined,
                    operator: "eq",
                },
                {
                    field: "relatedEntity",
                    value: undefined,
                    operator: "contains",
                }
            ],
        },
        sorters: {
            initial: [{ field: "id", order: "desc" }],
        },
        onSearch: (values) => {
            return [
                {
                    field: "vendorName",
                    operator: "contains",
                    value: values.name,
                },
            ];
        }
    });

    const onViewChange = (value: View) => {
        setView(value);
        setFilters([], "replace");
        // TODO: useForm should handle this automatically. remove this when its fixed from antd useForm.
        searchFormProps.form?.resetFields();
    };

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            searchFormProps?.onFinish?.({
                name: undefined,
            });
        } else {
            searchFormProps?.onFinish?.({
                name: e.target.value,
            });
        }
    };
    const debouncedOnChange = debounce(onSearch, 500);
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
    const { modalProps, show } = useModal();
    return (
        <div className="page-container">
            <h1 style={{ marginLeft: "0.75%" }}>Foreign Vendors - Withholding Tax</h1>
            <List
                breadcrumb={false}
                headerButtons={() => {
                    return (
                        <Space
                            style={{
                                marginTop: screens.xs ? "1.6rem" : undefined,
                            }}
                        >

                            <Form {...searchFormProps} layout="inline">
                                <Form.Item name="name" noStyle>
                                    <Input
                                        size="large"
                                        prefix={<SearchOutlined className="anticon tertiary" />}
                                        // suffix={
                                        //     <Spin
                                        //         size="small"
                                        //         spinning={tableQueryResult.isFetching}
                                        //     />
                                        // }
                                        placeholder="Search by name"
                                        onChange={debouncedOnChange}
                                    />
                                </Form.Item>
                            </Form>
                            {!screens.xs ? (
                                <Radio.Group
                                    size="large"
                                    value={view}
                                    onChange={(e) => onViewChange(e.target.value)}
                                >
                                    <Radio.Button value="table">
                                        <UnorderedListOutlined />
                                    </Radio.Button>
                                    <Radio.Button value="card">
                                        <AppstoreOutlined />
                                    </Radio.Button>
                                </Radio.Group>
                            ) : null}
                        </Space>
                    );
                }}
                contentProps={{
                    style: {
                        marginTop: "28px",
                    },
                }}
                title={
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
                }
            >
                {screens.xs || view === "card" ? (
                    <TableView
                        tableProps={tableProps}
                        filters={filters}
                        sorters={sorters}
                    />
                ) : (
                    <TableView
                        tableProps={tableProps}
                        filters={filters}
                        sorters={sorters}
                    />
                )}
                {children}
            </List>
        </div>
    );
}

export default TransactionsList