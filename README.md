# S.R.S Ashensorë - Elevator Company Website

A modern, responsive website for S.R.S Ashensorë (Elevators) with integrated backend functionality and admin panel.

## Features

### Public Pages
- **Homepage** (`index.html`) - Main landing page with elevator models and company information
- **Quote Request** (`quote.html`) - Form for customers to request price quotations
- **Contact** (`contact.html`) - Contact form for general inquiries

### Admin Panel
- **Admin Dashboard** (`admin.html`) - Secure admin panel for managing submissions
  - Login credentials:
    - Username: `admin`
    - Password: `shpetimi`
  - View and manage quote requests
  - View and manage contact messages
  - Statistics dashboard

### Backend
- **Client-side Storage** (`backend.js`) - localStorage-based data persistence
  - Secure authentication system
  - Quote request management
  - Contact message management
  - Data persistence across browser sessions

## Usage

### For Users
1. Visit the website homepage
2. Click "Kërko një Kuotë" to request a quote for elevator services
3. Click "Na Kontaktoni" to send a general message

### For Administrators
1. Navigate to `/admin.html` (or use the hidden admin link in bottom-left corner of homepage)
2. Login with credentials:
   - Username: `admin`
   - Password: `shpetimi`
3. View all submissions in the dashboard
4. Switch between quote requests and contact messages using tabs
5. Delete entries as needed

## Technical Details

- **Frontend**: HTML5, Tailwind CSS, JavaScript
- **Storage**: localStorage (client-side persistence)
- **Authentication**: Simple credential-based login system
- **Responsive Design**: Mobile-first approach
- **Icons**: Feather Icons
- **Animations**: GSAP

## File Structure
```
.
├── index.html      # Main homepage
├── quote.html      # Quote request form
├── contact.html    # Contact form
├── admin.html      # Admin panel
├── backend.js      # Backend functionality
└── README.md       # This file
```

## Development

To test locally:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`

## Note

This implementation uses localStorage for data persistence, which means:
- Data is stored in the user's browser
- Data persists across page refreshes
- Each browser/device has its own independent data storage
- For production use with multiple administrators, consider implementing a server-side backend