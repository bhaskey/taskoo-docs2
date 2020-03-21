---
id: first-time
title: First time app user
hide_title: true
sidebar_label: First time app user
---
## First time app user

When user opens the mobile app (android/iOS), following screens are shown.

![image]
(/img/mobile/login.png)

### Actions

1. Call google login api `google_login_api`
2. Send otp -> checks if 10 digit **mobile number** is entered. If Yes: Call `login_with_otp_api`
Else: Highlight the Enter mobile number text feild in red.
3. Verify otp -> checks if 4 digit **otp** is entered. If Yes: Call `verify_otp_api`
Else: Highlight the Enter mobile number text feild in red.

### Response

```json
{
    token: "some_token_string",
    user: {

    }
}
```

Then open home page:

![image]
(/img/mobile/home.png)
