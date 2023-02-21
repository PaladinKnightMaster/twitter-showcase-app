from flask import Flask
import requests, os, random
from datetime import datetime

app = Flask(__name__, static_folder="frontend/.next/server/app", static_url_path="/")


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/api/search/<name>")
def getTweets(name):
    if name[0] == "@":
        url = "https://api.twitter.com/1.1/statuses/user_timeline.json"
        payload = {"screen_name": name, "count": "10", "tweet_mode": "extended"}
        print("user_timline")
        headers = {
            "Authorization": "Bearer " + os.environ.get("TWITTER_API_SECRET_KEY")
        }
        response = requests.request("GET", url, headers=headers, data=payload)
        if response.status_code == 200:
            dict = response.json()

    else:
        url = "https://api.twitter.com/1.1/search/tweets.json"
        payload = {"q": name, "count": "10", "tweet_mode": "extended"}
        print("search_tweets")
        headers = {
            "Authorization": "Bearer " + os.environ.get("TWITTER_API_SECRET_KEY")
        }
        response = requests.request("GET", url, headers=headers, data=payload)
        filteredResponse = response.json()
        dict = filteredResponse["statuses"]

    tweets = []

    if response.status_code == 200:
        for tweet in dict:
            tweetDict = {
                "created_at": datetime.strptime(
                    tweet["created_at"], "%a %b %d %H:%M:%S %z %Y"
                ).strftime("%I:%M %p - %b %d, %Y"),
                "profile_image_url_https": tweet["user"]["profile_image_url_https"],
                "name": tweet["user"]["name"],
                "screen_name": tweet["user"]["screen_name"],
                "text": tweet["full_text"],
                "favorite_count": tweet["favorite_count"],
                "retweet_count": tweet["retweet_count"],
            }
            if "extended_entities" in tweet:
                tweetDict["image"] = tweet["extended_entities"]["media"][0][
                    "media_url_https"
                ]

            tweets.append(tweetDict)
    return {"results": tweets}


@app.route("/api/random", methods=["GET"])
def getRandom():
    users = {
        1: "elonmusk",
        2: "saylor",
        3: "nasa",
        4: "elerianm",
        5: "RyanHoliday",
    }
    randomNumber = random.randrange(1, 5)
    randomUser = users[randomNumber]

    url = "https://api.twitter.com/1.1/statuses/user_timeline.json"
    payload = {"screen_name": randomUser, "count": "1", "tweet_mode": "extended"}
    headers = {"Authorization": "Bearer " + os.environ.get("TWITTER_API_SECRET_KEY")}
    response = requests.request("GET", url, headers=headers, data=payload)
    dict = response.json()

    tweets = []

    for tweet in dict:
        tweetDict = {
            "created_at": datetime.strptime(
                tweet["created_at"], "%a %b %d %H:%M:%S %z %Y"
            ).strftime("%I:%M %p - %b %d, %Y"),
            "profile_image_url_https": tweet["user"]["profile_image_url_https"],
            "name": tweet["user"]["name"],
            "screen_name": tweet["user"]["screen_name"],
            "text": tweet["full_text"],
            "favorite_count": tweet["favorite_count"],
            "retweet_count": tweet["retweet_count"],
        }
        if "extended_entities" in tweet:
            tweetDict["image"] = tweet["extended_entities"]["media"][0][
                "media_url_https"
            ]

        tweets.append(tweetDict)

    return {"results": tweets}


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=9874)
