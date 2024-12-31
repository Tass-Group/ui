/// <reference types="react" />
export interface UploadFile {
    uid: string;
    name: string;
    status?: "uploading" | "done" | "error";
    url?: string;
    thumbUrl?: string;
    size?: number;
    type?: string;
    percent?: number;
    error?: Error;
    response?: any;
    originFileObj?: File;
}
export interface UploadProps {
    accept?: string;
    action?: string;
    method?: "POST" | "PUT";
    multiple?: boolean;
    name?: string;
    data?: Record<string, any> | ((file: File) => Record<string, any>);
    headers?: Record<string, string>;
    withCredentials?: boolean;
    disabled?: boolean;
    listType?: "text" | "picture" | "picture-card";
    defaultFileList?: UploadFile[];
    fileList?: UploadFile[];
    maxCount?: number;
    onChange?: (info: {
        file: UploadFile;
        fileList: UploadFile[];
    }) => void;
    onRemove?: (file: UploadFile) => boolean | Promise<boolean> | undefined;
    beforeUpload?: (file: File, fileList: File[]) => boolean | Promise<Blob | File | undefined>;
    customRequest?: (options: UploadRequestOption) => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface UploadRequestOption {
    action: string;
    filename: string;
    file: File;
    data: Record<string, any>;
    headers: Record<string, string>;
    withCredentials: boolean;
    onProgress: (percent: number) => void;
    onSuccess: (response: any) => void;
    onError: (error: Error) => void;
}
