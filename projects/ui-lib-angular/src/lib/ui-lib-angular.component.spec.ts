import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLibAngularComponent } from './ui-lib-angular.component';

describe('UiLibAngularComponent', () => {
  let component: UiLibAngularComponent;
  let fixture: ComponentFixture<UiLibAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiLibAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiLibAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
