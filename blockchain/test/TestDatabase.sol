// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

import "truffle/Assert.sol";
import "../contracts/Database.sol";

contract TestChatContract {
    Database database;

    function beforeEach() public {
        database = new Database();
    }

    function testCheckUserExists() public {
        bool result = database.registerUser(
            address(0x123),
            "Alice",
            "password123"
        );
        Assert.isTrue(result, "User registration failed");

        bool exists = database.checkUserExists(address(0x123));
        Assert.isTrue(exists, "User should exist");

        exists = database.checkUserExists(address(0x456));
        Assert.isFalse(exists, "User should not exist");
    }

    function testGetUsername() public {
        database.registerUser(address(0x123), "Alice", "password123");

        string memory username = database.getUsername(address(0x123));
        Assert.equal(username, "Alice", "Username is incorrect");
    }

    function testReadMessage() public {
        database.registerUser(address(0x123), "Alice", "password123");
        database.registerUser(address(0x456), "Bob", "password456");

        database.loginUser(address(0x123), "Alice", "password123");
        database.loginUser(address(0x456), "Bob", "password456");

        database.addFriend(address(0x456), "Bob");
        database.sendMessage(address(0x456), "Hello Bob!");

        Database.message[] memory messages =
            database.readMessage(address(0x456));
        Assert.equal(messages.length, 1, "Message should be retrieved successfully");
        Assert.equal(
            messages[0].sender,
            address(0x123),
            "Sender address is incorrect"
        );
        Assert.equal(messages[0].msg, "Hello Bob!", "Message content is incorrect");
    }
}
