import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.jsx";
import AddStaffDetails from "./components/AddStaffDetails/AddStaffDetails.jsx";
import CreateCommitteeForm from "./components/CreateCommitteeForm/CreateCommitteeForm.jsx";
import AcademicYearSelection from "./components/MiniComponents/AcademicYearSelection/AcademicYearSelection.jsx";

const com = true;

function App() {
  return (
    <div>
      <Header />
      {com ? (
        <>
          <AcademicYearSelection />
          <CreateCommitteeForm />
        </>
      ) : (
        <AddStaffDetails />
      )}
    </div>
  );
}


export default App;
