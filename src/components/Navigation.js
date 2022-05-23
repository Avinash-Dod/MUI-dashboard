import { Route, Routes } from "react-router-dom"
import ActiveCustomer from "../admin/pages/customer/ActiveCustomer"
import Customer from "../admin/pages/customer/Customer"
import Dashboard from "../admin/pages/Dashboard"
import Profile from "../admin/pages/Profile"
import ActiveVendor from "../admin/pages/vendor/ActiveVendor"
import Vendor from "../admin/pages/vendor/Vendor"
import VendorProfile from "../vendor/pages/VendorProfile"
import VendorDashboard from "../vendor/pages/VendorDashboard"

import VendorLogin from "../vendor/pages/login/VendorLogin"
import Login from "../admin/pages/Login"
import OtpLogin from "../vendor/pages/login/OtpLogin"
    
const Navigation = () => {
    return (
        <Routes >
            {/* Super admin Routes */}
            <Route path="/" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/vendor" element={<Vendor />} />
            <Route path="/admin/activeVendor" element={<ActiveVendor />} />
            <Route path="/admin/customer" element={<Customer />} />
            <Route path="/admin/activeCustomer" element={<ActiveCustomer />} />
            <Route path="/admin/profile" element={<Profile />} />

            {/* Vendor Routes */}
            
            <Route path="/vendor/dashboard" element={<VendorDashboard />} />
            <Route path="/vendor/profile" element={<VendorProfile />} />
            {/* Vendor Login routes */}
            <Route path="/vendor/vLogin" element={<VendorLogin />} />
            <Route path="/vendor/otp" element={<OtpLogin />} />


            {/* Customer Routes */}
        </Routes>
    )
}
export default Navigation