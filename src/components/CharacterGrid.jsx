import {
  Grid,
  Pagination,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

export const CharacterGrid = () => {
  return (
    <div>
      <form
        style={{ margin: "10px 0", display: "flex", justifyContent: "center" }}
      >
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
          <Select value=" " size="small" label="Sort by">
            <MenuItem value=" ">Alive</MenuItem>
            <MenuItem value=" ">Deceased</MenuItem>
            <MenuItem value=" ">Presumed Dead</MenuItem>
            <MenuItem value=" ">Unknown</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Name search"
          variant="outlined"
          size="small"
          value=" "
        />
        <Button type="submit" variant="outlined">
          Search
        </Button>
      </form>
      <Grid container spacing={2}></Grid>
    </div>
  );
};
