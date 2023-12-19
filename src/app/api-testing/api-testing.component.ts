import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-api-testing',
  standalone: true,
  imports: [],
  templateUrl: './api-testing.component.html',
  styleUrl: './api-testing.component.css'
})
export class ApiTestingComponent {

  constructor(private apiServiceService: ApiServiceService)
  {
    this.apiServiceService.getGenresList().subscribe(data => console.log(data))

  }

  
}
