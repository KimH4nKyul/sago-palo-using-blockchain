// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Escrow {
    // 2 of 3 multi-sig
    address payable public buyer;
    address payable public seller;
    address public arbiter;

    uint public productId;
    uint public amount;

    // 누가 지불 또는 환불을 요청했느지 추적해야 함
    mapping(address => bool) releaseAmount;
    mapping(address => bool) refundAmount;

    // 참여자 중에 몇 명이 지불 혹은 환불을 콜했는지 기록
    uint public releaseCount;
    uint public refundCount;

    // 결정 완료 플래그
    bool public fundsDisbursed;

    address public owner;

    // 컨트랙트가 이더를 받을 수 있도록 생성자를 payable로 설정
    constructor(
        uint _productId,
        address payable _buyer,
        address payable _seller,
        address _arbiter
    ) payable {
        productId = _productId;

        buyer = _buyer;
        seller = _seller;
        arbiter = _arbiter;

        fundsDisbursed = false;

        amount = msg.value;
        owner = msg.sender;
    }

    function info()
        public
        view
        returns (address, address, address, bool, uint, uint)
    {
        return (
            buyer,
            seller,
            arbiter,
            fundsDisbursed,
            releaseCount,
            refundCount
        );
    }

    function releaseAmountToSeller(address caller) public {
        require(fundsDisbursed == false);
        require(msg.sender == owner);
        if (
            (caller == buyer || caller == seller || caller == arbiter) &&
            releaseAmount[caller] != true
        ) {
            releaseAmount[caller] = true;
            releaseCount += 1;
        }

        if (releaseCount == 2) {
            seller.transfer(amount);
            fundsDisbursed = true;
        }
    }

    function refundAmountToBuyer(address caller) public {
        require(fundsDisbursed == false);
        require(msg.sender == owner);
        if (
            (caller == buyer || caller == seller || caller == arbiter) &&
            refundAmount[caller] != true
        ) {
            refundAmount[caller] = true;
            refundCount += 1;
        }

        if (refundCount == 2) {
            buyer.transfer(amount);
            fundsDisbursed = true;
        }
    }
}
