import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ViewDetail from "./ViewDetail";

const StudentTable = ({ items, handleDelete, handleEdit, post }) => {
  const [show, setShow] = useState(false);
  const [view, setView] = useState({});

  const handleView = (student) => {
    setShow(true);
    setView(student);
  };
  return (
    <>
      <Table  bordered striped responsive> 
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Mobile Number</th>
            <th>Degree</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? items.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.roll}</td>
              <td>{student.mobile}</td>
              <td>{student.degree}</td>
              <td>{student.year}</td>
              <td>
                <Button variant="info" className="me-3" onClick={()=>handleView(student)}>View</Button>
                <Button variant="warning" className="me-3" onClick={()=> handleEdit(student)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(student._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          )):
          <tr>
            <td colSpan={8} className="text-center">No Data found</td>
            </tr>
        }
        </tbody>
      </Table>
      <ViewDetail 
        show={show} 
        onClose={() => setShow(false)} 
        data={view} 
        />
    </>
  );
};

export default StudentTable;


