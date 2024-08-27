import React, { useState } from "react";
import "./styles.css";

import Dropzone from "react-dropzone";
import { ContractAnalysis } from "./contractAnalysis";

export default function ContractDropZone() {
  const [fileNames, setFileNames] = useState([]);
  const [showDropZone, setShowDropZone] = useState(true);
  const [showUpload, setShowUpload] = useState(false);
  const handleDrop = (acceptedFiles: any) => {
    setShowUpload(true) 
    setTimeout(() => setShowDropZone(false), 1000);
}

  

  if (showDropZone){
  return (
    <div className="drop-zone-container">
       <div className="description" style={{ padding: "3rem" }}>
        <h2 style={{ marginBottom: "3rem" }}>
          <img src="TaxRay logo.png" width="100px" /><span style={{marginLeft:"13px", fontSize:"30px"}}>Contract Analysis</span>
        </h2>
      </div>
      <Dropzone
        onDrop={handleDrop}
        accept={{"content":["*"]}}
        minSize={1024}
        maxSize={3072000}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject
        }) => {
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`
              })}
            >
              <input {...getInputProps()} />
              <img src="pdf-2610.png" width="50px"/>
              <br/>
              <br/>
              <p>Drag and drop contract to analyze Withholding tax case</p>
            </div>
          );
        }}
      </Dropzone>
      {showUpload && <div>Uploading...</div>}
    </div>
  );
    }else{
        return <ContractAnalysis/>
    }
}
