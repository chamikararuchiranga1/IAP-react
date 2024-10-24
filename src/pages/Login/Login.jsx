import Box from "@mui/material/Box";
import { Button, Card, CardActions, CardContent, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
// import axios from "axios";
import instance from "../../service/Axiosorder";


export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    function loginAction() {
        instance.post('/api/login', {
            email: email,
            password: pass,
        })
            .then(function (response) {
                // console.log(response.data.token);
                localStorage.setItem('iap-token', response.data.token);
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography textAlign={'center'} gutterBottom variant="h5" component="div">
                        Login
                    </Typography>
                    <Box paddingBottom={2}>
                        <TextField onChange={(val) => {
                            setEmail(val.target.value)
                        }} fullWidth id="outlined-basic" label="Email" variant="outlined" />
                    </Box>
                    <Box paddingBottom={2}>
                        <TextField onChange={(val) => {
                            setPass(val.target.value)
                        }} fullWidth id="outlined-basic" type='password' label="Password" variant="outlined" />
                    </Box>
                    <Typography onClick={() => { navigate('/register') }} textAlign={'end'} variant="body2" color="blue">
                        Register
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={loginAction} variant={'contained'} size="small">Login</Button>
                </CardActions>
            </Card>
        </Box>
    )
}