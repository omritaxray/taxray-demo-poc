import { FC, useMemo } from "react";

import { List, ListProps, TableProps } from "antd";

import { PaginationTotal } from "../../paginationTotal";

import { CompanyCard, CompanyCardSkeleton } from "./card";
import { IIntegration } from "interfaces";

type Props = {
    tableProps: TableProps<IIntegration>;
    setCurrent: (current: number) => void;
    setPageSize: (pageSize: number) => void;
};

const IntegrationsCardView: FC<Props> = ({
    tableProps: { dataSource, pagination, loading },
    setCurrent,
    setPageSize,
}) => {
    const data = useMemo(() => {
        return [...(dataSource || [])];
    }, [dataSource]);

    return (
        <List
            grid={{
                gutter: 32,
                column: 4,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 2,
                xl: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item>
                    <CompanyCard integration={item} />
                </List.Item>
            )}
            pagination={{
                ...(pagination as ListProps<IIntegration>["pagination"]),
                hideOnSinglePage: true,
                itemRender: undefined,
                position: "bottom",
                style: { display: "flex", marginTop: "1rem" },
                pageSizeOptions: ["12", "24", "48"],
                onChange: (page, pageSize) => {
                    setCurrent(page);
                    setPageSize(pageSize);
                },
                showTotal: (total) => (
                    <PaginationTotal total={total} entityName="company" />
                ),
            }}
        >
            {loading ? (
                <List
                    grid={{
                        gutter: 32,
                        column: 4,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 2,
                        xl: 4,
                    }}
                    dataSource={Array.from({ length: 12 }).map((_, i) => ({
                        id: i,
                    }))}
                    renderItem={() => (
                        <List.Item>
                            <CompanyCardSkeleton />
                        </List.Item>
                    )}
                />
            ) : undefined}
        </List>
    );
};

export default IntegrationsCardView;