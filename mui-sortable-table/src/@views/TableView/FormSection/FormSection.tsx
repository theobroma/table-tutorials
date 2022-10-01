import { useForm } from 'react-hook-form';
import { SelectElement, TextFieldElement } from 'react-hook-form-mui';

import { Button } from '@mui/material';

interface IFormInput {
  multi_select: string[];
  name: string;
  auto: string;
  auto_multi: string[];
  select: string;
  switch: boolean;
  checkbox: string[];
  check: boolean;
  date: string;
  radio: string;
  password: string;
  password_repeat: string;
}

const FormSection = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = (data: IFormInput) => console.log(data);

  const options = [
    { id: 'one', label: 'One' },
    { id: 'two', label: 'Two' },
    { id: 'three', label: 'Three' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextFieldElement name="name" label="Name" control={control} fullWidth />
      <br />
      <br />
      <SelectElement
        name="select"
        label="Select"
        control={control}
        options={options}
        fullWidth
      />
      <br />
      <br />

      <Button type="submit" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default FormSection;
