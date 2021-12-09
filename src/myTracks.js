import { v4 as uuidv4 } from "uuid"; 


function myTracks() {

  return [
    {
      name: "Ceremony",
      cover: "./assets/img/ceremony.jpg",
      artist: "New Order",
      audio: "./assets/audio/ceremony.mp3",
      color: ["#88A4B9", "#30697D"],
      id: uuidv4(),
      active: true
    },
    {
      name: "Ever",
      cover: "./assets/img/ever.jpg",
      artist: "Team Sleep",
      audio: "./assets/audio/ever.mp3",
      color: ["#072942", "#EF3EC2"],
      id: uuidv4(),
      active: false
    },
    // {
    //   name: ,
    //   cover: ,
    //   artist: ,
    //   audio: ,
    //   color: ,
    //   id: ,
    //   active: false
    // },
  
  ]

}

export default myTracks;