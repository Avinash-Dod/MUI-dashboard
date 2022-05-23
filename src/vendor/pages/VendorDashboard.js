import { ArrowRightAlt } from "@mui/icons-material"
import { Box, Grid, Stack } from "@mui/material"
import { NavLink } from "react-router-dom"
import Coupon from '../../assets/coupons.png'
import SupportIcon from '../../assets/support.png'
import GroupManage from '../../assets/group-managment.png'
import OfferManage from '../../assets/offer-managment.png'
import BranchManage from '../../assets/branch-managment.png'
import AccountManage from '../../assets/account-managment.png'
import ProfileManage from '../../assets/profile-managment.png'
import PrepaidCard from '../../assets/prepaid-card-managment.png'
import LoyaltyPoint from '../../assets/loyalty-point-managment.png'
import { VendorHeader } from "../components/VendorHeader"
import VendorSidebar from "../Sidebar/VendorSidebar"
import { CardButton, PageContainer, PageText, VendorCard, VendorCardContent, VendorCardHead, VendorIcon } from "../../components/UI/UI"



const VendorDashboard = () => {
    const Vendor = [
        {
            Name: "Profile Management",
            src: ProfileManage,
            href: "/vendor/profile"
        },
        {
            Name: "Account Management",
            src: AccountManage,
            href: "/vendor/profile"
        },
        {
            Name: "Group Management",
            src: GroupManage,
            href: "/vendor/profile"
        },
        {
            Name: "Branch Management",
            src: BranchManage,
            href: "/vendor/profile"
        },
        {
            Name: "User Management",
            src: ProfileManage,
            href: "/vendor/profile"
        },
        {
            Name: "Offer Management",
            src: OfferManage,
            href: "/vendor/profile"
        },
        {
            Name: "Coupon Management",
            src: Coupon,
            href: "/vendor/profile"
        },
        {
            Name: "Prepaid Card Management",
            src: PrepaidCard,
            href: "/vendor/profile"
        },

        {
            Name: "Loyalty Point Management",
            src: LoyaltyPoint,
            href: "/vendor/profile"
        },
        {
            Name: "Support",
            src: SupportIcon,
            href: "/vendor/profile"
        },

    ]

    return (
        <Box>
            <VendorHeader />
            <Stack direction="row" spacing={1} justifyContent="start" flexDirection="row" >
                <VendorSidebar />
                <PageContainer maxWidth='70%' >
                    <PageText name="Dashboard" variant="h5" mt="35px"
                        component="div"
                        color="#30AADD"
                        display="flex"
                        width="100%" />

                    <Grid container spacing={3}  >
                        {Vendor.map((Item, index) => (
                            <Grid item xs={6} md={4} xl={3} key={index}>
                                <VendorCard >
                                    <VendorIcon >
                                        <img src={Item.src} alt={Item.Name} style={{ width: "32px", height: "32px", margin: "auto", textAlign: "center" }} />
                                    </VendorIcon>
                                    <VendorCardContent >
                                        <VendorCardHead >
                                            {Item.Name}
                                        </VendorCardHead>
                                    </VendorCardContent>
                                    <VendorCardContent>
                                        <NavLink to={Item.href} style={{ textDecoration: "none" }} className="active" >
                                            <CardButton variant="contained" name="View" endIcon={<ArrowRightAlt />} />
                                        </NavLink>
                                    </VendorCardContent>
                                </VendorCard>
                            </Grid>
                        ))}

                    </Grid>

                </PageContainer>

            </Stack>

        </Box>
    )
}
export default VendorDashboard