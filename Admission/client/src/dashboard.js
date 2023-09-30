import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './dashboard.css';

import image1 from './images/image1.jpg';

function Dashboard() {
  return (
    <div class="cont">
      <marquee class="marq" behavior="scroll" direction="left" scrollamount="20" loop="infinite">
  Are you ready to embark on a journey of knowledge, growth, and personal development? Look no further than KIET College, where we believe in nurturing the next generation of leaders, innovators, and change-makers.
</marquee>
<div class="img">
            <img src={image1} alt="Image 1" />
          </div>
      
      <div className="w3-container">
            <div className="w3-card-4" style={{ width: '40%' }}>
                <div className="w3-row">
                    <div className="w3-col s6">
                        <img
                            src="https://www.zdnet.com/a/img/resize/f49a39ce7b5e84140a55a52ece9950e811b6fc86/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1024"
                            alt="Alps"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="w3-col s6">
                    <h1> ARTIFICIAL INTELLEGENCE</h1>

                        <p style={{ fontWeight: 'bold', fontSize: '15px', lineHeight: '1.5' }}>
                        Artificial intelligence (AI) is revolutionizing the way we interact with technology. It enables computers to perform complex tasks that traditionally required human intelligence. Through machine learning algorithms, AI systems can analyze vast amounts of data, identify patterns, and make accurate predictions. From voice assistants that understand and respond to our commands to recommendation systems that personalize our online experiences, AI is enhancing various aspects of our lives. However, ethical considerations arise as AI becomes more pervasive, including concerns about privacy, bias, and job displacement. It is crucial to navigate these challenges responsibly and ensure that AI technologies are developed and deployed ethically. As we look to the future, advancements in AI hold immense potential to transform industries and drive innovation, making it an exciting field to explore and understand.
                        </p>

                    </div>
                </div>
                {/* <div className="w3-container w3-center">
          <p>The Italian / Austrian Alps</p>
        </div> */}
            </div>
            <div className="w3-card-4" style={{ width: '40%' }}>
                <div className="w3-row">
                    <div className="w3-col s6">
                    <h1> DATA SCIENCE</h1>
                        <p style={{ fontWeight: 'bold', fontSize: '15px', lineHeight: '1.5' }}>
                        Data science is a multidisciplinary field that combines statistical analysis, programming, and domain knowledge to extract valuable insights from data. It involves collecting, cleaning, and organizing vast amounts of information, enabling organizations to make data-driven decisions. Data scientists use various tools and techniques, such as machine learning algorithms and data visualization, to uncover patterns, trends, and correlations in data. 
                        By leveraging these insights, businesses can optimize processes, improve efficiency, and gain a competitive edge. Data science is driven by a curious mindset and the ability to ask the right questions, as well as a solid foundation in mathematics and programming. With the exponential growth of data in today's digital age, the demand for skilled data scientists continues to rise, making it an exciting and rewarding career path for those interested in working with data.
                        </p>


                    </div>
                    <div className="w3-col s6">
                        <img
                            src="https://thumbs.dreamstime.com/b/big-data-center-analyzes-data-science-background-presentation-big-data-center-analyzes-data-science-background-159196598.jpg"
                            alt="Alps"
                            style={{ width: '100%' }}
                        />
                    </div>

                </div>
                
                
                {/* <div className="w3-container w3-center">
          <p>The Italian / Austrian Alps</p>
        </div> */}
        
        </div>
        <div className="w3-card-4" style={{ width: '40%' }}>
                <div className="w3-row">
                    <div className="w3-col s6">
                        <img
                            src="https://s40424.pcdn.co/in/wp-content/uploads/2023/03/types-of-machine-learning.jpg.optimal.jpg"
                            alt="Alps"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div className="w3-col s6">
                    <h1> MEACHINE LEARNING</h1>
                        <p style={{ fontWeight: 'bold', fontSize: '15px', lineHeight: '1.5' }}>
                        Machine learning is a subset of artificial intelligence that focuses on enabling computers to learn and improve from experience without being explicitly programmed. It involves the development of algorithms and models that can automatically analyze and interpret complex data patterns. Machine learning algorithms are trained on vast datasets, allowing them to identify correlations, make predictions, and generate insights. From image recognition and natural language processing to recommendation systems and fraud detection, machine learning has found applications in various domains. It relies on concepts such as supervised learning, unsupervised learning, and reinforcement learning to train models and make accurate predictions. As the volume of data continues to grow exponentially, machine learning is becoming increasingly important in unlocking valuable knowledge and driving innovation in today's data-driven world.
                        </p>

                    </div>
            

                </div>
                {/* <div className="w3-container w3-center">
          <p>The Italian / Austrian Alps</p>
        </div> */}
        
        </div>
            <div className="w3-card-4" style={{ width: '40%' }}>
                <div className="w3-row">
                    <div className="w3-col s6">
                    <h1> CYBER SECURITY</h1>
                        <p style={{ fontWeight: 'bold', fontSize: '15px', lineHeight: '1.5' }}>
                        Cybersecurity is a critical field dedicated to protecting computer systems, networks, and data from unauthorized access, breaches, and attacks. With the increasing reliance on technology and interconnectedness, ensuring robust cybersecurity measures has become more important than ever. Cybersecurity professionals employ a range of techniques and tools to safeguard sensitive information, detect and mitigate threats, and prevent cybercrime. This includes implementing firewalls, encryption, access controls, and intrusion detection systems. Additionally, cybersecurity involves continuous monitoring, vulnerability assessments, and incident response to stay one step ahead of evolving threats. The field encompasses various disciplines, such as network security, application security, and digital forensics. In a world where cyber threats pose significant risks to individuals, organizations, and even nations, cybersecurity plays a crucial role in maintaining the integrity, confidentiality, and availability of digital systems and information.





                        </p>


                    </div>
                    <div className="w3-col s6">
                        <img
                            src="https://www.ict.eu/sites/corporate/files/images/Cyber%20security%20header_1920x1280px%20%281%29.jpg"
                            alt="Alps"
                            style={{ width: '100%' }}
                        />
                    </div>

                </div>
                {/* <div className="w3-container w3-center">
          <p>The Italian / Austrian Alps</p>
        </div> */}
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
