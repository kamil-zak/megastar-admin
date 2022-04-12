import React, { Dispatch, FC, useContext } from 'react';
import { createContext } from 'react';
import { AnyAction } from 'redux';

interface IEditorContext {
  modified: boolean;
  isNew: boolean;
  dispatch: Dispatch<AnyAction>;
}

const EditorContext = createContext<IEditorContext | null>(null);

export const useEditor = () => {
  const line = useContext(EditorContext);
  if (line === null) throw new Error();
  return line;
};

const EditorProvider: FC<{ editor: IEditorContext }> = ({ editor, children }) => (
  <EditorContext.Provider value={editor}>{children}</EditorContext.Provider>
);

export default EditorProvider;
