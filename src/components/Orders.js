import React from 'react'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import Moment from 'react-moment';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders( {list}) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Carteira</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ação</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Corretora</TableCell>
            <TableCell>Data de Aplicação</TableCell>
            <TableCell>Valor Aplicado</TableCell>
            <TableCell>Saldo</TableCell>
            <TableCell>Rentabilidade</TableCell>
            <TableCell>Porcentagem da Carteira</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((list) => (
            <TableRow key={list.investimentCode}>
              <TableCell>{list.investimentCode}</TableCell>
              <TableCell>{list.amount}</TableCell>
              <TableCell>{list.type}</TableCell>
              <TableCell>{list.broker}</TableCell>
              <TableCell> <Moment format="DD/MM/YYYY">{list.firstDateApplication}</Moment></TableCell>
              <TableCell> 
                <CurrencyTextField
                  value={list.appliedAmount}
                  currencySymbol="R$"
                  decimalCharacter=","
                  digitGroupSeparator="."
                  disabled
                />
              </TableCell>
              <TableCell>
              <CurrencyTextField
                  value={list.balance}
                  currencySymbol="R$"
                  decimalCharacter=","
                  digitGroupSeparator="."
                  disabled
                />
              </TableCell>
              <TableCell>
              <CurrencyTextField
                  value={list.rentail}
                  currencySymbol="R$"
                  decimalCharacter=","
                  digitGroupSeparator="."
                  disabled
                />
              </TableCell>
              <TableCell>
              {list.portfolioShare} %
              </TableCell>
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