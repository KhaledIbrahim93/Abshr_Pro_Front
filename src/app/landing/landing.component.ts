import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  
  constructor(private route:Router) {
    
    
  }
  ngOnInit(): void {
      
  }
  goToindividualsHomePage(){
    debugger
    this.route.navigateByUrl('/individuals/individualsHome')
  }
}
