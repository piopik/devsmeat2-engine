/**
 * Created by Piotrek Polus <piotrek@kroppa.pl> on 22.04.2017.
 */

export default {
    version : "1.0.0-alpha",
    port : process.env.PORT || 3000,
    bodyLimit : "100kb",

    answerTime : 5000,
    leaderboardTime : 3000,

    pointSystem : [3,2,1],
    pointsLimit : 30,
    roundsLimit : 500

}