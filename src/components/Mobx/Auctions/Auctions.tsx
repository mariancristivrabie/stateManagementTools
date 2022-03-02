import React, { useState } from 'react'
import { useStore } from 'mobxStore'
import { Box, Button, Divider, Grid, Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { observer } from 'mobx-react-lite';
import { NameComponent } from '../NameComponent';
import { StartPrice } from '../StartPrice/StartPrice';
import { Owner } from '..';
import { StartDate } from '../StartDate';
import { EndDate } from '../EndDate';
import { MaxPrice } from '../MaxPrice/MaxPrice';
import { NameComponentWrong } from '../NameComponentWrong';
import { OwnerWrong } from '../OwnerWrong';
import { EndDateWrong } from '../EndDateWrong';
import { MaxPigeonPrice } from '../MaxPigeonPrice/MaxPigeonPrice';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const Auctions = observer(() => {
    const {auctionStore} = useStore();
    const {auctions, maxPigeonPrice} = auctionStore
    const [car, pigeon] = auctions;


    //car state constants
    const [carOwner, setCarOwner] = useState(car.owner);
    const [carEndDate, setCarEndDate] = useState(car.endDate);
    const [carNewAuctionPrice, setCarNewAuctionPrice] = useState(0);
    const [carNewAuctionName, setCarNewAuctionName] = useState('');

    //pigeon state constants
    const [pigeonOwner, setPigeonOwner] = useState(pigeon.owner);
    const [pigeonEndDate, setPigeonEndDate] = useState(pigeon.endDate);
    const [pigeonNewAuctionPrice, setPigeonNewAuctionPrice] = useState(0);
    const [pigeonNewAuctionName, setPigeonNewAuctionName] = useState('');

  
    // car auciton changes
    const handleSaveOwner = () => {
        auctionStore.setCarOwner(carOwner);
    }

    const handleSaveEndDate = () => {
        auctionStore.setCarEndDate(carEndDate)
    }

    const handleSaveBid = () => {
        auctionStore.setCarNewBid({
            name: carNewAuctionName,
            price: carNewAuctionPrice,
            date: '09.03.2022'
        })
    }

    const handleSaveAll = () => {
        auctionStore.setCarMultipleChanges({
            owner: carOwner,
            endDate:carEndDate,
            name: carNewAuctionName,
            price: carNewAuctionPrice,
            date: '09.03.2022'
        })
    }

    // pigeon auction changes
    const handleSavePigeonOwner = () => {
        auctionStore.setPigeonOwner(pigeonOwner);
    }

    const handleSavePigeonEndDate = () => {
        auctionStore.setPigeonEndDate(pigeonEndDate)
    }

    const handleSavePigeonBid = () => {
        auctionStore.setPigeonNewBid({
            name: pigeonNewAuctionName,
            price: pigeonNewAuctionPrice,
            date: '09.03.2022'
        })
    }

    const handleSaveAllPigeon = () => {
        auctionStore.setPigeonMultipleChanges({
            owner: pigeonOwner,
            endDate:pigeonEndDate,
            name: pigeonNewAuctionName,
            price: pigeonNewAuctionPrice,
            date: '09.03.2022'
        })
    }

    return (
        <Box sx={{width:'70%', height:'100%', backgroundColor:'#ffffff', margin:'auto'}}>
            <Stack spacing={8}>
                <h1>
                    Auctions:
                </h1>
            </Stack>
            <Divider />
            <Grid container spacing={4} sx={{marginBottom:2, marginTop:2}}>
                <Grid item xs={6} spacing={8}>
                    <Stack>
                        <h3>Correct:</h3>
                    </Stack>
                    <Item>
                        <Stack direction='column' spacing={4}>
                            <Stack direction='row' spacing={4}>
                                <TextField
                                    label="Owner"
                                    id="outlined-size-small"
                                    defaultValue="Small"
                                    size="small"
                                    value={carOwner}
                                    onChange={(e:any) => setCarOwner(e.target.value)}
                                />
                                <Button variant='contained' onClick={handleSaveOwner} color='primary'>
                                    Save
                                </Button>
                            </Stack>
                        
                            <Stack direction='row' spacing={4}>
                                <TextField
                                    label="End date"
                                    id="outlined-size-small"
                                    defaultValue="Small"
                                    size="small"
                                    value={carEndDate}
                                    onChange={(e:any) => setCarEndDate(e.target.value)}
                                />
                                <Button variant='contained' onClick={handleSaveEndDate} color='primary'>
                                    Save
                                </Button>
                            </Stack>
                            <Stack direction='row' spacing={4}>
                                <TextField
                                    label="Name"
                                    id="outlined-size-small"
                                    defaultValue="Small"
                                    size="small"
                                    value={carNewAuctionName}
                                    onChange={(e:any) => setCarNewAuctionName(e.target.value)}
                                />
                                <TextField
                                    label="Price"
                                    id="outlined-size-small"
                                    defaultValue="Small"
                                    size="small"
                                    type='number'
                                    value={carNewAuctionPrice}
                                    onChange={(e:any) => setCarNewAuctionPrice(e.target.value)}
                                />
                                <Button variant='contained' onClick={handleSaveBid} color='primary'>
                                    Save
                                </Button>
                            </Stack>
                            <Button variant='outlined' onClick={handleSaveAll} color='primary'>
                                Save all changes
                            </Button>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Stack>
                        <h3>Wrong:</h3>
                    </Stack>
                    <Item>
                        <Stack direction='column' spacing={4}>
                            <Stack direction='row' spacing={4}>
                                <TextField
                                    label="Owner"
                                    id="outlined-size-small"
                                    defaultValue="Small"
                                    size="small"
                                    value={pigeonOwner}
                                    onChange={(e:any) => setPigeonOwner(e.target.value)}
                                />
                                <Button variant='contained' onClick={handleSavePigeonOwner} color='primary'>
                                    Save
                                </Button>
                            </Stack>
                        
                            <Stack direction='row' spacing={4}>
                                <TextField
                                    label="End date"
                                    id="outlined-size-small"
                                    defaultValue="Small"
                                    size="small"
                                    value={pigeonEndDate}
                                    onChange={(e:any) => setPigeonEndDate(e.target.value)}
                                />
                                <Button variant='contained' onClick={handleSavePigeonEndDate} color='primary'>
                                    Save
                                </Button>
                            </Stack>
                            <Stack direction='row' spacing={4}>
                                <TextField
                                    label="Name"
                                    id="outlined-size-small"
                                    defaultValue="Small"
                                    size="small"
                                    value={pigeonNewAuctionName}
                                    onChange={(e:any) => setPigeonNewAuctionName(e.target.value)}
                                />
                                <TextField
                                    label="Price"
                                    id="outlined-size-small"
                                    defaultValue="Small"
                                    size="small"
                                    type='number'
                                    value={pigeonNewAuctionPrice}
                                    onChange={(e:any) => setPigeonNewAuctionPrice(e.target.value)}
                                />
                                <Button variant='contained' onClick={handleSavePigeonBid} color='primary'>
                                    Save
                                </Button>
                            </Stack>
                            <Button variant='outlined' onClick={handleSaveAllPigeon} color='primary'>
                                Save all changes
                            </Button>
                        </Stack>
                    </Item>
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={4} sx={{marginTop:2}}>
                <Grid item xs={6} spacing={8}>
                    
                    <Grid container spacing={2}>
                        <Grid item spacing={4} xs={12}>
                            <Item>
                               <NameComponent auction={car} />
                            </Item>
                        </Grid>  
                        <Grid item xs={6}>
                            <Item>
                                <StartPrice auction={car} />
                            </Item>
                        </Grid> 
                        <Grid item xs={6}>
                            <Item>
                                <Owner auction={car} />
                            </Item>
                        </Grid> 
                        <Grid item xs={4}>
                            <Item>
                                <StartDate auction={car} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <EndDate auction={car} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <MaxPrice />
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} spacing={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} spacing={4}>
                            <Item>
                                <NameComponentWrong name={pigeon.name} imgSrc={pigeon.imgSrc} />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <StartPrice auction={pigeon} />
                            </Item>
                        </Grid> 
                        <Grid item xs={6}>
                            <Item>
                                <OwnerWrong owner={pigeon.owner} />
                            </Item>
                        </Grid> 
                        <Grid item xs={4}>
                            <Item>
                                <StartDate auction={pigeon} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <EndDateWrong endDate={pigeon.endDate} />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <MaxPigeonPrice maxPrice={maxPigeonPrice}/>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    )
})