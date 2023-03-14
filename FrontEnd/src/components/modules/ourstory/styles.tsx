import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root:{
            display:'flex',
            flexDirection:'column',
            height:'100%',
            width:'100%',
            background: '#38342E',
            color:'white'
        },
        comproot: {
            display: 'flex',
            height: '380px',
            width: 'calc(100%)',
            background: 'grey',
            // margin: 5,
            borderRadius: 5,
            
        },
        wrapper: {
            backgroundColor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            height: '100%',
            width: 'calc(100%)',
            flexDirection: 'column',
            alignItems:'center',
            // alignSelf: 'center',
        },
        title: {
            display: 'flex',
            position:'relative',
            fontSize: '3vw',
            width: '50%',
            fontWeight: 500,
            height:'100%',
            alignItems: 'center',
            // marginTop:'2%',
            // justifyContent:'center',
            // width: 600,
            // alignSelf: 'center',
            // paddingLeft: 100,
            // marginTop: 50,
            color: 'white',
            "@media (max-width: 800px)": {
                // background: "red",
                // marginLeft: 60,
                // width: '60%'
            }
        },

    }));

export default useStyles
