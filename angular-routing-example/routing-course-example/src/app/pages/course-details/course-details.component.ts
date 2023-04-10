import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{

  selectedCourse: any;
  information: any;

   constructor(private route: ActivatedRoute){

    console.log("initialized Course detaild page");

   }

   ngOnInit(): void{
    // To take input data as selected course
    this.selectedCourse = this.route.snapshot.paramMap.get("course");
    this.courseDetail();
   }


   courseDetail(){
    if("C" == this.selectedCourse){
      this.information = "https://www.youtube.com/watch?v=7Dh73z3icd8&list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR"
    }else if("Java" == this.selectedCourse){
      this.information = "https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q"

    }
   }
}
