Phase 5 capstone project 

Use a Rails API backend with a React frontend.

Have at least three models on the backend, that include the following:
  At least two one-to-many relationships.
  At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. This joins table must include a user submittable attribute.
  Full CRUD actions for at least one resource.
  Minimum of create and read actions for EACH resource.

Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that       allows users to navigate between routes.

Implement authentication/authorization, including password protection. A user must be able to:
  sign up with a new user account,
  log in to the site with a secure password and stay logged in via user ID in the session hash, and
  log out of the site.

  #--------------------------------------------------------------------------------------------------------------------#

  # MODEL #
  users, trips, activites, memories

    User has many activies and many trips through activies and many memoties through activities 
    Trip will belong to a user and have many activires 
    Activity will belong to a user and belong to a trip 
    memory will belong to a user and a activity 

    #--------------------------------------------------------------------------------------------------------------------#

 # ROUTES #
  Login/ create profile 
  Home page displays a users trips 
  Click on a trip to expand the users activities or create a activity 
  Filter trips by date 
  User profile page displays how many trips have been created


#--------------------------------------------------------------------------------------------------------------------#

# COMPONENTS #

App 
  NavBar 
    Home 
    User drop down for profile, create a profile, settings , login/ logout
  Trip container 
    renders all trips 
    trip filter 
    trip details card 
      create activity 
      show activity
      ** share with other platform ** strech goal 
        create memeory 
  Trip create page 
  

  #--------------------------------------------------------------------------------------------------------------------#

# To Do #

2/6 
  Create database test associations 
    Seed for associations 
  Login/logout 
  User create page 
  Trip create page 
  NavBar 

 2/7
  Create activities for trip 
  Create memories for activities
  Filter all trips by date 
  User profile page 
     ** Badges for # of trips taken ** strech goal 
 
2/8 
  Bootstrap styling 
  Connect to other social networks
  Map component 
  
