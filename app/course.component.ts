import { Component } from '@angular/core';

@Component({
    selector: 'st-course',
    templateUrl: './course.component.html'
})
export class CourseComponent {
    title = "Angular 5"
    trainer = "Srikanth Pragada"
    trainerImage = "srikanth.jpg"
    topics = ["Data Binding","Services","Forms"]

    constructor() { }

    addTopic(topic:string) 
    {
        console.log("Adding topic " + topic)
        this.topics.push(topic)  // add topic to array 
    }

    deleteTopic(index) {
        console.log("Deleting topic " + index)
        this.topics.splice(index,1)   // delete topic at the given index 

    }
 
}