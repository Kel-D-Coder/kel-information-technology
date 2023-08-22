import '../Styles/Home.css'
import { Button } from '../Components/Button';
import Background from '../Images/img/img1.jpg'

function Home() {
    return (
      <div
        className="home_Container"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="greetings">
          <h1>Kel's Information technology</h1>
          <div className="descrip">
            <p>Here We Train People To Become Software Developers</p>
          </div>
          <Button />
        </div>
      </div>
    );
}

export default Home