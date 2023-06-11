import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const StyledStudentDetails = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width:370px;
  margin-left:700px;
  margin-top:0px;
  img{
    height:150px;
    width:370px;
  }
  h3{
    color:rgb(25, 59, 153)
  }
  justify-content:flex-start;
  position:relative;
  top:-469px;
  left: 40px;
`;
const StyledStudentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;


const StudentDetails = ({ student}) => {
  const { name, email, website, image, gender, skills } = student;

  return (
    <StyledStudentDetails>
      <h3 style={{textAlign:"center"}}>STUDENT DETAILS</h3>
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
      <header style={{width:1600,height:50,textAlign:'center'}}>
        <h1>STUDENT ENROLLMENT FORM</h1>
        </header>
        <div>
      <form onSubmit={handleEnrollStudent} className='enrollForm'>
        <label htmlFor="name" className='enrollDetail'>Name</label>
        <input
          type="text"
          className="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br/><br/>
        <label htmlFor="email" className='enrollDetail'>Email</label>
        <input
          type="email"
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/><br/>
        <label htmlFor="website" className='enrollDetail'>Website</label>
        <input
          type="text"
          className="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        /><br/><br/>
        <label htmlFor="image" className='enrollDetail'>Image Link</label>
        <input
          type="file"
          className="image"
          onChange={(e) => setImage(e.target.files[0])}
        /><br/><br/>
        <span className='enrollDetail'>Gender:</span>
        <label htmlFor="gender" className='male'>Male</label>
        <input
          type="radio"
          className="male"
          name="gender"
          value="Male"
          checked={gender === 'Male'}
          onChange={(e) => setGender(e.target.value)}
        />
        <label htmlFor="gender" className='female'>Female</label>
        <input
          type="radio"
          className="female"
          name="gender"
          value="Female"
          checked={gender === 'Female'}
          onChange={(e) => setGender(e.target.value)}
        /><br/><br/>
        <label htmlFor="skill" className='enrollDetail'>Skills</label>
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
      
      <StyledStudentContainer>
      {enrolledStudents.map((student, index) => (
        <div key={index}>
          <StudentDetails student={student} />
        </div>
      ))}
      </StyledStudentContainer>
    </div>
    </div>
  );
}
export default App;