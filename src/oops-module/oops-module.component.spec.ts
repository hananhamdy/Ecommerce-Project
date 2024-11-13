import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsModuleComponent } from './oops-module.component';

describe('OopsModuleComponent', () => {
  let component: OopsModuleComponent;
  let fixture: ComponentFixture<OopsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OopsModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OopsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
