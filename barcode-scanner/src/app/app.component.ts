import { Component, HostListener } from '@angular/core';
import { BarcodeScannerComponent } from "./home/components/barcode-scanner/barcode-scanner.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";


@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'barcode-scanner';
   isMobile = true;

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenWidth();
  }

  private checkScreenWidth() {
    this.isMobile = window.innerWidth < 1200;
  }
}
