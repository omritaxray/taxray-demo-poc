import { Form, FormInstance, FormProps, Input, Select } from 'antd';
import { IRiskLevel } from 'interfaces';
import React from 'react'

type ActionItemFormProps = {
    riskLevelId: IRiskLevel;
    action: string;
    formProps: FormProps;
    form: FormInstance;
};

let actionType = "Notify";
const handleActionTypeChange = (value = "") => {
    actionType = value;
    console.log(`selected ${value}`);
};

const CreateActionItemForm: React.FC<ActionItemFormProps> = ({
    form,
    formProps,
    action = 'Notify',
    riskLevelId,
}) => {
    return (
        <Form layout="vertical" form={form} {...formProps}>
            <Form.Item
                label="Action"
                name="action"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
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

            </Form.Item>
            <Form.Item
                label="riskLevelId"
                name="riskLevelId"
                initialValue={riskLevelId}
            >

            </Form.Item>
        </Form>
    )
}

export default CreateActionItemForm