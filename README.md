# Issue in Public path for js/css

# Overview
This repo holds the load balancer setup using webpack dev server & `bit-server` folder contains the 

## Steps to reproduce
1. Run `npm run reproduce:issue`
    1. which internally `npm run start:lb` which means starting load balancer
    2. and also starting bit server from folder `bit-server`
2. Please make sure bit-server runs at [localhost:7001](localhost:7001)
3. Access [localhost:7000](localhost:7001) server
4. Route to [localhost:7000/bit-dev](localhost:7000/bit-dev)

## Issue (Screenshot)

![Static assets pointing to root instead of relative](Issue.png)

## Suggested fix
1. Either static path should be relative in the html say `static/js/runtime-main.*.js` instead of `static/js/runtime-main.*.js`
2. Or there should be in an option to set publicPath/root for `public/static` folder 