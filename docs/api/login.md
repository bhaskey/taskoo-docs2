---
id: login
title: Login API
hide_title: true
sidebar_label: Login API
---

## Login with Google

### Login URL

`api_endpoint/auth/login`

### Google OAuth login URL
Please call this from mobile app/web app

`api_endpoint/oauth2/authorize/google`

![image]
(/img/login-api/g-auth.png)

It will open the google login consent page. After successfully logging in, the application return `Authorization` token as request parameter (as picture below).

Please use this token as `Authorization bearer ` header in all the requests, now on.

![image]
(/img/login-api/g-suc.png)


## Login with OTP

### Send OTP

Call __Send OTP__ api when user enters phone number and press send otp button.

api: `api_endpoint/auth/send-otp?phone=1234567890`

### Verify OTP

Open screen for enter the OTP. Call __Verify OTP__ when user inputs OTP and press verify OTP button.

api: `api_endpoint/auth/verify-otp?phone=1234567890&otp=1234`

__On success__ the application returns token (as picture below).

Please use this token as `Authorization bearer ` header in all the requests, now on.

![image]
(/img/login-api/otp-suc.png)

