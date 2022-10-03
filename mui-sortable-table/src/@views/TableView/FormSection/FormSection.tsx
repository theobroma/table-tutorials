// https://www.ruth-ng.co.uk/how-to-ask-about-gender-in-forms-respectfully
// https://stackoverflow.com/questions/62741410/react-hook-form-empty-input-field-after-each-submit
import { useForm } from 'react-hook-form';
import { SelectElement, TextFieldElement } from 'react-hook-form-mui';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import AdjustIcon from '@mui/icons-material/Adjust';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, Stack } from '@mui/material';

const schema = z.object({
  firstName: z.string().min(2, 'First Name is required. Minimum 2 characters'),
  lastName: z.string().min(2, 'Last Name is required. Minimum 2 characters'),
  age: z.number().min(10, 'At least 10 years'),
  gender: z.string().min(2, 'Gender is required'),
});

type SchemaType = z.infer<typeof schema>;

const FormSection = ({ submitCallback }: any) => {
  const { control, handleSubmit, reset } = useForm<SchemaType>({
    defaultValues: {
      firstName: 'John ',
      lastName: 'Doe',
      gender: 'male',
      age: 21,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SchemaType) => {
    console.log('data :>> ', data);
    submitCallback(data);
    clearForm();
  };

  const clearForm = () => {
    reset({
      firstName: '',
      lastName: '',
      gender: '',
      age: 0,
    });
  };

  const resetFormTo = () => {
    reset({
      firstName: 'John ',
      lastName: 'Doe',
      gender: 'male',
      age: 21,
    });
  };

  const options = [
    { id: 'male', label: 'Male' },
    { id: 'female', label: 'Female' },
    { id: 'non-binary', label: 'Non-binary' },
    { id: 'transgender', label: 'Transgender' },
    { id: 'intersex', label: 'Intersex' },
    { id: 'not-to-say', label: 'I prefer not to say' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextFieldElement
        name="firstName"
        label="First Name"
        control={control}
        fullWidth
      />
      <br />
      <br />
      <TextFieldElement
        name="lastName"
        label="Last Name"
        control={control}
        fullWidth
      />
      <br />
      <br />
      <SelectElement
        name="gender"
        label="Gender"
        control={control}
        options={options}
        fullWidth
      />
      <br />
      <br />
      <TextFieldElement
        name="age"
        label="Age"
        type="number"
        control={control}
        fullWidth
        // required
      />
      <br />
      <br />

      <Stack spacing={2} direction="row">
        <Button
          type="submit"
          variant="outlined"
          startIcon={<AdjustIcon />}
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          startIcon={<ClearAllIcon />}
          fullWidth
          onClick={() => clearForm()}
        >
          Clear
        </Button>
        <Button
          variant="outlined"
          startIcon={<ReplayIcon />}
          fullWidth
          onClick={() => resetFormTo()}
        >
          Reset
        </Button>
      </Stack>
    </form>
  );
};

export default FormSection;
