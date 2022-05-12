import { Route, Routes } from "react-router-dom"

import Customer from "../pages/Customer"
import Dashboard from "../pages/Dashboard"
import Vendor from "../pages/Vendor"
import AddVendor from "./AddVendor"

const Navigation = () => {
    return (
        <Routes >
            <Route path="/" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/vendor" element={<Vendor />} />
            <Route path="/addVendor" element={<AddVendor />} />



        </Routes>
    )
}
export default Navigation