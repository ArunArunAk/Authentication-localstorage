import { Component ,OnInit} from '@angular/core';
import { AuthenservicesService } from 'src/app/services/authenservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
constructor(private auth:AuthenservicesService){}

ngOnInit(): void {}

logout(): void {
  this.auth.logout();
  
}

}
