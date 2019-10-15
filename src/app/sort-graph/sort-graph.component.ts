import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartAnimationOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'sort-graph',
  templateUrl: './sort-graph.component.html',
  styleUrls: ['./sort-graph.component.scss']
})
export class SortGraphComponent implements OnInit {
  isDataSorted=false;
  numberOfData:number;
  datas=[];
  tempArray=[];
  timeoutMilisecond:number;
  enableRandomization=true;
  additionalDataForm: FormGroup;

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
  public barChartType: ChartType = 'bar'; //pie,line,radar
  public barChartLegend = true;
  public barChartData: ChartDataSets[];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.numberOfData=100;
    this.timeoutMilisecond=0;
    this.datas=Array(this.numberOfData).fill(0).map(() => Math.round(Math.random() * 100));
    this.barChartLabels=this.tempArray;
    this.tempArray=this.datas;
    this.barChartData = [
      { data: this.tempArray}
    ];
    this.barChartLabels=this.tempArray;
    //console.log(this.datas);

    this.additionalDataForm = this.fb.group(
      {
        delay: ['',Validators.required],
      }
    );

  }

  selectionSort(){
    this.timeoutMilisecond=parseInt(this.additionalDataForm.get('delay').value)>0?parseInt(this.additionalDataForm.get('delay').value):0;
    this.additionalDataForm.controls.delay.setValue(this.timeoutMilisecond);
    //console.log(parseInt(this.additionalDataForm.get('delay').value));
    for(let i=0; i<this.numberOfData-1; i++){
      setTimeout(()=>{
        this.innerSort(i);
      },(i *(this.numberOfData)* this.timeoutMilisecond+10)/2);
      
    }
  }

  innerSort (i:number) {
    for(let j=i+1; j<this.numberOfData; j++){
      setTimeout(()=>{
        this.innerSwap(i,j);
      },(j-i) * this.timeoutMilisecond);
      
    }
  }

  bubbleSort(){
    this.timeoutMilisecond=parseInt(this.additionalDataForm.get('delay').value)>0?parseInt(this.additionalDataForm.get('delay').value):0;
    this.additionalDataForm.controls.delay.setValue(this.timeoutMilisecond);
    //console.log(parseInt(this.additionalDataForm.get('delay').value));
    for(let i=0; i<this.numberOfData; i++){
      setTimeout(()=>{
        this.innerBubbleSort(i);
      },i *this.numberOfData* this.timeoutMilisecond);
      
    }
  }
  innerBubbleSort (i:number) {
    for(let j=0; j<this.numberOfData-1; j++){
      setTimeout(()=>{
        this.innerSwap(j,j+1);
      },j * this.timeoutMilisecond);
      
    }
  }

  /*insertionSort(){
    this.timeoutMilisecond=parseInt(this.additionalDataForm.get('delay').value)>0?parseInt(this.additionalDataForm.get('delay').value):0;
    this.additionalDataForm.controls.delay.setValue(this.timeoutMilisecond);
    //console.log(parseInt(this.additionalDataForm.get('delay').value));
    for(let i=1; i<this.numberOfData; i++){
      setTimeout(()=>{
        this.innerInsertionSort(i);
      },(i-1) *this.numberOfData* this.timeoutMilisecond);
      
    }
  }
  innerInsertionSort (i:number) {
    for(let j=i-1; j>0; j++){
      setTimeout(()=>{
        this.innerSwap(j,j+1);
      },j * this.timeoutMilisecond);
      
    }
  }*/
  
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
