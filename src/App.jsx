import React from 'react';
import './global.css';
import Homepage from './components/Student/Homepage';
// import Dashboard from './components/Dashboard';
import Announcement from './components/Student/announcement';
import Projects from './components/Student/Projects';
import Account from './components/Student/Account';
import Certifications from './components/Student/Certifications';
import InternalMarks from './components/Student/InternalMarks';
import Attendance from './components/Student/Attendance';
import ProfilePage from './components/Student/ProfilePage';
import HomePageforP from './components/Professor & Proctor/HomePageforP';
import ProfilePageP from './components/Professor & Proctor/ProfilePageP';
import AnnouncementP from './components/Professor & Proctor/AnnouncementP';
import AttendanceP from './components/Professor & Proctor/AttendanceP';
import InternalMarksP from './components/Professor & Proctor/InternalMarksP';
import AdminHome from './components/Admin/AdminHome';
  
function App() {  
  return (  
   <div className="App"> 
   {/* <Dashboard/> */}
   {/* <Homepage/> */}
   {/* <ProfilePage/> */}
   {/* <Account/> */}
   {/* <InternalMarks/> */}
   {/* <Attendance/> */}
   {/* <Certifications/> */}
   {/* <Announcement/> */}
   {/* <Projects/> */}


   {/* Proctors and Professors */}
   {/* <HomePageforP/> */}
   {/* <AnnouncementP/> */}
   {/* <AttendanceP /> */}
   {/* <ProfilePageP/> */}
   {/* <InternalMarksP/> */}
   <AdminHome/>
   </div>  
  );  
}  
  
export default App;
