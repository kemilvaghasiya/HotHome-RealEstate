import React from 'react'
import useStyles from './styles';

const List=[
  {
    label:'Development Size',
    value:'28.5 Acres'
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

const ProjectHighlights = () => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.title}>
        Project Highlights
        </span>
        <div style={{marginTop:20}}>
        {
          List.map((item)=>{
            return(
            <div className={classes.item}>
              <span className={classes.label}>{item.label}</span>
              <span className={classes.value}>{item.value}</span>
              </div>
            )
          })
        }
        </div>
    </div>
  )
}

export default ProjectHighlights