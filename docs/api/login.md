---
id: login
title: Login API
hide_title: true
sidebar_label: Login API
---

## Login with Google

### Login URL

Please call this from mobile app/web app

`api_endpoint/oauth2/authorize/google`

It will open the google login consent page. After successfully logging in, the application.

### Response
`User` public object with `token` in body.

Please use this token as `Authorization bearer ` header in all the requests, now on. Also store the user data on client.


## Login with OTP

### Send OTP

Call __Send OTP__ api when user enters phone number and press send otp button.

api: `GET api_endpoint/auth/send-otp?phone=1234567890`

### Verify OTP

Open screen for enter the OTP. Call __Verify OTP__ when user inputs OTP and press verify OTP button.

api: `GET api_endpoint/auth/verify-otp?phone=1234567890&otp=1234`

### Response
`User` public object with `token` in body.

Please use this token as `Authorization bearer ` header in all the requests, now on. Also store the user data on client.

:::tip NOTICE
Use csrf token in all POST requests. You can obtain it from the first api call. You can get server csrf token by `_csrf.token`.
:::

:::tip NOTICE
Verify OTP is on test mode now, so api assumes that the otp is always correct. You can assume you got the otp and put any otp for testing.
:::

