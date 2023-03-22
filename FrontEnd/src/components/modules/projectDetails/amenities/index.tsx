import React from 'react'
import useStyles from './styles';
const List = ['Admin Office', 'Badminton Court', 'Billiards', 'Childrens Play Area', 'Coffee Shop', 'Gymnasium', 'Multipurpose Hall', 'Squash Court', 'Swimming Pool', 'Tennis Court']

const Amenities = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <span className={classes.title}>
                Amenities
            </span>
            <div className={classes.list}>
                {
                    List.map((item) => {
                        return (<span style={{marginTop:20}}>{item}</span>)
                    })
                }
            </div>
        </div>
    )
}

export default Amenities