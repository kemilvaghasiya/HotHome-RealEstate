/* eslint-disable no-nested-ternary */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Toolbar, Typography } from '@mui/material';
import useStyles from './styles';
import DynamicComponentLoader from '@/components/common/loader/dynemicComploader';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

function EnhancedTableToolbar(props: any) {
    const { title } = props;
    const {classes} = useStyles();

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
            }}
            className={classes.title}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="span"

            >
                {title}
            </Typography>

        </Toolbar>
    );
}

export default function BasicTable({ data, Title }: any) {
    const {classes} = useStyles();
    const router=useRouter();
    return (
        <div className={classes.root}>
            {/* <span>{Title}</span> */}
            <EnhancedTableToolbar title={Title} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} size="medium" aria-label="simple table">
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Mobile No.</TableCell>
                            <TableCell align="right">Property</TableCell>
                            <TableCell align="right">Inquiry Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data ? data.length === 0 ? <span>No Data Available</span> : data.map((row: any) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right" >{row.email }</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right" onClick={() => router.push(`/projects/${row.propertyId}`)} className={classes.link}>{row.propertyName}</TableCell>
                                <TableCell align="right">{new Date(row.time).toDateString()}</TableCell>
                            </TableRow>
                            
                        )) : <DynamicComponentLoader />}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
