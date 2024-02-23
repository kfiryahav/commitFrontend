# Frontend - NextJS - ReactJS

## Description

The frontend of this project is built using Next.js, a React framework for server-side rendering and client-side navigation.
It provides to add a user in the DB with API calls to the backend, also the get user from the backend by it's uniqie email.

## Setup

To set up the frontend of the project, follow these steps:

1. Ensure you have Node.js version 20.11 installed.
2. Open a terminal window and navigate to the project directory.
3. Install Next.js version 14.1.0 or later by running:

   ```bash
   npm install next@14.1.0
   ```

4. Run the following command to install dependencies:

```bash
npm install
```

## App Behavior and Additional Information

the app makes an API calls functions to the Nodejs backend application (you can find them in the `apiService.js` file):

- `postFormData`: It sends a JSON object in the request body with the following properties in order to add the user to the DB:
  - `email`: Email address of the user.
  - `phone`: Phone number of the user.
  - `password`: Password of the user.

- `getUser`: It sends the email address as a query parameter in the format `?email=email@example.com`, then the backend can find the user by the unique email in the DB.
- The app also includes form validation using the `useForm` hook provided by React.
- this project uses `redux` in order to store the user information.
  - After adding the user, the app saves the user information from the response and store it in the `cookies`, then it makes the call in the `UserDetails` component.
- When the app makes a GET request the in the `UserDetails` component, we store the user details in `redux` from the reponse.

## Run the application

- Run the command:

   ```bash
   npm run start
   ```

# Enjoy :)
