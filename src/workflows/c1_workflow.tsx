import FAQWorkflow from "@/plugins/plugin_faq";

const faqs = 
    [
        {
            "question": "HOW DO I BUY A SHIPPING CONTAINER?",
            "answer": "Simple, go to www.containerone.net and scroll down to type your zip code. Once done, choose the container you want and then add it to your cart. When finished, go to your cart page and you’ll have an option to pay by card or check/ACH. Follow the steps in the checkout and you’ll have your order placed in no time. Learn how to buy a shipping container online here."
        },
        {
            "question": "CAN I BUY A BLUE SHIPPING CONTAINER?",
            "answer": "Generally no, you cannot select a specific container if you are buying a used container. If you are buying a new container you may have the option to select the color you want. Please get in contact with us before placing your order."
        },
        {
            "question": "CAN I LOOK AT THE SHIPPING CONTAINER BEFORE I BUY IT?",
            "answer": "No, unfortunately you cannot. Container depots are busy commercial operations and their insurance company will not allow the general public to visit their yard for safety purposes."
        },
        {
            "question": "IS THERE A SALES TAX ON THE PURCHASE OF A SHIPPING CONTAINER?",
            "answer": "We do not charge a sales tax on shipping container purchases."
        },
        {
            "question": "DO YOU OFFER VOLUME DISCOUNTS TO RESELLERS?",
            "answer": "We offer a wholesale price to everyone who buys 3+ containers per transaction."
        },
        {
            "question": "DO YOU SELL REFRIGERATED OR INSULATED UNITS?",
            "answer": "Yes, we do. Call 866-210-8419 or email us at info@containerone.net for pricing as it varies by current market and availability."
        },
        {
            "question": "DO YOU SELL 53’ SHIPPING CONTAINERS?",
            "answer": "Yes, but due to the length and height of these containers you will have to assist in unloading the trailer. In most cases you will need a forklift or a crane that can lift 12,000 lbs. Please get in contact with us so we can check availability in your area."
        },
        {
            "question": "WHY DO 20' SHIPPING CONTAINERS COST MORE THAN 40' SOMETIMES?",
            "answer": "The cost is dependent on the current supply and demand of the container market. 20’ containers are less common, which means 40’ containers will be cheaper due to available inventory."
        },
        {
            "question": "WHAT ARE THE SHIPPING CONTAINER DIMENSIONS?",
            "answer": "10 ft Collapsible Shipping Container: 10’ long, 8’ wide, and 8’ 6” tall\n20 ft Standard Shipping Container: 20’ long, 8’ wide, and 8’ 6” tall\n20 ft High Cube Container: 20’ long, 8’ wide, and 9’ 6” tall\n40 ft Standard Shipping Container: 40’ long, 8’ wide, and 8’ 6” tall\n40 ft High Cube Container: 40’ long, 8’ wide, and 9’ 6” tall\n53 ft High Cube Shipping Container: 53’ long, 8’ 6\" wide, and 9’ 6” tall\nClick here for more information on the actual ISO (International Shipping Organization) dimensions and specs."
        },
        {
            "question": "WHAT’S THE DIFFERENCE BETWEEN YOUR WIND AND WATER TIGHT, CARGO WORTHY AND NEW/1TRIP SHIPPING CONTAINERS?",
            "answer": "Wind and Water Tight (WWT): Shipping containers that can no longer be certified to ship cargo on trains and ships.\nCargo Worthy (CW): Shipping containers that are guaranteed to pass a Marine Survey to be re-certified to be loaded back on a ship or train.\nNew/1 Trip: New shipping containers that have only been loaded one time from the manufacturer."
        },
        {
            "question": "DO SHIPPING CONTAINERS HAVE TITLES?",
            "answer": "No, containers do not have titles. Your invoice and receipt from us is all you need to prove ownership."
        },
        {
            "question": "WHAT’S THE DELIVERY TIMELINE?",
            "answer": "Timelines always depend on a few factors, such as your location, when we receive your payment, weather conditions and more. Our Delivery/Dispatch department will contact you to schedule a date and time for delivery. Please ensure that both your phone number and email address are provided when ordering. Expedited delivery options are available, but please check with our team first by chatting with one of our representatives. Click the red chat bubble on the bottom right of the screen to start chatting."
        },
        {
            "question": "HOW ARE SHIPPING CONTAINERS DELIVERED TO ME?",
            "answer": "Common container delivery methods include:\nRoll Off: The shipping container will arrive on a trailer that will tilt back and place the edge of the container on the ground. The trailer will pull away and allow the container to slide, or roll, off onto the ground.\nCustomer Assist: This requires the customer to have an anchor point on the delivery site. A chain can be attached to the shipping container and then attached to the anchor point. The trailer will then pull away and the container will slide onto the ground. Click here for more container delivery options and information."
        },
        {
            "question": "HOW SHOULD I PREPARE THE SITE FOR DELIVERY?",
            "answer": "You want to ensure that you are placing the container on flat and level ground. You can make a gravel or concrete foundation or even just put it in your yard when it arrives without preparation. You will need 120' of space in a straight line for a container to be delivered via a roll-off bed."
        },
        {
            "question": "I ALREADY HAVE A SHIPPING CONTAINER, CAN YOU MOVE IT? WHAT IF THE CONTAINER IS LOADED?",
            "answer": "We do not move containers, but we can give you a list of trucking companies that will assist you with moving containers. If the container is loaded you will need to discuss that with the trucking company that will be transporting your container."
        },
        {
            "question": "I NEED TO EXPORT MY SHIPPING CONTAINER, CAN YOU HELP WITH THAT?",
            "answer": "Absolutely, we can refer you to an international freight forwarder that will handle all your international shipping needs."
        },
        {
            "question": "HOW DO I PREPARE THE CONTAINER FOR PAINTING?",
            "answer": "Pressure wash only and let it dry. Apply proper paint with pneumatic paint sprayer or roller. DO NOT sandblast or grind the container. Learn more about painting a shipping container here."
        },
        {
            "question": "I'M HAVING A TOUGH TIME OPENING AND CLOSING MY DOORS.",
            "answer": "You may need to grease or oil the hinges and they will get easier to open and close with use. Ensure the container is sitting on flat, level ground. If it is not then the frame may twist and make it difficult to open the doors. Learn more about shipping container door issues here."
        },
        {
            "question": "ARE ROLL-UP DOORS WIND AND WATER TIGHT?",
            "answer": "Roll-up doors are wind and water tight if they are installed correctly."
        },
        {
            "question": "HOW MANY ROLL-UP DOORS CAN BE ADDED TO A CONTAINER?",
            "answer": "This can depend on your container and the sizing of any roll-up doors and windows. Typically, roll-up doors can be added to either sides. Please keep in mind that there are structural limitations on door placement without further reinforcement, and different door models may have different clearance needs. We will gladly help look into any specific solutions you are trying to figure out if you need further help. Purchase shipping container roll-up doors here."
        }
    
];


let workflowResult = "";


export default function C1Workflow(question: any) {
    const answer = FAQWorkflow(question, faqs);
    if (answer) {
      
        workflowResult = answer;
        return  workflowResult;
    }
   
}
