

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Web3 from 'web3';
import * as WalletConnectProvider from '@walletconnect/web3-provider'
import * as Web3Modal from "web3modal"
import { token_address, token_abi } from '../../abis.js'


@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private web3js: any;
  private provider: any;
  private accounts: any;
  _web3Modal: any
  uToken: any
  _atracionesDisponibles: any

  private accountStatusSource = new Subject<any>();
  accountStatus$ = this.accountStatusSource.asObservable();

  constructor() {

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "INFURA_ID" // required
        }
      }
    };

    this._web3Modal = new Web3Modal.default({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }



  async disconnectAccount() {
    await this._web3Modal.disconnect(); // set provider
  }

  async connectAccount() {
    this._web3Modal.clearCachedProvider();

    this.provider = await this._web3Modal.connect(); // set provider
    console.log("provider", this.provider)
    this.web3js = new Web3(this.provider); // create web3 instance
    console.log("web3js", this.web3js)
    this.accounts = await this.web3js.eth.getAccounts();
    console.log("accounts", this.accounts)
    this.accountStatusSource.next(this.accounts)
  }

  async reInitializating() {
    console.warn("-------------------------------")
    // --- temporarily re-initializating these for the effect file 
    this.provider = await this._web3Modal.connect(); // set provider
    console.log("provider", this.provider)

    this.web3js = new Web3(this.provider); // create web3 instance
    console.log("web3js", this.web3js)

    this.accounts = await this.web3js.eth.getAccounts();
    console.log("accounts", this.accounts)


    console.warn("-------------------------------")


    console.log("token_abi", token_abi)
    console.log("token_address", token_address)


    console.warn("-------------------------------")


    this.uToken = new this.web3js.eth.Contract(token_abi, token_address);
    console.log("uToken", this.uToken)
    console.log("methods", this.uToken.methods)
    console.log("events", this.uToken.events)

    console.warn("-------------------------------")
  }

  async atracionesDisponibles() {


    await this.reInitializating()



    // this.uToken.methods.AtracionesDisponibles()
    //   .call({ from: this.accounts[0] }, (err, res) => {
    //     if (err) {
    //       console.log("err", err);
    //     } else {
    //       console.log("res", res);
    //     }
    //   })





    // console.warn("-------------------------------")


    this._atracionesDisponibles = await this.uToken.methods.AtracionesDisponibles().call({
      from: token_address, // contract address
    });
    console.log("_atracionesDisponibles", this._atracionesDisponibles)




    // console.warn("-------------------------------")

  }



  async nuevaAtraccion() {
    await this.reInitializating()
    console.warn("--------------nuevaAtraccion-----------------")
    await this.uToken.methods.NuevaAtraccion(`"nueva atraccion ${Date.now()}"`, 1).send({
      from: this.accounts[0], // account address
      gas: '5000000',
      gasPrice: '20000000000'
    }).on('confirmation', (confirmationNumber, receipt) => {
      console.info("--------------todo bien todo correcto-----------------")
      console.log("confirmationNumber", confirmationNumber);
      console.log("receipt", receipt);
      console.info("--------------todo bien todo correcto-----------------")
    }).on('error', (error, receipt) => {
      console.error("--------------error-----------------")
      console.log("error", error);
      console.log("receipt", receipt);
      console.error("--------------error-----------------")
    });
    console.warn("--------------fin nuevaAtraccion-----------------")

  }
}
