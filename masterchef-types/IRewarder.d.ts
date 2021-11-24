/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IRewarderInterface extends ethers.utils.Interface {
  functions: {
    "onBeetsReward(uint256,address,address,uint256,uint256)": FunctionFragment;
    "pendingTokens(uint256,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onBeetsReward",
    values: [BigNumberish, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingTokens",
    values: [BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "onBeetsReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class IRewarder extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IRewarderInterface;

  functions: {
    onBeetsReward(
      pid: BigNumberish,
      user: string,
      recipient: string,
      beetsAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onBeetsReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      user: string,
      recipient: string,
      beetsAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      beetsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      beetsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;
  };

  onBeetsReward(
    pid: BigNumberish,
    user: string,
    recipient: string,
    beetsAmount: BigNumberish,
    newLpAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onBeetsReward(uint256,address,address,uint256,uint256)"(
    pid: BigNumberish,
    user: string,
    recipient: string,
    beetsAmount: BigNumberish,
    newLpAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  pendingTokens(
    pid: BigNumberish,
    user: string,
    beetsAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]]>;

  "pendingTokens(uint256,address,uint256)"(
    pid: BigNumberish,
    user: string,
    beetsAmount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]]>;

  callStatic: {
    onBeetsReward(
      pid: BigNumberish,
      user: string,
      recipient: string,
      beetsAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "onBeetsReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      user: string,
      recipient: string,
      beetsAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      beetsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      beetsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;
  };

  filters: {};

  estimateGas: {
    onBeetsReward(
      pid: BigNumberish,
      user: string,
      recipient: string,
      beetsAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onBeetsReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      user: string,
      recipient: string,
      beetsAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      beetsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      beetsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onBeetsReward(
      pid: BigNumberish,
      user: string,
      recipient: string,
      beetsAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onBeetsReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      user: string,
      recipient: string,
      beetsAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      beetsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      beetsAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
