import React, { useState } from "react";
import axios from "axios";
import { IResourceComponentsProps, BaseRecord, useApiUrl, useMany } from "@refinedev/core";
import { useTable, List, TagField, getDefaultSortOrder, TextField } from "@refinedev/antd";
import { Table, Space, Upload, Typography, Avatar, Button } from "antd";
import FileUploadComponent from 'components/upload/FileUploadComponent';
import { IQuestion, ISupplier } from "interfaces";

const { Text } = Typography;

const pdfIconStyle = {
    color: "white",
    backgroundImage: `url("http://takeof.me/pdfIcon.svg")`,
    // img: "/images/pdfIcon.svg",
    padding: "10px",
    fontFamily: "Arial"
};



export const UploadList: React.FC<IResourceComponentsProps> = () => {

    return (
        <FileUploadComponent />
    );
};
