/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RewarderMock } from "../RewarderMock";

export class RewarderMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardMultiplier: BigNumberish,
    _rewardToken: string,
    _BEETHOVEN_MASTERCHEF: string,
    overrides?: Overrides
  ): Promise<RewarderMock> {
    return super.deploy(
      _rewardMultiplier,
      _rewardToken,
      _BEETHOVEN_MASTERCHEF,
      overrides || {}
    ) as Promise<RewarderMock>;
  }
  getDeployTransaction(
    _rewardMultiplier: BigNumberish,
    _rewardToken: string,
    _BEETHOVEN_MASTERCHEF: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardMultiplier,
      _rewardToken,
      _BEETHOVEN_MASTERCHEF,
      overrides || {}
    );
  }
  attach(address: string): RewarderMock {
    return super.attach(address) as RewarderMock;
  }
  connect(signer: Signer): RewarderMock__factory {
    return super.connect(signer) as RewarderMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewarderMock {
    return new Contract(address, _abi, signerOrProvider) as RewarderMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardMultiplier",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_BEETHOVEN_MASTERCHEF",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "beetsAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "onBeetsReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "beetsAmount",
        type: "uint256",
      },
    ],
    name: "pendingTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "rewardTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "rewardAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e060405234801561001057600080fd5b5060405161097638038061097683398101604081905261002f91610054565b6080929092526001600160601b0319606091821b811660a05291901b1660c0526100af565b60008060006060848603121561006957600080fd5b83519250602084015161007b81610097565b604085015190925061008c81610097565b809150509250925092565b6001600160a01b03811681146100ac57600080fd5b50565b60805160a05160601c60c05160601c6108776100ff60003960006085015260008181610163015281816101f40152818161022d0152610286015260008181610111015261030301526108776000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063929bffc21461003b578063d63b3c4914610050575b600080fd5b61004e610049366004610656565b61007a565b005b61006361005e3660046106a4565b61025d565b6040516100719291906106f5565b60405180910390f35b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101015760405162461bcd60e51b815260206004820152602160248201527f4f6e6c79204d4356322063616e2063616c6c20746869732066756e6374696f6e6044820152601760f91b60648201526084015b60405180910390fd5b6000670de0b6b3a76400006101367f0000000000000000000000000000000000000000000000000000000000000000856107ce565b61014091906107ac565b6040516370a0823160e01b81523060048201529091506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319060240160206040518083038186803b1580156101a557600080fd5b505afa1580156101b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101dd919061063d565b9050808211156102205761021b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868361035c565b610254565b6102546001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868461035c565b50505050505050565b6040805160018082528183019092526060918291600091602080830190803683370190505090507f0000000000000000000000000000000000000000000000000000000000000000816000815181106102b8576102b861082b565b6001600160a01b039290921660209283029190910190910152604080516001808252818301909252600091816020016020820280368337019050509050670de0b6b3a76400006103287f0000000000000000000000000000000000000000000000000000000000000000876107ce565b61033291906107ac565b816000815181106103455761034561082b565b602090810291909101015290969095509350505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526103ae9084906103b3565b505050565b6000610408826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166104859092919063ffffffff16565b8051909150156103ae5780806020019051810190610426919061061b565b6103ae5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016100f8565b6060610494848460008561049e565b90505b9392505050565b6060824710156104ff5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016100f8565b843b61054d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016100f8565b600080866001600160a01b0316858760405161056991906106d9565b60006040518083038185875af1925050503d80600081146105a6576040519150601f19603f3d011682016040523d82523d6000602084013e6105ab565b606091505b50915091506105bb8282866105c6565b979650505050505050565b606083156105d5575081610497565b8251156105e55782518084602001fd5b8160405162461bcd60e51b81526004016100f89190610779565b80356001600160a01b038116811461061657600080fd5b919050565b60006020828403121561062d57600080fd5b8151801515811461049757600080fd5b60006020828403121561064f57600080fd5b5051919050565b600080600080600060a0868803121561066e57600080fd5b8535945061067e602087016105ff565b935061068c604087016105ff565b94979396509394606081013594506080013592915050565b6000806000606084860312156106b957600080fd5b833592506106c9602085016105ff565b9150604084013590509250925092565b600082516106eb8184602087016107fb565b9190910192915050565b604080825283519082018190526000906020906060840190828701845b828110156107375781516001600160a01b031684529284019290840190600101610712565b5050508381038285015284518082528583019183019060005b8181101561076c57835183529284019291840191600101610750565b5090979650505050505050565b60208152600082518060208401526107988160408501602087016107fb565b601f01601f19169190910160400192915050565b6000826107c957634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156107f657634e487b7160e01b600052601160045260246000fd5b500290565b60005b838110156108165781810151838201526020016107fe565b83811115610825576000848401525b50505050565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220108476a16c9b00440456d917aedaef392f7b727b9fe30d48410db2ce0749708764736f6c63430008070033";
