import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { MainBtnContainer } from '../../Assets/MainStyled';
import { Grid } from '@material-ui/core';
import swal from 'sweetalert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LOCALSTORAGE, MAINURL } from '../../Assets/Data';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '100%'
            }
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
          },
    })
);

const currencies = [
    {
      value: 'Jumbo Trailer Trucks',
      label: 'Jumbo Trailer Trucks',
    },
    {
      value: 'Flatbed Trucks',
      label: 'Flatbed Trucks',
    },
    {
      value: 'Straight Trucks',
      label: 'Straight Trucks',
    },
    {
      value: 'Refrigerated Trucks',
      label: 'Refrigerated Trucks',
    },
  ];

export default function AddtransactionForm (){
    const classees = useStyles();
    const [senderStatus, setSenderStatus] = useState<boolean>(true);
    const [recieverStatus, setRecieverStatus] = useState<boolean>(false);
    const [cargoStatus, setCargoStatus] = useState<boolean>(false);
    const [currency, setCurrency] = React.useState('EUR');
    const [open, setOpen] = React.useState(false);


    const [senderName, setSenderName] = useState<string>('gabriel');
    const [senderPhoneNumber, setSenderPhoneNumber] = useState<String>('');
    const [senderAddress, setSenderAddress] = useState<string>('');
    const [recieverName, setRecieverName] = useState<string>('')
    const [recieverPhoneNumber, setRecieverPhoneNumber] = useState<string>('');
    const [recieverAddress, setRecieverAddress] = useState<string>('');
    

    const [cargoName, setCargoName] = useState<string>('');
    const [cargoWeight, setCargoWeight] = useState<string>('')
    const [cargoType, setCargoType] = useState<string>('')


    const handleOpenReciever = (): void => {
        setRecieverStatus(true);
        setSenderStatus(false);
        setCargoStatus(false);
    };  
    const handleOpenSender = (): void => {
        setRecieverStatus(false);
        setSenderStatus(true);
        setCargoStatus(false);
    };  
    const handleOpenCargo = (): void => {
        setRecieverStatus(false);
        setSenderStatus(false);
        setCargoStatus(true);
    };
    const handleSubmit = (): void =>{
        setOpen(!open);
        console.log(`
        Submitted:
            ${senderName}
            ${senderPhoneNumber}
            ${senderAddress}
            ${recieverName}
            ${recieverPhoneNumber}
            ${recieverAddress}
            ${cargoName}
            ${cargoWeight}
            ${cargoType} 
        `);
        // const admin = JSON.parse(localStorage.getItem(LOCALSTORAGE.userDetails))._id;
        console.log(`${MAINURL}/transactions/add-transactions`)
        setTimeout(() => {
            if (cargoName === '') {
                setTimeout(() => {
                    setOpen(false);
                    swal("Added!", "Field not completely filled", "error");
                }, 2000)
            } else {
                setOpen(false);
                try {
                    axios.post(`${MAINURL}/transactions/add-transactons`, {
                        senderName: senderName,
                        senderID: Math.floor(Math.random() * 100000000),
                        senderAddress: senderAddress,
                        senderState: senderAddress,
                        recieverName: recieverName,
                        recieverID: Math.floor(Math.random() * 100000000),
                        recieverAddress: recieverAddress,
                        recieverState: senderAddress,
                        cargoName: cargoName,
                        cargoWeight: cargoWeight,
                        cargoID: Math.floor(Math.random() * 100000000),
                        cargoType: cargoType,
                        vehicleID: 58793209,
                    }).then((response: any) => {
                        console.log(response.statusText);
                        console.log(response.data.data);
                        if (response.statusText === 'Created') {
                            setTimeout(() => {
                                window.location.href = '/dashboard';
                            }, 4000)
                        }
                      })
                } catch (err) {
                    console.log(err)
                }
                // swal("Added!", `${cargoName} is added!`, "success");
               
            }
        }, 3000)
    }
    const handleLoaderClose = () =>{
        setOpen(false);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
      };
    return (
        <form className={classees.root} noValidate autoComplete='off'>
            <SenderComponents status={senderStatus}>
            <Typography variant="h4" component="h4">
                Sender Details
            </Typography>
                <TextField
                    id="standard-text-input"
                    label="Name"
                    type="text"
                    autoComplete="current-text"
                    onChange={(e:any):any => setSenderName(e.target.value)}
                />
                <br/>
                <TextField
                    id="standard-text-input"
                    label="Phone Number"
                    type="text"
                    autoComplete="current-text"
                    onChange={(e:any):any => setSenderPhoneNumber(e.target.value)}
                />
                <br/>
                <TextField
                    id="standard-text-input"
                    label="Address"
                    type="text"
                    autoComplete="current-text"
                    onChange={(e:any):any => setSenderAddress(e.target.value)}

                />
                <br/>
                <Grid container spacing={3} style={{marginTop: '30px'}}>
                    <Grid item lg={12}>
                        <MainBtnContainer className='btn btn-block' onClick={handleOpenReciever}>Next</MainBtnContainer>
                    </Grid>
                </Grid>
            </SenderComponents>
            {/* Recieve Details */}
            <RecieverComponents status={recieverStatus}>
            <Typography variant="h4" component="h4">
                Recieve Details
            </Typography>
                <TextField
                    id="standard-text-input"
                    label="Name"
                    type="text"
                    autoComplete="current-text"
                    onChange={(e:any):any => setRecieverName(e.target.value)}
                />
                <br/>
                <TextField
                    id="standard-text-input"
                    label="Phone Number"
                    type="text"
                    autoComplete="current-text"
                    onChange={(e:any):any => setRecieverPhoneNumber(e.target.value)}
                />
                <br/>
                <TextField
                    id="standard-text-input"
                    label="Address"
                    type="text"
                    autoComplete="current-text"
                    onChange={(e:any):any => setRecieverAddress(e.target.value)}
                />
                <br/>
                <TextField
                    id="standard-text-input"
                    label="Address"
                    type="text"
                    autoComplete="current-text"
                    onChange={(e:any):any => setRecieverAddress(e.target.value)}
                />
                {/* <br/>
                <TextField
                    id="standard-text-input"
                    label="text"
                    type="text"
                    autoComplete="current-text"
                /> */}
                <br/>
                <Grid container spacing={3} style={{marginTop: '30px'}}>
                    <Grid item lg={6} >
                        <MainBtnContainer className='btn btn-block'  onClick={handleOpenSender}>Back</MainBtnContainer>
                    </Grid>
                    <Grid item lg={6}>
                        <MainBtnContainer className='btn btn-block' onClick={handleOpenCargo}>Next</MainBtnContainer>
                    </Grid>
                </Grid>
            </RecieverComponents>
            {/* Cargo Details */}
            <CargoComponents status={cargoStatus}>
            <Typography variant="h4" component="h4">
                Others
            </Typography>
                <TextField
                    id="standard-text-input"
                    label="Cargo Name"
                    type="text"
                    autoComplete="current-text"
                    onChange={(event: any): any=> setCargoName(event.target.value)}
                />
                <br/>
                <TextField
                    id="standard-text-input"
                    label="Cargo Weight"
                    type="text"
                    autoComplete="current-text"
                    onChange={(e:any):any => setCargoWeight(e.target.value)}

                />
                <br/>
                <TextField
                    id="standard-text-input"
                    label="Cargo Type"
                    type="text"
                    autoComplete="current-text"
                    onChange={(e: any): any => setCargoType(e.target.value)}
                />
                <br/>
                {/* <TextField
                    id="standard-text-input"
                    label="Vehicle ID"
                    type="text"
                    autoComplete="current-text"
                />
                <br/> */}
                {/* <TextField
                    id="standard-text-input"
                    label="text"
                    type="text"
                    autoComplete="current-text"
                />
                <br/> */}
                <TextField
                    id="standard-select-currenc"
                    select
                    label="Vehicle ID"
                    value={currency}
                    onChange={handleChange}
                    helperText="Choose Vehicle ID"
                    >
                    {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                <Grid container spacing={3} style={{marginTop: '30px'}}>
                    <Grid item lg={6} >
                        <MainBtnContainer className='btn btn-block'  onClick={handleOpenReciever}>Back</MainBtnContainer>
                    </Grid>
                    <Grid item lg={6}>
                        <MainBtnContainer className='btn btn-block' onClick={handleSubmit}>Submit</MainBtnContainer>
                    </Grid>
                </Grid>
            </CargoComponents>
            <Backdrop className={classees.backdrop} open={open} onClick={handleLoaderClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </form>
    )
}

type Status ={
    status: boolean;
}

const SenderComponents = styled.div<Status>`
    display: ${(e) => e.status ? 'block' : 'none'};
`;

const RecieverComponents = styled.div<Status>`
    display: ${(e) => e.status ? 'block' : 'none'};
`;
const CargoComponents = styled.div<Status>`
    display: ${(e) => e.status ? 'block' : 'none'};
`;