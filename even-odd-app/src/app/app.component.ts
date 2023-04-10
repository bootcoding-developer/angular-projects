import { Component } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 

  title = 'Even Odd Program'
  num: number = 0;
  result = "";

  elements:number[] = []
  

  evenArray(){
    this.elements = []
    for(let i = 2; i <= this.num; i++){
      if(i % 2 == 0){
        this.elements.push(i);
      }
    }
  }

  evenOdd(){
    console.log("Inside EvenOdd()")
    if(this.num % 2 == 0){
      this.result = this.num + " is EVEN number";
    }else{
      this.result = this.num + " is ODD number";
    }
  }

}
