import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sort-graph',
  templateUrl: './sort-graph.component.html',
  styleUrls: ['./sort-graph.component.scss']
})
export class SortGraphComponent implements OnInit {
  numberOfData:number;
  datas=[];
  constructor() { }

  ngOnInit() {
    this.numberOfData=12;
    this.datas=Array(this.numberOfData).fill(0).map(() => Math.round(Math.random() * 100))
    console.log(this.datas);
  }

  sort(){
    for(let i=0; i<this.numberOfData-1; i++){
      for(let j=i+1; j<this.numberOfData; j++){
        if(this.datas[i]>this.datas[j]){
          let now = new Date().getTime();
          while ( new Date().getTime() < now + 300){}

          let temp=this.datas[i];
          this.datas[i]=this.datas[j];
          this.datas[j]=temp;
          console.log(this.datas);
        }
      }
    }
  }

}
