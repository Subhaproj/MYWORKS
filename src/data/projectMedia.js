import airbnbExplore from "../assets/software-projects/airbnb-clone/screenshots/Explore.png";
import airbnbHelpcenter from "../assets/software-projects/airbnb-clone/screenshots/helpcenter.png";
import airbnbHomepage from "../assets/software-projects/airbnb-clone/screenshots/homepage.png";
import airbnbLogin from "../assets/software-projects/airbnb-clone/screenshots/login.png";
import airbnbPropertydetails from "../assets/software-projects/airbnb-clone/screenshots/Propertydetails.png";
import airbnbSignup from "../assets/software-projects/airbnb-clone/screenshots/signup.png";
import airbnbTripspage from "../assets/software-projects/airbnb-clone/screenshots/Tripspage.png";
import airbnbWishlist from "../assets/software-projects/airbnb-clone/screenshots/wishlist.png";
import airbnbDemo from "../assets/software-projects/airbnb-clone/videos/Airbnbclone Demo.mp4";

import slambookLoading from "../assets/software-projects/slambook/screenshots/1.png";
import slambookSignup from "../assets/software-projects/slambook/screenshots/2.png";
import slambookLogin from "../assets/software-projects/slambook/screenshots/3.png";
import slambookLogsuccess from "../assets/software-projects/slambook/screenshots/4.png";
import slambookexitwarning from "../assets/software-projects/slambook/screenshots/5.png";
import slambookhome from "../assets/software-projects/slambook/screenshots/6.png";
import slambookdataentry from "../assets/software-projects/slambook/screenshots/7.png";
import slambookdatadisplay from "../assets/software-projects/slambook/screenshots/8.png";
import slambookexit from "../assets/software-projects/slambook/screenshots/10.png";

import adminAddProperty from "../assets/software-projects/admin-dashboard/screenshots/addproperty.png";
import adminAddPropertyButton from "../assets/software-projects/admin-dashboard/screenshots/addpropertybutton.png";
import adminLogin from "../assets/software-projects/admin-dashboard/screenshots/adminlogin.png";
import adminSignup from "../assets/software-projects/admin-dashboard/screenshots/adminsignup.png";
import adminAnalytics from "../assets/software-projects/admin-dashboard/screenshots/analytics.png";
import adminBookingDetails from "../assets/software-projects/admin-dashboard/screenshots/bookingdetails.png";
import adminBookings from "../assets/software-projects/admin-dashboard/screenshots/bookings.png";
import adminDashboard from "../assets/software-projects/admin-dashboard/screenshots/dashboard.png";
import adminGuestDetails from "../assets/software-projects/admin-dashboard/screenshots/guestdetails.png";
import adminGuests from "../assets/software-projects/admin-dashboard/screenshots/guests.png";
import adminLogout from "../assets/software-projects/admin-dashboard/screenshots/logout.png";
import adminMessages from "../assets/software-projects/admin-dashboard/screenshots/messages.png";
import adminMessaging from "../assets/software-projects/admin-dashboard/screenshots/messaging.png";
import adminNotification from "../assets/software-projects/admin-dashboard/screenshots/Notification.png";
import adminProfile from "../assets/software-projects/admin-dashboard/screenshots/profile.png";
import adminProperties from "../assets/software-projects/admin-dashboard/screenshots/properties.png";
import adminPropertyDetails from "../assets/software-projects/admin-dashboard/screenshots/propertydetails.png";
import adminSearch from "../assets/software-projects/admin-dashboard/screenshots/search.png";
import adminSettings from "../assets/software-projects/admin-dashboard/screenshots/settings.png";
import adminSidebar from "../assets/software-projects/admin-dashboard/screenshots/sidebar.png";

import adminDemo from "../assets/software-projects/admin-dashboard/videos/admin panel demo (1).mp4";

const projectMedia = {

    "airbnb-clone": {
        screenshots: [
          { image: airbnbLogin, title: "Login Page"},
          { image: airbnbSignup, title: "SignUp Page"},
          { image: airbnbHomepage, title: "Home Page"},
          { image: airbnbExplore, title: "Search & Explore"},
          { image: airbnbPropertydetails, title: "Listing Details"},
          { image: airbnbWishlist, title: "Favorites & Wishlists"},
          { image: airbnbTripspage, title: "Trips"},
          { image: airbnbHelpcenter, title: "Help Center",},
        ],
        demoVideo: airbnbDemo,
    },
    "slambook": {
    screenshots: [
      { image: slambookLoading, title: "Loading Screen" },
      { image: slambookSignup, title: "Sign Up" },
      { image: slambookLogin, title: "Login" },
      { image: slambookLogsuccess, title: "Login Successful" },
      { image: slambookexitwarning, title: "Exit Warning" },
      { image: slambookhome, title: "Home Page" },
      { image: slambookdataentry, title: "Data Entry" },
      { image: slambookdatadisplay, title: "Data Display" },
      { image: slambookexit, title: "Exit Screen" },
    ],
  },
    "admin-dashboard": {
    screenshots: [
      { image: adminLogin, title: "Admin Login" },
      { image: adminSignup, title: "Admin Signup" },
      { image: adminDashboard, title: "Dashboard" },
      { image: adminSidebar, title: "Sidebar Navigation" },
      { image: adminBookings, title: "Bookings" },
      { image: adminBookingDetails, title: "Booking Details" },
      { image: adminProperties, title: "Properties" },
      { image: adminPropertyDetails, title: "Property Details" },
      { image: adminAddProperty, title: "Add Property" },
      { image: adminAddPropertyButton, title: "Add Property Button" },
      { image: adminGuests, title: "Guests" },
      { image: adminGuestDetails, title: "Guest Details" },
      { image: adminAnalytics, title: "Analytics" },
      { image: adminMessages, title: "Messages" },
      { image: adminMessaging, title: "Messaging" },
      { image: adminNotification, title: "Notifications" },
      { image: adminProfile, title: "Profile" },
      { image: adminSearch, title: "Search" },
      { image: adminSettings, title: "Settings" },
      { image: adminLogout, title: "Logout" },
    ],
    demoVideo: adminDemo,
  },
};

export default projectMedia;