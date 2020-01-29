# PouchDB Live Sync

Example of PouchDB's live sync feature.  Clicking a button on one page increments a counter in the database which is reflected in real time on a second page.

# Software Setup

Install [CouchDB](https://couchdb.apache.org/#download) and don't forget to enable CORS on CouchDB by going to the settings tab in the Fauxton interface (usually started at http://127.0.0.1:5984/).

First, run CouchDB in the background.  Then, run a simple HTTP server in this directory, for example:

```
python -m SimpleHTTPServer
```

Navigate to `http://0.0.0.0:8000/` and `http://0.0.0.0:8000/viewer.html` in separate tabs.  Click the button on the first page and you should see the number on the second page increment.  If you open Fauxton in a third tab you should be able to see the database updated in real time as well.