import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            flexDirection: 'column',
            // height: '100%',
            // width: '100%',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            margin:20,
            padding:20,
            background: 'white',
            height:320,
            color: 'black',
            borderRadius:5
        },
        title: {
            display: 'flex',
            position: 'relative',
            fontSize: '1.5rem',
            color:'#B89E69'
        },
        item:{
            display:'flex',
            margin:'25px 0px'
        },
        label:{
            display:'flex',
            fontWeight:600,
            width:200
            

        },
        value:{
            display: 'flex',
            // marginLeft:50
            // fontWeight: 600,

        }

    }));

export default useStyles
