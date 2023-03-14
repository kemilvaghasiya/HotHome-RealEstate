import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            background: '#38342E',
            width:'100%',
            height:'300px',
            justifyContent:'space-evenly',
            marginTop:50,
            "@media (max-width: 800px)": {
                // background: "red",
                // marginLeft: 60,
                // width: '60%',
                display:'flex',
                flexDirection:'column',
                height: '1000px',
                alignItems:'center'
            }
        },
        tag:{
            display:'flex',
            width:'100%',
            height:50,
            backgroundColor:'black',
            paddingTop:15,
            paddingLeft:20
        }
    }));

export default useStyles
