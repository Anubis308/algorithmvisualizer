import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartAnimationOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'sort-graph',
  templateUrl: './sort-graph.component.html',
  styleUrls: ['./sort-graph.component.scss']
})
export class SortGraphComponent implements OnInit {
  numberOfData:number;
  datas=[];
  tempArray=[];
  timeoutMilisecond:number;

  public barChartOptions: ChartOptions = {
    responsive: true,
    responsiveAnimationDuration: 0,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    animation:{
      duration:0,
    }
    
  }
  
  public barChartLabels: Label[] ;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  

  public barChartData: ChartDataSets[];

  constructor() { }

  ngOnInit() {
    this.numberOfData=120;
    this.timeoutMilisecond=0;
    this.datas=Array(this.numberOfData).fill(0).map(() => Math.round(Math.random() * 100));
    this.barChartLabels=this.tempArray;
    this.tempArray=this.datas;
    this.barChartData = [
      { data: this.tempArray}
    ];
    this.barChartLabels=this.tempArray;
    console.log(this.datas);
  }

  sort(){
    for(let i=0; i<this.numberOfData-1; i++){
      setTimeout(()=>{
        this.innerSort(i);
      },i *this.numberOfData* this.timeoutMilisecond);
      
    }
  }

  innerSort (i:number) {
    for(let j=i+1; j<this.numberOfData; j++){
      setTimeout(()=>{
        this.innerSwap(i,j);
      },j * this.timeoutMilisecond);
      
    }
  }
  innerSwap(i:number,j:number){
    if(this.tempArray[i]>this.tempArray[j]){
      /*let now = new Date().getTime();
      while ( new Date().getTime() < now + 300){}*/

      let temp=this.tempArray[i];
      this.tempArray[i]=this.tempArray[j];
      this.tempArray[j]=temp;
      this.barChartData = [
        { data: this.tempArray}
      ];
      //console.log(i,j);
    }
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.datas=Array(this.numberOfData).fill(0).map(() => Math.round(Math.random() * 100));
    this.tempArray=this.datas;
    this.barChartData = [
      { data: this.tempArray}
    ];
    this.barChartLabels=this.tempArray;
  }
}
