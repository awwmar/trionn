import './App.css';
import React, {useState, useEffect} from 'react'; 
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    useEffect(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".img1",
          start: "top center", 
          end: "bottom center", 
          scrub: true,
        }
      })
      .to(".img1", {
        x: -500,
        opacity: 1,
        duration: 3,
        ease: "power2.inOut",
      });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: ".img2",
          start: "top center", 
          end: "bottom center", 
          scrub: true,
        }
      })
      .to(".img2", {
        x: 600,
      });
  
      gsap.timeline({
        scrollTrigger: {
          trigger: ".img3",
          start: "top center", 
          end: "bottom center", 
          scrub: true,
        }
      })
      .to(".img3", {
        x: -200,
      });
    }, []);

  function MarqueeText({ element, speed, direction }) {
    const [position, setPosition] = useState(0);
    
    useEffect(() => {
        const animate = () => {
            setPosition(oldPosition => {
                let newPosition = direction === 'left' ? oldPosition + 1 : oldPosition - 1;
                return newPosition % element.length;
            });
            setTimeout(animate, speed);
        };
        animate();
    }, [element, speed, direction]);

    const textToShow = element.substring(position) + element.substring(0, position);

    return <div className='marqueeText1'>{textToShow}</div>;
  }


  
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColors = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='mainBody' style={{color: !isDarkMode ? 'white' : '#121315', backgroundColor: isDarkMode ? 'white' : '#121315', display: 'flex', flexDirection:'column', alignItems: 'center'}}>

      <header className='navBar'>
      
        <h1 className='title1' > TRIONN </h1>
        <button className="button1" onClick={toggleColors}>F</button>
        <h1 className='menu'>MENU</h1>
      
      </header>

      <div className='text1' style={{marginTop: "10%"}}>ROAR IN THE </div>
          <div className='text1' style={{marginBottom: "5%"}}>DIGITAL WILDERNESS</div>
          <div className='subtext1'> WE ROAR WITH SUCCESS, DELIVERING THE TRIONN®<br/>THROUGH VERSATILE DESIGN, BRANDING AND THE LATEST <br/>TECH DEVELOPMENT TO COMPANIES.</div>
        
        <div className="divBar">
          <div className='btn1' >Explore work</div>
          <div className='divImg'></div>
          <div className='btn1' >Get in touch</div>
        </div>

      <body className='innerBody1'>

        <div class="recent">
            <div class="recentText">
                <h1 class="text2">RECENT <br/>WORKS</h1>
                <h2 className='subtext2'>In the creative wilderness,<br/>clients find our work<br/>truly beloved.   </h2>
            </div>
          <div class="recentBtn">
            <button class="btn1">Explore</button>
            </div>
          </div>


        <div className='recentWorks'>
          <div className="work">
            <h1 className='workTitle'>LOFTLOOM<br/>UI Design, UX, Wireframe</h1>
            <div className='img1'>IMAGE 1 </div>
          </div>
          <div className="work">
            <div className='img2'> IMAGE 2 </div>
            <h1 className='workTitle2'>IMUSIC<br/>Research, UX, UI Design</h1>
          </div>
          <div className="work">
            <h1 className='workTitle'>TECHNIS<br/>UX, UI Design, Development</h1>
            <div className='img3'>IMAGE 3 </div>
          </div>

          <div className='btn1' >View All Work</div>
        </div>

        <div className='cont'>
          <h1 className="text2"> WHO WE ARE</h1>
          <h2 className='subtext2'> As an award-winning agency within the digital jungle, TRIONN® transcends aesthetics, crafting your vision into a legacy that endures.</h2>
          <h3 className='subSubText2'>We roar with creativity, staying updated with the latest tech to make your brand a formidable force in the digital wilderness and deliver exceptional website and app experiences. </h3>
          <div className='btn1'>About Us</div>
        </div>

        <div className='infoContainer'>
          <div className='infoBox1'>
            <h1 className='infoNum1'>50+</h1>
            <h2 className='statName'> AWARDS & RECOGNITION</h2>
          </div>
          <div className='infoBox2'>
            <h1 className='infoNum1'>900+</h1>
            <h2 className='statName'> PROJECTS COMPLETED</h2>
          </div>
          <div className='infoBox3'>
            <h1 className='infoNum1'>20+</h1>
            <h2 className='statName'> CREATIVE MINDS</h2>
          </div>
          <div className='infoBox4'>
            <h1 className='infoNum1'>20+</h1>
            <h2 className='statName'> YEARS OF EXPERIENCE</h2>
          </div>
        </div>

        <h1 className='text2'>PARTNER LOVE</h1>
        <h2 className='subText2'>Take heed, as the lion's roar in our client reviews resounds. </h2>

        <div className='teamInfo'>
          <div className='teamInfoBox'>
            <img className='teamPfp' src="https://trionn.com/assets/images/clients/malte-kramer.webp" alt="" />
            <h2 className='memberName'> Malte Kramer</h2>
            <h3 className='memberInfo'>Founder & CEO of Luxury Presence</h3>
            <div className='btn1' >Watch Now</div>
          </div>
          <div className='teamInfoBox'>
            <img className='teamPfp' src="https://cdn.theorg.com/dd794fa8-942b-4667-b8a5-4d684f10e321_thumb.jpg" alt="" />
            <h2 className='memberName'> Doug Petrie</h2>
            <h3 className='memberInfo'>Founder & CEO of Fast Resume</h3>
            <div className='btn1' >Watch Now</div>
          </div>
        </div>


        <div className='marqueeBox'>
         <MarqueeText element="- WILD IDEADS! -" speed={400} direction="left" />
         <MarqueeText element="- LET'S DIVE IN! -" speed={400} direction="left" />
        </div>
        
        
        <div className='joinJungle' >
          <h1 className='text3'> JOIN OUR</h1>
          <h1 className='text3'> JUNGLE</h1>
          <h1 className='text3'> TREK</h1>
        </div>

        <div class="handle" style={{ }}>
          <div class="handleList" >
            <p>Dribbble</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.01 13.188c.617 1.613 1.072 3.273 1.361 4.973-2.232.861-4.635.444-6.428-.955 1.313-2.058 2.989-3.398 5.067-4.018zm-.53-1.286c-.143-.32-.291-.638-.447-.955-1.853.584-4.068.879-6.633.883l-.01.17c0 1.604.576 3.077 1.531 4.223 1.448-2.173 3.306-3.616 5.559-4.321zm-3.462-5.792c-1.698.863-2.969 2.434-3.432 4.325 2.236-.016 4.17-.261 5.791-.737-.686-1.229-1.471-2.426-2.359-3.588zm7.011.663c-1.117-.862-2.511-1.382-4.029-1.382-.561 0-1.102.078-1.621.21.873 1.174 1.648 2.384 2.326 3.625 1.412-.598 2.52-1.417 3.324-2.453zm7.971-1.773v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zm-6.656-1.542c.18.371.348.745.512 1.12 1.439-.248 3.018-.233 4.734.049-.084-1.478-.648-2.827-1.547-3.89-.922 1.149-2.16 2.055-3.699 2.721zm1.045 2.437c.559 1.496.988 3.03 1.279 4.598 1.5-1.005 2.561-2.61 2.854-4.467-1.506-.261-2.883-.307-4.133-.131z"/></svg>
          </div>
          <hr/>
          <div class="handleList">
            <p>LinkedIn</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </div>
          <hr/>
          <div class="handleList">
            <p>Instagram</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </div>
          <hr />
          <div class="handleList">
            <p>Behance</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
          </div>
          <hr/>
          <div class="handleList" >
            <p>Facebook</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
          </div>
          <hr/>
        </div>
      
      </body>

    <div className='bottom'>
    </div>

    </div>


  );
};

export default App;
