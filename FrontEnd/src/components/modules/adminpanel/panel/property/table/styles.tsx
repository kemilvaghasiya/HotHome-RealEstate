import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            flexDirection: 'column',
            margin: 10,
            // height: 40,
            // borderBottom: `1px solid ${theme.colors.borderColor}`,
            // padding: '0px 10px',
        },
        header: {
            background: '#f0f0f0',
        },
        title: {
            minHeight: 25,
        },
        editIcon:{
            '&:hover':{
                cursor:'pointer',
                color:'rgb(25, 118, 210)'
            }
        },
        deleteIcon:{
            marginLeft:10,
            '&:hover': {
                cursor: 'pointer',
                color:'red'
            }
        }
    }));

export default useStyles
