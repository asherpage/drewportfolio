
import './App.css';
import './styles/home.css'
import place from './styles/images/Group 12.png'
import ContactForm from './comp/ContactForm';
import SmoothScroller from './comp/SmoothScroller';
import grad from './styles/images/gradski.png'
import logers from './styles/images/logers.png'

function App() {
  return (
  <>
  <div className='flex-cont'>
      <div className='the-text'>
        <h1>Hi, Im Andrew</h1>
        <h5>I am a aspiring <span>front end developer</span> seeking an opportunity at an entry-level position to showcase my team oriented and graphic design skills. Motivated and eager to provide my expertise in the world of front end development</h5>
        <button className='opener-button'>More Info</button><button className='sec-opener-button'>More Info</button>
      </div>
      <div className='imagyo'>
        <img src={place}></img>
      </div>
    </div>
    <div className='below-scroll'>
            <SmoothScroller />
          </div>

    <div className='flex-cont'>
      <div className='the-text'>
        <h1>Skills</h1>
        <h5>In terms of my skills, I'm proficient in HTML, CSS, JavaScript, and ReactJS. HTML allows me to structure web content effectively, ensuring clarity and accessibility. With CSS, I can design visually appealing layouts and styles that enhance user experience. JavaScript enables me to add interactivity and dynamic functionality to websites, creating engaging user interfaces. Moreover, my expertise in ReactJS empowers me to build scalable and efficient web applications, leveraging its component-based architecture and state management capabilities. Overall, my understanding of these technologies equips me to tackle diverse web development challenges with confidence and creativity.</h5>
        <button className='opener-button'>View Resume</button>
      </div>
      <div className='imagyo'>
        <img src={logers}></img>
      </div>
    </div>
    <div className='flex-cont rev'>
      <div className='the-text'>
        <h1>Education</h1>
        <h5>Sandra Day O’Conner Highschool, Phoenix

Expected Grad: 2024

West-MEC NEC Coding Program, Phoenix

This two-year interactive program prepares students for a career as a software developer. The program teaches students how to design and develop software, build apps for phones, tablets, websites, and write and test computer code.

Expected Grad: 2024</h5>
        <button className='opener-button'> View Resume</button>
      </div>
      <div className='imagyo'>
        <img src={grad}></img>
      </div>
    </div>
    <ContactForm />
  </>
  );
}

export default App;
