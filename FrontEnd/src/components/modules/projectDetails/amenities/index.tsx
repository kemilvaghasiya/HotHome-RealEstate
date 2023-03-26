import React from "react";
import useStyles from "./styles";
const List = [
  { title: "Business center", description: "A dedicated space within a building or complex designed for business-related activities such as meetings, presentations, and workspaces with business amenities like computers, printers, and high-speed internet." },
  { title: "Club House", description: "A communal space typically located on the premises of a residential community or apartment complex, featuring various amenities such as a lounge, kitchen, meeting space, and sometimes a fitness center." },
  { title: "Childrens Play Area", description: "A recreational space designed for children to play on equipment such as swings, slides, and climbing structures." },
  { title: "Game room", description: " A recreational space featuring various games such as pool, ping-pong, foosball, and arcade games." },
  { title: "Gymnasium", description: "A room or building equipped with exercise equipment, weights, and other tools for physical training and conditioning." },
  { title: "Pet park", description: "A designated area within a residential complex where pets can play and exercise off-leash." },
  { title: "Movie theater", description: "A room or space designed for showing movies or other visual media, with comfortable seating and audiovisual equipment." },
  { title: "Swimming Pool", description: "A large, usually rectangular or circular, artificially constructed pool designed for swimming or other aquatic activities. May have additional features such as waterfalls, slides, or a hot tub." },
  { title: "Tennis Court", description: "A flat rectangular surface designed for playing tennis, often with additional amenities such as seating, lighting, and a nearby clubhouse." },
];

const Amenities = ({ data }: any) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.title}>Amenities</span>
      <div className={classes.list}>
        {List.map((item) => {
          return <div style={{ marginTop: 10}}>
                    <hr style={{ marginTop: 10 ,marginBottom: 10, backgroundColor: '#B89E69', border: 'none',height: '1px'}}></hr>
                    <b><span style={{ marginTop: 20 }}>{item.title}</span></b>
                    <p style={{ marginTop: 10 ,marginBottom: 10}}>{item.description}</p> 
                 </div>;
        })}
      </div>
    </div>
  );
};

export default Amenities;
