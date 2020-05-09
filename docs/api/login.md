---
id: login
title: Login API
hide_title: true
sidebar_label: Login API
---

## Login with Google

### Login URL

When user click **login with google** call this api: 

`GET api_endpoint/oauth2/authorize/google`

It will open the google login consent page. After successfully logging in, the application will give below response.

### Response
`User` public object with `token` in body.

```json
{
    "user": {
        "id": 100,
        "name": "Melon Musk",
        "imageUrl": "https://image.jpeg"
    },
    "token": "eh_blablareallybigstring"
}
```

Please use this token as `Authorization bearer xxx` header in all the requests. Also store the user data on client.


## Login with OTP

### Send OTP

Call __Send OTP__ api when user enters phone number and press send otp button.

api: `GET api_endpoint/auth/send-otp?phone=1234567890`

### Verify OTP

Open screen for enter the OTP. Call __Verify OTP__ when user inputs OTP and press verify OTP button.

api: `GET api_endpoint/auth/verify-otp?phone=1234567890&otp=1234`

### Response
`User` public object with `token` in body.


```json
{
    "user": {
        "id": 100,
        "name": "Melon Musk",
        "imageUrl": "https://image.jpeg"
    },
    "token": "eh_blablareallybigstring"
}
```


Please use this token as `Authorization bearer ` header in all the requests. Also store the user data on client.

:::tip NOTICE
Use csrf token in all POST requests. You can obtain it from the first api call. You can get server csrf token by `_csrf.token`.
:::

:::tip NOTICE
Verify OTP is on test mode now, so api assumes that the otp is always correct. You can assume you got the otp and put any otp for testing.
:::

