# [Music App](https://music-hl0j35him-c3-pio.vercel.app/)
## Summary
This mock music app was created to complete my 2nd project during my Per Scholas software engineering bootcamp. The purpose of the project was to use fetch and React Hooks to grab and store information from an API and display the information on screen.

## Current Functionality
1. Sidebar can be used to navigate to different pages of the application (Home, Albums, Artists, Playlists, and Audiobooks)
2. Each page includes a search bar. Virtually all different feild filters and search types are included in the search parameters so nearly all informaton available through the Spotify API can be accessed/found (barring user's actual Spotify information, scopes were not included in the mock).
3. Eventually, I would like to include routes in each search result that lead to a page that displays tracklists and chapters. Also, I would like to include Podcast search functionality (user permissions required)

## Technology
HTML, CSS, Javascript, React, & Bootstrap 

## Installation
Follow this [link](https://developer.spotify.com/documentation/web-api) to the Spotify API documentation. It lays out everything needed to get started :)

## Building Process 
I started by skimming through the getting started documentation of the Spotify API, then began chotting down the ideas below. I came to realize a lot of the features I was hoping to include would need scopes and an "Authorization code" grant type. I felt understanding and implementing these features in my code could lead to a lot of confusion and delays, so I decided agaisnt it. I eventually found the "Client credentials" authorization type which gave me access to a decent amount of information without requiring scopes or a token time limit. Given this change of direction though, I had to go back to the drawing board and spent a lot of time reviewing the API documentation to figure out what exactly I could and could not access. This is what led to each page included in the sidebar and ultimately was the main inspiration behind the layout and functionality of the app. 

--------------**STARTING IDEAS/NOTES**--------------

What can I access using client credentials only (avoid needing user access)?
 - Review API documentation for confirmation on which elements need authorization scopes 

Ideas:
 - Search playlists by category or genre
  - Show tracks if playlist selected 
 - Search artists
  - Shows albums & top-tracks: each should be accessible
 - Search albums
  - Show tracks of selected album
 - Search audiobooks
  - Display chapters if selected
 - Search podcasts (aka shows in the Spotify API)  

Structure:
App contains search engine and routes to components
 - Results contain Link in name of album, playlist, track, etc that connects to corresponding component 
 - Services folder contains functions for fetch calls needed (albums, artists, tracks, etc)
 - Tracks component displays tracks for selected albums or playlists: Carousel 
 - Chapters component displays Chapters for selected audiobooks: Carousel 

## Credits:
    - Tishana, Kasper, and Dylan for all their React help leading up to this project 
    - Cooper Codes for walkthrough on fetching a Spotify API Token
    - Vetrivel Ravi for exposing me to React-Icons 
    - Brian Design for the nav bar inspiration 

