import { Space } from 'antd'
import React from 'react'
import FileDownloadCard from './fileDownloadCard'
import Action, { IroncladAction, NetsuiteAction, SlackAction } from './action';

const Actions: React.FC<{
    taxPolicy: string;
}> = (taxPolicy) => {
    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <h2 style={{ marginLeft: "8px", marginTop: "8px" }}>Actions</h2>
            <h3 style={{ marginLeft: "8px" }}>{`According to your policy, the following actions were taken:`}</h3>

            <div className="ant-space-item" style={{ width: "100%" }}>
                <Space direction="horizontal" style={{ width: "100%", marginLeft: "1%" }}>
                    {/* <Space direction="vertical">
                        <Action taxPolicy='' />
                        <Action taxPolicy='' />
                    </Space> */}
                    <Space direction="vertical" size={20}>
                        <Action taxPolicy='' />
                        <SlackAction taxPolicy='' />
                        <NetsuiteAction taxPolicy='' />
                        <IroncladAction taxPolicy='' />
                    </Space>
                </Space>
            </div>
            <br></br>
        </Space>
    )
}

export default Actions