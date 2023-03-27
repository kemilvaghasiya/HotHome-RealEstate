import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            background: '#38342E',
            width:'calc(100%-30px)',
            height:'350px',
            justifyContent:'space-evenly',
            color:'white',
            paddingTop:50,
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            margin:10,
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
            paddingLeft:20,
            color: 'white',
        }
    }));

export default useStyles
