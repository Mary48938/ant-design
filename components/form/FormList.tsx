import * as React from 'react';
import { List } from 'rc-field-form';

interface FieldData {
  name: number;
  key: number;
  fieldKey: number;
}

interface Operation {
  add: () => void;
  remove: (index: number) => void;
}

interface FormListProps {
  name: string | number | (string | number)[];
  children: (fields: FieldData[], operation: Operation) => React.ReactNode;
}

const FormList: React.FC<FormListProps> = ({ children, ...props }) => {
  return (
    <List {...props}>
      {(fields, operation) => {
        return children(fields.map(field => ({ ...field, fieldKey: field.key })), operation);
      }}
    </List>
  );
};

export default FormList;