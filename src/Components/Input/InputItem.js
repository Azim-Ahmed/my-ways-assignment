import React from 'react';

import { FormFeedback, FormGroup, Input, Label} from 'reactstrap';

const InputItem = ({ type, name, label, value, onChangeHandler, customClass, placeholder, error, ...rest }) => {
  return (
    <FormGroup controlId={name}>
      {label && <Label className="form-title">{label}</Label>}
      <Input {...rest}
        required className={`font-bold py-4 ${customClass}`}
        name={name}
        type={type || 'text'}
        value={value}
        onChange={(e) => onChangeHandler(e)}
        isInvalid={!!error}
        placeholder={placeholder} />
      <FormFeedback type="invalid">
        {error}
      </FormFeedback>
    </FormGroup>
  );
};

export default InputItem;