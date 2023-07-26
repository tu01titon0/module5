import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import axios from "axios";
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(title, price, description) {
    return { title, price, description};
}



export default function StickyHeadTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const rows = props.rows
    const navigate = useNavigate();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const DeleteStudent = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa!")) {
            axios.delete(`http://localhost:3000/tuors/${id}`).then(() => {
                axios.get("http://localhost:3000/tuors").then((response) => {
                    props.setList(response.data);
                });
            });
        }
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align='left'
                                style={{ minWidth: '170px' }}
                            >
                                Title
                            </TableCell>
                            <TableCell
                                align='left'
                                style={{ minWidth: '170px' }}
                            >
                                Price
                            </TableCell>
                            <TableCell
                                align='left'
                                style={{ minWidth: '170px' }}
                            >
                                Descriotion
                            </TableCell>
                            <TableCell
                                align='left'
                                style={{ minWidth: '170px' }}
                            >
                                Acction
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        <TableCell
                                            align='left'
                                            style={{ minWidth: '170px' }}
                                        >
                                        <Link to={`/detail/${row.id}`}>
                                            {row.title}
                                        </Link>
                                        </TableCell>

                                        <TableCell
                                            align='left'
                                            style={{ minWidth: '170px' }}>
                                            {row.price}
                                        </TableCell>
                                        <TableCell
                                            align='left'
                                            style={{ minWidth: '170px' }}>
                                            {row.description}
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            style={{ minWidth: '170px' }}
                                        >

                                            <Button variant="outlined"
                                                    startIcon={<DeleteIcon />}
                                                    onClick={() => {
                                                        DeleteStudent(`${row.id}`);
                                                    }}
                                                    style={{ minWidth: "150px", marginBottom: "15px"}}
                                            >
                                                Delete

                                            </Button>

                                            <Button variant="outlined"
                                                    startIcon={<EditIcon />}
                                                    onClick={() => {
                                                        navigate(`/tour/${row.id}`);
                                                    }}
                                                    style={{ minWidth: "150px", marginBottom: "15px"}}
                                            >
                                                Edit Post
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[3, 5, 10]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}