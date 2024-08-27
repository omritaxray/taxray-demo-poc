import { useForm } from '@refinedev/antd';
import { HttpError, useNavigation } from '@refinedev/core';
import { Modal } from 'antd';
import React from 'react'

const ShowTransaction = () => {
    const { list } = useNavigation();

    const { formProps, saveButtonProps, form, onFinish } = useForm<
        Event,
        HttpError
    >();

    return (
        <Modal
            title="Tax Analysis"
            open
            // onCancel={() => {
            //     list("suppliers");
            // }}
            okButtonProps={{
                ...saveButtonProps,
            }}
            okText="Save"
            width={560}
        >
            <div>
                rwerojwef
            </div>
            {/* <CalendarForm
                isAllDayEvent={isAllDayEvent}
                setIsAllDayEvent={setIsAllDayEvent}
                form={form}
                formProps={{
                    ...formProps,
                    onFinish: handleOnFinish,
                }}
            /> */}
        </Modal>
    )
}

export default ShowTransaction