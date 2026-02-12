#!/usr/bin/env node

let user = "Rob";

function mowYard(name, callback){
    setTimeout(()=> {
        console.log(`${name} finished mowing the yard.`);
        callback();
    }, 2000);
};

function weedEat(name, callback){
    let exhaustion = Math.floor(Math.random() * 10) + 1; // Random exhaustion level between 1 and 10
    if (exhaustion > 8) {
        console.log(`${name} is too exhausted to weed eat the yard...`);
        console.log(`${name} fell asleep.`);
        return; // Exit the function without calling the callback
    } else {
        setTimeout(()=> {
            console.log(`${name} finished weedeating the yard.`);
            callback();
        }, 1500);
    }
};

function trimHedges(name, callback){
    let exhaustion = Math.floor(Math.random() * 10) + 1; // Random exhaustion level between 1 and 10
    if (exhaustion > 7) {
        console.log(`${name} is too exhausted to trim the hedges...`);
        console.log(`${name} fell asleep.`);
        return; // Exit the function without calling the callback
    } else {
        setTimeout(()=> {
            console.log(`${name} finished trimming the hedges.`);
            callback();
        }, 1000);
    }   
};

function collectWood(name, callback){
    let exhaustion = Math.floor(Math.random() * 10) + 1; // Random exhaustion level between 1 and 10
    if (exhaustion > 6) {
        console.log(`${name} is too exhausted to collect wood...`);
        console.log(`${name} fell asleep.`);
        return; // Exit the function without calling the callback
    } else {
        setTimeout(()=> {
            console.log(`${name} finished collecting wood.`);
            callback();
        }, 2500);   
    } 
};

function waterGarden(name, callback){
    let exhaustion = Math.floor(Math.random() * 10) + 1; // Random exhaustion level between 1 and 10
    if (exhaustion > 5) {
        console.log(`${name} is too exhausted to water the garden...`);
        console.log(`${name} fell asleep.`);
        return; // Exit the function without calling the callback
    } else {
        setTimeout(()=> {
            console.log(`${name} finished watering the garden.`);
            callback();
        }, 500);
    }
};

function doSummerChores(name) {
    let message = `${name} finished all their chores!`;
    mowYard(name, ()=>{
        weedEat(name, ()=>{
            trimHedges(name, ()=>{
                collectWood(name, ()=>{
                    waterGarden(name, ()=>{
                        console.log(message);
                    });
                });
            });
        });
    });
};

// Start the chores for the current user
doSummerChores(user);