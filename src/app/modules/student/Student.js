import './Student.css';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Student extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="app-student">
                <div className="page-header">
                    <h3 className="page-title">Student List</h3>
                </div>
                <div className="student-body">
                    <div className="student-act-btn">
                        <Button variant="success" className="float-end" size="sm">Add Student</Button>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>
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
                            <tr>
                                <td>1</td>
                                <td>Netai Nayek</td>
                                <td>netai</td>
                                <td>28/3/2021</td>
                                <td>12</td>
                                <td>9734463187</td>
                                <td>net.nayek@gmail.com</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Netai Nayek</td>
                                <td>netai</td>
                                <td>28/3/2021</td>
                                <td>12</td>
                                <td>9734463187</td>
                                <td>net.nayek@gmail.com</td>
                            </tr>
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
}

export default Student;