"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.RewarderBrokenMock__factory = void 0;
var contracts_1 = require("@ethersproject/contracts");
var RewarderBrokenMock__factory = /** @class */ (function (_super) {
    __extends(RewarderBrokenMock__factory, _super);
    function RewarderBrokenMock__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    RewarderBrokenMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    RewarderBrokenMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    RewarderBrokenMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    RewarderBrokenMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    RewarderBrokenMock__factory.connect = function (address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    };
    return RewarderBrokenMock__factory;
}(contracts_1.ContractFactory));
exports.RewarderBrokenMock__factory = RewarderBrokenMock__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        name: "onBeetsReward",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pid",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "user",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "beetsAmount",
                type: "uint256"
            },
        ],
        name: "pendingTokens",
        outputs: [
            {
                internalType: "contract IERC20[]",
                name: "rewardTokens",
                type: "address[]"
            },
            {
                internalType: "uint256[]",
                name: "rewardAmounts",
                type: "uint256[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b506101d6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063929bffc21461003b578063d63b3c491461004b575b600080fd5b610049610036366004610099565b005b61005e6100593660046100e7565b610075565b60405161006c92919061011c565b60405180910390f35b606080600080fd5b80356001600160a01b038116811461009457600080fd5b919050565b600080600080600060a086880312156100b157600080fd5b853594506100c16020870161007d565b93506100cf6040870161007d565b94979396509394606081013594506080013592915050565b6000806000606084860312156100fc57600080fd5b8335925061010c6020850161007d565b9150604084013590509250925092565b604080825283519082018190526000906020906060840190828701845b8281101561015e5781516001600160a01b031684529284019290840190600101610139565b5050508381038285015284518082528583019183019060005b8181101561019357835183529284019291840191600101610177565b509097965050505050505056fea264697066735822122027826e0416198eebe4ef80b421607765814de8b5269501255d4a0f4871d7baf464736f6c63430008070033";
