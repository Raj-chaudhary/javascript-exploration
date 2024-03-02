const accountId = 9911   // const is fixed and can not be changed 

let accountEmail = "rj@gmail.com"    // let can be changed

var accountPassword = 121212          // var also can be changed, var is not used anymore,
                                       // because of block issue and functional issue

accountCity = "Delhi"

let accountState;                   // it will show undefined


accountEmail = "raj@gmail.com"
accountPassword = 212121
// console.log(accountPassword);


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])