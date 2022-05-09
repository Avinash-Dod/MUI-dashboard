import { Route, Routes } from "react-router-dom"
import Customer from "../pages/Customer"
import Dashboard from "../pages/Dashboard"
import Vendor from "../pages/Vendor"

const Navigation = () => {
    return (
        <Routes >
            <Route path="/" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/vendor" element={<Vendor />} />



        </Routes>
    )
}
export default Navigation