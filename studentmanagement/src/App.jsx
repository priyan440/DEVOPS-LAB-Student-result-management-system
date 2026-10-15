import {useState} from 'react';
function studentsapp(){
  const[studentid,setstudentid]=useState([]);
  const[studentname,setstudentsname]=useState('');
  const[studentmarks,setstudentsmarks]=useState('');
  const[editid,seteditid]=useState(null);

  const createmark=()=>{
    if(studentid=''||studentname==''||studentmarks==''){
      alert('Enter all details');
      return;
    }
    if(studentsapp.some((marks)=>{
      if(marks.id==id){
        alert('ID already exits');
        return;
      }
     setstudentid('')
     setstudentsname('')
     setstudentsmarks(null)
    }));

  }
  const editmarks = () =>{
    if(editid==null){
      setstudentid(marks.id);
      setstudentsname(marks.name);
      setstudentsmarks(marks.marks);
    }
  }

  
return(
<div>
  <h1>student result Management</h1>
  <label>student id</label>
  <input >
  type="number",
  placeholder="Enter id",
  value={id},
  onChange=(e)=
  {
    setstudentid(e.target.value)
}
  </input>
  <br></br>
  <label>student name</label>
  <input >
  type="text",
  placeholder="Enter name",
  value={studentname}
  onChange=(e)={
    setstudentsname(e.target.value)
  }
   </input>
   <label>Student marks</label>
   <input >
   type="number",
   placeholder= "Enter marks",
   value={studentmarks}
   onchange=(e){
    setstudentsmarks(e.target.value)
   }
   </input>
   
</div>

)
}
export default studentsapp;