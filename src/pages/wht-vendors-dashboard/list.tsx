import { Space } from 'antd'
import DashboardHeader from 'components/dashboard/dashboardHeader'
import WHTDashboardHeader from 'components/wht-vendors-dashboard/whtDashboardHeader'
import React from 'react'

const WHTVendorsDashboard = () => {
    return (
        <div className='page-container'>
            {/* <Space direction='vertical'> */}
            <Space direction='vertical' style={{ width: "100%" }}>
                <WHTDashboardHeader />
            </Space>
        </div>
    )
}

export default WHTVendorsDashboard