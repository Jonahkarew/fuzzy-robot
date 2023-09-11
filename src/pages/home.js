import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigation'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import Button from '../components/button'

function Home (props) {
    const [value, setValue] = React.useState(0);
    return(
        <div>
            <Container maxWidth='lg'>
                <Button />
            </Container>
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}>
                    <BottomNavigationAction label="Recents"  />
                </BottomNavigation>
            </Paper>
        </div>
    )
}

export default Home