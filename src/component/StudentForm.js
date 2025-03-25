import { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import StudentTable from "./StudentTable";
import {
  deleteStudent,
  fillStudent,
  getStudentsList,
  updateStudent,
} from "../services/service";
import axios from "axios";

const StudentForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    roll: "",
    mobile: "",
    degree: "",
    year: "",
  });
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  // const [editIndex, setEditIndex] = useState(null);
  const [editId, setEditId] = useState(null);
  const [search,setSearch] = useState("")

  const getStudent = async () => {
    const res = await getStudentsList() ;
    setData(res.data);
  };
  
  useEffect(() => {
    getStudent();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (editIndex !== null) {
    //   const updatedData = [...data];
    //   updatedData[editIndex] = form;
    //   setData(updatedData);
    //   setEditIndex(null);

    if (editId !== null) {
      try {
        const res = await updateStudent(editId, form);
        alert(res.data.message);
        setEditId(null);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await fillStudent(form);
        const result = res.data;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      // setData((arr) => [...arr, form]);
    }
    getStudent();
    setForm({
      name: "",
      email: "",
      roll: "",
      mobile: "",
      degree: "",
      year: "",
    });
  };

  const handleDelete = async (id) => {
    const res = await deleteStudent(id);
    alert(res.data.message);
    getStudent();
    // const newItems = data.filter((_, i) => i !== index);
    // setData(newItems);
    setForm({
      name: "",
      email: "",
      roll: "",
      mobile: "",
      degree: "",
      year: "",
    });
    setEditId(null);
    // setEditIndex(null)
  };

  const handleEdit = (student) => {
    setForm(student);
    setEditId(student._id);
    // setForm(data[index]);
    // setEditIndex(index);
  };

  const handleRest = () => {
    setForm({
      name: "",
      email: "",
      roll: "",
      mobile: "",
      degree: "",
      year: "",
    });
    setEditId(null);
    // setEditIndex(null)
  };


  const filterData = useMemo(() => {
    return data.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);  
  
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={4}>
          <Form className="my-4" onSubmit={handleSubmit}>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Roll No</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Roll No"
                name="roll"
                value={form.roll}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mobile"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Degree</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Degree"
                name="degree"
                value={form.degree}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formGridPassword">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Year"
                name="year"
                value={form.year}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" className="mt-4" type="submit">
              {editId !== null ? "Update" : "Submit"}
            </Button>
            {"   "}
            <Button
              variant="secondary"
              className="mt-4"
              type="reset"
              onClick={handleRest}
            >
              Reset
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="align-right">
        <Col md="4">
        <Form.Group controlId="formGridSearch">
              <Form.Control
                type="text"
                placeholder="Search"
                name="year"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                required
              />
            </Form.Group>
        </Col>
      </Row>
      {/* Table component */}
      <StudentTable
        items={filterData}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        post={post}
      />
    </Container>
  );
};

export default StudentForm;
