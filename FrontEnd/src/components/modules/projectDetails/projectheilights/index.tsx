import React from 'react'
import useStyles from './styles';

const List=[
  {
    label:'Development Size',
    value:'floorPlan'
  },
  {
    label: 'Project Type',
    value: 'villas'
  },
  {
    label: 'Total units',
    value: '320 units'
  },
  {
    label: 'Bedrooms',
    value: '3,4 BHK'
  }
]

const ProjectHighlights = ({data}:any) => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.title}>
        Project Highlights
        </span>
        <div style={{marginTop:20}}>
        {/* {
          List.map((item)=>{
            return(
           
            )
          })
        } */}
        <div className={classes.item}>
          <span className={classes.label}>Development Size</span>
          <span className={classes.value}>{data.floorPlan} Acres</span>
        </div>
        <div className={classes.item}>
          <span className={classes.label}>Project Type</span>
          <span className={classes.value}>Apartment</span>
        </div>
        <div className={classes.item}>
          <span className={classes.label}>Total Units</span>
          <span className={classes.value}>{data.noOfUnits}</span>
        </div>
        <div className={classes.item}>
          <span className={classes.label}>Bedrooms</span>
          <span className={classes.value}>{data.noOfBedrooms}</span>
        </div>
        </div>
    </div>
  )
}

export default ProjectHighlights