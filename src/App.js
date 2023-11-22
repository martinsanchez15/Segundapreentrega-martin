import ProfileCard from "ProfileCard";

import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";
import "bulma/css/bulma.css";


function App(){

    return (
        <div>
            <section class="hero">
                <div class="hero-body">
                    <h1>Asistentes</h1>
                </div>
            </section>
          


          <div className="container">
            <div className="column is-4"></div>
            <ProfileCard titulo="Alexa" arroba="Alexa99" img={AlexaImg}/>
          </div>

          <div className="container">
            <div className="column is-4"></div>
            <ProfileCard titulo="Siri" arroba="Siri21" img={SiriImg}/>
          </div>

          <div className="container">
            <div className="column is-4"></div>
            <ProfileCard titulo="Cortana" arroba="Cortana" img={CortanaImg}/>
          </div>

         
        
        </div>

    )

}

export default App;