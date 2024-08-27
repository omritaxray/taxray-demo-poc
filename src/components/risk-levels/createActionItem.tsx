import { useForm } from '@refinedev/antd';
import { HttpError, useNavigation } from '@refinedev/core';
import { Modal } from 'antd';
import { IRiskLevelAction } from 'interfaces';
import React, { useState } from 'react'
import CreateActionItemForm from './createActionItemForm';


type FormValues = {
    action: "0"
};

type RiskLevelID = {
    id: number;
};

const CreateActionItem: React.FC<RiskLevelID> = (id) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
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
    >();

    const handleOnFinish = async (values: FormValues) => {
        const actionValue = values.action;

        await onFinish({
            action: actionValue,
        });
    };

    return (
        <Modal
            title="Create New Action Item"
            open={isModalOpen}
            onCancel={() => {
                show("risk-levels", id.id);
            }}
            okButtonProps={{
                ...saveButtonProps,
            }}
            okText="Save"
            width={560}
        >
            {/* <CreateActionItemForm
            riskLevel={null}
                action='Notify'
                form={form}
                formProps={{
                    ...formProps,
                    onFinish: handleOnFinish,
                }}
            /> */}
        </Modal>
    );
}

export default CreateActionItem