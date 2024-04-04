import { Directive, ElementRef, Host, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]',
  standalone: true,
})
export class HoverDirective implements OnInit {
  @Input() color: string = 'red';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color; // Alternative way to set style
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'LightGray');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color);
  }

}
