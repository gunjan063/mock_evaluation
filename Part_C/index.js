//ques_10


function counter(){
  let count=0;
  return function(){
    count++;
    return count;
    
  };
}
const c=counter()
console.log(c());
console.log(c());
console.log(c())


//ques_11
function createWallet(){
  let balance=0;
  return{
    addMoney: function(amount){
      balance=balance+amount;
    },
    checkBalance: function(){
      return balance
    }
  }
}


let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
console.log(myWallet.checkBalance()); 