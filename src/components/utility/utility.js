import { Box, Pagination, } from "@mui/material"
import { gridPageCountSelector, gridPageSelector, useGridApiContext, useGridSelector } from "@mui/x-data-grid"
import { SearchField } from "../UI/UI";

export const dataGridCellsx = {
    border: "#30AADD 1px solid",
    borderRadius: "4px"
}
export const datagridSx = {
    border: "none",
    marginTop: "0%",
    height: "35em",
    "& .MuiDataGrid-main": { borderRadius: 2 },
    "& .MuiDataGrid-virtualScrollerRenderZone": {
        "& .MuiDataGrid-row": {
            "&:nth-of-child(2n)": { backgroundColor: "rgba(235, 235, 235, .7)" }
        }
    },
    "& .MuiDataGrid-columnHeaders": {
        fontWeight: "bold",
        fontSize: 16
    }
};

export const filter = () => {
    return (
        <SearchField variant="outlined" type="text" color="secondary" size="small" placeholder="search Here"
            sx={{ float: "right", width: "auto", marginRight: "1%", }}
        />
    )
}
export const CustomPagination = () => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <>
            <p style={{ textAlign: "left", position: "absolute", fontSize: "16px" }}>Showing <b>{page + 1}</b> to <b>{pageCount}</b> of <b>5</b> entries </p>
            <Pagination
                color="primary"
                count={pageCount}
                page={page + 1}
                onChange={(event, value) => apiRef.current.setPage(value - 1)}
            />
        </>

    );
}
