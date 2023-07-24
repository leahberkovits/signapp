import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cleanBorder, primary45 } from "./utils/colors";
import drop from "../src/icons/drop.svg";
import { Image, Button } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
export default function Drop({ onLoaded }) {
  const styles = {
    container: {
      // textAlign: "center",
      // border: cleanBorder,
      // padding: 20,
      // marginTop: 12,
      // color: primary45,
      // fontSize: 18,
      // fontWeight: 600,
      // borderRadius: 4,
      // userSelect: "none",
      // outline: 0,
      // cursor: "pointer",
      // background: "red",
      height: "550px",
      width: "80%",
      borderRadius: "30px",
      border: "1.5px dashed #B3B3B3",
      marginTop: "80px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
  };

  const onDrop = useCallback((acceptedFiles) => {
    onLoaded(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // background: "pink",
        padding: 50,
        height: "100%",
      }}
    >
      <div
        style={{
          fontSize: "34px",
          fontWeight: 600,
          justifyContent: "center",
          // background: "blue",
          display: "flex",
          color: "#303030",
        }}
      >
        Sign Your Files
      </div>

      <div
        style={{
          fontSize: "16px",
          justifyContent: "center",
          display: "flex",
          color: "#777",
          marginTop: "8px",
        }}
      >
        Use SignLock & Enhance Your Productivity{" "}
      </div>

      <div {...getRootProps()} style={styles.container}>
        <Image
          src={drop}
          style={{ width: "100%", background: "" }}
          preview={false}
        />
        <Button
          type="primary"
          style={{ background: "#F0F0F0", color: "#303030", width: "20%" }}
          icon={<FilePdfOutlined />}
          size="large"
        >
          Upload File
        </Button>
        <div
          style={{
            fontSize: "12px",
            justifyContent: "center",
            display: "flex",
            color: "#444",
            marginTop: "24px",
          }}
        >
          or drop files here{" "}
        </div>

        <input {...getInputProps()} />
        {/* {isDragActive ? <p>Drop a PDF here</p> : <p>Drag a PDF here</p>} */}
        {/* {isDragActive ? <p>Drop a PDF here</p> : <p>Drag a PDF here</p>} */}
      </div>
    </div>
  );
}
