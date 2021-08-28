function resolveScoreTag(scoreTag) {
  switch (scoreTag) {
    case "P+":
      return "Highly positive";
    case "P":
      return "Positive";
    case "NEU":
      return "Neutral";
    case "N":
      return "Negative";
    case "N+":
      return "Highly negative";
    default:
      return "No polarity detected";
  }
}

export { resolveScoreTag };
