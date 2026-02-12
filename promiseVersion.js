#!/usr/bin/env node

let user = "Rob";

function mowYard(name){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log(`${name} finished mowing the yard.`);
            resolve();
        }, 2000);
    });
    return promise;
};

function weedEat(name, callback){
    let promise = new Promise((resolve, reject) => {
        let exhaustion = Math.floor(Math.random() * 10) + 1; // Random exhaustion level between 1 and 10
        //console.log(`Exhaustion level for ${name} is ${exhaustion}.`);
        if (exhaustion > 8) {
            console.log(`${name} is too exhausted to weed eat the yard...`);
            console.log(`${name} fell asleep.`);
            reject(); // Reject the promise to indicate failure
        } else {
            setTimeout(()=> {
                console.log(`${name} finished weedeating the yard.`);
                resolve();
            }, 1500);
        }
    });
    return promise;
};

function trimHedges(name, callback){
    let promise = new Promise((resolve, reject) => {
        let exhaustion = Math.floor(Math.random() * 10) + 1; // Random exhaustion level between 1 and 10
        //console.log(`Exhaustion level for ${name} is ${exhaustion}.`);
        if (exhaustion > 7) {
            console.log(`${name} is too exhausted to trim the hedges...`);
            console.log(`${name} fell asleep.`);
            reject(); // Exit the function without calling the callback
        } else {
            setTimeout(()=> {
                console.log(`${name} finished trimming the hedges.`);
                resolve();
            }, 1000);
        }   
    });
    return promise;
};

function collectWood(name, callback){
    let promise = new Promise((resolve, reject) => {
        let exhaustion = Math.floor(Math.random() * 10) + 1; // Random exhaustion level between 1 and 10
        //console.log(`Exhaustion level for ${name} is ${exhaustion}.`);
        if (exhaustion > 6) {
            console.log(`${name} is too exhausted to collect wood...`);
            console.log(`${name} fell asleep.`);
            reject(); // Exit the function without calling the callback
        } else {
            setTimeout(()=> {
                console.log(`${name} finished collecting wood.`);
                resolve();
            }, 2500);   
        } 
    });
    return promise;
};

function waterGarden(name, callback){
    let promise = new Promise((resolve, reject) => {
        let exhaustion = Math.floor(Math.random() * 10) + 1; // Random exhaustion level between 1 and 10
        //console.log(`Exhaustion level for ${name} is ${exhaustion}.`); // Log the exhaustion level for debugging
        if (exhaustion > 5) {
            console.log(`${name} is too exhausted to water the garden...`);
            console.log(`${name} fell asleep.`);
            reject(); // Exit the function without calling the callback
        } else {
            setTimeout(()=> {
                console.log(`${name} finished watering the garden.`);
                resolve();
            }, 500);
        }
    });
    return promise;
};

function doSummerChores(name) {
    let message = `${name} finished all their chores!`;
    mowYard(name)
        .then(() => weedEat(name))
        .then(() => trimHedges(name))
        .then(() => collectWood(name))
        .then(() => waterGarden(name))
        .then(() => console.log(message))
        .catch(() => console.log(`${name} couldn't finish all the chores today.`));
};

// Start the chores for the current user
doSummerChores(user);