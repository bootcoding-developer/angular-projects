import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courses = ["C", "C++", "Java", "Python", "Fullstack", "Backend"]

  displayCourses: string[] = []

  constructor(private router: Router){
    console.log("Initialized Course Component");

    // processing to keep only first four course of array
    this.displayCourses = this.extractCourses(4, this.courses);
  }

  extractCourses(limit: number, courses: any){
    // logic to run loop until given number
    // initialize it to displayCourses = 
    return this.courses;
  }
  
  getCourseInfo(selectedCourse: any){
    console.log(selectedCourse.value);
    // navigating to another page with input data
    this.router.navigate(['/course-info', {course: selectedCourse.value}]);
  }

}
