import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root:{
            display:'flex',
            flexDirection:'column',
            height:'600px',
            width:'100%',
            background: '#1a1a1a',
            paddingLeft:50,
            paddingTop:30,
            // marginBottom:10,
            color:'#B89E69',
            "@media (max-width: 800px)": {
                height: 1000,
                flexDirection: 'column',
                paddingLeft:15,
                alignItems: 'center'
            }
        },
        divwrapper:{
            display:'flex',
            // justifyContent:'flex-start'
            "@media (max-width: 800px)": {
                // height: 1200,
                flexDirection:'column',
                alignItems: 'center'
            }
        },
        div1:{
            display:'flex',
            flexDirection:'column',
            height:400,
            width:350,
            marginTop:30,
            "@media (max-width: 800px)": {
                // height: 1200,
                width:300,
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft:'unset'
            }
        },
        div2:{
            display: 'flex',
            flexDirection: 'column',
            height: 400,
            width: 300,
            marginTop: 30,
            marginLeft:150,
            "@media (max-width: 800px)": {
                // height: 1200,
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft:'unset'
            }
        },
        divContainer:{
            display:'flex',
            flexDirection:'column',
            height:200,
            width:300,
            marginTop:20,
            backgroundColor:'#B89E69',
            border:'1px solid',
            borderRadius:20,
            padding:30,
            color:'black',
            justifyContent:'space-between'
        }

    }));

export default useStyles
