import { useNavigate } from "react-router-dom";
import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function Register () {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comPassword, setComPassword] = useState('');

    return(
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ maxWidth: 445 }}>
                <CardContent>
                    <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                        Register
                    </Typography>
                    <Box paddingBottom={2}>
                        <TextField
                            onChange={(val) => setName(val.target.value)}
                            fullWidth
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                        />
                    </Box>
                    <Box paddingBottom={2}>
                        <TextField
                            onChange={(val) => setEmail(val.target.value)}
                            fullWidth
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                    </Box>
                    <Box paddingBottom={2}>
                        <TextField
                            onChange={(val) => setPassword(val.target.value)}
                            fullWidth
                            id="outlined-basic"
                            type='password'
                            label="Password"
                            variant="outlined"
                        />
                    </Box>
                    <Box paddingBottom={2}>
                        <TextField
                            onChange={(val) => setComPassword(val.target.value)}
                            fullWidth
                            id="outlined-basic"
                            type='password'
                            label="Conform Password"
                            variant="outlined"
                        />
                    </Box>
                    <Typography
                        onClick={() => { navigate('/login') }}
                        textAlign={'end'}
                        variant="body2"
                        color="blue"
                    >
                        login
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant={'contained'} size="small">Register</Button>
                </CardActions>
            </Card>
        </Box>
    )
}