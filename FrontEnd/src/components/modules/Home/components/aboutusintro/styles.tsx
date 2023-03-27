import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            // marginTop:10,
            height: '500px',
            margin:10,
            padding:10,
            borderRadius:5,
            width: 'calc(100%-20px)',
            background: '#38342E',
            // flexDirection: 'column',
            overflow: 'auto',
            color: 'white',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            "@media (max-width: 800px)": {
                // background: "red",
                flexDirection: 'column',
                height:1100,
                justifyContent:'space-between'
            }
        },
        image:{
            display:'flex',
            alignSelf:'center'
        },
        desc:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            alignSelf:'center',
            width:'100%',
            margin:'0px 50px'
        },
        title:{
            display:'flex',
            fontWeight:600,
            fontSize:18,
            lineHeight:1.3
        },
        para:{
            display: 'flex',
            fontWeight: 400,
            fontSize: 15,
            marginTop:25,
            lineHeight: 2
        }

    }));

export default useStyles
