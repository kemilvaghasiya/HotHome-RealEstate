import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            // flexDirection: 'column',
            // // height: '100%',
            // // width: '100%',
            // boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            // margin:20,
            // padding:20,
            // background: 'white',
            // height:350,
            // color: 'black',
            // borderRadius:5
            "@media (max-width: 500px)": {
                // background: "red",
                flexDirection: 'column',
                height: 850,
                // justifyContent: 'space-between'
            }
        },
        title: {
            display: 'flex',
            position: 'relative',
            fontSize: '1.5rem',
            color:'#B89E69'
        },
        item:{
            display:'flex',
            margin:'20px 0px'
        },
        label:{
            display:'flex',
            fontWeight:600,
            width:200
            

        },
        value:{
            display: 'flex',
            // marginLeft:50
            // fontWeight: 600,

        }, left:{
            display: 'flex',
            flexDirection: 'column',
            // height: '100%',
            width: '50%',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            margin: 20,
            padding: 20,
            background: 'white',
            height: 350,
            color: 'black',
            borderRadius:5,
            "@media (max-width: 500px)": {
               width:'85%',
               height:400
            }
        },
        right:{
            display: 'flex',
            flexDirection: 'column',
            // height: '100%',
            width: '50%',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            margin: 20,
            padding: 20,
            background: 'white',
            height: 350,
            color: 'black',
            borderRadius: 5,
            "@media (max-width: 500px)": {
                width: '85%'
            }
        }

    }));

export default useStyles
