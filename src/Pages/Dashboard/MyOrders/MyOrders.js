import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([])

    useEffect(() =>{
        const url = `https://shielded-beyond-24603.herokuapp.com/usersinfo?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
    return (
        <div>
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Orderstable">
            <TableHead>
                <TableRow>
                    {/* User's Info */}
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Ordered Cars</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Present Address</TableCell>
                    <TableCell align="right">Phone Number</TableCell>
                </TableRow>
            </TableHead>
        <TableBody>
            {orders.map((row) => (
            <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.customerName}
                </TableCell>
                {/* The car that user ordered */}
                <TableCell align="right">{row.carName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.customerAddress}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrders;