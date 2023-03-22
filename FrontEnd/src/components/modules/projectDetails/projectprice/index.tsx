import React from 'react'
import InputSlider from './progressbar';
import useStyles from './styles';
const List = [
  {
    label: '3 Bed with study',
    value: '5.65Cr+'
  },
  {
    label: '4 Bed with study',
    value: '7.86Cr+'
  }
]

const ProjectPrice = ({data}:any) => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
          <span className={classes.title}>Price Details</span>
      <div className={classes.item} style={{ marginTop: 20, color: '#B89E69' }}>
        <span className={classes.label}>Residences</span>
        <span className={classes.value}>Price</span>
      </div>
      {
        List.map((item) => {
          return (

            <div className={classes.item}>
              <span className={classes.label}>{item.label}</span>
              <span className={classes.value}>{item.value}</span>
            </div>
          )
        })
      }
      <span style={{ marginTop: 20, color: '#B89E69' }}>HOME LOAN EMI
        CALCULATOR</span>

      <InputSlider data={data}/>
    </div>
  )
}

export default ProjectPrice