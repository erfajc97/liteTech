import React, { useState } from 'react';
// import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps, UploadFile } from 'antd';
import { message, Upload } from 'antd';
import TopArrowIcon from '@/assets/svg/TopArrowIcon';

const { Dragger } = Upload;

interface CustomUploadProps extends UploadProps {
  uploadText?: React.ReactNode;
  uploadHint?: React.ReactNode;
  uploadIcon?: React.ReactNode;
  allowedTypes?: string[];
  maxSizeMB?: number;
}

const CustomUpload: React.FC<CustomUploadProps> = ({
  multiple = false,
  // uploadText = 'Upload imagen ↑',
  uploadHint = 'Soporte para carga individual o múltiple.',
  // uploadIcon = <InboxOutlined />,
  allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'],
  maxSizeMB = 10,
  ...restProps
}) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange: UploadProps['onChange'] = (info) => {
    const { status } = info.file;

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} se ha cargado exitosamente.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} falló al cargar.`);
    }

    setFileList(info.fileList);
  };

  const dummyRequest = ({
    onSuccess,
  }: {
    onSuccess: (response: unknown) => void;
  }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  const beforeUpload = (file: File) => {

    const isAllowedType = allowedTypes.includes(file.type);
    if (!isAllowedType) {
      message.error(`Solo se permiten archivos de tipo: ${allowedTypes.join(', ')}`);
      return Upload.LIST_IGNORE;
    }

    const isLtMaxSize = file.size / 1024 / 1024 < maxSizeMB;
    if (!isLtMaxSize) {
      message.error(`El archivo debe pesar menos de ${maxSizeMB}MB`);
      return Upload.LIST_IGNORE;
    }

    return true;
  };

  return (
    <Dragger
      multiple={multiple}
      fileList={fileList}
      customRequest={dummyRequest as UploadProps['customRequest']}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      className="border-2 border-black bg-transparent flex items-center justify-center h-[56px]"
      {...restProps}
    >
      {/* <div className="ant-upload-drag-icon mb-2 flex justify-center">
        {uploadIcon}
      </div> */}
      <div className="flex items-center justify-center gap-2">
        <p className="ant-upload-text">Upload imagen</p>
        <TopArrowIcon width={24} height={25} />
      </div>
      <p className="ant-upload-hint">{uploadHint}</p>
    </Dragger>
  );
};

export default CustomUpload;
