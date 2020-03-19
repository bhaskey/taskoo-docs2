---
id: browse-tasks
title: Browse Task APIs
hide_title: true
sidebar_label: Browse Task APIs
---

## Task List (Browse Tasks)
Task in this API is lighter and doesn't have comments and offers. This is used for list views on Web and Mobile App.

```json
GET api_endpoint/tasks
```
**Response Body**

```json
[
  {
    "id":1,
    "title":"title of the task",
    "details":"some multiline description of the task",
    "taskStatus":"CREATED",
    "taskType":"OPEN",
    "mustHaves":["string1","string2","string3"],
    "dueDate":"01-10-2020",
    "dueTimeType":null,
    "budget":{},
    "category":"laundary services",
    "location":{},
    "user":{},
    "fileInfo":null,
    "noOfOffers":2
  },
  ...
]
```

## How search api works

### API
```json
GET api_endpoint/tasks
```
### Request parameters

|      request parameter     |       values               | default value| notes |
|----------------------------|----------------------------|---------|-------------|
|          `q`     |    any search string. eg. painting      | none | search query <br/> searches in title and details of tasks |
|          `p`     |    integer value. eg. 1                 | 1 | page number|
|          `s`     |    integer value. eg. 30                 |  30  | size of result |
|          `l`     |   any location string                   | none | locality/area name <br/> searches in vivinity field of location data  |
|     `minp` and `maxp`| integer value. eg. `minp=500&maxp=10000` | `minp` deafult 0 <br/> `maxp` default 50000 | price range filter |
|    `tt`  | integer value. eg. 1  | none |  task type <br/> `REMOTE` and `IN_PERSON` |
|    `ts`  |  integer value. eg. 1|   none | task status <br/> `OPEN`, `ASSIGNED`, `COMPLETED` etc. |

:::tip
default value `none` means: this filter will not be applied and all the tasks will returned with any value of that field.
:::


### Examples

Please see [filter end to end flow](spec/web/filters-flow.md) to see the examples.
