import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            // flexDirection: 'column',
            // height: '600px',
            width: '100%',
            justifyContent:'space-evenly'
            // background: '#38342E',
            // color: 'white'
        },
        div1:{
            display:'flex',
            // width:'50%',
            height:'100%',
            alignSelf:'center',
            justifyContent:'center'
        },
        div2:{
            display: 'flex',
            // width: '50%',
            flexDirection:'column',
            height:'100%',
            alignSelf: 'center',
            justifyContent:'space-evenly'
        },
        card:{
            display:'flex',
            flexDirection:'column',
            height:250,
            width:350,
            backgroundColor:'rgba(255,255,255,0.2)',
            alignSelf:'center',
            padding:20,
            border:'2px solid grey',
            borderRadius:5,
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
        },
        bigCard:{
            display: 'flex',
            flexDirection: 'column',
            height: 500,
            padding:20,
            width: 350,
            backgroundColor: 'rgba(255,255,255,0.2)',
            alignSelf: 'center',
            border: '2px solid grey',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            borderRadius: 5
        },
        title:{
            fontSize:22,
            fontWeight:800,
            // marginLeft:30,
            display:'flex',
            justifyContent:'center'
        },
        desc:{
            display:'flex',
            marginTop:10,
            lineHeight:1.5
        },
        wrapper: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            // flexDirection: 'column',
            height: '600px',
            width: '100%',
            justifyContent: 'space-around',
            "@media (max-width: 1000px)": {
                height: 1200,
                flexDirection:'column'
                // alignItems: 'center'
            }
            // alignSelf: 'center',
        },

    }));

export default useStyles
