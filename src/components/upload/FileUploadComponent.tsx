import React, { useState } from "react";
import axios from "axios";
import { List, useTable } from "@refinedev/antd";
import { Table } from "antd";
import { IQueryKeys } from "@refinedev/core";
import { IQuestion } from "interfaces";
// import { List, TextField, useTable, getDefaultSortOrder } from "@refinedev/antd";
// import { IQuestion } from "interfaces";
// import { useMany } from "@refinedev/core";
// import { Table } from "antd";

function FileUploadComponent() {


    const [file, setFile] = useState<File | null>(null);
    const [result, setResult] = useState("");

    const { tableProps, sorter } = useTable<IQuestion>({
        syncWithLocation: true,
    });
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        //const newValue = (e.target as HTMLInputElement).files;
        // window.console.log("onFileChange", e);
        // window.console.log("onFileChange", e.target);
        // window.console.log("onFileChange", e.target.files);
        if (e.target.files === null) {
            window.console.log("formData", "Empty2");
            return;
        }
        setFile(e.target.files[0]);
        // window.console.log("formData", typeof (e.target.files)[0]);
        // window.console.log("formData", typeof (FileList.toString()));
        // if (typeof (e.target.files) === typeof (FileList)) {
        //     window.console.log("formData", e.target.files[0]);
        //     setFile(e.target.files[0]);
        // }


    };

    const onUpload = async () => {
        window.console.log("formData", "Hello");
        const formData = new FormData();
        if (!file) {
            window.console.log("formData", "empty");
            return;
        }
        formData.append("file", file);

        window.console.log("formData", formData);
        try {
            window.console.log("formData", formData);
            const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setResult(response.data.result);
        } catch (error) {
            console.error("Error uploading the file:", error);
        }
    };

    return (
        <List>

            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onUpload}>Upload</button>
            </div>
            <Table >
                <Table.Column dataIndex="question" title="Question" sorter />
                <Table.Column dataIndex="answer" title="Answer" render={(value) => {
                    return (
                        window.console.log("value", "a"),
                        result + 'a'
                    )
                }} />

            </Table>
        </List>
    );
}

export default FileUploadComponent;