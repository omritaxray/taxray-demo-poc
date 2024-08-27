import { CheckCircleFilled, FilePdfFilled } from '@ant-design/icons'
import { Card, Space } from 'antd'
import { Text } from 'components/Text'
import React from 'react'



const FileDownloadCard: React.FC<{
    fileURL: string,
    fileName: string
}> = (fileURL) => {
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
        console.log("File downloaded")
    };

    let fileURLString = fileURL.fileURL
    let fileNameString = fileURL.fileName
    console.log(fileNameString)
    console.log(fileURLString)

    return (
        <Card onClick={() => donwloadFile(fileURLString, fileNameString)} hoverable style={{ border: "2px solid #C5C5C5", width: "250px" }}>
            <Space direction="horizontal" size={30}>
                <FilePdfFilled style={{ color: "#E91C23", fontSize: "30px" }} />
                <Text strong>{fileNameString}</Text>
            </Space>
        </Card>
    )
}

export default FileDownloadCard