import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accountStatus: any;

  nuevaAtraccion: any
  darDeAltaAtraccion: any
  bajaAtraccion: any
  subirseAtraccion: any
  tokens: any
  _generarTokens: any
  _setComprarTokens: any
  _devolverToken: any
  constructor(public contractService: ContractService) { }

  ngOnInit(): void {
    this.contractService.accountStatus$.subscribe(res => {
      console.log("accountStatus$", res)
      this.accountStatus = res;
    })
  }

  connectAccount() {
    console.log("connectAccount")
    this.contractService.connectAccount();
  }


}
