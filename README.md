# React Google OAuth2 Project

This project demonstrates how to implement Google OAuth 2.0 authentication in a React application, with deployment on AWS S3 and HTTPS enabled via CloudFront.

## Prerequisites

- Node.js and npm installed
- Google Cloud Platform account
- AWS account

## Google Cloud Platform Setup

1. **Create a New Project**: Go to [Google Cloud](https://cloud.google.com) and create a new project.

2. **OAuth Consent Screen**:
   - Navigate to the OAuth consent screen.
   - Select **External** user type.
   - Name your app, set the developer support email, and contact email. Save and proceed to the scope screen.
   - Select `userinfo` and `profile` scopes, then save and continue.
   - Add test users who can log in to test your application. Save and continue, then return to the dashboard.

3. **Create OAuth Credentials**:
   - Go to the **Credentials** tab and create credentials > OAuth Client ID > Web Application.
   - Add Authorized JavaScript Origins URLs:
     - `http://localhost`
     - `http://localhost:5173` (for Vite) or `http://localhost:3000` (for CRA)
   - Add the same URLs to Authorized redirect URIs.
   - Copy your client ID and secret, and store them securely.

## Project Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Askari64/react-google-oauth2.git
   cd react-google-oauth2
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory and add your Google OAuth client ID:
     ```plaintext
     VITE_CLIENT_ID=your-google-client-id
     ```

4. **If Not Cloning the Repository**:
   - Install necessary packages:
     ```bash
     npm install gapi-script react-google-login
     ```
   - Import `GoogleOAuthProvider` and wrap your app component:
     ```jsx
     import { GoogleOAuthProvider } from "@react-oauth/google";

     const clientID = import.meta.env.VITE_CLIENT_ID;

     createRoot(document.getElementById("root")).render(
       <StrictMode>
         <GoogleOAuthProvider clientId={clientID}>
           <App />
         </GoogleOAuthProvider>
       </StrictMode>
     );
     ```

5. **Use for Login and Logout**:
   - Import necessary components:
     ```jsx
     import { GoogleLogin, googleLogout } from "@react-oauth/google";
     import { jwtDecode } from "jwt-decode";
     ```

## Deployment

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Upload to S3**:
   - Upload the contents of the `dist` folder to your S3 bucket.
   - Enable static website hosting on the S3 bucket.

3. **Enable HTTPS**:
   - Use AWS CloudFront to serve your site over HTTPS.
   - Use only North America and Europe to remain in free tier and minimize cost.
   - Go back to the GCP Console, navigate to the OAuth Consent screen, and toggle the publishing status to Production.
   - Add the final HTTPS URL to Authorized JavaScript origins and Authorized redirect URIs in your Google Cloud credentials.

## Usage

- **Login**: Use the Google Login button to authenticate.
- **Profile**: View user profile information after logging in.
- **Logout**: Use the logout button to end the session.