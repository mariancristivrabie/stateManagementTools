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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const Auctions = observer(() => {
    const {auctionStore} = useStore();
    const {auctions} = auctionStore
    const [car, pigeon] = auctions;

    const [carOwner, setCarOwner] = useState(car.owner);
    const [carEndDate, setCarEndDate] = useState(car.endDate);
    const [carNewAuctionPrice, setCarNewAuctionPrice] = useState(0);
    const [carNewAuctionName, setCarNewAuctionName] = useState('');

    console.log(car)
    console.log(pigeon)

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

    return (
        <Box sx={{width:'90%', height:'100%', backgroundColor:'#ffffff', margin:'auto'}}>
            <Stack spacing={8}>
                <h1>
                    Auctions:
                </h1>
            </Stack>
            <Divider />
            <Grid container spacing={2} sx={{marginBottom:2, marginTop:2}}>
                <Grid item xs={6} spacing={8}>
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
                            <Button variant='contained' onClick={handleSaveAll} color='secondary'>
                                Save all changes
                            </Button>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>

                    </Item>
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={2} sx={{marginTop:2}}>
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
                        <Grid item xs={3}>
                            <Item>
                                <StartDate auction={car} />
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>
                                <EndDate auction={car} />
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>
                                <MaxPrice />
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} spacing={8}>
                    <Item>
                        test 2
                    </Item>
                </Grid>
            </Grid>
        </Box>

    )
})