# Firebase Hosting Deployment Guide

## 🚀 Firebase Hosting + GitHub Actions Setup

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Firebase Hosting:
   - Go to "Hosting" in the left sidebar
   - Click "Get started"
   - Follow the setup wizard

### Step 2: Install Firebase CLI

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init hosting
```

When prompted:
- Select "Use an existing project"
- Choose your Firebase project
- Set public directory to: `build`
- Configure as single-page app: `Yes`
- Set up automatic builds: `No` (we'll use GitHub Actions)

### Step 3: Configure GitHub Secrets

Go to your GitHub repository Settings > Secrets and variables > Actions, and add:

#### Required Secrets:

1. **FIREBASE_SERVICE_ACCOUNT_KEY**
   ```bash
   # Generate service account key
   firebase projects:list
   firebase apps:sdkconfig
   
   # Or go to Firebase Console > Project Settings > Service Accounts
   # Generate new private key and copy the entire JSON content
   ```

2. **FIREBASE_PROJECT_ID**
   ```
   your-firebase-project-id
   ```

3. **REACT_APP_OPENAI_API_KEY** (Optional, for AI chat)
   ```
   your-openai-api-key
   ```

### Step 4: Get Service Account Key

1. Firebase Console > Project Settings > Service Accounts
2. Click "Generate new private key"
3. Copy the entire JSON content
4. Add it to GitHub Secrets as `FIREBASE_SERVICE_ACCOUNT_KEY`

### Step 5: Update Firebase Configuration

Update `src/firebase.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### Step 6: Test Local Deployment

```bash
# Build the project
npm run build

# Test Firebase hosting locally
firebase serve

# Deploy manually (first time)
firebase deploy
```

### Step 7: Automatic Deployment

Once configured, every push to the `main` branch will automatically:
1. Build the React app
2. Deploy to Firebase Hosting
3. Your site will be available at: `https://your-project-id.web.app`

## 🌟 Benefits of This Setup

- ✅ **Unified Ecosystem**: Frontend hosting + Firestore database
- ✅ **Automatic Deployment**: Push to main = auto deploy
- ✅ **Environment Variables**: Secure API key storage
- ✅ **Global CDN**: Fast loading worldwide
- ✅ **SSL Certificate**: Automatic HTTPS
- ✅ **Custom Domain**: Easy to configure
- ✅ **Preview Channels**: Test deployments for PRs

## 🔧 Troubleshooting

### Build Fails
- Check if all dependencies are in `package.json`
- Verify environment variables are set correctly
- Check for any console errors

### Deployment Fails
- Verify Firebase service account key is correct
- Check if Firebase project ID matches
- Ensure Hosting is enabled in Firebase Console

### Site Not Loading
- Check if `firebase.json` rewrites are configured
- Verify build directory is set to `build`
- Clear browser cache

## 📱 Custom Domain Setup

1. Firebase Console > Hosting > Add custom domain
2. Follow verification steps
3. DNS records will be automatically configured
4. SSL certificate will be provisioned automatically

Your site will be available at both:
- `https://your-project-id.web.app` (Firebase domain)
- `https://your-custom-domain.com` (Your domain)