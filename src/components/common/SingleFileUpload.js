import React, { useEffect, useMemo } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import useHttpPOSTFile from "../../hooks/http/useHttpPOSTFile";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const imgStyle = {
  display: "block",
  width: "80px",
  height: "80px",
};

const SingleFileUpload = (props) => {
  const { sendPOSTFileReq: postSendFile, progress: uploadProgress , setProgress: setUploadProgress } =
    useHttpPOSTFile();

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: {} });

  const fileData = acceptedFiles.map((file) => {
    const reader = new FileReader();
    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      const binaryStr = reader.result;
    };
    let fD = {
      name: file.name,
      size: file.size / 1000,
      filePrev: URL.createObjectURL(file),
      fileD: file,
    };
    return fD;
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const postRespFunc = () => {
    console.log("postRespFunc");
    props.respFn();
  };

  const sendFileToServer = async () => {
    console.log('fileId......'+props.fileId)
    let url = "https://httpbin.org/post";
    return await postSendFile(url, fileData[0].fileD, postRespFunc);
  };

  return (
    <>
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        {fileData.length > 0 && (
          <div className="row">
            <div className="col-12">
              <div className="card callout callout-info">
                <div className="card-body">
                  <div className="table table-striped files">
                    <div className="row mt-2 dz-image-preview">
                      <div className="col-auto">
                        <span className="preview">
                          <img
                            src={fileData[0].filePrev}
                            alt={fileData[0].name}
                            style={imgStyle}
                          />
                        </span>
                      </div>
                      <div className="col d-flex align-items-center">
                        <p className="text-muted">
                          {fileData[0].name}&nbsp;
                          <strong>({fileData[0].size}&nbsp;KB)</strong>
                        </p>
                        <strong
                          className="error text-danger"
                          data-dz-errormessage
                        />
                      </div>
                      <div className="progressBar">
                        <progress
                          id="file"
                          value={uploadProgress}
                          max="100"
                          className="progress"
                        ></progress>
                        {uploadProgress}&nbsp;%
                      </div>
                      <div className="col-auto d-flex align-items-center">
                        <div className="btn-group">
                          <button
                            className="btn btn-outline-primary btn-sm"
                            onClick={sendFileToServer}
                          >
                            <span>&nbsp;Upload&nbsp;</span>
                            <i className="fa-sharp fa-solid fa-file-arrow-up"></i>
                          </button>
                          {/* 
                          
                          <button
                            data-dz-remove
                            className="btn btn-outline-danger btn-sm"
                          >
                            <i className="fas fa-trash" />
                            <span>&nbsp;Delete</span>
                          </button>

                          */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleFileUpload;
