import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import { MAINURL } from '../../Assets/Data';
import axios from 'axios';
import moment from 'moment';

// Generate Order Data

  




const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function  Orders() {
  const [rows, setRows] = useState<any>([]);
  
  function preventDefault(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }
  const datarow = rows.map((row: any, i: number) => (
        <div className="card text-left" style={{marginBottom: '10px'}}>  
          <div className="card-body">
            <h4 className="card-title">{row.cargoID}</h4>
            <div className="row">
              <div className="col-md-6">SenderName: {row.senderName}</div>
              <div className="col-md-6">RecieverName: {row.recieverName}</div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-6">SenderName: {row.senderName}</div>
              <div className="col-md-6">created: {moment(row.createdAt).startOf('hour').fromNow()}</div>
            </div>
          </div>
        </div>
      ))
  const classes = useStyles();
  useEffect(() => {
    getTransactions();
  }, [])
  const getTransactions = async () => {
    try {
      const res = await axios.get(`${MAINURL}/transactions`);
      console.log(res.data.data)
      setRows(res.data.data)
    } catch (err) {
      console.log({Error: err})
   }
  }
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      {datarow}
    </React.Fragment>
  );
}