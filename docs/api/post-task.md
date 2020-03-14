---
id: post-task
title: Post task API
hide_title: true
sidebar_label: Post task API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```json
POST request to api_endpoint/tasks
```

**Request Body**

<Tabs
  defaultValue="t"
  values={[
    { label: 'task', value: 't', },
    { label: 'location', value: 'l', },
    { label: 'user', value: 'u', },
    { label: 'budget', value: 'b', }
  ]
}>
<TabItem value="t">

```json
{
  "title": "I want to get my daughters room painted",
  "details": "Please someone help me paint my dauhgter's room , it has to be painted in girlish colors.",
  "taskType": 1,
  "files": ["someBase64StringForAFile", "someAnotherBase64StringForAFile"],
  "mustHaves": ["string1", "string2", "string3"],
  "location": {},
  "dueDate": "01-10-2020",
  "dueTime": 2,
  "budget": {},
  "user": {},
  "category": "laundary services"
}
```

</TabItem>
<TabItem value="l">

```json
{
  "location":{
    "place_id" : "ChIJyWEHuEmuEmsRm9hTkapTCrk",
    "geometry":{
      "lng":"123.213",
      "lat":"23.3445345"
    },
    "name" : "Rhythmboat Cruises",
    "vicinity" : "Pyrmont Bay Wharf Darling Dr, Sydney"
  }
}
```

</TabItem>
<TabItem value="u">

```json
{
  "user":{
    "email":"user3@mail.com",
    "phone":"9000000003",
    "name":"user 3",
    "userId":1000,
    "imageUrl":"https://some-image-url-of-the-user"
  }
}
```

</TabItem>

<TabItem value="b">

```json
{
  "budget":{
    "type":2,
    "amount":2000,
    "hours":0
  }
}
```

</TabItem>
</Tabs>

:::tip Objects in Task Object
Note that task has `Location`, `User` & `Budget` Objects, please see their structures in tabs below.
:::

> The location object is captured form [Google Places API](https://developers.google.com/places/web-service/search#find-place-responses)

## Constants
|         name        |           values                    |
| --- | --- |
|      `taskType`       |   1 : `IN_PERSON` <br/> 2 : `REMOTE`     |
|      `dueTime`        |1 : `MORNING`<br/>2 : `NOON`<br/>3 : `AFTERNOON`<br/>4 : `EVENING`|
|      `budget.type`    |   1 : `TOTAL` <br/> 2 : `HOURLY`        |