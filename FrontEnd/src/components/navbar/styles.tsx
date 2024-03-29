import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            backgroundColor: '#B89E69',
            height: 64,
            // padding:'0% 3%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            fontSize:'16px !important'
        },
        login: {
            display: 'flex',
            alignSelf: 'center'
        },
        leftnav:{
            display:'flex',
            
        },
        logo:{
            // alignSelf: 'center',
            '&:hover':{
                cursor:'pointer'
            }
        },
        midnav:{
            display:'flex',
            justifyContent:'center'
        },
        selctedTab:{
            color:'black'
        }
    }));

export default useStyles
