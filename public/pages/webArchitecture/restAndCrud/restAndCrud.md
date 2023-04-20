# REST and CRUD

## REST
Representational State Transfer, or for short REST, is a concept that relates to the architectural approach to creating web services.

As it is a little tricky to actually understand how it works, here is a brief rundown of what "... concept that relates to the architectural approach..." actually mean?

### Standard HTTP methods
`HTTP methods` that are detailed in the HTTP specifications (1.1 or 2) can be used, as anything other than that could result in compatibility issues, with certain browsers.


### Statelessness
Each request from client to server, must contain all the information needed to process said request, as nothing from the request is (should be) saved on the server side.

This comes with an array of positives.

On of them being improved scalability, as the lessened strain on the server, will allow for more request.
There are other benefits, but these might not be as relevant.

One disadvantage of statelessness is the increased amount of data being sent between the client and server, as everything have to be included in the request.


### Content Negotiation

Finally, `Content Negotiation` allows for the client and server, respectively, to request a preferred format (json, xml or plain text) to be contained within the body.


### Summation
REST is a concept, whereas RESTful is an adjective, used to indicate that a particual web service, lives up to the concept of REST.


## CRUD
Create, Read, Update and Delete (CRUD), make up the majority of all RESTful API's today.

Many would say, that the implementation of CRUD is a minimum requirement in this context.

Although technically it could still be considered RESTful, if only one of the operations (POST, GET, PUT/PATCH, DELETE), had been implemented.


### The design of a REST api utilizing the CRUD pattern
    POST /object
    GET /object
    GET /objects/<id>
    PUT /objects/<id>
    DELETE /objects/<id>


