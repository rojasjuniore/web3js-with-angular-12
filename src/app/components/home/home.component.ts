import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public contractService: ContractService) { }

  ngOnInit(): void {
  }

  connectAccount() {
    console.log("connectAccount")
    this.contractService.connectAccount();
  }



}
