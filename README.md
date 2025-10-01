# AyurSutra - Panchakarma Therapy Management System

AyurSutra is a comprehensive web-based management system designed specifically for Panchakarma therapy centers. This application streamlines the management of patients, practitioners, therapies, and appointments, making it easier for ayurvedic clinics to operate efficiently.

## Features

### Admin Panel
- **Dashboard**: Overview of clinic operations and statistics
- **Patient Management**: Add, view, and manage patient records
- **Practitioner Management**: Manage therapists and their schedules
- **Therapy Management**: Maintain therapy types and their details
- **Appointment Scheduling**: Schedule and track therapy sessions
- **Reporting**: Generate reports and analytics

### Client Portal
- **User-friendly Interface**: Easy navigation for patients
- **Appointment Booking**: Schedule therapy sessions online
- **Therapy Information**: Access details about different Panchakarma therapies
- **Profile Management**: Update personal information and view history

## Tech Stack

### Frontend
- HTML5, CSS3, JavaScript
- Responsive design for all devices

### Backend
- Node.js with Express.js
- MongoDB for database
- RESTful API architecture

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmbrishJr/SIH-AyurSutra-Therapy-Management-System-.git
   cd AyurSutra-Panchakarma-therapy-management-Application--main-
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the backend server**
   ```bash
   npm start
   ```

5. **Open the application**
   - Open `index.html` in your web browser for the client interface
   - Access the admin panel at `admin/home_admin.html`

## Project Structure

```
├── admin/               # Admin panel HTML files
├── backend/             # Backend server code
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── app.js           # Express application setup
│   └── server.js        # Server entry point
├── client/              # Client-side HTML files
├── index.html           # Main entry point
└── README.md            # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors who have participated in this project
- Special thanks to the Ayurvedic practitioners who provided valuable insights

## Contact

For any queries or support, please contact the project maintainers.
