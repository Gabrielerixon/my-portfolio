# Setting Up Gmail for Your Contact Form

For your contact form to work with Gmail when deployed to Vercel, you'll need to generate an App Password instead of using your regular Gmail password.

## Step 1: Enable 2-Step Verification

First, you need to have 2-Step Verification enabled for your Google account:

1. Go to your [Google Account](https://myaccount.google.com/).
2. Select **Security** in the left navigation.
3. Under "Signing in to Google," select **2-Step Verification** and follow the steps.

## Step 2: Create an App Password

1. Go to your [Google Account](https://myaccount.google.com/).
2. Select **Security**.
3. Under "Signing in to Google," select **App passwords**.
4. At the bottom, click **Select app** and choose **Mail**.
5. Next, click **Select device** and choose **Other (Custom name)**.
6. Enter "Portfolio Website" as the name.
7. Click **Generate**.
8. Google will display an app password for you. This is a 16-character code with no spaces.
9. Copy this password - you'll need to use it in the next step.

## Step 3: Add Environment Variables to Vercel

When deploying to Vercel, you need to set the following environment variables:

1. Go to your project on the Vercel dashboard.
2. Click on **Settings** at the top.
3. Go to the **Environment Variables** section.
4. Add the following variables:
   - Name: `EMAIL_USER` 
     Value: `your-gmail-address@gmail.com`
   - Name: `EMAIL_APP_PASSWORD` 
     Value: `your-16-character-app-password` (the one you generated in Step 2)
5. Click **Save**.