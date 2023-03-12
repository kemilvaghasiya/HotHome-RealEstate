import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            // marginTop:10,
            height:'100%',
            width:'100%',
            background:'#38342E',
            flexDirection:'column',
            overflow:'auto',
            color:'white'
        },
      
    }));

export default useStyles
