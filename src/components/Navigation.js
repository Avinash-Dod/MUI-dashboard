import { Route, Routes } from "react-router-dom"
import ActiveCustomer from "../pages/Customer/ActiveCustomer"
import Customer from "../pages/Customer/Customer"

import Dashboard from "../pages/Dashboard"



import Profile from "../pages/Profile"
import ActiveVendor from "../pages/Vendor/ActiveVendor"
import Vendor from "../pages/Vendor/Vendor"
import Login from "./Login"

const Navigation = () => {
    return (
        <Routes >
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />


            <Route path="/customer" element={<Customer />} />
            <Route path="/activeCustomer" element={<ActiveCustomer />} />
            <Route path="/vendor" element={<Vendor />} />
            <Route path="/activeVendor" element={<ActiveVendor />} />
            
            <Route path="/profile" element={<Profile />} />



        </Routes>
    )
}
export default Navigation