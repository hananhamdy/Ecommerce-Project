import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { Product } from '../../../core/interfaces/product.interface';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  dialogRef = inject<DialogRef<Product>>(DialogRef<Product>);
  data = inject(DIALOG_DATA);
}
