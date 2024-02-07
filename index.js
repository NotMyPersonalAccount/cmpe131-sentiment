import prompt from "prompt";
import Sentiment from "sentiment";

prompt.start();

prompt.get(["message"], (err, result) => {
    const sentiment = new Sentiment();
    const r = sentiment.analyze(result.message);
    const score = r.score;

    if (score < 0) {
        console.log("Negative");
    } else if (score === 0) {
        console.log("Neutral");
    } else {
        console.log("Positive");
    }
});