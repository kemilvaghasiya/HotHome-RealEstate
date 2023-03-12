import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            background: '#38342E',
            maxWidth: '250px',
            flexDirection: 'column',
            // height: '500px'
        },
        title: {
            display: 'flex',
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: 2
        },
        discription: {
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: 2,
            lineHeight: 2,
            marginTop: 10
        }, 
        input:{
            border:'1px solid white',
            borderRadius:5,
            height: 58,
            marginTop:10,
            '&.input':{
                background:'white'
            },
            '&.MuiTextField-root':{
                background: 'white'
            }
        },
        submit:{
            height:57,
            display:'flex',
            marginTop: 20,
            width:'100%',
            backgroundColor:'red',
           
            border:'1px solid red',
            borderRadius:5,
            '&:hover':{
                cursor:'pointer'
            },
            justifyContent: 'center'
        },
        submitInfo:{
            color:'white',
            display:'flex',
            fontSize:16,
            fontWeight:500,
            alignSelf: 'center',
           
        }
    }));

export default useStyles
