import React from 'react'
import useStyles from './styles';

const OurValues = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Our Values</h1>
            <div className={classes.wrapper1}>
                <div className={classes.divupper}>
                    <div className={classes.cardWrapper1}>
                        <span className={classes.span1}>
                            Honesty and Truthfulness
                        </span>
                        <span className={classes.span2}>
                            No wonder honesty and truthfulness are our first and foremost priority lying under the core value of our working mechanism. We like to do quality work with integrity thereby remaining transparent in the process.
                        </span>
                    </div>
                    <div className={classes.cardWrapper1}>
                        {/* <span className={classes.span1}> */}
                            <span className={classes.span1} >

                            Admiration and Reverence
                        </span>
                        <span className={classes.span2}>
                            Our legacy has garnered much admiration and reverence for working relentlessly and has reflected perseverance till success is achieved. We as a team have held on to it and have learnt to become deserving of such respect.
                        </span>
                    </div>
                    <div className={classes.cardWrapper1}>
                        <span className={classes.span1}>

                            Quality and Brilliance							
                        </span>
                        <span className={classes.span2}>
                            We believe in producing quality work as it is directly related to adding value to the lives of many who dream of their own personal spaces. Quality work pays and helps us producing brilliant results in the long run.
                        </span>
                    </div>
                </div>
                <div className={classes.divlower}>
                    <div className={classes.cardWrapper2}>
                        <span className={classes.span1}>

                            Unity and Harmony							
                        </span>
                        <span className={classes.span2}>
                            We believe in working as a team and stepping up the ladder altogether, bringing a win-win situation for all the people involved, be it the team itself, client, peer, colleague or partner, thereby emitting a sense of solidarity.
                        </span>
                    </div>
                    <div className={classes.cardWrapper2}>
                        <span className={classes.span1}>

                            Accountability and Reliability							
                        </span>
                        <span className={classes.span2}>
                            We always work progressively keeping our accountability towards the society and its people in mind. We always try to give back what we have gained thus holding our place as the most reliable and trustworthy partner in the business.
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurValues