import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            height: 700,
            width: 'calc(100%-0px)',
            flexDirection:'column',
            // margin:5,
            // borderRadius:5,
            overflow:'unset',   
        },
        container:{
            height:700,
            display:'flex'
        },
        title:{
            display:'flex',
            fontSize:'4vw',
            fontWeight:800,
            width:600,
            alignSelf:'center',
            marginLeft:100,
            color:'white',
            "@media (max-width: 800px)": {
                // background: "red",
                marginLeft:60,
                width:'60%'
            }
        },
        titleWrapper:{
            backgroundColor:'rgba(0,0,0,0.3)',
            display:'flex',
            height:'100%',
            width:'100%',
        }

    }));

export default useStyles
