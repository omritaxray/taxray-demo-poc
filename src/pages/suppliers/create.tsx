import React from "react";
import {
    IResourceComponentsProps, file2Base64, HttpError
} from "@refinedev/core";
import {
    Drawer,
    DrawerProps,
    Form,
    FormProps,
    Input,
    InputNumber,
    Radio,
    Select,
    Space,
    ButtonProps,
    Avatar,
    Typography,
    Upload,
    Grid,
} from "antd";
import { Create, useForm } from "@refinedev/antd";
import { ISupplier, ISupplierVariable } from "../../interfaces";


type CreateSupplierProps = {
    drawerProps: DrawerProps;
    formProps: FormProps;
    saveButtonProps: ButtonProps;
};

export const SupplierCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps } = useForm<
        ISupplier,
        HttpError,
        ISupplierVariable
    >();

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical"
                onFinish={async (values) => {
                    const base64Files = [];
                    const { avatar } = values;
                    if (avatar != null) {
                        for (const file of avatar) {
                            if (file.originFileObj) {
                                const base64String = await file2Base64(file);

                                base64Files.push({
                                    ...file,
                                    base64String,
                                });
                            } else {
                                base64Files.push(file);
                            }
                        }
                    }

                    return (
                        formProps.onFinish &&
                        formProps.onFinish({
                            ...values,
                            avatar: base64Files,
                        })
                    );
                }}>
                <Form.Item
                    label="Supplier Name"
                    name={["supplierName"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue="Stripes"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Supplier Country"
                    name={["supplierCountry"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue="England"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Contract Title"
                    name={["contractTitle"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue="Titles"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Deal Size"
                    name={["dealSize"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue="70000"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Risk"
                    name={["risk"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={1}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name={["status"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={0}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Contract"
                    name={["contract"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue="a"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Action"
                    name={["action"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={1}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};



// export const UserCreate: React.FC<IResourceComponentsProps> = () => {


//     return (
//         <Create saveButtonProps={saveButtonProps}>
//             <Form
//                 {...formProps}
//                 layout="vertical"
//                 onFinish={async (values) => {
//                     const base64Files = [];
//                     const { avatar } = values;

//                     for (const file of avatar) {
//                         if (file.originFileObj) {
//                             const base64String = await file2Base64(file);

//                             base64Files.push({
//                                 ...file,
//                                 base64String,
//                             });
//                         } else {
//                             base64Files.push(file);
//                         }
//                     }

//                     return (
//                         formProps.onFinish &&
//                         formProps.onFinish({
//                             ...values,
//                             avatar: base64Files,
//                         })
//                     );
//                 }}
//             >
//                 <Form.Item
//                     label="First Name"
//                     name="firstName"
//                     rules={[
//                         {
//                             required: true,
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>
//                 <Form.Item
//                     label="Last Name"
//                     name="lastName"
//                     rules={[
//                         {
//                             required: true,
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>
//                 <Form.Item
//                     label="Email"
//                     name="email"
//                     rules={[
//                         {
//                             required: true,
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>
//                 <Form.Item label="Avatar">
//                     <Form.Item
//                         name="avatar"
//                         valuePropName="fileList"
//                         getValueFromEvent={getValueFromEvent}
//                         noStyle
//                         rules={[
//                             {
//                                 required: true,
//                             },
//                         ]}
//                     >
//                         <Upload.Dragger
//                             listType="picture"
//                             multiple
//                             beforeUpload={() => false}
//                         >
//                             <p className="ant-upload-text">
//                                 Drag & drop a file in this area
//                             </p>
//                         </Upload.Dragger>
//                     </Form.Item>
//                 </Form.Item>
//             </Form>
//         </Create>
//     );
// };
