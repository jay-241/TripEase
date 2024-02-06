# TripEase : A MERN web-application!  [Click Me](https://tripeasego.netlify.app/)

## Author : Jay Rana

## Getting Started

### **Features:**

1. User Authentication
2. Profile Management
3. Expense Management
4. Travel Plan sharing
5. Content Sharing
6. Email notification and Stripe Payment Gateway

### **Home Page**
<img width="1679" alt="home" src="https://user-images.githubusercontent.com/37774914/235185413-10f41cb3-6f1f-4489-8a4b-0ee8bd5a3b6b.png">

### **User Profile Page**
<img width="1531" alt="profile" src="https://user-images.githubusercontent.com/37774914/235185447-c3a715cf-a4b3-45da-b116-42c55e4f7530.png">

### **Expense Management Page**
<img width="1680" alt="expenses" src="https://user-images.githubusercontent.com/37774914/235185472-631ca4db-446c-41ed-a246-191de71de161.png">

### **Plan Page**
<img width="1680" alt="plans" src="https://user-images.githubusercontent.com/37774914/235185485-7994ef76-1cf3-4515-bd44-52a96ae83720.png">


### **Prerequisites:**

Before using this project, you'll need to have the following installed:

- Node version 18.0 or higher 
- Mongo version 6.0 or higher
- A text editor (Visual Studio Code, Atom, Sublime Text, etc.)
- Git
- npm version 8.0 or higher

### **How to run application:**

The first step is to clone the Group project repo in your machine using the below command. Run the below command at the destination in cmd where you want to clone the repository.
```
git clone https://github.com/jay-241/TripEase
```

Next, Change the directory to the client side of the project using:

```
cd .\TripEase\client
```

Next step is, run the below command to instal all the packages and dependencies that is required to run the Assignment.

```
npm install
```

You are all set and now just run the client side using following command.

```
npm start
```

Now, To run the server side of the Assignment, open the cmd with the path of the project's repo.

Next, Change the directory to the server side of the project using:

```
cd .\TripEase\server
```

Next step is, run the below command to instal all the packages and dependencies that is required to run the Assignment.

```
npm install
```

You are all set and now just run the server side using following command.

```
npm start
```

### **Environment Variables:**

This project requires the following environment variables to be set:

```
- MONGO_CONNECTION_URL = <PASTE URI OF MONGODB>
- CLIENT_URL = <PASTE URL OF CLIENT>
- STRIPE_API_KEY = <PASTE URI OF STRIPE API>
- SENDGRID_API_KEY = <PASTE URI OF SENDGRID API>
```


### **Folder Structure**

## Frontend:

```
client
├── public
│   ├── images  
├── src
│   ├── assets
│   ├── components
│   ├── constants
│   ├── layouts
│   ├── pages
│   ├── redux
│   ├── utils
├── App.scss
├── App.js
├── index.js
└── index.css
```

## Backend:

```
server
├── Assets
├── Controllers
├── Middlewares
├── Models
├── Routes
├── Utils
├── .env
├── server.js
```
