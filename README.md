# Digital Course Selling Landing Page

## Overview
Welcome to the Digital Course Selling Landing Page project, a seamless platform for selling and accessing digital courses. Built with React.js, Firebase, Cashfree payment gateway, and Node.js with Express, this application ensures a smooth user experience from payment to course access.

## Features
Landing Page: Informative and engaging landing page with integrated payment gateway.<br>
Payment Integration: Secure payments through Cashfree payment gateway.<br>
User Authentication: Automatic account creation upon successful payment using Firebase Authentication.<br>
Course Access: Users can access purchased courses for 365 days using their email and password.<br>
Backend: Node.js with Express, deployed on Firebase Functions, handles payment processing.<br>
Database: User subscription details stored in Firebase Database.

## Technology Stack
Frontend: React.js<br>
Backend: Node.js with Express, Firebase Functions<br>
Payment Gateway: Cashfree<br>
Authentication and Database: Firebase

## Dependencies
"dependencies": {
    "@cashfreepayments/cashfree-js": "^1.0.4",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.2",
    "bootstrap": "^5.1.3",
    "cashfree-pg": "^4.1.2",
    "cors": "^2.8.5",
    "crypto": "^1.0.1",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "firebase": "^10.12.2",
    "helmet": "^7.1.0",
    "react": "^18.1.0",
    "react-bootstrap": "^2.4.0",
    "react-countup": "^6.2.0",
    "react-dom": "^18.1.0",
    "react-modal": "^3.16.1",
    "react-modal-video": "^2.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "sass": "^1.77.5",
    "swiper": "^8.2.2",
    "web-vitals": "^2.1.4"
  }

## Key Functionalities
#### Landing Page
User Signup and Payment: Users can sign up and make payments through the Cashfree payment gateway.<br>
Account Creation: Upon successful payment, user accounts are created using Firebase Authentication.<br>
Subscription Details: User subscription details are stored in Firebase Database.

#### Course Access
Login: Users can log in with their email and password to access purchased courses.<br>
Course Availability: Courses are accessible for 365 days from the date of purchase.

#### Admin Features
Payment Processing: Handled by Node.js with Express, deployed on Firebase Functions.<br>
Secure Transactions: Integration with Cashfree ensures secure payment processing.

## Contribution
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, please contact connectyuvarajs@gmail.com.
