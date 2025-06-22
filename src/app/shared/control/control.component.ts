import {
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent {
  @HostBinding('class') className = 'control';
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;
  label = input.required<string>();
}
