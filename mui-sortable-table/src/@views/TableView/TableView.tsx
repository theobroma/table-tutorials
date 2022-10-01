import { Box, Container, Grid, Paper } from '@mui/material';

import FormSection from './FormSection/FormSection';

const TableView = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          //  style={{ padding: 3 }}
        >
          <Grid item xs={7}>
            tableeee
          </Grid>
          <Grid item xs={5}>
            <Paper>
              <Box sx={{ p: 5 }}>
                <FormSection />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TableView;
