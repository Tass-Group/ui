/// <reference types="react" />
import React$1 from 'react';

interface ButtonProps {
    title?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: "default" | "danger" | "success" | "warning" | "primary";
    icon?: React.ReactNode;
    color?: string;
    size?: "small" | "medium" | "large";
    shape?: "circle" | "round" | "square";
    style?: React.CSSProperties;
}

declare const Button: React$1.FC<ButtonProps>;

interface BaseProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    ellipsis?: boolean;
}
interface TitleProps extends BaseProps {
    level?: 1 | 2 | 3 | 4 | 5;
    width?: string | undefined;
}
interface TypographyProps extends Omit<BaseProps, "ellipsis"> {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
interface TextProps extends BaseProps {
    strong?: boolean;
    italic?: boolean;
    underline?: boolean;
    delete?: boolean;
    code?: boolean;
    mark?: boolean;
    keyboard?: boolean;
    width?: string | undefined;
}
interface ParagraphProps extends BaseProps {
    blockquote?: boolean;
    width?: string | undefined;
}

declare const Typography: React$1.FC<TypographyProps> & {
    Title: React$1.FC<TitleProps>;
} & {
    Text: React$1.FC<TextProps>;
} & {
    Paragraph: React$1.FC<ParagraphProps>;
};

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

declare const Icon: React$1.FC<IconProps>;

interface DividerProps {
    className?: string;
    orientation?: "horizontal" | "vertical";
    color?: string;
    text?: string;
    position?: "left" | "center" | "right";
    style?: React.CSSProperties;
    variant?: "solid" | "dashed" | "dotted";
}

declare const Divider: React$1.FC<DividerProps>;

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    gutter?: number;
}
interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: number;
    gutter?: number;
    offset?: number;
}

declare const Row: React$1.FC<RowProps>;

declare const Col: React$1.FC<ColProps>;

interface SpaceProps {
    children: React.ReactNode;
    size?: number;
    direction?: "horizontal" | "vertical";
}

declare const Space: React$1.FC<SpaceProps>;

interface BreadcrumbItemType {
    path?: string;
    title: React.ReactNode;
}
interface BreadcrumbProps {
    items?: BreadcrumbItemType[];
    separator?: React.ReactNode;
}

declare const Breadcrumb: React$1.FC<BreadcrumbProps>;

interface MenuItemType$1 {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    $isDanger?: boolean;
    children?: MenuItemType$1[];
    onClick?: () => void;
}
interface DropdownProps {
    items: MenuItemType$1[];
    trigger?: "hover" | "click";
    placement?: "top" | "bottom" | "left" | "right";
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

declare const Dropdown: React$1.FC<DropdownProps>;

interface MenuItemType {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    children?: MenuItemType[];
    onClick?: () => void;
}
interface MenuProps {
    items: MenuItemType[];
    mode?: "horizontal" | "vertical";
    menuTheme?: "light" | "dark";
    defaultSelectedKey?: string;
    defaultOpenKeys?: string[];
    className?: string;
    style?: React.CSSProperties;
}

declare const Menu: React$1.FC<MenuProps>;

interface PaginationProps {
    current: number;
    total: number;
    pageSize: number;
    onChange: (page: number) => void;
    position?: "left" | "center" | "right";
}

declare const Pagination: React$1.FC<PaginationProps>;

interface CascaderOption {
    value: string | number;
    label: React.ReactNode;
    disabled?: boolean;
    children?: CascaderOption[];
    isLeaf?: boolean;
}
interface CascaderProps {
    options: CascaderOption[];
    defaultValue?: Array<string | number>;
    value?: Array<string | number>;
    onChange?: (value: Array<string | number>, selectedOptions: CascaderOption[]) => void;
    placeholder?: string;
    disabled?: boolean;
    allowClear?: boolean;
    className?: string;
    style?: React.CSSProperties;
    expandTrigger?: "click" | "hover";
    displayRender?: (labels: string[]) => React.ReactNode;
}

declare const Cascader: React$1.FC<CascaderProps>;

interface UploadFile {
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
interface UploadProps {
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
interface UploadRequestOption {
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

declare const Upload: React$1.FC<UploadProps>;

export { Breadcrumb, Button, Cascader, Col, Divider, Dropdown, Icon, Menu, Pagination, Row, Space, Typography, Upload };
