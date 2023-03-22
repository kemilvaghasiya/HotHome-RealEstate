import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import VolumeUp from '@mui/icons-material/VolumeUp';

const Input = styled(MuiInput)`
  width: 42px;
`;

const interestAmount=(amount:any,rate:any,year:any):number=>{
    return (amount*rate*year)/100;
}

export default function InputSlider({data}:any) {
    const [value1, setValue1] = React.useState<number | string | Array<number | string>>(
        100,
    );

    const handleSliderChange1 = (event: Event, newValue: number | number[]) => {
        setValue1(newValue);
    };

    const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue1(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur1 = () => {
        if (value1 < 0) {
            setValue1(0);
        } else if (value1 > 100) {
            setValue1(100);
        }
    };

    const [value2, setValue2] = React.useState<number | string | Array<number | string>>(
        7,
    );

    const handleSliderChange2 = (event: Event, newValue: number | number[]) => {
        setValue2(newValue);
    };

    const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur2 = () => {
        if (value2 < 0) {
            setValue2(0);
        } else if (value2 > 15) {
            setValue2(15);
        }
    };


    const [value3, setValue3] = React.useState<number | string | Array<number | string>>(
        15,
    );

    const handleSliderChange3 = (event: Event, newValue: number | number[]) => {
        setValue3(newValue);
    };

    const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur3 = () => {
        if (value3 < 0) {
            setValue3(0);
        } else if (value3 > 30) {
            setValue3(30);
        }
    };

    return (
        <div style={{display:'flex'}}>
            <div>
                <Box sx={{ width: 250, marginTop: '20px' }}>
                    <Typography id="input-slider" gutterBottom>
                        Loan Amount ($)
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        {/* <Grid item>
                    <VolumeUp />
                </Grid> */}
                        <Typography id="input-slider" gutterBottom style={{ marginLeft: 20, display: 'flex', alignSelf: 'center' }}>
                            1 L
                        </Typography>
                        <Grid item xs>
                            <Slider
                                value={typeof value1 === 'number' ? value1 : 0}
                                onChange={handleSliderChange1}
                                aria-labelledby="input-slider"
                                style={{ color: '#B89E69' }}
                                min={0}
                                max={data.price}
                            />
                        </Grid>
                        <Grid item>
                            {/* <Input
                        value={value}
                        size="small"
                        // onChange={handleInputChange}
                        // onBlur={handleBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    /> */}
                            <Typography id="input-slider" gutterBottom>
                                {value1}{'L'}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                    

                <Box sx={{ width: 250, marginTop: '20px' }}>
                    <Typography id="input-slider" gutterBottom>
                        Interest Rate (% P.A.)
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        {/* <Grid item>
                    <VolumeUp />
                </Grid> */}
                        <Typography id="input-slider" gutterBottom style={{ marginLeft: 20, display: 'flex', alignSelf: 'center' }}>
                            1%
                        </Typography>
                        <Grid item xs>
                            <Slider
                                value={typeof value2 === 'number' ? value2 : 0}
                                onChange={handleSliderChange2}
                                aria-labelledby="input-slider"
                                style={{ color: '#B89E69' }}
                                min={1}
                                max={15}
                            />
                        </Grid>
                        <Grid item>
                            <Typography id="input-slider" gutterBottom>
                                {value2}{'%'}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>


                <Box sx={{ width: 250, marginTop: '20px' }}>
                    <Typography id="input-slider" gutterBottom>
                        Tenure (Years)
                        
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        {/* <Grid item>
                    <VolumeUp />
                </Grid> */}
                        <Typography id="input-slider" gutterBottom style={{ marginLeft: 20, display: 'flex', alignSelf: 'center' }}>
                            1 Yr
                        </Typography>
                        <Grid item xs>
                            <Slider
                                value={typeof value3 === 'number' ? value3 : 0}
                                onChange={handleSliderChange3}
                                aria-labelledby="input-slider"
                                style={{ color: '#B89E69' }}
                                min={1}
                                max={30}
                            />
                        </Grid>
                        <Grid item>
                            {/* <Input
                        value={value}
                        size="small"
                        // onChange={handleInputChange}
                        // onBlur={handleBlur}
                        inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    /> */}
                            <Typography id="input-slider" gutterBottom>
                                {value3}{'Yr'}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div style={{marginLeft:150,marginTop:30}}>
                <div style={{ display: 'flex', margin: 15, fontSize: 18,fontWeight:500,width:400, color: '#B89E69' }}>
                    <span style={{width:'50%'}}>Monthly EMI</span>
                    <span>{`${((interestAmount(value1, value2, value3) + Number(value1))/(Number(value3)*12)).toFixed(2)} L`}</span>
                </div>
                {/* <div style={{ display: 'flex', margin: 15, width: 400 }}>
                    <span style={{ width: '50%' }}>Principle</span>
                    <span>2</span>
                </div> */}
                <div style={{ display: 'flex', margin: 15 ,width: 400 }}>
                    <span style={{ width: '50%' }}>Interest Amount</span>
                    <span>{`${interestAmount(value1,value2,value3).toFixed(2)} L`}</span>
                </div>
                <div style={{ display: 'flex', margin: 15, width: 400 }}>
                    <span style={{ width: '50%' }}>Total Amount Payable</span>
                    <span>{`${interestAmount(value1, value2, value3) + Number(value1)} L`}</span>
                </div>
            </div>
        </div>

    );
}