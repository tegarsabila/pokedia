import React from "react";
import tegar from "../assets/img/tegar.png";
import ronaldo from "../assets/img/ronaldo.jpg";
import nabila from "../assets/img/nabila.jpg";

function Pengalaman(props) {
  return <li>{props.pengalaman}</li>;
}

function About() {
  return (
    <React.Fragment>
      <div className="">
        <div className="team">Our Team</div>
        <div className="containerMember">
          <div className="member">
            <div className="profile">
              <img className="profileImg" src={nabila} alt="" />
            </div>
            <div className="memberName">Nabila Suci Azahra</div>
            <div className="backgroundPendidikan">
              SMA Negeri 1 Ciruas - IPA
            </div>
            <div className="pengalaman">
              <h1>Experience</h1>
              <Pengalaman pengalaman="Digital Poster Competition IT Days 2021" />
            </div>
          </div>
          <div className="member">
            <div className="profile">
              <img className="profileImg" src={tegar} alt="" />
            </div>
            <div className="memberName">Tegar Sabila</div>
            <div className="backgroundPendidikan">
              SMK Komputer Indonesia, Bogor
            </div>
            <div className="pengalaman">
              <h1>Experience</h1>
              <Pengalaman pengalaman="Certification Mikrotik MTCNA" />
            </div>
          </div>
          <div className="member">
            <div className="profile">
              <img className="profileImg" src={ronaldo} alt="" />
            </div>
            <div className="memberName">
              Ronaldo Immanuel Parningotan Siregar
            </div>
            <div className="backgroundPendidikan">SMA Negeri 113, Jakarta</div>
            <div className="pengalaman">
              <h1>Experience</h1>
              <Pengalaman pengalaman="Robotik Contest ID 2018" />
              <Pengalaman pengalaman="Robotik Contest ID 2019" />
              <Pengalaman pengalaman="Line Follower 2017-2018" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;

