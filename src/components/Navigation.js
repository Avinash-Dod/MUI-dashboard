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
import GroupManagement from "../vendor/pages/GroupManagement"
import BranchManagement from "../vendor/pages/BranchManagement"
import UserManagement from "../vendor/pages/UserManagement"
import CouponManagement from "../vendor/pages/CouponManagement"
import GeneralOffer from "../vendor/pages/GeneralOffer"
import PrepaidCardOffer from "../vendor/pages/PrepaidCardOffer"
import LoyaltyOffer from "../vendor/pages/LoyaltyCardOffer"
import PrepaidCardManagement from "../vendor/pages/PrepaidCardManagement"
import MyPrepaidCard from "../vendor/pages/MyPrepaidCard"
import PrepaidAccess from "../vendor/pages/PrepaidAccess"
import LoyaltyCardManagement from "../vendor/pages/LoyaltyCardManagement"
import MyLoyaltyCard from "../vendor/pages/MyLoyaltyCard"
import LoyaltyAccess from "../vendor/pages/LoyaltyAccess"
import AboutUs from "../vendor/pages/About"
import Terms from "../vendor/pages/Terms"
import PrivacyPolicy from "../vendor/pages/PrivacyPolicy"
import Version from "../vendor/pages/Version"
import FAQ from "../vendor/pages/Faq"
import HowItWorks from "../vendor/pages/HowItWorks"

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
            <Route path="/vendor/groupmanagement" element={<GroupManagement />} />
            <Route path="/vendor/branchmanagement" element={<BranchManagement />} />
            <Route path="/vendor/usermanagement" element={<UserManagement />} />
            <Route path="/vendor/generaloffer" element={<GeneralOffer />} />
            <Route path="/vendor/prepaidcardoffer" element={<PrepaidCardOffer />} />
            <Route path="/vendor/loyaltycardoffer" element={<LoyaltyOffer />} />
            <Route path="/vendor/couponmanagement" element={<CouponManagement />} />
            <Route path="/vendor/prepaidcardmanagement" element={<PrepaidCardManagement />} />
            <Route path="/vendor/myprepaidcard" element={<MyPrepaidCard />} />
            <Route path="/vendor/prepaidaccess" element={<PrepaidAccess />} />
            <Route path="/vendor/loyaltycardmanagement" element={<LoyaltyCardManagement />} />
            <Route path="/vendor/myloyaltycard" element={<MyLoyaltyCard />} />
            <Route path="/vendor/loyaltyaccess" element={<LoyaltyAccess />} />
            <Route path="/vendor/about" element={<AboutUs />} />
            <Route path="/vendor/terms&conditions" element={<Terms />} />
            <Route path="/vendor/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/vendor/version" element={<Version />} />
            <Route path="/vendor/faq" element={<FAQ />} />
            <Route path="/vendor/howitwork" element={<HowItWorks />} />

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



