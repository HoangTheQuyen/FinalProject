var faker = require("faker");

var naivecoins = [];

var users = [];

var payaccounts = [];

var transactionhistorys = [];

faker.seed(100);

for(let i = 1; i <= 5; i++){
    naivecoins.push({
        id: i,
        money: i*1000000
    })
}

for(let i = 1; i <= 10; i++){
    var naivecoinid = faker.helpers.randomize([1,2,3,4,5]);
    users.push({
        id: i,
        name: faker.finance.accountName(),
        email: "HoangTheQuyen01@gmail.com",
        phone: faker.phone.phoneFormats(),
        naivecoinid: naivecoinid
    })
}

usernames = users.filter(p => {p.name, p.id});

for(let i = 1; i <= 10; i++){
    var userid = faker.helpers.randomize([1,2,3,4,5,6,7,8,9,10]);
    payaccounts.push({
        id: i,
        accountnumber: 123456 + i,
        submoney: i*100000,
        userid: userid,
        usernames: usernames.find(p => p.id == this.userid)
    })
}

var types = ["send", "receive"];

for(let i = 1; i < 50; i++){ 
    var typetransection = faker.helpers.randomize(types);
    var payaccountid = faker.helpers.randomize([1,2,3,4,5,6,7,8,9,10])

    transactionhistorys.push({
        id: i,
        description: "Nhận tiền tốt! :)) =))",
        amountmoney: faker.random.number(10000),
        typetransection: typetransection,
        payaccountid: payaccountid,

    })
}

module.exports = function () {
    return {
        naivecoins: naivecoins,
        users: users,
        payaccounts: payaccounts,
        transactionhistorys: transactionhistorys
    }
}