import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Faq = () => {
    let faq = [
	{
		"id": 1,
		"question": "How to select an Energiser?",
		"answer": "Click the host button, then it will show the list of energisers. Select one which you like. It will show the random generated code. Copy that code and share with your friends.",
    },
    {
		"id": 2,
		"question": "How to join as a user?",
		"answer": " Click the user button, it will ask the code. Paste the code which your host shared with you. Click the join button, It will take the exact energiser which your host chose.",
    },
    {
		"id": 3,
		"question": "Can I see the popular Energisers?",
		"answer": "Yes, you can see that on the main page.",
    },
    {
		"id": 4,
		"question": "Can I change the energiser once I selected?",
		"answer": "Yes, you can go back and select another one.",
    },

];


    return (
        <div>
            <Header />
            <div>
                <h1>FAQ</h1>
            </div>
            <ul>
                {faq.map((item) => {
                    return <li key={item.id}>
                         <p>{item.question}</p>
                         <div>
                             <p>{item.answer}</p>
                         </div>
                         <br></br>
                    </li>;
                })}
            </ul>
            <Footer />
        </div>
    );
};

export default Faq;