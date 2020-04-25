---
id: task-details
title: Task Details APIs
hide_title: true
sidebar_label: Task Details APIs
---

## Task Details

This API gets all the Task Details including Offers (and their Comments) and Questions (and their replies).

```json
GET api_endpoint/tasks/{taskId}?complete=true
```
**Response Body**

```json
{
  "taskLite":{
    "id":1,
    "title":"I want to get my daughters room painted",
    "details":"Please someone help me paint my dauhgter's room , it has to be painted in girlish colors.",
    "taskStatus":"OPEN",
    "taskType":"IN_PERSON",
    "mustHaves":["string1","string2","string3"
    ],
    "dueDate":"01-10-2020",
    "dueTimeType":null,
    "budget":{
      "type":"HOURLY",
      "amount":2000,
      "hours":0
    },
    "category":"laundary services",
    "location":{
      "id":1,
      "gid":null,
      "name":"Rhythmboat Cruises",
      "placeId":null,
      "geometry":{
        "lng":123.213,
        "lat":23.3445345
      },
      "vicinity":"Pyrmont Bay Wharf Darling Dr, Sydney"
    },
    "user":{
      "id":1,
      "name":"user 3",
      "imageUrl":"https://some-image-url-of-the-user"
    },
    "fileInfo":null,
    "noOfOffers":1
  },
  "offers":[
    {
      "id":1,
      "user":{
        "id":2,
        "name":"user 1",
        "imageUrl":"https://some-image-url-of-the-user"
      },
      "amount":2000,
      "details":"This is a mandatory description of the offer, it is submitted by the person who is making the offer.",
      "taskId":1,
      "comments":[
        {
          "id":1,
          "comment":"this is the comment text for this offer and it can be multiple lines comments",
          "offerId":null,
          "user":{
            "id":1,
            "name":"user 3",
            "imageUrl":"https://some-image-url-of-the-user"
          },
          "postedAt":"14-03-2020 20:00:16"
        },
        ...
      ]
    }
  ],
  "questions":[
    "question" :
      {
        "id":2,
        "parentId":1,
        "user":{
          "id":2,
          "name":"user 1",
          "imageUrl":"https://some-image-url-of-the-user"
        },
        "taskId":1,
        "questionText":"question text goes here this is the question about the task bla bla",
        "postedAt":"14-03-2020 20:01:05"
      },
    "responses" : [
      {
        "id":2,
        "parentId":1,
        "user":{
          "id":2,
          "name":"user 1",
          "imageUrl":"https://some-image-url-of-the-user"
        },
        "taskId":1,
        "questionText":"question text goes here this is the question about the task bla bla",
        "postedAt":"14-03-2020 20:01:05"
      },
      ...
    ]
    ...
  ]
}
```

## Constants

|         name        |           values                    |
| --- | --- |
|      `status`       |   2 : `OPEN` <br/> 3 : `ACCEPTED` <br/> 4 : `COMPLETED`  <br/> 6 : `EXPIRED` <br/> 7 : `CLOSED` |