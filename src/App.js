import { Grid } from "@mui/material";
import "./App.css";
import UserDetail from "./component/UserDetail";

function App() {
  return (
    <Grid sx={{ height: "120vh", bgcolor: "#ddd" }}>
      <UserDetail />
    </Grid>
  );
}

export default App;
