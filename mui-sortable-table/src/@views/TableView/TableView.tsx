import { Box, Container, Grid, Paper } from '@mui/material';

import { useAppDispatch } from '../../@store/configureStore';
import { addUserTC } from '../../@store/users/slice';

import FormSection from './FormSection/FormSection';
import TableSection from './TableSection/TableSection';

const TableView = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (user: any) => {
    dispatch(addUserTC(user));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          //  style={{ padding: 3 }}
        >
          <Grid item xs={7}>
            <TableSection />
          </Grid>
          <Grid item xs={5}>
            <Paper>
              <Box sx={{ p: 5 }}>
                <FormSection
                  submitCallback={(user: any) => handleSubmit(user)}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TableView;
