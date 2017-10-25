# devsmeat#2
# Development of realtime browser games - workshops

## Intro

Engine created to provide service with neccessary functionality for Devsmeat #2 workshops.
The event took place on 13th June 2017, and 19th October 2017 at SoInteractive, Kraków, Poland.
For more informations about Devsmeat and SoInteractive please check www.devsmeat.pl and www.sointeractive.co .

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
    answer : [1,2,3,4]
}
```

### Output

#### joined

```javascript
{
    user : {
        name : 'Red',
        color : '#ff0000',
        id : '41XTDbE'
    }
    answerTime : 20000,
    leaderboardTime : 10000
}
```

#### message

```javascript
{
    text : 'blue',
    icon : 'wrong',
    color : '#00f'
}
```

#### question

```javascript
{
    "question" : "a",
    "type" : "single",
    "answers" : [
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
            id : 'HJDY5S1xZ',
            name : 'Red',
            color : '#ff0000',
            points : 21
        },
        {
            id : 'HJDY5S1xZ',
            name : 'Green',
            color : '#00ff00',
            points : 12
        },
        {
            id : 'HJDY5S1xZ',
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

## Authors

Piotrek Polus <ppolus@sointeractive.pl>

www.sointeractive.pl
