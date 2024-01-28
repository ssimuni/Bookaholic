import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AddBuySell from './pages/userRoutes/AddBuySell';
import Privateroute from './components/Privateroute';
import ProfileInfo from './pages/userRoutes/ProfileInfo';
import UserProvider from './context/UserProvider';
import BuySellSection from './pages/userRoutes/BuySellSection';
import BorrowSection from './pages/userRoutes/BorrowSection';
import ExchangeSection from './pages/userRoutes/ExchangeSection';
import ExchangeForm from './pages/userRoutes/ExchangeForm';
import AddBorrow from './pages/userRoutes/AddBorrow';
import AddExchange from './pages/userRoutes/AddExchange';
import OrderPlaceForm from './pages/userRoutes/OrderPlaceForm';
import AllBuySellPost from './pages/userRoutes/AllBuySellPost';
import AllBorrowPost from './pages/userRoutes/AllBorrowPost';
import AllExchangePost from './pages/userRoutes/AllExchangePost';
import TransactionBuySell from './pages/userRoutes/TransactionBuySell';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<Privateroute />}>
            <Route path="addsell" element={<AddBuySell />} />
            <Route path="buysell" element={<BuySellSection />} />
            <Route path="borrow" element={<BorrowSection />} />
            <Route path="exchange" element={<ExchangeSection />} />
            <Route path="profile/:userId" element={<ProfileInfo />} />
            <Route path="exchange-form" element={<ExchangeForm />} />
            <Route path="addborrow" element={<AddBorrow />} />
            <Route path="addexchange" element={<AddExchange />} />
            <Route path="orderplace" element={<OrderPlaceForm />} />
            <Route path="all-buy-sell-post" element={<AllBuySellPost />} />
            <Route path="all-borrow-post" element={<AllBorrowPost />} />
            <Route path="all-exchange-post" element={<AllExchangePost />} />
            <Route path="transaction-buy-sell" element={<TransactionBuySell />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
