# ndr2-track-scraper

This is just a quick demo to show how to scrape stuff from the web using small components instead of lots of spaghetti-ish code. It consists of these components:

- UrlGenerator: Generates urls according to a given schema
- PageDownloader: Downloads pages and calls a callback for each transferred page
- TracksParser: Parses a html document for track information and calls a callback for each found track with extracted data
- TracksService: Saves data to a database

## Samples

The sample directory contains two basic map reduce functions to see the most popular artists and titles.

## Known issues

Right now the application does not exit after finishing work. This is because of mongoose having an open connection to mongo db.
