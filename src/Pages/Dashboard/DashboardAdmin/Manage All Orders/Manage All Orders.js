import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../../hooks/useAuth';
import Footer from '../../../Shared/Footer/Footer';
import { Spinner } from 'react-bootstrap';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [allOrders,setAllOrders] = useState([])
    const {loading} = useAuth();

    // Showing all user's order on UI

        useEffect(() =>{
            fetch('https://shielded-beyond-24603.herokuapp.com/usersinfo')
            .then(res => res.json())
            .then(data => setAllOrders(data));
        },[]);

        // Deleting orders

        const handleDeleteOrder = id =>{
            const proceed = window.confirm("Do you want to delete the order?");

            if(proceed){
                const url = `https://shielded-beyond-24603.herokuapp.com/usersinfo/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0){
                    alert('item deleted')
            const remainingItems = allOrders.filter(order => order._id !== id);
            setAllOrders(remainingItems);
                }
            });
            }
        }
        if(loading){return <Spinner animation="border" variant="primary" />}
    return (
        <div>
            <h2>Manage</h2>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Orders">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Present Address</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Ordered Cars</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
                {allOrders.map((row) => (
            <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {row.customerName}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.carName}</TableCell>
                <TableCell align="right">
                    <button onClick={() => handleDeleteOrder(row._id)} className="btn         btn-primary">Delete Order</button></TableCell>
            </TableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>
            <div className="cc">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ManageAllOrders;