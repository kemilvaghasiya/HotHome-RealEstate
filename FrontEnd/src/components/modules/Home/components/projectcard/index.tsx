import React from 'react'
import useStyles from './styles';
const List=[
    {
        title:'Residential Developments',
        desc:'Hothome Group successfully ventured into Real Estate by creating a series of residential spaces at strategic locations under the aegis of Dream Homes.',
        URL:'/images/home/card/image1.png'
    },
    {
        title: 'Commercial Developments',
        desc: 'Our mission is to engage in issues that are of concern to individuals, families and communities through an uncompromising commitment to create outstanding living, work and leisure environments.',
        URL: '/images/home/card/image2.png'
    },
    {
        title: 'Investor',
        desc: 'Hothome group started it’s journey almost 2 decades back. The Group has firmly established itself as a trustworthy and dependable organization in Real Estate Industry that delivers quality.',
        URL: '/images/home/card/image3.png'
    },
]

const ProjectCard = () => {
    const {classes}=useStyles();
  return (
    <div className={classes.root}>
          {
              List.map((item) => {
                  return (
                      <div className={classes.cardcontainer}>
                        <img src={`${item.URL}`} style={{display:'flex',justifyContent:'center',height:200,width:200,marginLeft:30}}></img>
                          <p style={{ fontWeight: 800, fontSize:20, }}>{` ${item.title}`}</p>
                          <p style={{ color: 'rgba(255,255,255,0.7)',marginTop:5 }}>{item.desc}</p>
                      </div>
                  )
              })
          }
    </div>
  )
}

export default ProjectCard