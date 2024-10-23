import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaBaseComponent } from 'app/layout/common/tela-base/tela-base.component';

@Component({
  selector: 'app-armazenar',
  standalone: true,
  imports: [
      CommonModule,
      TelaBaseComponent
  ],
  templateUrl: './armazenar.component.html',
  styleUrl: './armazenar.component.scss'
})
export class ArmazenarComponent {

}
