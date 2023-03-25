import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => (
    {
        root: {
            display: 'flex',
            flexDirection: 'column',
            margin: 10,
            // height: 40,
            // borderBottom: `1px solid ${theme.colors.borderColor}`,
            // padding: '0px 10px',
        },
        header: {
            background: '#f0f0f0',
        },
        title: {
            minHeight: 25,
        },
        link:{
            color:'blue',
            textDecoration:'underline',
            '&:hover':{
                cursor:'pointer'
            }
        }
    }));

export default useStyles
