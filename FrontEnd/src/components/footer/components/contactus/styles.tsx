import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            background: '#38342E',
            maxWidth: '250px',
            flexDirection: 'column'
            // height: '500px'
        },
        title: {
            display: 'flex',
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: 2
        },
        discriptionlabel: {
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: 1,
            lineHeight: 1,
            marginTop: 5,
            marginBottom:5
        },
        discriptionvalue: {
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: 2,
            lineHeight: 2,
            marginTop: 5
        }
    }));

export default useStyles
