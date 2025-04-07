Trying to make a simple chat app.

## **TODO**:

-   Add popup when clicking author name.
-   Add room functionality.
-   Add avatar functionality.
-   Add channels.

## **DONE**:

-   Make the basic chat app w/o rooms.
-   Add better websocket handling in backend.
-   Add styling -> TailwindCSS or UI library?? XXXX I love ChatGPT :).
-   Add REST inputs.
-   Avoid using hard-types variables and use ENV variables.
-   Add frontend routing using react-router.
-   Stop using localStorage, instead use redux or other alternatives. ---> COOKIES

### **PROBLEMS**:

-   After a message is created, an event is emitted to all clients
    > Need to change it such that only clients from the room/channel only gets the emitted event.
