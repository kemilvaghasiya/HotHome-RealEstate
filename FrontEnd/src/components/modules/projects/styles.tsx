import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            width:'100%',
            height:'100%',
            // background: '#38342E',
            flexDirection:'column'
        },
        comproot: {
            display: 'flex',
            height: '300px',
            width: 'calc(100%)',
            background: 'grey',
            // margin: 5,
            borderRadius: 5,

        },
        wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            height: '100%',
            width: 'calc(100%)',
            flexDirection: 'column',
            alignItems: 'center',
            // alignSelf: 'center',
        },
        title: {
            display: 'flex',
            position: 'relative',
            fontSize: '3vw',
            width: '60%',
            fontWeight: 500,
            height: '100%',
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
        cardTitle:{
            fontSize:18,
            fontWeight:500
        },
        cardLocation:{
            fontSize:15,
            fontWeight:400
        },
        info:{
            display:'flex',
            alignSelf:'center',
            marginTop:10
        },
        cardContainer:{
            display:'grid',
            justifyContent:'center',
            marginTop:20,
            // margin:'0px 150px',
            gridTemplateColumns:'auto auto auto',
            "@media (max-width: 1000px)": {
                // background: "red",
                // marginLeft: 60,
                // width: '60%',
                gridTemplateColumns: 'auto auto',
            },
            "@media (max-width: 600px)": {
                // background: "red",
                // marginLeft: 60,
                // width: '60%',
                gridTemplateColumns: 'auto',
            }

        }
    }));

export default useStyles
