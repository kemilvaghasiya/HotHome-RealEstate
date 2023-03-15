import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            background: '#38342E',
            color: 'white'
        },
        comproot: {
            display: 'flex',
            height: '100%',
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

    }));

export default useStyles
