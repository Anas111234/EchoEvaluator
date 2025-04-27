

import '../Styling/Home.css';
import React, { useState } from "react";

const Accordion = () => {
    const questionsAnswers = [
        { 
            question: "What is the purpose of the EchoEvaluator Web Application?", 
            answer: "The EchoEvaluator Web Application is designed to help people learn about climate change and how their daily actions affect the environment. It also provides a way to calculate how much carbon dioxide (or other greenhouse gases) your activities produce, called your 'carbon footprint,' so you can understand how to reduce it." 
        },
        { 
            question: "How does the carbon footprint calculator work?", 
            answer: "The calculator works by asking you simple questions about your daily habits, like how you travel (car, bus, or bike), how much energy you use at home, the food you eat, and the waste you produce. Based on your answers, it calculates the amount of greenhouse gases your actions create and gives you an estimate of your carbon footprint." 
        },
        { 
            question: "Why is understanding my carbon footprint important?", 
            answer: "Knowing your carbon footprint helps you see how your choices affect the environment. For example, driving a car every day might create more pollution than walking or biking. Once you understand your impact, you can make small changes that help reduce pollution, protect the environment, and slow down climate change." 
        },
        { 
            question: "What kind of data do I need to provide for accurate calculations?", 
            answer: "To get accurate results, you will need to provide information about: \n\n- How much electricity, gas, or water you use at home.\n- How often you use transportation like cars, buses, or planes.\n- The types of food you eat, such as meat, dairy, or plant-based meals.\n- How much trash or recycling you produce.\n\nDon’t worry—it’s easy to answer, and the tool will guide you step by step." 
        },
        { 
            question: "Is the EchoEvaluator Web Application free to use?", 
            answer: "Yes, the EchoEvaluator is completely free for everyone. You don’t need to pay anything or subscribe. It’s our way of helping people learn about climate change and take action to make a difference." 
        },
        { 
            question: "How can I reduce my carbon footprint after using the calculator?", 
            answer: "After you get your results, the application will show you simple steps you can take to reduce your carbon footprint. For example, it might suggest using energy-efficient appliances, reducing waste by recycling more, choosing public transportation, or eating more plant-based meals. Even small changes can add up to make a big difference over time." 
        },
        { 
            question: "Who can benefit from using this application?", 
            answer: "Anyone who wants to understand their impact on the environment can use this tool. Whether you're a student, a working professional, or someone curious about climate change, the EchoEvaluator is for you. It’s especially helpful for people who want to live a more eco-friendly lifestyle but aren’t sure where to start." 
        },
        {
            question: "What technologies power this application?", 
            answer: "MongoDB: A database to securely store user data. \n Express.js: A tool that handles how the website communicates with the database. \n React.js: The part of the website you see and interact with. \n Node.js: The engine that runs everything in the background to make it work smoothly."
                
            
        }
,        
        { 
            question: "What makes the EchoEvaluator different from other carbon footprint calculators?", 
            answer: "The EchoEvaluator is not just about numbers. It’s designed to be user-friendly and educational. It helps you understand why reducing your carbon footprint matters and gives you personalized tips based on your results. Plus, the website is interactive and easy to use, even if you’re not tech-savvy." 
        },
        { 
            question: "How is my data handled and stored?", 
            answer: "Your data is safe with us. We only use it to calculate your carbon footprint and provide recommendations. We don’t share your information with anyone else. All data is stored securely, and we follow strict privacy rules to protect your information." 
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            <div className="faqs">Frequently Asked Questions</div>
            {questionsAnswers.map((item, index) => (
                <div key={index}>
                    <div
                        className="accordion-icon"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="accordion-question">{item.question}</span>
                        <span className="accordion-icon-toggle">
                            {expandedIndex === index ? "-" : "+"}
                        </span>
                    </div>
                    <div
                        className={`accordion-panel ${
                            expandedIndex === index ? "active" : ""
                        }`}
                    >
                        <p className="accordion-answer">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
