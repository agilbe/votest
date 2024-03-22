import React from 'react';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Select} from '@workday/canvas-kit-react/select';
import {Flex} from '@workday/canvas-kit-react/layout';

const options = [
  'E-mail',
  'Phone',
  'Fax',
  'Mail',
  'Mobile Phone'
];

export const SelectField = ({role, inputRef}) => { 
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
        <br />
        <Flex flexDirection="column">
        <Select items={options}>
            <FormField label="Contact">
            <Select.Input onChange={handleChange} role={role} ref={inputRef}/>
            <Select.Popper>
                <Select.Card>
                <Select.List>
                    {item => {
                    return <Select.Item>{item}</Select.Item>;
                    }}
                </Select.List>
                </Select.Card>
            </Select.Popper>
            </FormField>
        </Select>
        Current role for the input: <b>{role}</b>
        <br />
        {/* Selected Value: {value} */}
        Safari: VO does not follow aria-activedescendant at all when role='combobox', modal or otherwise.
        When role='button', VO follows aria-activedescendant unless the component is in a modal.
        <br />
        <br />
        Chrome: VO follows aria-activedescendant in both role='combobox' and role='button' outside of a modal, 
        but never when in a modal.
        </Flex>
    </>
  );
};