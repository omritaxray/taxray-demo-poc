// import React from "react";
// import { IResourceComponentsProps, BaseRecord, HttpError, CrudFilters, } from "@refinedev/core";
// import { useTable, List, ImageField, useSimpleList } from "@refinedev/antd";
// import { Table, Space, List as AntdList } from "antd";
// import { IntegrationItem } from "../../components/integrations";
// import { IIntegration } from "interfaces";
import { FC, PropsWithChildren, useState } from "react";
import { storage } from "utility/appwriteClient";
import { List, useTable } from "@refinedev/antd";
import { HttpError } from "@refinedev/core";

import {
    AppstoreOutlined,
    SearchOutlined,
    UnorderedListOutlined,
} from "@ant-design/icons";
import { Form, Grid, Input, Radio, Space, Spin } from "antd";
import debounce from "lodash/debounce";

import ListTitleButton from "components/integrations/listTitleButton";

import IntegrationsCardView from "components/integrations/card-view/integrationCardView";
//import IntegrationsTableView from "components/integrations/integrationsTableView";
import { IIntegration } from "interfaces";
import { Text } from "components/Text";

type View = "card" | "table";

export const IntegrationList: FC<PropsWithChildren> = ({ children }) => {


    const [view, setView] = useState<View>("card");
    const screens = Grid.useBreakpoint();

    const {
        tableProps,
        tableQueryResult,
        searchFormProps,
        filters,
        sorters,
        setCurrent,
        setPageSize,
        setFilters,
    } = useTable<IIntegration>
            ({
                resource: "integrations",
                onSearch: (values) => {
                    return [
                        {
                            field: "title",
                            operator: "contains",
                            value: values,
                        },
                    ];
                },
                sorters: {
                    initial: [
                        {
                            field: "title",
                            order: "asc",
                        },
                    ],
                },
                filters: {
                    initial: [
                        {
                            field: "title",
                            operator: "contains",
                            value: undefined,
                        },
                        {
                            field: "id",
                            operator: "in",
                            value: undefined,
                        },
                    ],
                },
                pagination: {
                    pageSize: 16,
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

    return (
        <div className="page-container">
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
                                <Form.Item name="title" noStyle>
                                    <Input
                                        size="large"
                                        prefix={<SearchOutlined className="anticon tertiary" />}
                                        suffix={
                                            <Spin
                                                size="small"
                                                spinning={tableQueryResult.isFetching}
                                            />
                                        }
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
                    <Text >Integrations</Text>
                }
            ><IntegrationsCardView
                    tableProps={tableProps}
                    setPageSize={setPageSize}
                    setCurrent={setCurrent}
                />
                {/* {view === "table" ? (
                    <IntegrationsTableView
                        tableProps={tableProps}
                        filters={filters}
                        sorters={sorters}
                    />
                ) : (
                    <IntegrationsCardView
                        tableProps={tableProps}
                        setPageSize={setPageSize}
                        setCurrent={setCurrent}
                    />
                )} */}
            </List>
            {children}
        </div>
    );
}
// export const IntegrationList: React.FC<IResourceComponentsProps> = () => {
//     const { tableProps } = useTable({
//         syncWithLocation: true,
//     });

//     const { listProps, searchFormProps, filters } = useSimpleList<
//         IIntegration,
//         HttpError,
//         { name: string; categories: string[] }
//     >({
//         pagination: { pageSize: 15, current: 1 },
//         onSearch: ({ name, categories }) => {
//             const productFilters: CrudFilters = [];

//             productFilters.push({
//                 field: "category.id",
//                 operator: "in",
//                 value: categories?.length > 0 ? categories : undefined,
//             });

//             productFilters.push({
//                 field: "name",
//                 operator: "contains",
//                 value: name ? name : undefined,
//             });

//             return productFilters;
//         },
//     });

//     return (
//         <List>

//             <AntdList
//                 {...listProps}
//                 grid={{
//                     column: 5,
//                     gutter: 20,
//                     xs: 1,
//                     sm: 2,
//                     md: 3,
//                     lg: 4,
//                     xl: 5,
//                     xxl: 5,
//                 }}
//                 pagination={{
//                     pageSize: 15,
//                     current: 1
//                 }}

//                 style={{
//                     // height: "100%",
//                     //overflow: "auto",
//                     //paddingRight: "10%",
//                 }}

//                 renderItem={(item) => (
//                     <IntegrationItem item={item} />
//                 )}
//             />
//         </List>
//     );
// };





