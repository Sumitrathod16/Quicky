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
      max-width: 600px;
      margin: 50px auto;
      padding:0 16px;
     font-family: Arial, sans-serif;
}

.accordion {
  border-top: 1px solid;
  width:auto;
}

.faq-item {
  border-bottom: 1px solid #ccc;
  padding: 15px;
  cursor: pointer;
  transition: background 0.3s;
}

.faq-item:hover {
  background: #b9b9b9ff;
  
  }

.faq-question {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:1rem;
}

.faq-answer {
  margin-top: 10px;
  font-size: 0.95rem;
  color: #333;
  line-height:1.5;
}


 @media (max-width: 480px) {
  .faq-container {
    margin: 15px auto;
    padding: 0 10px;
  }

  .faq-question {
    font-size: 0.9rem;
  }

  .faq-answer {
    font-size: 0.8rem;
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
