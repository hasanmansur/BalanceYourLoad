# BalanceYourLoad
Simple Round Robin Load Balancer example using **node-http-proxy** & **seaport**.

What?
-----
This example demonstrates a simple load balancer capable of distrubuting http requests among multilple servers in **Round Robin** fashion. We are using the following components to build our load balancer:
- [**node-http-proxy**](https://github.com/nodejitsu/node-http-proxy) : HTTP programmable proxying library
- [**seaport**](https://github.com/substack/seaport) : Service registry and port assignment.

Why?
----
The ability of the system to scale and to balance the load, are two vital features of any distributed system. This project presents a very simple implementation where a Round Robin Load Balancer spreads the load/requests across multiple individual servers. 

How?
----
In this simple example a client actually requests to the load balancer (**load-balancer.js**) for the result of a sum operation whereas this request is forwarded to different servers (**add-server.js**) in a Round Robin scheduling. It also demonstrates the idea of service registration so that the system architecture doesn't get interrupted in case of addition/removal of servers behind the load balancer.  
