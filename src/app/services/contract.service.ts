

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Web3 from 'web3';
import * as WalletConnectProvider from '@walletconnect/web3-provider'
import * as Web3Modal from "web3modal"
import { token_address_contract, token_address_creator, token_abi } from '../../abis.js'


@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private web3js: any;
  private provider: any;
  private accounts: any;
  uToken: any
  errorTransation: any

  _web3Modal: any
  _atracionesDisponibles: any
  _precioTokens: any
  _balanceOf: any
  _misTokens: any
  _historial: any
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

  async connectAccount() {
    this._web3Modal.clearCachedProvider();
    this.provider = await this._web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts();
    this.accountStatusSource.next(this.accounts)
  }

  async reInitializating() {
    console.warn("-------------------------------")
    // --- temporarily re-initializating these for the effect file 
    this.provider = await this._web3Modal.connect(); // set provider

    this.web3js = new Web3(this.provider); // create web3 instance

    this.accounts = await this.web3js.eth.getAccounts();

    this.accountStatusSource.next(this.accounts)


    this.uToken = new this.web3js.eth.Contract(token_abi, token_address_contract);

    console.log("uToken", this.uToken)
    console.log("methods", this.uToken.methods)
    console.log("events", this.uToken.events)

  }


  //  --------------------- Gestion de Token -------------------


  async getBalanceOf() {
    await this.reInitializating()
    this._balanceOf = await this.uToken.methods.balanceOf()
      .call().catch((err) => {
        this.errorTransation = err
        console.error(err);
      });
  }


  async generarTokens() {
    await this.reInitializating()

    await this.uToken.methods.generarTokens(100000).send({
      from: this.accounts[0], // account address
      gas: '5000000',
      gasPrice: '20000000000'
    }).on('confirmation', (confirmationNumber, receipt) => {
      console.log("confirmation", confirmationNumber);
    }).on('error', (error, receipt) => {
      console.log("error", error);
      console.log("receipt", receipt);
    });
  }


  async setComprarTokens() {
    await this.reInitializating()
    await this.uToken.methods.comprarTokens(1).send({
      from: this.accounts[0], // account address
      gas: '5000000',
      gasPrice: '20000000000'
    }).on('confirmation', (confirmationNumber, receipt) => {
      console.log("confirmation", confirmationNumber);
    }).on('error', (error, receipt) => {
      console.log("error", error);
      console.log("receipt", receipt);
    });


  }

  async getMisTokens() {
    await this.reInitializating()
    this._misTokens = await this.uToken.methods.misTokens()
      .call({ from: this.accounts[0] })
      .catch((err) => {
        this.errorTransation = err
        console.error(err);
      });
  }

  //  --------------------- Gestion de Disney -------------------


  async setNuevaAtraccion() {
    await this.reInitializating()

    await this.uToken.methods.NuevaAtraccion(`"nueva atraccion ${Date.now()}"`, 1).send({
      from: this.accounts[0], // account address
      gas: '5000000',
      gasPrice: '20000000000'
    }).on('confirmation', (confirmationNumber, receipt) => {
      console.log("confirmation", confirmationNumber);
    }).on('error', (error, receipt) => {
      console.log("error", error);
      console.log("receipt", receipt);
    });

  }

  async bajaAtraccion() {
    await this.reInitializating()

    await this.uToken.methods.BajaAtraccion(`name`).send({
      from: this.accounts[0], // account address
      gas: '5000000',
      gasPrice: '20000000000'
    }).on('confirmation', (confirmationNumber, receipt) => {
      console.log("confirmation", confirmationNumber);
    }).on('error', (error, receipt) => {
      console.log("error", error);
      console.log("receipt", receipt);
    });

  }

  async darDeAltaAtraccion() {
    await this.reInitializating()
    await this.uToken.methods.DarDeAltaAtraccion(`name`).send({
      from: this.accounts[0], // account address
      gas: '5000000',
      gasPrice: '20000000000'
    }).on('confirmation', (confirmationNumber, receipt) => {
      console.log("confirmation", confirmationNumber);
    }).on('error', (error, receipt) => {
      console.log("error", error);
      console.log("receipt", receipt);
    });

  }

  async getAtracionesDisponibles() {
    await this.reInitializating()
    this._atracionesDisponibles = await this.uToken.methods.AtracionesDisponibles()
      .call({ from: this.accounts[0] })
      .catch((err) => {
        this.errorTransation = err
        console.error(err);
      });

  }

  async subirseAtraccion() {
    await this.reInitializating()
    await this.uToken.methods.subirseAtraccion(`name`).send({
      from: this.accounts[0], // account address
      gas: '5000000',
      gasPrice: '20000000000'
    }).on('confirmation', (confirmationNumber, receipt) => {
      console.log("confirmation", confirmationNumber);
    }).on('error', (error, receipt) => {
      console.log("error", error);
      console.log("receipt", receipt);
    });

  }

  async devolverToken() {
    await this.reInitializating()
    await this.uToken.methods.subirseAtraccion(1).send({
      from: this.accounts[0], // account address
      gas: '5000000',
      gasPrice: '20000000000'
    }).on('confirmation', (confirmationNumber, receipt) => {
      console.log("confirmation", confirmationNumber);
    }).on('error', (error, receipt) => {
      console.log("error", error);
      console.log("receipt", receipt);
    });

  }

  async getHistorial() {
    await this.reInitializating()
    this._historial = await this.uToken.methods.Historial()
      .call({ from: this.accounts[0] })
      .catch((err) => {
        this.errorTransation = err
        console.error(err);
      });
  }




}



  // async atracionesDisponibles() {
  //   await this.reInitializating()
  //   this._atracionesDisponibles = await this.uToken.methods.AtracionesDisponibles().call({
  //     from: token_address, // contract address
  //   });
  // }

  // async nuevaAtraccion() {
  //   await this.reInitializating()
  //   console.warn("--------------nuevaAtraccion-----------------")
  //   await this.uToken.methods.NuevaAtraccion(`"nueva atraccion ${Date.now()}"`, 1).send({
  //     from: this.accounts[0], // account address
  //     gas: '5000000',
  //     gasPrice: '20000000000'
  //   }).on('confirmation', (confirmationNumber, receipt) => {
  //     console.info("--------------todo bien todo correcto-----------------")
  //     console.log("confirmationNumber", confirmationNumber);
  //     console.log("receipt", receipt);
  //     console.info("--------------todo bien todo correcto-----------------")
  //   }).on('error', (error, receipt) => {
  //     console.error("--------------error-----------------")
  //     console.log("error", error);
  //     console.log("receipt", receipt);
  //     console.error("--------------error-----------------")
  //   });
  //   console.warn("--------------fin nuevaAtraccion-----------------")

  // }


