import { NavBar } from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
//pages
import { DashboardPage } from './pages/Dashboard'
import { NotFound } from './pages/NotFound';
import { AccountPage } from './pages/Account';

function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Grid container spacing={6}>
          <Grid xs={3}></Grid>
          <Grid xs={9}>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Grid>
        </Grid>

      </BrowserRouter>

    </>
  )
}

export default App
