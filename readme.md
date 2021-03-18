#  Note Taker 
With this assignment I had to add a server connection and routes to make a starter file work. The end product is supposed to use routes on a locally hosted server to deliver an HTML page, then recieve a text input, parse to JSON and save to a .json file. These saved objects show up on the html page and can be deleted, and read at any time, with all the saved values remaining after the server closes to be accessed later.

# Tech used
JavaScript

# How to use
Open the directory in the terminal, then run npm install. after the install run node server.js and the terminal will tell you the app is running on the displayed port. go to your default browser and type localhost:{PORT} into the address bar.

# Problems
My biggest problem with this project was getting the API route to call. I spent days on this issue only to have it be a '*' instead of a '/' in my HTML route that fixed the whole app.

# Meat and Potatoes 

![alt text](serverjs.png)
The image above is the server and route connection, this page was easy to write because of the extensive practice doing it in class.
![alt text](jsonpkg.png)
The json package was a copy paste from a class activity, however i had to install the uuid npm in order to create random id's for each note so that it can be deleted properly
![alt text](htmlroute.png)
The html route was very simple and straight forward, the html was already made and there is a lot of documentation online that helped make it
![alt text](apiroute.png)
the api route was much more complicated because the app had to have several functions and each of those had to have some form of safety net like a try/catch method. There is a get, post, and delete methods for the user to interact with the webpage.
![alt text](dbjson.png)
this is what a saved note looks like in the .json, the id is generated using the uuid npm