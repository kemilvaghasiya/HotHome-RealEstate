import { makeStyles } from 'tss-react/mui';

 const useStyles= makeStyles()(() => (
     {
    root: {
        display: 'flex',
        backgroundColor:'black',
        height:50,
        justifyContent:'space-between',
        flexDirection:'row'
    },
    login:{
        display:'flex',
        alignSelf:'center'
    }
}));

export default useStyles
