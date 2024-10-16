import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple, orange, blueGrey } from '@mui/material/colors';
import Box from '@mui/material/Box';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: blueGrey[500],
    '&:hover': {
        backgroundColor: blueGrey[700],
    },
}));

export default function Mui() {
    return (
        <div>
            <h1>Mui</h1>
            <br />
            <br />

            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
                <div>
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                    <Button variant="contained" size="medium">
                        Medium
                    </Button>
                    <Button variant="contained" size="large">
                        Large
                    </Button>
                </div>
                <ColorButton variant="contained">Custom CSS</ColorButton>
            </Stack>

            <Box component="section" sx={{width: 200, height: 200, backgroundColor: { xs: "red", sm: "orange", md: "green", lg: "blue" } }}>
                This Box renders as an HTML section element.
            </Box>
        </div>
    )
}