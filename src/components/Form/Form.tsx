import { FC, FormEvent, FormEventHandler } from 'react';

interface IFormProps {
  onSubmit: (e: FormEvent) => void;
}

const Form: FC<IFormProps> = ({ onSubmit, children }) => {
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
