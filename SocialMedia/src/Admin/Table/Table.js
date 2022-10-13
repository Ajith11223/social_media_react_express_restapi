import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', "Approved", 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Eclair', 262, 16.0, 24, 6.0),
  
];

const makeStyles = (status) => {
  if(status === "Approved"){
    return{
        background:'#E3F6DD',
        color:"green"
    }
  }else if(status === "Pending"){
    return{
        background:'#dde5f6',
        color:"red"
    }
  }else{
    return{
        background:'#8b8f3d',
        color:"white"
    }
  }
}

export default function BasicTable() {
   
  return (
    <div className="Table">
    <h2>Recent</h2>

    <TableContainer component={Paper} style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Report</TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein} 
              {/* <span className='status' style={makeStyles(row.status)}>{row.status}</span> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
