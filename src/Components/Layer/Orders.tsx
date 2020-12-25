import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id: number, date: string, name: string, shipTo: string, paymentMethod: string, recieverName: string) {
  return { id, date, name, shipTo, paymentMethod, recieverName };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Spencer Ayodele John', 'Tupelo, MS', 'VISA ⠀•••• 3719', 'Enietan Emmanuel'),
  createData(1, '16 Mar, 2019', 'Opeyemi Mofeoluwa Adeniran', 'London, UK', 'VISA ⠀•••• 2574', 'Ibrahim Olammy'),
  createData(2, '16 Mar, 2019', 'Ruth Ekwere', 'Boston, MA', 'MC ⠀•••• 1253', 'Ayoade Foluso Omowumi'),
  createData(3, '16 Mar, 2019', 'Oyeniyi Benson Orire', 'Gary, IN', 'AMEX ⠀•••• 2000', 'Joshua Adebayo'),
  createData(4, '15 Mar, 2019', 'Charles Durugo', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 'Joshua Adebayo'),
];

function preventDefault(event: { preventDefault: () => void; }) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Sender Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Reciever Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.recieverName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}