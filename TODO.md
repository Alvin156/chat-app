## **TODO**:

-   Add REST inputs.
-   Add login using Google's API.

## **DONE**:

-   Make the basic chat app w/o rooms.
-   Add better websocket handling in backend.

### **PROBLEMS**:
-   After a message is created, an event is emitted to all clients
    > Need to change it such that only clients from the room/channel only gets the emitted event.