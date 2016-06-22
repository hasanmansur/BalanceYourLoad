# BalanceYourLoad
Simple Round Robin Load Balancer example using **node-http-proxy** & **seaport**.

What?
-----
This example demonstrates a simple load balancer capable of distrubuting http requests among multilple servers in **Round Robin** fashion. We are using the following components to build our load balancer:
- [**node-http-proxy**](https://github.com/nodejitsu/node-http-proxy) : HTTP programmable proxying library
- [**seaport**](https://github.com/substack/seaport) : service registry and port assignment.
