import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            flexDirection: 'column',
            height: 600,
            width: 'calc(100%-20px)',
            backgroundColor:'white',
            margin:10,
            borderRadius:4,
            color:'#38342E',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            "@media (max-width: 1000px)": {
                height: 1300,
                flexDirection: 'column'
                // alignItems: 'center'
            }
        },
        title:{
            display:'flex',
            justifyContent:'center',
            marginTop:20
        },
        wrapper1:{
            display:'flex',
            flexDirection:'column',
            width:'100%',
            height:550,
            padding:20,
            justifyContent:'space-evenly',
            color: '#B89E69',
            "@media (max-width: 1000px)": {
                // height: 1500,
                height:1200,
                // flexDirection: 'row'
                // alignItems: 'center'
            }
        },
        divupper:{
            display:'flex',
            justifyContent: 'space-evenly',
            height:200,
            "@media (max-width: 1000px)": {
                // height: 1500,
                height: 700,
                flexDirection: 'column'
                // alignItems: 'center'
            }
        },
        divlower:{
            display:'flex',
            justifyContent:'space-evenly',
            height:200,
            "@media (max-width: 1000px)": {
                // height: 1500,
                height: 500,
                flexDirection: 'column',
                // alignItems: 'center'
            }
        },

        cardWrapper1:{
            display:'flex',
            flexDirection:'column',
            width:300,
            height:200,
            padding:20,
            borderRadius:4,
            backgroundColor:'white',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
        }, 
        cardWrapper2:{
            display: 'flex',
            flexDirection: 'column',
            width: 450,
            height: 200,
            padding: 20,
            borderRadius: 4,
            backgroundColor: 'white',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            "@media (max-width: 1000px)": {
                // height: 1500,
                width:300,
                flexDirection: 'column',
                // alignItems: 'center'
            }
        },
        span1:{
            display:'flex',
            justifyContent:'center',
            fontWeight:600,
            fontSize:16
        },
        span2:{
            display:'flex',
            lineHeight:1.3,
            marginTop:10

        }
    }));

export default useStyles
