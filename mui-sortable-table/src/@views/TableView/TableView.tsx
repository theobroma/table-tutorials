import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';

const TableView = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          //  style={{ padding: 3 }}
        >
          <Grid item xs={9}>
            table
          </Grid>
          <Grid item xs={3}>
            form
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TableView;
