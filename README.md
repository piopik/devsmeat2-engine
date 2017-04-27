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

## Websocket actions

### Inputs

#### answer

```javascript
{
    playerId : 1,
    answer : [1,2,3,4]
}
```

### Outputs

#### joined

#### userJoined

#### userLeft

#### question

#### questionFinish

#### leaderboard

#### leaderboardFinish

#### gameFinish

#### userAnswered

## Authors

Piotrek Polus <ppolus@sointeractive.pl>

www.sointeractive.pl