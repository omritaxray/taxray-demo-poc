import { Col, Row, Space } from 'antd'
import React from 'react'
import ComplianceCheckList, { ComplianceCheckListIdeal, ComplianceIdealCheckList } from './complianceCheckList'
import TaxAnalysisReviewBad from './taxAnalysisReviewBad'
import Actions from './actions'
import FileDownloadCard from './fileDownloadCard'
import WhtClassification, { WhtIdealClassification } from './whtClassification'

const AnalysisModal = () => {
    const alloyTOSExample = 'https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/alloycontract/view?project=64ea6567e57f4a43d7f9&mode=admin';

    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <ComplianceCheckList />

            <Row style={{ borderTop: "3px solid #E5E5E5" }}>
                <WhtClassification />
            </Row>
            {/* <TaxAnalysisReviewBad /> */}

            <Row style={{ borderTop: "3px solid #E5E5E5" }}>
                <Col flex={1} style={{ borderRight: "3px solid #E5E5E5" }}>
                    <Actions taxPolicy='Something' />
                </Col>
                <Col flex={2}>
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <h2 style={{ marginTop: "8px", marginLeft: "16px" }}>Documentation</h2>
                        <div className="ant-space-item"
                            style={{ textAlign: "center" }}>
                            <Space direction="horizontal" align="baseline" style={{ textAlign: "center", width: "80%", justifyContent: "space-evenly" }}>
                                <FileDownloadCard fileName='Terms of Service.pdf' fileURL={alloyTOSExample} />
                                {/* <FileDownloadCard fileName='W8 BEN-E.pdf' fileURL={w8beneExample} /> */}
                            </Space>
                        </div>
                        <br></br>
                    </Space>
                </Col>
            </Row>
        </Space>
    )
}

export const AnalysisIdealModal = () => {
    const FigmaExample = 'https://cloud.appwrite.io/v1/storage/buckets/integrationsImages/files/6620f3e48a47c3d3adc1/view?project=64ea6567e57f4a43d7f9&mode=admin'

    return (
        <Space direction="vertical" style={{ width: "100%" }}>
            <ComplianceIdealCheckList />

            <Row style={{ borderTop: "3px solid #E5E5E5" }}>
                <WhtIdealClassification />
            </Row>
            {/* <TaxAnalysisReviewBad /> */}

            <Row style={{ borderTop: "3px solid #E5E5E5" }}>
                {/* <Col flex={1} style={{ borderRight: "3px solid #E5E5E5" }}>
                    <Actions taxPolicy='Something' />
                </Col> */}
                <Col flex={2}>
                    <Space direction="vertical" style={{ width: "100%" }}>
                        <h2 style={{ marginTop: "8px", marginLeft: "16px" }}>Documentation</h2>
                        <div className="ant-space-item"
                            style={{ textAlign: "center" }}>
                            <Space direction="horizontal" align="baseline" style={{ textAlign: "center", width: "80%", justifyContent: "space-evenly" }}>
                                <FileDownloadCard fileName='Figma Agreement.pdf' fileURL={FigmaExample} />
                                {/* <FileDownloadCard fileName='W8 BEN-E.pdf' fileURL={w8beneExample} /> */}
                            </Space>
                        </div>
                        <br></br>
                    </Space>
                </Col>
            </Row>
        </Space>
    )
}

export default AnalysisModal