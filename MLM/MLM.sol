// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract MLM {
    uint256 public constant Fee = 100000000000000000; 
    uint256 public totalRevenue;

    struct Member {
        bool exists;
        address payable referrer;
        uint256 earnings;
    }

    mapping(address => Member) public members;

    event NewMember(address indexed member, address indexed referrer);
    event RevenueShare(address indexed member, address indexed referrer, uint256 amount);

    function participate(address payable referrer) external payable {
        require(msg.value == Fee, "Joining fee is required.");
        require(!members[msg.sender].exists, "Already joined.");
        require(members[referrer].exists, "Referrer does not exist.");

        members[msg.sender] = Member(true, referrer, 0);
        members[referrer].earnings += (Fee * 5) / 100;
        emit NewMember(msg.sender, referrer);

        address payable nextLevel = members[referrer].referrer;
        if (members[nextLevel].exists) {
            members[nextLevel].earnings += (Fee * 3) / 100;
            address payable nextNextLevel = members[nextLevel].referrer;
            if (members[nextNextLevel].exists) {
                members[nextNextLevel].earnings += (Fee * 2) / 100;
            } else {
                totalRevenue += (Fee * 2) / 100;
            }
        } else {
            totalRevenue += (Fee * 3) / 100;
            totalRevenue += (Fee * 2) / 100;
        }

        emit RevenueShare(msg.sender, referrer, (Fee * 5) / 100);
    }

    function getEarnings() external view returns (uint256) {
        require(members[msg.sender].exists, "Not a member.");
        return members[msg.sender].earnings;
    }
}
