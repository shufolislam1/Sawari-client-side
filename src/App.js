import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home/Home";
import Service from "./components/Home/Service/Service";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import Blog from "./components/Blog/Blog";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import StockDetails from "./components/StockDetails/StockDetails";
import MyItems from "./components/MyItems/MyItems";
import AddItems from "./components/AddItems/AddItems";
import ManageItems from "./components/ManageItems/ManageItems";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/additems" element={<AddItems></AddItems>}></Route>
        <Route path="/manageitems" element={<ManageItems></ManageItems>}></Route>
        <Route
          path="/service/:stockId"
          element={
            <RequireAuth>
              <StockDetails></StockDetails>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
