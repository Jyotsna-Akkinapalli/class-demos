import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css'
})
export class DisplayDataComponent implements OnInit{
  httpClient=inject(HttpClient);
  data: any[] =[];
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData()
  {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe({
      next:data=>{
        console.log(data);
        this.data=Object.values(data);},
      error:error=>console.log(error)
      });
  }
}
