import React, { useState } from 'react';


const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need a technical background to start learning programming?",
      answer: "No! Most beginner courses assume no prior experience. A logical mindset and consistency are more important than a technical background."
    },
    {
      question: "What programming language should I start with?",
      answer: "Start with Python or JavaScript, depending on your goals. Python is great for beginners and data science, JavaScript for web development."
    },
    {
      question: "What tools or software do I need to install",
      answer: "You can start in-browser, but locally you'll need tools like VS Code, Git, Node.js, or a Python interpreter."
    },
    {
      question: "How long does it take to become a developer?",
      answer: "On average, 6-12 months with consistent effort can prepare you for a junior role."
    },
    {
      question:"How do one keep your skills up to date?",
      answer:"Regularly read documentation, follow updates on platforms like GitHub and Dev.to, take online courses (e.g. Udemy, Frontend Masters), and build side projects to try new tools."
    },
    {
      question:"Which frameworks and libraries are commonly use?",
      answer:"React, Next.js, Express.js, Tailwind CSS, Prisma, Redux, and Axios are some I regularly use. I also work with tools like Jest, Vite, and Webpack for builds and testing"
    },
    {
      question:"Should one contribute to open-source projects?",
      answer:"Yes, one should contribute to small open-source libraries and fix issues or add features and also maintain  own public repos and share reusable components."
    }

  ];

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <> 
    <style>
    {`  
     .faq-container {
      max-width: 800px;
      margin: 50px auto;
      padding: 40px 20px;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.1);
      position: relative;
      overflow: hidden;
}

.faq-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%);
  pointer-events: none;
}

.faq-container h2 {
  color: white;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1;
}

.accordion {
  border-top: 2px solid rgba(255,255,255,0.2);
  width: auto;
  position: relative;
  z-index: 1;
}

.faq-item {
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  margin-bottom: 8px;
  backdrop-filter: blur(10px);
  background: rgba(255,255,255,0.1);
}

.faq-item:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.faq-item.active {
  background: rgba(255,255,255,0.15);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.faq-question {
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  color: white;
  line-height: 1.4;
}

.faq-answer {
  margin-top: 15px;
  font-size: 1rem;
  color: rgba(255,255,255,0.9);
  line-height: 1.6;
  padding: 15px;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  border-left: 3px solid rgba(255,255,255,0.3);
}


.arrow {
  font-size: 1.4rem;
  color: white;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.faq-item.active .arrow {
  transform: rotate(45deg);
}


 @media (max-width: 768px) {
  .faq-container {
    margin: 30px auto;
    padding: 30px 15px;
    max-width: 95%;
  }

  .faq-container h2 {
    font-size: 2rem;
  }

  .faq-item {
    padding: 15px;
  }

  .faq-question {
    font-size: 1rem;
  }

  .faq-answer {
    font-size: 0.95rem;
    padding: 12px;
  }
}

 @media (max-width: 480px) {
  .faq-container {
    margin: 20px auto;
    padding: 20px 10px;
  }

  .faq-container h2 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  .faq-question {
    font-size: 0.95rem;
  }

  .faq-answer {
    font-size: 0.9rem;
  }

  .arrow {
    font-size: 1.2rem;
  }

    
`}
    </style>
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="arrow">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
   </>
  ); 
};

export default FAQAccordion;
