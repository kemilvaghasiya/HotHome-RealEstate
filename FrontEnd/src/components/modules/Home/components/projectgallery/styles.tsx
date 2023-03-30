import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            flexDirection: 'column',
            // height: '100%',
            // width: '100%',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.4)',
            margin: 10,
            padding: 20,
            // background: 'white',
            // height: 300,
            color: 'black',
            borderRadius: 5
        },
        title: {
            display: 'flex',
            position: 'relative',
            fontSize: '1.5rem',
            color: '#B89E69',
            marginLeft:10
        },
        item: {
            display: 'flex',
            margin: '25px 0px'
        },
        label: {
            display: 'flex',
            fontWeight: 600,
            width: 200


        },
        value: {
            display: 'flex',
            // marginLeft:50
            // fontWeight: 600,

        },
        list: {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto',
            marginTop: 10,
        }

    }));

export default useStyles
