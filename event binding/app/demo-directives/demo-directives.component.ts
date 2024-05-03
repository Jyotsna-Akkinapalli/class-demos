import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo-directives',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.css'
})
export class DemoDirectivesComponent {
  nums: Num[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
  selectedValue: string= 'One';  
  show: boolean = true;  

items: Item[] =[
  {
    id:1,
    name:"airpods",
    cost:300
  },
  {
    id:2,
    name:"mobile phone",
    cost:30000
  },
  {
    id:3,
    name:"Bluetooth speakers",
    cost:500
  }
]
}   

class Item{
  id: number | undefined;
  name!: string;
  cost!: number;
}

class Num {  
  name!: string;  
  val!: number;  
}  
 
