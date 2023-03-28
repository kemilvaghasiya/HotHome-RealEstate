import React from 'react'
import useStyles from './styles';

const VisionMission = () => {
    const {classes}=useStyles();
  return (
      <div className={classes.root} style={{
          backgroundImage: `url('/images/ourstory/image1.jpg')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
      }}>
          <div className={classes.wrapper}>
        <div className={classes.div1}>
              <div className={classes.bigCard} >
                  <span className={classes.title}>
                      Goal
                  </span>
                  <span className={classes.desc}>
                      We are here to weave practicality with aesthetics for good and worthwhile living, making your dream come true. Including the completion of thirty major projects, both residential and commercial, the  Hothome group has become a global player very fast, with much accuracy and precision, undertaking new challenges and projects thereby implementing new, innovative and progressive technology to deliver with excellence, counting on its experience.
                  </span>
                  <span className={classes.desc}>
                      Come and experience this whole new thing with the works showcasing some great impeccable designs and architectural brilliance which is quite enriching and fulfilling in itself.
                  </span>
              </div>
        </div>
        <div className={classes.div2}>

        <div className={classes.card} >
                  <span className={classes.title}>
                Vision
            </span>
                  <span className={classes.desc}>
                  To become a leading real estate developer making dream spaces to add value to peoples’ lives by being the most trustworthy construction company successfully taking its legacy ahead with the entire team and growing with time.
            </span>
        </div>
          <div className={classes.card}>
                  <span className={classes.title}>Mission</span>
                  <span className={classes.desc}>
                  Making perfect constructions by implementing latest technologies thereby adding value to the society and growing progressively along with its strong corporate team and building customer faith to maintain lifelong relationships by doing quality work with integrity.
            </span>
        </div>
        </div>
        </div>
    </div>
  )
}

export default VisionMission