---
id: filters-flow
title: Search Filters Spec
hide_title: true
sidebar_label: Search Filters
---

## Location & Task type filter

![image]
(/img/filters-spec/loc.png)

### Task type

User can select select any task type, default selected value is `all`.

__Request examples__

| task type selected  |  request   |
|--|--|
|     `IN_PERSON`      |   `GET api_endpoint/tasks?tt=1`    |
|     `REMOTE`      |   `GET api_endpoint/tasks?tt=2`    |
|     `ALL`      |   `GET api_endpoint/tasks`    |

### Location

User can search in task area text box (it calls google places api in backend and gets the location object). Send the value `vicinity` from the google places as request variable `l`.

__Request examples__

| value of vicinity <br/> from google places api  |  request   |
|--|--|
|     `Cox town`      |   `GET api_endpoint/tasks?l=Cox town`    |

### Distance

__Request examples__

| distance slider value   |  request   |
|--|--|
|     `60`      |   `GET api_endpoint/tasks?d=60`    |


### all combined
```yml
GET api_endpoint/tasks?tt=1&l=Cox%20town&d=60
```

## Price filter

User can use price filter by price slider. More info about request variables for price filter [here](api/browse-tasks.md#how-search-api-works).

![image]
(/img/filters-spec/price.png)

__Request examples__

| price slider values   |  request   |
|--|--|
|     `500` and `7000`      |   `GET api_endpoint/tasks?minp=500&maxp=7000`    |

## Task status filter

See user status values [here](api/task-details.md#constants).

![image]
(/img/filters-spec/status.png)

__Request examples__

| Task status value selected   |  request   |
|--|--|
|     `Open`      |   `GET api_endpoint/tasks?ts=2`    |
|     `All`      |   `GET api_endpoint/tasks`    |
