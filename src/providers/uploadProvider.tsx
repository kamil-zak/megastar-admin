import { IFileItem } from 'interfaces/common';
import { FC, useCallback, useContext, useState } from 'react';
import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IUploadContext {
  filesToUpload: IFileItem[];
  addToUpload: (files: File[]) => void;
  removeUpload: (id: string) => void;
}

const UploadContext = createContext<IUploadContext | null>(null);

export const useUpload = () => {
  const upload = useContext(UploadContext);
  if (upload === null) throw new Error();
  return upload;
};

const UploadProvider: FC = ({ children }) => {
  const [filesToUpload, setFilesToUpload] = useState<IFileItem[]>([]);

  const addToUpload = (files: File[]) => {
    const fileItems = files.map((file) => ({
      id: uuidv4(),
      file,
    }));
    setFilesToUpload((prev) => [...prev, ...fileItems]);
  };

  const removeUpload = useCallback((id: string) => {
    setFilesToUpload((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const value = { filesToUpload, addToUpload, removeUpload };
  return <UploadContext.Provider value={value}>{children}</UploadContext.Provider>;
};

export default UploadProvider;
