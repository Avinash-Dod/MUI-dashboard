import { Route, Routes } from "react-router-dom"
import Customer from "../pages/Customer"
import Dashboard from "../pages/Dashboard"

const Navigation = () => {
    return (
        <Routes >
            <Route path="/" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />



        </Routes>
    )
}
export default Navigation