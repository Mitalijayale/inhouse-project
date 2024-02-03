import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header.jsx";
import AddStaffDetails from "./components/AddStaffDetails/AddStaffDetails.jsx";
import CreateCommitteeForm from "./components/CreateCommitteeForm/CreateCommitteeForm.jsx";
import AcademicYearSelection from "./components/MiniComponents/AcademicYearSelection/AcademicYearSelection.jsx";

function App() {
  return (
    <div>
      <Header />
        <BrowserRouter>
          <Routes>

            <Route path="/addstaff" element={
              <AddStaffDetails />
            }/>

            <Route path="/createcommittee" element={
              <>
              <AcademicYearSelection />
              <h2 className="headText">Create new committee</h2>
              <CreateCommitteeForm />
              </>
            }/>

            <Route path="/addnewacademicyear" element={
              <AcademicYearSelection />
            }/>

            <Route path="/editcommittee" element={
              <CreateCommitteeForm />
            }/>

          </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
