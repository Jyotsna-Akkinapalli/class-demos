import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,DemoDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter:number=0;
  name:string="jyotsna";
  increment()
  {
    this.counter+=1;
  }
  decrement()
  {
    this.counter-=1;
  }
  modifyName(event:any)
  {
    this.name=event.target.value;
  }

}
