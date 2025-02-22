import {
    useTranslate,
    CrudFilters,
    useUpdate,
    HttpError,
} from "@refinedev/core";
import { useSimpleList, CreateButton, useDrawerForm } from "@refinedev/antd";
import { SearchOutlined } from "@ant-design/icons";
import {
    Typography,
    Row,
    Col,
    List as AntdList,
    Input,
    Form,
    Modal,
    ModalProps,
} from "antd";

import {
    CreateProduct,
    EditProduct,
    ProductItem,
    ProductCategoryFilter,
} from "../product";
import {
    SupplierItem
} from "../suppliers";
import { IStore, IProduct, ISupplier, ISuppliers } from "../../interfaces";
//import styled from "@emotion/styled";

const { Text } = Typography;

type SuppliersProps = {
    record: ISuppliers;
    modalProps: ModalProps;
};

export const SuppliersItem: React.FC<SuppliersProps> = ({
    record,
    modalProps,
}) => {
    const t = useTranslate();

    const { listProps, searchFormProps, queryResult } = useSimpleList<
        ISupplier,
        HttpError,
        { name: string; categories: string[] }
    >({
        resource: "suppliers",
        pagination: { pageSize: 9 },
        syncWithLocation: false,
        onSearch: ({ name, categories }) => {
            const productFilters: CrudFilters = [];

            if (categories.length > 0) {
                productFilters.push({
                    field: "category.id",
                    operator: "in",
                    value: categories,
                });
            }

            if (name) {
                productFilters.push({
                    field: "name",
                    operator: "contains",
                    value: name,
                });
            }

            return productFilters;
        },
    });
    const { data: productData } = queryResult;

    const mergedData =
        productData?.data.map((product) => ({
            ...record?.suppliers.find(
                (storeProduct) => storeProduct.id === product.id,
            ),
            ...product,
        })) ?? [];

    const { mutate } = useUpdate<ISuppliers>();

    const updateStock = (changedValue: number, clickedProduct: ISupplier) => {
        // const shopProduct = record.products.find(
        //     (p) => p.id === clickedProduct.id,
        // );

        // if (shopProduct) {
        //     shopProduct.stock = changedValue;

        //     mutate({
        //         id: record.id,
        //         resource: "stores",
        //         values: {
        //             products: record.products,
        //         },
        //         successNotification: false,
        //         mutationMode: "optimistic",
        //     });
        // }
    };

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

    const {
        drawerProps: editDrawerProps,
        formProps: editFormProps,
        saveButtonProps: editSaveButtonProps,
        show: editShow,
    } = useDrawerForm<ISupplier>({
        action: "edit",
        resource: "suppliers",
        redirect: false,
    });

    return (
        <>
            <Modal
                {...modalProps}
                width={1000}
                footer={null}
                bodyStyle={{ minHeight: "650px" }}
            >
                <Form
                    {...searchFormProps}
                    onValuesChange={() => searchFormProps.form?.submit()}
                >
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={18}>
                            {/* <StyledStoreProducts> */}
                            <Text style={{ fontSize: "24px" }} strong>
                                {t("stores.storeProducts")}
                            </Text>
                            <Form.Item name="name" noStyle>
                                <Input
                                    style={{ width: "300px" }}
                                    placeholder={t("stores.productSearch")}
                                    suffix={<SearchOutlined />}
                                />
                            </Form.Item>
                            <CreateButton onClick={() => createShow()}>
                                {t("stores.buttons.addProduct")}
                            </CreateButton>
                            {/* </StyledStoreProducts> */}
                            <AntdList
                                grid={{
                                    gutter: 8,
                                    xs: 1,
                                    sm: 1,
                                    md: 2,
                                    lg: 3,
                                    xl: 3,
                                    xxl: 3,
                                }}
                                style={{
                                    height: "100%",
                                    maxHeight: "548px",
                                    overflow: "auto",
                                    paddingRight: "4px",
                                }}
                                {...listProps}
                                dataSource={mergedData as ISupplier[]}
                                renderItem={(item) => (
                                    <SupplierItem
                                        item={item}
                                    />
                                )}
                            />
                        </Col>
                        <Col xs={0} sm={6}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "40px",
                                    marginBottom: "16px",
                                }}
                            >
                                <Text style={{ fontWeight: 500 }}>
                                    {t("stores.tagFilterDescription")}
                                </Text>
                            </div>
                            <Form.Item name="categories">
                                <ProductCategoryFilter />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            <CreateProduct
                drawerProps={createDrawerProps}
                formProps={createFormProps}
                saveButtonProps={createSaveButtonProps}
            />
            <EditProduct
                drawerProps={editDrawerProps}
                formProps={editFormProps}
                saveButtonProps={editSaveButtonProps}
            />
        </>
    );
};