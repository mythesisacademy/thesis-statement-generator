from textblob import TextBlob

def analyze_sentiment(opinion):
    analysis = TextBlob(opinion)
    sentiment = analysis.sentiment.polarity
    return sentiment

opinion = "I love this topic"
sentiment = analyze_sentiment(opinion)
print(sentiment)
