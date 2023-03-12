import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            background: '#38342E',
            maxWidth: '250px',
            flexDirection:'column'
            // height: '500px'
        },
        title:{
            display:'flex',
            fontWeight:600,
            fontSize:16,
            letterSpacing:2
        },
        discription:{
            fontSize:14,
            fontWeight:400,
            letterSpacing:2,
            lineHeight:2,
            marginTop:10
        }
    }));

export default useStyles
