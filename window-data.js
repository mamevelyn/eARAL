// e-ARAL Hub - original interactive 100-item Window Cards.
// Version 15: four separate 100-item operations for each of two levels.
(function(){'use strict';
const OPERATIONS={add:{label:'Addition',symbol:'+'},sub:{label:'Subtraction',symbol:'−'},mul:{label:'Multiplication',symbol:'×'},div:{label:'Division',symbol:'÷'}};
const settings={1:{title:'Window Card 1',subtitle:'Basic Facts',minutes:5},2:{title:'Window Card 2',subtitle:'Two-Digit Practice',minutes:5}};
function randint(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=randint(0,i);[a[i],a[j]]=[a[j],a[i]]}return a}
function problem(level,op){let a,b,answer;
 if(level===1){
   if(op==='add'){a=randint(0,10);b=randint(0,10);answer=a+b}
   if(op==='sub'){a=randint(5,19);b=randint(0,Math.min(10,a));answer=a-b}
   if(op==='mul'){a=randint(1,10);b=randint(1,10);answer=a*b}
   if(op==='div'){b=randint(1,10);answer=randint(1,10);a=answer*b}
 }else{
   if(op==='add'){a=randint(10,99);b=randint(10,99);answer=a+b}
   if(op==='sub'){a=randint(20,99);b=randint(10,a);answer=a-b}
   if(op==='mul'){a=randint(12,99);b=randint(2,9);answer=a*b}
   if(op==='div'){b=randint(2,9);answer=randint(Math.ceil(10/b),Math.floor(99/b));a=answer*b}
 }
 return {text:`${a} ${OPERATIONS[op].symbol} ${b} = ?`,answer,op};
}
function generate(level,op){if(![1,2].includes(level)||!OPERATIONS[op])throw Error('Invalid card choice');
 const results=[],used=new Set();let tries=0;
 while(results.length<100){if(++tries>30000)throw Error('Unable to create 100 distinct items');let q=problem(level,op);if(used.has(q.text))continue;used.add(q.text);results.push(q)}
 return shuffle(results);
}
window.EARAL_WINDOW={OPERATIONS,settings,mastery:80,generate};
})();
