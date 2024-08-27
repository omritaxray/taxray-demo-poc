import {
    DeleteButton,
    FilterDropdown,
    getDefaultSortOrder,
    ShowButton,
    useModal,
} from "@refinedev/antd";
import { CrudFilters, CrudSorting, getDefaultFilter } from "@refinedev/core";

import { CheckCircleFilled, CheckCircleTwoTone, ClockCircleTwoTone, CloseCircleOutlined, CloseCircleTwoTone, MinusCircleTwoTone, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, ConfigProvider, Image, Input, List, Modal, Row, Select, Space, Table, Tag, type TableProps } from "antd";

import { Text } from "components/Text";
import { PaginationTotal } from "components/paginationTotal";
import { ITransactionVendor } from "interfaces";
import { ComplianceCheckListIdeal } from "components/Analysis";
import TaxAnalysisReview from "components/Analysis/taxAnalysisReview";
import Actions from "components/Analysis/actions";
import FileDownloadCard from "components/Analysis/fileDownloadCard";
import { useState } from "react";
import TaxAnalysisReviewBad from "components/Analysis/taxAnalysisReviewBad";
import ComplianceCheckList from "components/Analysis/complianceCheckList";
import AnalysisModal, { AnalysisIdealModal } from "components/Analysis/analysisModal";

type Props = {
    tableProps: TableProps<ITransactionVendor>;
    filters: CrudFilters;
    sorters: CrudSorting;
}

const statusTextStyle = {
    color: "#667085",
    fontFamily: "Arial"
};

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

export const TableView: React.FC<Props> = ({
    tableProps,
    filters,
    sorters,
}) => {
    const donwloadFile = (fileURL: string, fileName: string) => {
        fetch(fileURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `${fileName}.pdf`,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode?.removeChild(link);
            });
    };

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

    const [isIdealModalOpen, setIsIdealModalOpen] = useState(false);
    const showIdealModal = () => {
        setIsIdealModalOpen(true);
    };
    const handleIdealOk = () => {
        setIsIdealModalOpen(false);
    };
    const handleIdealCancel = () => {
        setIsIdealModalOpen(false);
    };

    return (
        <List>
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
                    <AnalysisModal />
                    {/* <AnalysisIdealModal /> */}
                </Modal>
                <Modal title={<h1 style={{ marginLeft: "8px" }}>Tax Analysis Report</h1>} width={1600} open={isIdealModalOpen} onOk={handleIdealOk} onCancel={handleIdealCancel}>
                    {/* <AnalysisModal /> */}
                    <AnalysisIdealModal />
                </Modal>
            </ConfigProvider >
            <Table
                {...tableProps}
                pagination={{
                    ...tableProps.pagination,
                    pageSizeOptions: ["12", "24", "48", "96"],
                    showTotal: (total) => (
                        <PaginationTotal total={total} entityName="transactions" />
                    ),
                }}
                rowKey="id"
            >


                {/* <Table.Column
                    dataIndex="entity"
                    title="Entity"
                    width={200}
                    defaultFilteredValue={getDefaultFilter("entity", filters)}
                    defaultSortOrder={getDefaultSortOrder("entity", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Entity" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        return (
                            <Space>
                                <Text>{record.entity}</Text>
                            </Space>
                        );
                    }}
                />

                <Table.Column
                    dataIndex="relatedEntity"
                    title="Related Entity"
                    width={200}
                    defaultFilteredValue={getDefaultFilter("relatedEntity", filters)}
                    defaultSortOrder={getDefaultSortOrder("relatedEntity", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Related" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        if (record.relatedEntity) {
                            return (
                                <Tag icon={<CheckCircleTwoTone twoToneColor="#69b1ff" />} color="white" bordered={false}>

                                </Tag>
                            )
                        } else {
                            return (
                                <Tag icon={<MinusCircleTwoTone twoToneColor="#FD5526" />} color="white" bordered={false}>
                                </Tag>
                            );
                        }
                    }}
                /> */}

                <Table.Column
                    dataIndex="vendorName"
                    title="Vendor"
                    width={150}
                    defaultFilteredValue={getDefaultFilter("vendorName", filters)}
                    defaultSortOrder={getDefaultSortOrder("vendorName", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Vendor" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        return (
                            <Space>
                                {/* <Image src={`/images/flags/${record.vendorCountry}.svg`} style={{ marginBottom: "2px" }}></Image> */}
                                <Text>{record.vendorName}</Text>
                            </Space>
                        );
                    }}
                />
                {/* <Table.Column
                    dataIndex="riskLevel"
                    title="Risk Level"
                    width={300}
                    defaultFilteredValue={getDefaultFilter("riskLevel", filters)}
                    defaultSortOrder={getDefaultSortOrder("riskLevel", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Risk Level" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        if (record.riskLevel.length > 0) {
                            if (record.riskLevel[0].color === "#FD5526") {
                                return (
                                    <Space >
                                        <Circle size={10} color={record.riskLevel[0].color}></Circle>
                                        <Text strong>High</Text>
                                    </Space>
                                )
                            } else if (record.riskLevel[0].color === "#F8D000") {
                                return (
                                    <Space>
                                        <Circle size={10} color={record.riskLevel[0].color}></Circle>
                                        <Text strong>Medium</Text>
                                    </Space>
                                )
                            } else if (record.riskLevel[0].color === "#14BA6D") {
                                return (
                                    <Space>
                                        <Circle size={10} color={record.riskLevel[0].color}></Circle>
                                        <Text strong>Low</Text>
                                    </Space>
                                )
                            }
                        }
                    }}
                /> */}
                <Table.Column
                    dataIndex="vendorCountry"
                    title="Country"
                    width={50}
                    defaultFilteredValue={getDefaultFilter("vendorCountry", filters)}
                    defaultSortOrder={getDefaultSortOrder("vendorCountry", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Vendor Country" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        return (
                            <Space>
                                <Image src={`/images/flags/${record.vendorCountry}.svg`} style={{ marginBottom: "2px" }}></Image>
                                <Text>{record.vendorCountry}</Text>
                            </Space>
                        );
                    }}
                />
                <Table.Column
                    dataIndex="contractTitle"
                    title="Deal Type"
                    defaultFilteredValue={getDefaultFilter("contractTitle", filters)}
                    defaultSortOrder={getDefaultSortOrder("contractTitle", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Contract" />
                        </FilterDropdown>
                    )}
                />
                <Table.Column
                    dataIndex="dealSize"
                    title="Deal Size"
                    defaultFilteredValue={getDefaultFilter("dealSize", filters)}
                    defaultSortOrder={getDefaultSortOrder("dealSize", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Amount" />
                        </FilterDropdown>
                    )}
                />
                <Table.Column
                    dataIndex="status"
                    title="Status"
                    defaultFilteredValue={getDefaultFilter("status", filters)}
                    defaultSortOrder={getDefaultSortOrder("status", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Status" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        if (record.status === "Declined") {
                            return (
                                <Tag icon={<MinusCircleTwoTone twoToneColor="#FD5526" />} color="white" bordered={false}>
                                    <Text style={statusTextStyle} >Declined</Text>
                                </Tag>
                            )
                        } else if (record.status === "Negotiation") {
                            return (
                                <Tag icon={<ClockCircleTwoTone twoToneColor="#a0a0a0" />} color="white" bordered={false} >
                                    <Text style={statusTextStyle} >Under Negotiation</Text>
                                </Tag>
                            )

                        } else if (record.status === "Signed") {
                            return (
                                <Space>
                                    <Tag icon={<CheckCircleTwoTone twoToneColor="#69b1ff" />} color="white" bordered={false}>
                                        <Text style={statusTextStyle} >Signed</Text>
                                    </Tag>
                                </Space>
                            )
                        }
                    }}
                />
                <Table.Column
                    dataIndex="contract"
                    title="Contract"
                    width={150}
                    defaultFilteredValue={getDefaultFilter("contract", filters)}
                    defaultSortOrder={getDefaultSortOrder("contract", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Contract" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        if (record.contract === "") {
                            return (
                                <Tag icon={<MinusCircleTwoTone twoToneColor="#FD5526" />} color="red" bordered={false}>
                                    <Text style={statusTextStyle} >Missing</Text>
                                </Tag>
                            )
                        } else {
                            if (record.vendorCountry === "Ireland") {
                                return (
                                    <Tag icon={<CheckCircleTwoTone twoToneColor="#69b1ff" />} color="white" bordered={false} >
                                        <Button onClick={showIdealModal}><Text style={statusTextStyle} >Analyzed</Text></Button>
                                    </Tag>
                                );
                            }
                            return (
                                <Tag icon={<CheckCircleTwoTone twoToneColor="#69b1ff" />} color="white" bordered={false} >
                                    <Button onClick={showModal}><Text style={statusTextStyle} >Analyzed</Text></Button>
                                </Tag>
                            );
                        }
                    }}
                />
                <Table.Column
                    dataIndex="w8"
                    title="W8"
                    width={150}
                    defaultFilteredValue={getDefaultFilter("w8", filters)}
                    defaultSortOrder={getDefaultSortOrder("w8", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search W8" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        if (record.w8 === "") {
                            return (
                                <Tag icon={<MinusCircleTwoTone twoToneColor="#FD5526" />} color="red" bordered={false}>
                                    <Text style={statusTextStyle} >Invalid</Text>
                                </Tag>
                            )
                        } else {
                            return (
                                <Tag icon={<CheckCircleTwoTone twoToneColor="#69b1ff" />} color="white" bordered={false}>
                                    <Button onClick={() => donwloadFile(record.w8, "W8")}><Text style={statusTextStyle} >Valid</Text></Button>
                                </Tag>
                            );
                        }
                    }}
                />
                <Table.Column
                    dataIndex="form1042s"
                    title="1042-S"
                    width={100}
                    defaultFilteredValue={getDefaultFilter("form1042s", filters)}
                    defaultSortOrder={getDefaultSortOrder("form1042s", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search 1042-s" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        if (record.form1042s === "" || !record.form1042s || record.form1042s === "NA") {
                            return;
                        } else if (record.form1042s === "Not Filed") {
                            {
                                return (
                                    <Tag icon={<CloseCircleTwoTone twoToneColor="#FD5526" />} color="white" bordered={false}>
                                        <Text style={statusTextStyle} >{record.form1042s}</Text>
                                    </Tag>
                                );
                            }
                        } else if (record.form1042s === "Filed") {
                            {
                                return (
                                    <Tag icon={<CheckCircleTwoTone twoToneColor="#69b1ff" />} color="white" bordered={false}>
                                        <Text style={statusTextStyle} >{record.form1042s}</Text>
                                    </Tag>
                                );
                            }
                        }
                    }
                    }
                />
                <Table.Column
                    dataIndex="whtRequired"
                    title="WHT Required"
                    defaultFilteredValue={getDefaultFilter("whtRequired", filters)}
                    defaultSortOrder={getDefaultSortOrder("whtRequired", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search WHT Required" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        let wht = "18239";
                        let amount = 0;
                        if (record.whtRequired) {
                            if (record.dealSize.includes("$")) {
                                wht = record.dealSize.replace("$", "");
                                if (wht.includes(",")) {
                                    wht = wht.replace(",", "");
                                    if (wht.includes(",")) {
                                        wht = wht.replace(",", "");
                                    }
                                }

                            }
                            if (parseInt(record.rate) != 0) {
                                if (record.rate.length == 2) {
                                    amount = parseInt(wht) * parseFloat("0." + record.rate);
                                } else if (record.rate.length == 1) {
                                    amount = parseInt(wht) * parseFloat("0.0" + record.rate);
                                }
                            }
                            let amountString = "$" + amount.toFixed(2).toString();

                            console.log("whtt", amountString);
                            return (
                                <Space>

                                    <CheckCircleTwoTone twoToneColor="#FD5526" />
                                    <Text style={statusTextStyle} >{amountString}</Text>
                                    <Tag color="red" bordered={false}>
                                        <Text style={statusTextStyle} >{record.rate}%</Text>

                                    </Tag>
                                </Space>
                            )
                        } else {
                            return (
                                <Tag icon={<MinusCircleTwoTone twoToneColor="#69b1ff" />} color="white" bordered={false}>
                                    <Text style={statusTextStyle} >No WHT</Text>

                                </Tag>
                            );
                        }
                    }}
                />
                <Table.Column
                    dataIndex="riskLevel"
                    title="Risk Level"
                    width={150}
                    defaultFilteredValue={getDefaultFilter("riskLevel", filters)}
                    defaultSortOrder={getDefaultSortOrder("riskLevel", sorters)}
                    filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Input placeholder="Search Risk Level" />
                        </FilterDropdown>
                    )}
                    render={(_, record: ITransactionVendor) => {
                        if (record.riskLevel.length > 0) {
                            if (record.riskLevel[0].color === "#FD5526") {
                                return (
                                    <Space >
                                        <Circle size={10} color={record.riskLevel[0].color}></Circle>
                                        <Text strong>High</Text>
                                    </Space>
                                )
                            } else if (record.riskLevel[0].color === "#F8D000") {
                                return (
                                    <Space>
                                        <Circle size={10} color={record.riskLevel[0].color}></Circle>
                                        <Text strong>Medium</Text>
                                    </Space>
                                )
                            } else if (record.riskLevel[0].color === "#14BA6D") {
                                return (
                                    <Space>
                                        <Circle size={10} color={record.riskLevel[0].color}></Circle>
                                        <Text strong>Low</Text>
                                    </Space>
                                )
                            }
                            else if (record.riskLevel[0].color === "#858585") {
                                return (
                                    <Space>
                                        <Circle size={10} color={record.riskLevel[0].color}></Circle>
                                        <Text strong>No Risk</Text>
                                    </Space>
                                )
                            }
                        }
                    }}
                />
            </Table>
        </List>
    );
};