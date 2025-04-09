import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    Name: string = '';
    Age: string = '';
    Course: string = '';
    Students: any[] = [];
    studentId: number = 1; // To give each student a unique ID
  
    registerStudent() {
      if (this.Name && this.Age && this.Course) {
        this.Students.push({
          id: this.studentId++, // Assign a unique ID
          name: this.Name, // Take values from input fields
          age: this.Age,
          course: this.Course,
        });
  
        this.resetForm(); // Clear input fields after adding a student
      } else {
        alert("Please fill all fields before submitting.");
      }
    }
  
    resetForm() {
      this.Name = '';
      this.Age = '';
      this.Course = '';
    }

}
