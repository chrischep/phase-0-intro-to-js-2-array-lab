// Write your solution here!
let cats =["Milo","Otis","Garfield"]
function destructivelyAppendCat (name){
    return cats.push(name);
    }
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function appendCat(name){
    let newCats=cats.slice()
    newCats.push(name)
    return newCats;
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function prependCat(name){
    let pCats=cats.slice()
    pCats.unshift(name)
    return pCats;
}
function removeLastCat(){
    let q=cats.slice()
    q.pop()
    return q
}
function removeFirstCat(){
    let b =cats.slice()
    b.shift()
    return b
}
