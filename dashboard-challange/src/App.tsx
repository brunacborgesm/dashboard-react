import { Header } from './components/Header/'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import { DropdonwMenu } from './components/DropdownMenu';

 //pages
import { DashboardPage } from './components/pages/Dashboard'
import { NotFound } from './components/pages/NotFound';
import { AccountPage } from './components/pages/Account';

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Grid container spacing={5}>
          <Grid xs={3}>
            <DropdonwMenu />
          </Grid>
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
