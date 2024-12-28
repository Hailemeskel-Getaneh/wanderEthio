


# WanderEthio

WanderEthio is a comprehensive tourism platform designed to enhance the travel experience in Ethiopia. It offers a seamless registration and login process for tourists, enabling them to manage bookings and explore the rich cultural heritage and breathtaking landscapes of Ethiopia. With an easy-to-use interface and secure authentication, WanderEthio ensures a smooth and enjoyable journey for every traveler.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Payment Integration](#payment-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

WanderEthio is a MERN stack application built using Vite for the frontend and Nodemon for the backend.
 It includes detailed pages for various destinations in Ethiopia,
 covering aspects such as history, top attractions, culture, accommodations, and more.
 The website also features sections on Ethiopian music, food, films, and
a registration/payment system integrated with Chapa.

## Features

- **Destination Pages**: Each destination includes:
  - About it
  - History
  - Top Attractions
  - Getting There
  - Culture and Traditions
  - Accommodations (hotels and restaurants)
  - Best Time to Visit
  - FAQ with answers
  - Google Map integration
  - Images and videos showcasing main areas and places

- **Additional Sections**:
  - About Us
  - Contact Us
  - Services Offered
  - Ask a Question Page
  - Cultural Insights (music, food, dressings, films)

- **User Registration and Payment**: Users can register and make payments through the
integrated Chapa payment system.

## Technologies Used

- **Frontend**: 
  - React (with Vite for faster development)

- **Backend**:
  - Node.js
  - Express
  - MongoDB (with Mongoose)

- **Development Tools**:
  - Nodemon for automatic server restarts
  - dotenv for managing environment variables

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Hailemeskel-Getaneh/wander.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd wander
   ```

3. **Install Dependencies**:
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd backend
     npm install
     ```

4. **Set Up Environment Variables**:
   - Create a `.env` file in the `backend` directory and add the necessary environment variables
   -  (e.g., database connection string, Chapa API keys).

5. **Run the Development Server**:
   - Start the backend server:
     ```bash
     cd backend
     npm run start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm run dev
     ```

## Usage

- Visit `http://localhost:4000` (or the specified port) to access the application in your web browser.
- Explore the various destination pages and additional sections.

## Environment Variables

The following environment variables are required for the project to function correctly:

- `MONGO_URI`: MongoDB connection string
- `CHAPA_API_KEY`: Your Chapa API key

## Payment Integration

Payments are processed using the Chapa payment gateway. Ensure that your API keys are correctly set in the `.env` file for testing.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, feel free to reach out:

- **Your Name**: [hailegetaneh1221@gmail.com](mailto:hailegetaneh1221@gmail.com)
- **GitHub**: [Hailemeskel-Getaneh](https://github.com/Hailemeskel-Getaneh)
```

