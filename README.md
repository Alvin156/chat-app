Trying to make a simple chat app.


## **TODO**:

-   Add REST inputs.
-   Add login using Google's API.
-   Avoid using hard-types variables and use ENV variables.

## **DONE**:

-   Make the basic chat app w/o rooms.
-   Add better websocket handling in backend.
-   Add styling -> TailwindCSS or UI library?? XXXX I love ChatGPT :).

### **PROBLEMS**:
-   After a message is created, an event is emitted to all clients
    > Need to change it such that only clients from the room/channel only gets the emitted event.