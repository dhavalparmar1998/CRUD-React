import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import './Home.css'

export default function Showuser() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setApi(users);
    };
    fetchUsers();
  }, []);

  const deleteData = async (id) => {
    await deleteDoc(doc(db, "users", id));
    setApi(prevApi => prevApi.filter(user => user.id !== id));
  };

  return (
    <Container fluid className="my-4">
      <h1 className="text-center mb-4" style={{ color: '#343a40', fontWeight: 'bold' }}>User Data</h1>
      <Card className="shadow-sm">
        <Card.Body>
          <Table striped bordered hover responsive className="table-container">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {api && api.length > 0 && api.map(({ name, email, mobile, id }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{mobile}</td>
                  <td>{email}</td>
                  <td>
                    <Link to={`/edit-user/${id}`} className="btn btn-primary btn-sm mx-1 mt-1">
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteData(id)}
                      className="mx-1 mt-1"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <p className="text-center mt-4">
        <Link to={`/login`} className="home-link" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      </p>
    </Container>
  );
}
