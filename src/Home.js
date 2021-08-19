import { Box, Grid, Typography, Button, CardMedia, Container, CardContent } from '@material-ui/core'
import React from 'react';
import p1 from './p1.svg';
import p3 from './group.svg';
import p4 from './hospital.svg';
import p5 from './medical-team.svg';
import { makeStyles } from '@material-ui/core/styles';
import p6 from './heart.svg';
import p7 from './reg.jfif';
import p8 from './screening.jfif';
import p9 from './p9.jfif';
import p10 from './refresh.jfif';
import p11 from './appointment.jpg';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import op1 from './op1.jpg';
import v1 from './v1.jpg';
import v2 from './v2.jpg';
import v3 from './v3.jpg';
import f1 from './facebook.svg';
import l1 from './linkedin.svg';
import i1 from './instagram.svg';
import g1 from './gmail.svg';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import gal1 from './gal1.jpg';
import gal2 from './gal2.jpg';
import gal3 from './gal3.jpg';
import gal4 from './gal4.jpg';
import gal5 from './gal5.jpg';
import gal6 from './gal6.jpg';
import sp1 from './sp1.jpg';
import sp2 from './sp2.jpg';
import sp3 from './sp3.jpg';
import sp4 from './sp4.jpg';
import sp5 from './sp5.jpg';
import sp6 from './sp6.jpg';





export const Home = () => {
    const useStyles = makeStyles((theme) => ({
        media: {
            height: 0,
            [theme.breakpoints.up('sm')]: {
                width: 500,
                height: 200,
                paddingTop: '55%'

            },
            [theme.breakpoints.down('sm')]: {
                display: 'none'

            }
        },
        media2: {

            width: 230,
            paddingTop: '56.25%',
        },
        media3: {

            width: '100%',
            height: 300
        },
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        large: {
            width: theme.spacing(15),
            height: theme.spacing(15),
        },
        ImageRoot: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent:'center',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            marginTop:'20px',
            marginBlock:'20px'
        },
        imageList: {
            width: '80%',
            height: '650px',
        },
    }));
    const classes = useStyles();
    const itemData = [
        {
            img: gal1,
            title: 'Image',
            author: 'author',
            cols: 1,
        }, {
            img: gal2,
            title: 'Image',
            author: 'author',
            cols: 1,
        }, {
            img: gal3,
            title: 'Image',
            author: 'author',
            cols: 2,
        }, {
            img: gal4,
            title: 'Image',
            author: 'author',
            cols: 1,
        }, {
            img: gal5,
            title: 'Image',
            author: 'author',
            cols: 1,
        }, {
            img: gal6,
            title: 'Image',
            author: 'author',
            cols: 0,
        },
        {
            img: gal1,
            title: 'Image',
            author: 'author',
            cols: 1,
        }
    ]

    return (
        <>
            <Box pt={10} bgcolor="#37474f" style={{ color: 'whitesmoke' }}>
                <Grid container>
                    <Grid item xs={12} md={7}>
                        <Box p={8}>
                            <Typography variant="h3" style={{ fontWeight: 'bolder' }}>
                                Giving <span style={{ color: 'red' }}>blood</span> can reveal potential <span style={{ color: 'red' }}> health </span>problems ...
                            </Typography>
                            <Box mt={3}>
                                <Typography mt={4} variant="h6" style={{ color: '#bdbdbd' }}>
                                    Donation frequency should be Every 56 days from Donation. <br />
                                    You must be in good health condition. <br />
                                    You must be at least 16 years above to donate. <br />
                                    You must weigh at least 50 KG
                                </Typography>
                            </Box>
                            <Box mt={5} >
                                <Button size="large" style={{ marginTop: '10px', marginRight: '10px' }} variant="contained" color="secondary">
                                    Get Started
                                </Button>

                                <Button style={{ marginTop: '10px' }} size="large" variant="contained" color="secondary">
                                    Donate Blood
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box mb={8} >
                            <CardMedia
                                className={classes.media}
                                image={p1}
                                title="Paella dish"
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Container style={{ position: 'relative', top: '-40px' }}>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={12}>
                        <Box borderRadius={16} bgcolor="#241c30" display="flex" flexDirection="column" alignContent="center" alignItems="center">
                            <CardMedia
                                className={classes.media2}
                                image={p3}
                                title="Paella dish"
                            />
                            <CardContent>

                                <Typography style={{ color: 'white', fontWeight: 'bolder' }} align="center" color="textSecondary" variant="h5">
                                    Donors
                                </Typography>
                                <Typography style={{ color: '#bdbdbd' }} align="center" variant="h6">
                                    Total Donors available Donors : <span style={{ color: 'skyblue' }}>15,000 +</span>
                                </Typography>
                                <Box marginTop={2} textAlign='center'>
                                    <Button color="secondary" variant='contained'>
                                        Find Donors
                                    </Button>
                                </Box>
                            </CardContent>
                        </Box>
                    </Grid>


                    <Grid item md={4} xs={12}>
                        <Box borderRadius={16} bgcolor="#241c30" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <CardMedia
                                className={classes.media2}
                                image={p4}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography style={{ color: 'white', fontWeight: 'bolder' }} align="center" color="textSecondary" variant="h5">
                                    Bloodbanks
                                </Typography>

                                <Typography style={{ color: '#bdbdbd' }} align="center" variant="h6">
                                    Total blood banks : <span style={{ color: 'skyblue' }}>3,500 +</span>
                                </Typography>
                                <Box marginTop={2} textAlign='center'>
                                    <Button color="secondary" variant='contained'>
                                        Find Bloodbanks
                                    </Button>
                                </Box>

                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Box borderRadius={16} bgcolor="#241c30" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <CardMedia
                                className={classes.media2}
                                image={p5}
                                title="Paella dish"
                            />
                            <CardContent>

                                <Typography style={{ color: 'white', fontWeight: 'bolder' }} align="center" color="textSecondary" variant="h5">
                                    Doctors
                                </Typography>

                                <Typography style={{ color: '#bdbdbd' }} align="center" variant="h6">
                                    Total doctors : <span style={{ color: 'skyblue' }}>1,500 +</span>
                                </Typography>
                                <Typography style={{ color: 'white' }} align="center" color="textSecondary" variant="h6">

                                </Typography>
                                <Box marginTop={2} textAlign='center'>
                                    <Button color="secondary" variant='contained'>
                                        Find Doctors
                                    </Button>
                                </Box>
                            </CardContent>
                        </Box>
                    </Grid>

                </Grid>

            </Container>
            <Box paddingTop={2} textAlign="center">
                <Typography color="secondary" style={{letterSpacing:'7px'}} variant="h4">Donation Process</Typography>
                <img style={{ marginTop: '10px' }} src={p6} width="50" alt="heart" />
                <Grid container>

                </Grid>
            </Box>

            <Container>
                <Box marginTop={3} marginBottom={10}>
                    <Grid container spacing={5}>
                        <Grid item md={3} xs={12}>
                            <Box boxShadow={4} textAlign="center">
                                <CardMedia
                                    className={classes.media3}
                                    image={p7}
                                    title="Paella dish"
                                />
                                <Box padding={2} color="white" bgcolor="secondary.main">
                                    <Typography style={{letterSpacing:'4px'}} variant="h5">Registration</Typography>
                                    <Typography style={{ marginTop: '20px' }} variant="p">
                                        Registration for Unregistered Person. Confirmation. Your account is currently logged in on another computer,
                                    </Typography>
                                </Box>
                            </Box>


                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Box boxShadow={4} textAlign="center">
                                <CardMedia
                                    className={classes.media3}
                                    image={p8}
                                    title="Paella dish"
                                />

                                <Box padding={2} color="white" bgcolor="secondary.main">
                                    <Typography style={{letterSpacing:'4px'}} variant="h5">Screening</Typography>
                                    <Typography style={{ marginTop: '20px' }} variant="p">
                                    Screening for Unregistered Person. Confirmation. Your account is currently logged in on another computer,
                                    </Typography>
                                </Box>
                            </Box>



                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Box boxShadow={4} textAlign="center">
                                <CardMedia
                                    className={classes.media3}
                                    image={p9}
                                    title="Paella dish"
                                />

                                <Box padding={2} color="white" bgcolor="secondary.main">
                                    <Typography style={{letterSpacing:'4px'}} variant="h5">Donation</Typography>
                                    <Typography style={{ marginTop: '20px' }} variant="p">
                                    Donation for Unregistered Person. Confirmation. Your account is currently logged in on another computer,
                                    </Typography>
                                </Box>
                            </Box>


                        </Grid>
                        <Grid item md={3} xs={12}>
                            <Box boxShadow={4} textAlign="center">
                                <CardMedia
                                    className={classes.media3}
                                    image={p10}
                                    title="Paella dish"
                                />

                                <Box padding={2} color="white" bgcolor="secondary.main">
                                    <Typography style={{letterSpacing:'4px'}}variant="h5">Refreshment</Typography>
                                    <Typography style={{ marginTop: '20px' }} variant="p">
                                    Refreshment for Unregistered Person. Confirmation. Your account is currently logged in on another computer,
                                    </Typography>
                                </Box>

                            </Box>


                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container>

                <Box marginY={7}>
                    <Grid container>

                        <Grid item md={5}>
                            <img src={p11} alt="customer" width="70%" />
                        </Grid>
                        <Grid item md={7}>
                            <Typography color="secondary" variant="h3" style={{letterSpacing:'3px',textShadow:'1px 1px' ,marginLeft: '20px' }}>Contact Us</Typography>
                            <Box marginTop={5}>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                                    <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
                                    <TextField
                                        id="standard-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                    />
                                    <TextField
                                        id="standard-read-only-input"
                                        label="Read Only"
                                        defaultValue="Hello World"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                    <TextField
                                        id="standard-number"
                                        label="Number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField id="standard-search" label="Search field" type="search" />
                                    <TextField
                                        id="standard-helperText"
                                        label="Helper text"
                                        defaultValue="Default Value"
                                        helperText="Some important text"
                                    />
                                    <TextField
                                        id="standard-helperText"
                                        label="Helper text"
                                        defaultValue="Default Value"
                                        helperText="Some important text"
                                    />
                                    <TextField
                                        id="standard-helperText"
                                        label="Helper text"
                                        defaultValue="Default Value"
                                        helperText="Some important text"
                                    />
                                    <TextField
                                        id="standard-helperText"
                                        label="Helper text"
                                        defaultValue="Default Value"
                                        helperText="Some important text"
                                    />
                                    <TextField
                                        id="standard-helperText"
                                        label="Helper text"
                                        defaultValue="Default Value"
                                        helperText="Some important text"
                                    />
                                    <Box marginTop={1}>
                                        <Button variant="contained" color="secondary">
                                            Submit
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>


                <Box style={{backgroundColor:'#E7E3E3'}} padding={3} textAlign="center">
                    <Typography color="secondary" variant="h3" style={{textShadow:'1px 1px',letterSpacing:'4px'}}>
                        Recipient's Opinion
                    </Typography>
                    <Avatar style={{ display: 'inline-block', marginTop: '15px', marginBottom: '15px', border: '1px solid black' }} alt="Remy Sharp" src={op1} className={classes.large} />

                    <Typography variant="h5" style={{letterSpacing:'2px',color:'grey'}}>
                        I wish I could tell you my donor how grateful I am for your selfless act. You gave me new life. We may be coworkers
                        or schoolmates or just two in the same community. I'm very grateful to you.
                    </Typography>
                    <Typography style={{ marginTop: '10px',letterSpacing:'4px' }} variant="h4" color="secondary">Brandon Munsan</Typography>
                    <Typography style={{ marginTop: '10px',letterSpacing:'4px' }} variant="h6">Karachi, Pakistan</Typography>
                </Box>
                <Box paddingY={5} marginTop={10} textAlign="center">
                    <Typography style={{letterSpacing:'7px',textShadow:'1px 1px'}} color="secondary" variant="h3">
                        Our volunteers
                    </Typography>
                    <Box marginTop={7}>


                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                <Box  style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                                    <img src={v1} alt="v1" />
                                    <Typography color="secondary" style={{letterSpacing:'4px'}} variant="h6">David Shakeel</Typography>
                                    <Typography style={{letterSpacing:'4px',color:'grey'}}  variant="p">Founder</Typography>
                                    <Box marginTop={3} paddingBottom={3} >
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={f1} alt="faceook" />
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={i1} alt="faceook" />
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={g1} alt="faceook" />
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={l1} alt="faceook" />
                                    </Box>

                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>


                                <Box   style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>

                                    <img src={v2} alt="v1" />

                                    <Typography color="secondary"   style={{letterSpacing:'4px'}}  variant="h6">Mary Hulkin</Typography>
                                    <Typography  style={{letterSpacing:'4px',color:'grey'}} variant="p">Co-Founder</Typography>
                                    <Box  marginTop={3}   paddingBottom={3} >
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={f1} alt="faceook" />
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={i1} alt="faceook" />
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={g1} alt="faceook" />
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={l1} alt="faceook" />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>

                                <Box   style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>

                                    <img src={v3} alt="v1" />

                                    <Typography color="secondary"   style={{letterSpacing:'4px'}}  variant="h6">Robert Hale</Typography>
                                    <Typography   style={{letterSpacing:'4px',color:'grey'}}  variant="p">Manager</Typography>
                                    <Box marginTop={3}  paddingBottom={3}>
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={f1} alt="faceook" />
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={i1} alt="faceook" />
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={g1} alt="faceook" />
                                        <img width="30" height="30" style={{ marginLeft: '8px' }} src={l1} alt="faceook" />
                                    </Box>

                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>


                <Box marginTop={4}>
                    <Typography style={{letterSpacing:'9px',textShadow:'1px 1px'}} color="secondary" align="center" variant="h4">Photo Gallery</Typography>


                    <div  className={classes.ImageRoot}>
                        <ImageList className={classes.imageList} >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols}>
                                    <img src={item.img} alt={item.title} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>

                </Box>
                <Box textAlign="center" marginTop={10}>
                    <Typography  style={{letterSpacing:'19px',textShadow:'1px 1px'}} color="secondary" variant="h3">Our Sponsors</Typography>
                    </Box>
                    <Box textAlign="Center" marginTop={5} marginBottom={10}>
                    <Grid container>
                        <Grid item xs={12} md={2}><Box><img src={sp1} alt="sp1" /></Box></Grid>
                        <Grid item xs={12} md={2}><Box><img src={sp2} alt="sp1" /></Box></Grid>
                        <Grid item xs={12} md={2}><Box><img src={sp3} alt="sp1" /></Box></Grid>
                        <Grid item xs={12} md={2}><Box><img src={sp4} alt="sp1" /></Box></Grid>
                        <Grid item xs={12} md={2}><Box><img src={sp5} alt="sp1" /></Box></Grid>
                        <Grid item xs={12} md={2}><Box><img src={sp6} alt="sp1" /></Box></Grid>
                    </Grid>

                </Box>


            </Container>









        </>
    )
}
