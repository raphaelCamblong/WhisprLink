// const Database = artifacts.require("Database");

// contract("Database", (accounts) => {
//   let database;

//   before(async () => {
//     database = await Database.new();
//   });

//   it("should create an account with a non-empty username", async () => {
//     const name = "Alice";

//     await database.createAccount(name);
//     const retrievedName = await database.getUsername(accounts[0]);

//     assert.equal(retrievedName, name, "Account creation failed");
//   });

//   it("should add a friend to the friend list", async () => {
//     const name1 = "Alice";
//     const name2 = "Bob";
//     const friendKey1 = accounts[1];
//     const friendKey2 = accounts[2];

//     await database.createAccount(name1);
//     await database.createAccount(name2);

//     await database.addFriend(friendKey1, name1);
//     await database.addFriend(friendKey2, name2);

//     const friendList1 = await database.getMyFriendList();

//     assert.equal(friendList1.length, 1, "Friend addition failed for user 1");
//     assert.equal(
//       friendList1[0].pubkey,
//       friendKey2,
//       "Friend addition failed for user 1"
//     );
//     assert.equal(
//       friendList1[0].name,
//       name2,
//       "Friend addition failed for user 1"
//     );

//     // Trying to add the same friend again
//     await database.addFriend(friendKey1, name1);

//     const friendList2 = await database.getMyFriendList();

//     assert.equal(friendList2.length, 1, "Duplicate friend added");
//   });

//   it("should send a message to a friend", async () => {
//     const name1 = "Alice";
//     const name2 = "Bob";
//     const friendKey1 = accounts[1];
//     const friendKey2 = accounts[2];
//     const messageText = "Hello, Bob!";

//     await database.createAccount(name1);
//     await database.createAccount(name2);
//     await database.addFriend(friendKey1, name1);
//     await database.addFriend(friendKey2, name2);

//     await database.sendMessage(friendKey2, messageText);

//     const messages = await database.readMessage(friendKey2);

//     assert.equal(messages.length, 1, "Message not sent");
//     assert.equal(messages[0].sender, accounts[0], "Incorrect sender");
//     assert.equal(messages[0].timestamp > 0, true, "Incorrect timestamp");
//     assert.equal(messages[0].msg, messageText, "Incorrect message content");
//   });
// });
