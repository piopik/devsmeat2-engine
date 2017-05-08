# devsmeat#2
# Development of realtime browser games - workshops

## Intro

Engine created to provide service with neccessary functionality for devmeats #2 workshops.

## Requirements

- node.js 6.x
- npm (installed with node by default)

## Installation

- **npm i** install dependencies

## Run

- **npm run dev** run in development mode. In situ, observing code changes in /src.
- **npm run build** transpile to distribution version
- **npm run start** run distribiution version

## Messaging diagram

![alt ---](https://raw.githubusercontent.com/piopik/devsmeat2-engine/master/docs/diagram.jpg)

## Websocket types of messages

### Input

#### answer

```javascript
{
    id : '41XTDbE',
    answer : [1,2,3,4]
}
```

### Output

#### joined

```javascript
{
    name : 'Red',
    color : '#ff0000',
    id : '41XTDbE'
}
```

#### message

```javascript
{
    test : 'User Red has joined the game'
}
```

#### question

```javascript
{
    "question" : "a",
    "type" : "single",
    "ansewers" : [
      {
        "id" : 0,
        "answer" : "A"
      },
      {
        "id" : 1,
        "answer" : "B"
      },
      {
        "id" : 2,
        "answer" : "C"
      },
      {
        "id" : 3,
        "answer" : "D"
      }
    ]
  }
```

#### questionResult

```javascript
{
    correct : true,
    points : 1
}
```

#### questionFinish

```javascript
{
    // empty object
}
```

#### leaderboard

```javascript
{
    leaderboard : [
        {
            position : 1
            name : 'Red',
            color : '#ff0000',
            points : 21
        },
        {
            position : 2
            name : 'Green',
            color : '#00ff00',
            points : 12
        },
        {
            position : 3
            name : 'Blue',
            color : '#0000ff',
            points : 6
        }
    ]
}
```

#### leaderboardFinish

```javascript
{
    // empty object
}
```

#### gameFinish

```javascript
{
    // empty object
}
```

#### userPoints

```javascript
{
    username : 'Green',
    points : 3
}
```

## Authors

Piotrek Polus <ppolus@sointeractive.pl>

www.sointeractive.pl