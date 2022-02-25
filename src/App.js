
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AddBooks from './Pages/AddBooks/AddBooks';


import AllQuestions from './Pages/AllQuestions/AllQuestions';

import AskQuestions from './Pages/AskQuestions/AskQuestions';

import Contact from './Pages/Contact/Contact';
import AddDepertments from './Pages/Dashboard/AddDepertMents/AddDepertments';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardWelcome from './Pages/Dashboard/DashboardWelcome/DashboardWelcome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageQuestion from './Pages/Dashboard/ManageQuestions/ManageQuestion';
import MyQuestions from './Pages/Dashboard/MyQuestions/MyQuestions';
import PendingQuestions from './Pages/Dashboard/PendingQuestions/PendingQuestions';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import FindBooks from './Pages/FindBooks/FindBooks';
import FindQuestions from './Pages/FindQuestions/FindQuestions';
import Forum from './Pages/Forum/Forum';
import Home from './Pages/Home/Home/Home';
import ManageBooks from './Pages/ManageBooks/ManageBooks';
import MyBooks from './Pages/MyBooks/MyBooks';
import PendingBooks from './Pages/PendingBooks/PendingBooks';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';





/* import Header from "./pages/Shared/Header/Header";
 import Home from "./pages/home/Home/Home";
 import AllQuestions from "./pages/AllQuestions/AllQuestions"; 
import FindQuestions from "./pages/FindQuestions/FindQuestions";
import Forum from "./pages/Forum/Forum";
import AskQuestions from "./pages/AskQuestions/AskQuestions"; 
 import Dashboard from "./pages/Dashboard/Dashboard/Dashboard"
import DashboardWelcome from "./pages/Dashboard/DashboardWelcome/DashboardWelcome"; 
import MyQuestions from "./pages/Dashboard/MyQuestions/MyQuestions";
import PendingQuestions from "./pages/Dashboard/PendingQuestions/PendingQuestions";
import AddDepertments from "./pages/Dashboard/AddDepertMents/AddDepertments";
import ManageQuestion from "./pages/Dashboard/ManageQuestions/ManageQuestion";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./pages/Shared/Footer/Footer";
import MyNotes from "./pages/MyNotes/MyNotes";
import AddNotes from "./pages/AddNotes/AddNotes";
import PendingNotes from "./pages/PandingNodes/PandingNodes";
import FindNotes from './pages/FindNotes/FindNotes'; */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/allQuestions" element={<AllQuestions />} />


          <Route path='/find-questions' element={<FindQuestions />} />
          <Route path='/find-books' element={<FindBooks />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/ask-questions' element={<AskQuestions />} />
          <Route path='/add-books' element={<AddBooks />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path='/dashboard' element={<DashboardWelcome />} />
            <Route path='/dashboard/welcome' element={<DashboardWelcome />} />
            <Route path='/dashboard/my-questions' element={<MyQuestions />} />
            <Route path='/dashboard/pending-questions' element={<PendingQuestions />} />

            <Route path='/dashboard/my-books' element={<MyBooks />} />
            <Route path='/dashboard/pending-books' element={<PendingBooks />} />
            <Route path='/dashboard/add-depertments' element={<AddDepertments />} />

            <Route path='/dashboard/manage-questions' element={<ManageQuestion />} />
            <Route path='/dashboard/manage-questions' element={<ManageBooks />} />
            <Route path='/dashboard/make-admin' element={<MakeAdmin />} /> </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />

          <Route path="/find-questions" element={<FindQuestions />} />


          <Route path="/forum" element={<Forum />} />
          <Route path="/ask-questions" element={<AskQuestions />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<DashboardWelcome />} />
            <Route path="/dashboard/welcome" element={<DashboardWelcome />} />
            <Route path="/dashboard/my-questions" element={<MyQuestions />} />


            <Route
              path="/dashboard/pending-questions"
              element={<PendingQuestions />}
            />

            <Route
              path="/dashboard/add-depertments"
              element={<AddDepertments />}
            />
            <Route
              path="/dashboard/manage-questions"
              element={<ManageQuestion />}
            />
            <Route path="/dashboard/make-admin" element={<MakeAdmin />} />{" "}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<ErrorPage />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
