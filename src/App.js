import './App.css';
import UsersPage from "./pages/UsersPage";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/hoc/Layout";
import UserDetailPage from "./pages/UserDetailPage";


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<UsersPage />}/>
            <Route path=":id" element={<UserDetailPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
