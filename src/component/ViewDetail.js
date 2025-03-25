import React from 'react'
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ViewDetail = ({show,onClose,data}) => {
  return (
    <Modal
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    show={show}
    onHide={onClose}
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Student Info
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Table hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Roll No</th>
                <th>Mobile No</th>
                <th>Degree</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.roll}</td>
            <td>{data.mobile}</td>
            <td>{data.degree}</td>
            <td>{data.year}</td>
            </tr>

        </tbody>
      </Table>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onClose}>Close</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ViewDetail




