import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            // marginTop:10,
            height: '500px',
            margin: 10,
            padding: 10,
            borderRadius: 5,
            width: 'calc(100%-20px)',
            background: '#38342E',
            // flexDirection: 'column',
            overflow: 'auto',
            justifyContent:'space-evenly',
            color: 'white',
           
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            "@media (max-width: 800px)": {
                // background: "red",
                flexDirection: 'column',
                height: 1500,
                justifyContent: 'space-evenly'
            }
        },
        cardcontainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '450px',
            justifyContent:'center',
            width: '350px',
            backgroundColor: 'rgba(255,255,255,0.1)',
            border: '1px solid white',
            padding: '30px 30px',
            lineHeight: 2,
            alignSelf: 'center',
            borderRadius: 5
        }
    }));

export default useStyles
