import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"


export const SideBar = () => {

  return (
    <>
      <Drawer variant="permanent" anchor="left">
        <Box>
          <List>
            <ListItem>
              <ListItemButton component="a" href="/">
                <ListItemText>Overview</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="/NotFound">
                <ListItemText>Customers</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="/NotFound">
                <ListItemText>Companies</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="/account">
                <ListItemText>Account</ListItemText>
              </ListItemButton>
            </ListItem>
            
            <ListItem>
              <ListItemButton component="a" href="/NotFound">
                <ListItemText>Settings</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="/NotFound">
                <ListItemText>Login</ListItemText>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component="a" href="/NotFound">
                <ListItemText>Register</ListItemText>
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
      </Drawer>
    </>
  )
}




