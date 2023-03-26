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
import axios from 'axios';
import { isStatusOk } from '@/api/utils';
import { useSnackbar } from 'notistack';
import useStore from '@/components/store/usestore';
import { observer } from 'mobx-react-lite';
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

 function BasicTable({ data, Title }: any) {
    const { rootStore: { navBarStore: {  setRefetchProjectData } } } = useStore();
    const {classes} = useStyles();
    const router=useRouter();
    const {enqueueSnackbar}=useSnackbar();
    const DeleteHandler = (id: any) => {
        axios.delete(`http://localhost:5000/delete-property/${id}`)
        .then((res)=>{
            if (isStatusOk(res.status)) {
                enqueueSnackbar('Deleted Property Successfully', { variant: 'success' });
                 router.push('/adminpanel')
                setRefetchProjectData(true);
            }
            
        })
            .catch((error) => enqueueSnackbar((error.message), { variant: 'error' }))
    }
    return (
        <div className={classes.root}>
            {/* <span>{Title}</span> */}
            <EnhancedTableToolbar title={Title} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} size="medium" aria-label="simple table">
                    <TableHead className={classes.header}>
                        <TableRow>
                            <TableCell>Property Name</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">PinCode</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">No of Beds</TableCell>
                            <TableCell align="right">FloorPlan</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data ? data.length === 0 ? <span>No Data Available</span> : data.map((row: any) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.propertyName}
                                </TableCell>
                                <TableCell  >{row.address }</TableCell>
                                <TableCell align="right">{row.pincode}</TableCell>
                                <TableCell align="right">{row.price}$</TableCell>
                                <TableCell align="right">{row.noOfBedrooms}BHK</TableCell>
                                <TableCell align="right">{row.floorPlan }</TableCell>
                                <TableCell align="right">
                                    <EditIcon onClick={()=>router.push(`/editproperty/${row._id}`)} className={classes.editIcon}/>
                                    < DeleteIcon onClick={() => DeleteHandler(row._id)} className={classes.deleteIcon}/>

                                </TableCell>
                            </TableRow>
                            
                        )) : <DynamicComponentLoader />}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default observer(BasicTable)
