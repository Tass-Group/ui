import type React from "react";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { type UploadProps, type UploadFile } from "./types";
import {
  UploadContainer,
  UploadInput,
  UploadButton,
  UploadList,
  UploadListItem
} from "./styled";
import Icon from "../Icon";
import Button from "../Button";

const Upload: React.FC<UploadProps> = ({
  accept,
  multiple = false,
  disabled = false,
  listType = "text",
  defaultFileList = [],
  fileList: propFileList,
  onChange,
  onRemove,
  children,
  className,
  style
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>(propFileList ?? defaultFileList);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (): void => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const handleRemove = async (file: UploadFile): Promise<void> => {
    const remove = onRemove?.(file);

    if (remove !== false) {
      setFileList(prev => prev.filter(item => item.uid !== file.uid));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target;
    if (files == null) return;

    const uploadFiles: UploadFile[] = Array.from(files).map(file => ({
      uid: uuidv4(),
      name: file.name,
      status: "done",
      size: file.size,
      type: file.type,
      percent: 100,
      originFileObj: file,
      url: URL.createObjectURL(file),
      thumbUrl: URL.createObjectURL(file)
    }));

    setFileList(prev => [...prev, ...uploadFiles]);
    uploadFiles.forEach(file => {
      onChange?.({ file, fileList: [...fileList, ...uploadFiles] });
    });

    e.target.value = "";
  };

  const renderUploadButton = (): React.ReactNode => {
    if (children != null) return children;

    if (listType === "picture-card") {
      return (
        <div className="upload-card-content">
          <Icon name="pluscircle" size={24} />
          <div className="upload-text">Upload</div>
        </div>
      );
    }

    return (
      <Button icon={<Icon name="upload" />} title="Upload" />
    );
  };

  return (
    <UploadContainer className={className} style={style}>
      <UploadButton
        onClick={handleClick}
        disabled={disabled}
        listType={listType}
        className={disabled ? "disabled" : ""}
      >
        {renderUploadButton()}
      </UploadButton>

      <UploadInput
        ref={inputRef}
        data-testid="upload-input"
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        style={{ display: "none" }}
      />

      <UploadList listType={listType}>
        {fileList.map(file => (
          <UploadListItem key={file.uid} listType={listType}>
            {listType === "picture" || listType === "picture-card"
              ? (
                <>
                  <div className="upload-item-image">
                    {(file.url != null)
                      ? (
                        <img src={file.url} alt={file.name} />
                        )
                      : (
                        <Icon name="file" size={30} />
                        )}
                  </div>
                  <div className="upload-item-actions">
                    <Icon
                      name="eye"
                      className="action-icon"
                      onClick={() => {
                        if (file.url != null) {
                          window.open(file.url, "_blank");
                        }
                      }}
                    />
                    <Icon
                      name="trash"
                      className="action-icon"
                      onClick={() => { void handleRemove(file); }}
                    />
                  </div>
                </>
                )
              : (
                <>
                  <Icon
                    name="link"
                    size={16}
                    style={{
                      color: file.status === "error" ? "#ff4d4f" : "#999",
                      marginRight: 8
                    }}
                  />
                  <div className="upload-item-info">
                    <span className="upload-item-name">
                      {file.name}
                    </span>
                  </div>
                  <Icon
                    name="trash"
                    style={{
                      color: file.status === "error" ? "#ff4d4f" : "#999",
                      cursor: "pointer"
                    }}
                    onClick={() => { void handleRemove(file); }}
                  />
                </>
                )}
          </UploadListItem>
        ))}
      </UploadList>
    </UploadContainer>
  );
};

export default Upload;
