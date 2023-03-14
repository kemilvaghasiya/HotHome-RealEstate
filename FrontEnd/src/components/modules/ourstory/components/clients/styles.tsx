import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            margin:'5px 0px',
            width: '100%',
            background: '#38342E',
            color: '#B89E69',
            "@media (max-width: 1000px)": {
                height:1200
            }
        },
        wrapper: {
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            height: '500px',
            width: 'calc(100%)',
            flexDirection: 'column',
            alignItems: 'center',
            "@media (max-width: 1000px)": {
                height: 1200,
                alignItems:'center'
            }
            // alignSelf: 'center',
        },
        cardwrapper:{
            "@media (max-width: 1000px)": {
                flexDirection:'column',
                justifyContent:'space-around',
                alignItems:'center'
            }
        },
        cardcontainer:{
            display:'flex',
            flexDirection:'column',
            height:'350px',
            width:'350px',
            backgroundColor:'rgba(255,255,255,0.05)',
            border:'1px solid white',
            padding:'30px 30px',
            lineHeight:2,
            borderRadius:5
        }

    }));

export default useStyles
