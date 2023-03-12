import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            height: '380px',
            width: 'calc(100%-10px)',
            background: 'grey',
            margin:5,
            borderRadius:5
        },
        wrapper:{
            backgroundColor: 'rgba(0,17,30,0.7)',
            display: 'flex',
            height: '100%',
            width: '100%',
            flexDirection:'column'
        },
        title:{
            display: 'flex',
            fontSize: '1.5vw',
            width:'100%',
            fontWeight: 500,
            // width: 600,
            // alignSelf: 'center',
            paddingLeft: 100,
            marginTop:50,
            color: 'white',
            "@media (max-width: 800px)": {
                // background: "red",
                marginLeft: 60,
                width: '60%'
            }
        },
        kpiContainer:{
            display:'flex',
            width:'100%',
            alignSelf: 'center',
            height: '100%',
            justifyContent:'space-evenly'
        },
        kpiWrapper:{
            display:'flex',
            flexDirection:'column',
            alignSelf:'center'
        },
        kpiValue:{
            display: 'flex',
            fontSize: '3vw',
            justifyContent:'center',
            width: '100%',
            // fontFamily:'Roboto',
            fontWeight: 600,
            color: 'white',
            "@media (max-width: 800px)": {
                marginLeft: 60,
            },
            '&:hover': {
                cursor: 'pointer',
                color: '#B89E69',
                fontSize: '4vw'
            }
        },
        kpiDesc:{
            display: 'flex',
            fontSize: '12px',
            width: '100%',
            fontWeight: 400,
            color: 'white',
            "@media (max-width: 800px)": {
                marginLeft: 60,
            }
        }

    }));

export default useStyles
