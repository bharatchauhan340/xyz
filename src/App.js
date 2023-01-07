import logo from './logo.svg';
import './App.css';
import Attendance from './Attendance';
import Counter from './counter';
import Tablee from './table';

function App() {

  let studentData = [];
  let cnt=0;

function changeCount(cntr){
  cnt=cntr;
}
function responsive(data)
{
    studentData=[...studentData,data];
    console.log(studentData);
}

function fun() {
  return studentData.length;
}

function temp(event) {
  if(studentData.some(p => p.namee === event.namee)){
    const date=Date().toLocaleString().substring(16).substring(0,5);
    alert("Student Check-out Successfully at  " + date );
    changeCount(cnt-1);

    studentData = studentData.filter(val => !(val.namee === event.namee && val.rollno === event.rollno));
} 
 else {
  alert(" No Such Record Found !!");
 }
}
  return (
    <div className="App">
      <Attendance changeCount={changeCount} cntr={cnt} temp={temp} func={responsive}/>
      <Counter cntr={cnt} arr={studentData} fun ={fun}/>
      {studentData.map(dtx=>{
        return <Tablee content={dtx}/>
       })}
    </div>
  );
}

export default App;
