---
id: post-task-spec
title: Post task API
hide_title: true
sidebar_label: Post task end to end flow
---

## Post task end to end flow
1. Go to home page, click post task. (Any of the highlighted area)

![image]
(/img/post-task-spec/1.png)

2. Open **what you need done?** pop-up. User fills out details as below.

![image]
(/img/post-task-spec/2.png)

3. Open **when and where?** pop-up. User fills out details as below.

![image]
(/img/post-task-spec/3.png)

4. Open **how much?** pop-up. User fills out details as below.

![image]
(/img/post-task-spec/4.png)

5. Since user is not logged in, when click **post**, the **login or register** pop-up will open as below. User can either login by google or enter mobile number and click **send otp** button. If user clicks **send otp** button it goes to next step (step 6 below)

![image]
(/img/post-task-spec/7.png)

6. Verify otp verifies otp from api and call the post task api(POST api call). Open **you are a star**.

![image]
(/img/post-task-spec/8.png)

7. User can click close icon on any popup, and it open below popup. From here either user can contine where they left or discard the pos task flow.

![image]
(/img/post-task-spec/6.png)