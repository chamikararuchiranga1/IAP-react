
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function PostCard({id, title, url, thumbnailUrl}) {
    return (
        <Card sx={{ width: 375, margin: 2 }}>
            <CardContent>
                <Box sx={{ display: 'flex' }}>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>{id}</Avatar>
                    <Typography variant="h5" component="div" ml={3}>
                       {title}
                    </Typography>
                </Box>

            </CardContent>
            <CardActions>
                <Box
                    component="img"
                    sx={{
                        height: 100,
                        width: 100,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={thumbnailUrl}
                />
                <Box
                    component="img"
                    sx={{
                        height: 200,
                        width: 200,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="The house from the offer."
                    src={url}
                />
            </CardActions>
        </Card>
    )
}