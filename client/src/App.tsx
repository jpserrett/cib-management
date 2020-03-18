import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './components/User';
import { UserInfo } from './interfaces';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/FormCheck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import './App.scss';
import TestForm from './components/Form';

function App() {
    /**
     * Set up state for user info
     */
    const [user, setUser] = useState<UserInfo>(
        {
            name: '',
            email: '',
            role: '',
        },
    );

    /**
     * React hook to perform methods on update.
     */
    useEffect(() => {
        /**
         * Use axios to fetch user data from server
         */
        const getUser = async () => {
            try {
                const response = await axios.get('/users/2');
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getUser();
    }, []);

    return (
        <div className="app">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">CIB-Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <div className="main">
                <Image src="/sunrise.jpg" fluid />
                <Jumbotron>
                    <User {...user} />
                    <hr></hr> 

                    <TestForm />
                </Jumbotron>
            </div>

            <div className="footer">
                <Navbar>
                    <Navbar.Text>
                        Copyright disclaimers, etc. to point somewhere
                    </Navbar.Text>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Jane Doe</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </div>
    );
}

export default App;
