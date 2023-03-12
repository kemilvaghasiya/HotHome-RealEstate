import React from 'react'
import useStyles from './styles';
const List=[
    {
        value:'20',
        desc:'Estate Agents'
    },
    {
        value:'$3B+',
        desc:'Sales since 2001'
    },
    {
        value:'25M',
        desc:'Square meters sold'
    },
    {
        value:'980',
        desc:'Sales since 2001'
    }
]

const DetailKPI = () => {
    const {classes}=useStyles();
  return (
    <div className={classes.root} style={{
          backgroundImage: `url('/images/kpi/image.jpg')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
    }}>
        <div className={classes.wrapper}>

              <span className={classes.title}>WHAT SETS US APART</span>
              <div className={classes.kpiContainer}>

              {
                  List.map((item:any)=>{
                    return(
                        <div className={classes.kpiWrapper}>
                            <span className={classes.kpiValue}>{item.value}</span>
                            <span className={classes.kpiDesc}>{item.desc}</span>
                         </div>   
                    )
                  })
              }
              </div>
        </div>
    </div>
  )
}

export default DetailKPI