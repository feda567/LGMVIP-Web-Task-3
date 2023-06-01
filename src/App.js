import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const StyledStudentDetails = styled.div`
  margin-top: 120px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height:370px;
  margin-right:20px;
  img{
    height:100px;
  }
  h3{
    color:rgb(25, 59, 153)
  }

`;

const StudentDetails = ({ student }) => {
  const { name, email, website, image, gender, skills } = student;

  return (
    <StyledStudentDetails>
      <h3>STUDENT DETAILS</h3>
      <div>
        {image && <img src={URL.createObjectURL(image)} alt="Student" />}
      </div>
      <div>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Skills:</strong> {skills.join(', ')}</p>
      </div>
    </StyledStudentDetails>
  );
};

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const handleEnrollStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      email,
      website,
      image,
      gender,
      skills
    };

    setEnrolledStudents([...enrolledStudents, newStudent]);
    clearForm();
  };

  const handleClearForm = () => {
    setName('');
    setEmail('');
    setWebsite('');
    setImage(null);
    setGender('');
    setSkills([]);
  };

  const clearForm = () => {
    handleClearForm();
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEnrollStudent}>
        <header>
        <h1 className='form-head'>STUDENT ENROLLMENT FORM</h1>
        </header>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/><br/>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          className="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        /><br/><br/>
        <label htmlFor="image">Image Link</label>
        <input
          type="file"
          className="image"
          onChange={(e) => setImage(e.target.files[0])}
        /><br/><br/>
        <span>Gender:</span>
        <label htmlFor="gender" className='male'>Male</label>
        <input
          type="radio"
          className="male"
          name="gender"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="gender" className='female'>Female</label>
        <input
          type="radio"
          className="female"
          name="gender"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
        /><br/><br/>
        <label htmlFor="skill">Skills</label>
        <input
          type="checkbox"
          className="skills"
          value="Java"
          onChange={(e) => {
            const javaChecked = e.target.checked;
            setSkills(prevSkills => {
              if (javaChecked) {
                return [...prevSkills, 'Java'];
              } else {
                return prevSkills.filter(skill => skill !== 'Java');
              }
            });
          }}
        />Java
        <input
          type="checkbox"
          className="skills"
          value="Html"
          onChange={(e) => {
            const htmlChecked = e.target.checked;
            setSkills(prevSkills => {
              if (htmlChecked) {
                return [...prevSkills, 'Html'];
              } else {
                return prevSkills.filter(skill => skill !== 'Html');
              }
            });
          }}
        />Html
        <input
          type="checkbox"
          className="skills"
          value="CSS"
          onChange={(e) => {
            const cssChecked = e.target.checked;
            setSkills(prevSkills => {
              if (cssChecked) {
                return [...prevSkills, 'CSS'];
              } else {
                return prevSkills.filter(skill => skill !== 'CSS');
              }
            });
          }}
        />CSS<br/><br/>
       <button type="submit" className='student'>Enroll Student</button>
        <button type="button" className='clear' onClick={handleClearForm}>Clear</button><br/><br/>
      </form>
      <div class="vl"></div>

      {enrolledStudents.map((student, index) => (
        <div key={index}>
          <StudentDetails student={student} />
        </div>
      ))}
    </div>
  );
}
export default App;