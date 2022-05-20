import { Route, Routes } from "react-router-dom"
import ActiveCustomer from "../pages/Customer/ActiveCustomer"
import Customer from "../pages/Customer/Customer"

import Dashboard from "../pages/Dashboard"



import Profile from "../pages/Profile"
import ActiveVendor from "../pages/Vendor/ActiveVendor"
import Vendor from "../pages/Vendor/Vendor"
import VendorDashboard from "../pages/Vendor/VendorDashboard"
import Login from "./Login"

const Navigation = () => {
    return (
        <Routes >
            {/* Super admin Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/vendor" element={<Vendor />} />
            <Route path="/activeVendor" element={<ActiveVendor />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/activeCustomer" element={<ActiveCustomer />} />
            <Route path="/profile" element={<Profile />} />
            {/* Vendor Routes */}
            <Route path="/vendor/dashboard" element={<VendorDashboard />} />




        </Routes>
    )
}
export default Navigation