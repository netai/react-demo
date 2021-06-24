import './ProductList.css';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ProductList = () => {

    return (
        <div className="product-list">
            <div className="page-header">
                <h3 className="page-title">Student List</h3>
            </div>
            <div className="product-body">
                <div className="product-act-btn">
                    <Button variant="success" className="float-end" size="sm">Add Student</Button>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>DOB</th>
                            <th>Class</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Netai Nayek</td>
                            <td>netai</td>
                            <td>28/3/2021</td>
                            <td>12</td>
                            <td>9734463187</td>
                            <td>net.nayek@gmail.com</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ProductList;