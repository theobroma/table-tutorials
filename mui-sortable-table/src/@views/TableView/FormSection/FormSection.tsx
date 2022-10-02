// https://www.ruth-ng.co.uk/how-to-ask-about-gender-in-forms-respectfully
import { useForm } from 'react-hook-form';
import { SelectElement, TextFieldElement } from 'react-hook-form-mui';

import AdjustIcon from '@mui/icons-material/Adjust';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ReplayIcon from '@mui/icons-material/Replay';
import { Button, Stack } from '@mui/material';

interface IFormInput {
  // name: string;
  select: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
}

const FormSection = () => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      // name: '',
      firstName: '',
      lastName: '',
      gender: 'male',
      age: 21,
    },
  });

  const onSubmit = (data: IFormInput) => console.log(data);

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

      {/* <Button type="submit" color="primary">
        Submit
      </Button> */}

      <Stack spacing={2} direction="row">
        <Button
          type="submit"
          variant="outlined"
          startIcon={<AdjustIcon />}
          fullWidth
        >
          Submit
        </Button>
        <Button variant="outlined" startIcon={<ClearAllIcon />} fullWidth>
          Clear
        </Button>
        <Button variant="outlined" startIcon={<ReplayIcon />} fullWidth>
          Reset
        </Button>
      </Stack>
    </form>
  );
};

export default FormSection;
