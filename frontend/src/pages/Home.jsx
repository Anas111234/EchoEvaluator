import React from 'react'
import '../Styling/Home.css'
import { TypeAnimation } from 'react-type-animation';
import Accordion from '../Components/Accordion';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home">
    <div className="home-header">
    <div className="images">
    </div>
    <div className="text-typing">
    <TypeAnimation
      sequence={[
        "EchoEvaluator helps you calculate and reduce your carbon footprint.",
        1000, 
        "EchoEvaluator changes the way you think about climate action.",
        1000,
        "EchoEvaluator empowers you to make sustainable choices.",
        1000,
        "EchoEvaluator inspires actions for a healthier planet.",
        1000
      ]}
      wrapper="span"
      speed={30}
      // style={{ fontSize: '3rem', display: 'inline-block',color:'transparent',WebkitTextStroke: '1px white',fontWeight: 700
      //     }}
          className="type-animation"
      repeat={Infinity}
    />
    </div>
    </div>
    <div className="home-body">
      <div className="body-section">
        <div className="message">
          <h1 className='cliheadingmate- size'>What is Climate Change?</h1>
          <p>Climate change refers to the long-term changes in the Earth’s average temperatures and weather patterns. While the planet’s climate has changed naturally over millions of years, the rapid warming seen in the last century is caused by human activities. Burning fossil fuels like coal, oil, and gas releases greenhouse gases such as carbon dioxide (CO₂) into the atmosphere. These gases trap heat, causing the Earth to warm up faster than ever before.</p>
<p>
Since the start of the Industrial Revolution, CO₂ levels in the atmosphere have risen by about 50%, leading to rising global temperatures. Over the past decade, global temperatures have been approximately 1.2°C higher than they were in the late 19th century. This warming is already disrupting weather patterns, causing more extreme heatwaves, storms, and heavy rainfall.</p>
        </div>
        <div className="picture">
          <img src='/echo1.webp'/>
        </div>
      </div>
      <div className="body-section2">
        <div className="message">
          <h1 className='size'>How Does Climate Change Affect Us?</h1>
          <p>The effects of climate change are already being felt across the globe. Rising temperatures are melting glaciers and polar ice caps, contributing to rising sea levels. Extreme weather events, like hurricanes, droughts, and floods, are becoming more frequent and intense, devastating communities and economies. For instance, recent hurricanes have caused billions of dollars in damages and claimed hundreds of lives.</p>
          <p>Warmer oceans not only fuel stronger storms but also harm marine ecosystems like coral reefs. On land, prolonged droughts in regions such as East Africa have left millions of people without food or water. These changes highlight the urgent need to act now to protect both people and nature</p>
        </div>
        <div className="picture">
          <h1>2024 set to the <span>Hottest Year</span> on record.</h1>
          <img src="/echo2.webp"/>
        </div>
        </div>
        <div className="lastsection">
          <h1 className='size'>How EchoEvaluator Can Help</h1>
          <p>EchoEvaluator is designed to empower individuals to take action against climate change. On our platform, you can calculate your carbon footprint to understand how your daily activities impact the environment. If your carbon footprint is higher than ideal, EchoEvaluator provides personalized tips to help you reduce it.</p>
          <p>Simple changes like conserving energy, reducing waste, and adopting sustainable habits can make a big difference. With EchoEvaluator, you’ll gain the knowledge and tools needed to make meaningful contributions toward a greener future. Start your journey today—small steps lead to big changes for our planet.</p>
        </div>
      <Footer/>
      </div>
      </div>
      
     
    </>
  )
}

export default Home
