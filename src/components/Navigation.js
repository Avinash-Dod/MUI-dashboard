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
import ForgotLoginPin from "../vendor/pages/login/Forgot"
import ForgotOtp from "../vendor/pages/login/forgotOtp"
import SetupLoginPin from "../vendor/pages/login/SetupLoginPin"
import ConfirmLoginPin from "../vendor/pages/login/ConfirmLoginPin"
import Branches from "../vendor/pages/login/Branches"
import SignUp from "../vendor/pages/login/SignUp"
import SignUpDetails from "../vendor/pages/login/SignUpDetails"
import SetupOtp from "../vendor/pages/login/SetupOtp"
import SignLoginPin from "../vendor/pages/login/SignLoginPin"
import ConfirmSignPin from "../vendor/pages/login/ConfirmSignPin"
import Processing from "../vendor/pages/login/processing"
import LoginPin from "../vendor/pages/login/LoginPin"

const Navigation = () => {
    return (
        <Routes >
            {/* Super admin Routes */}

            <Route path="/admin/login" element={<Login />} />
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
            <Route path="/vendor/loginpin" element={<LoginPin />} />
            <Route path="/vendor/forgot" element={<ForgotLoginPin />} />
            <Route path="/vendor/forgotOtp" element={<ForgotOtp />} />
            <Route path="/vendor/setuploginpin" element={<SetupLoginPin />} />
            <Route path="/vendor/confirmloginpin" element={<ConfirmLoginPin />} />
            <Route path="/vendor/branches" element={<Branches />} />

            {/* Vendor SignUp routes */}

            <Route path="/vendor/signup" element={<SignUp />} />
            <Route path="/vendor/setupotp" element={<SetupOtp />} />
            <Route path="/vendor/signupdetails" element={<SignUpDetails />} />
            <Route path="/vendor/signloginpin" element={<SignLoginPin />} />
            <Route path="/vendor/confirmsignpin" element={<ConfirmSignPin />} />
            <Route path="/vendor/processing" element={<Processing />} />

            {/* Customer Routes */}
        </Routes>
    )
}
export default Navigation