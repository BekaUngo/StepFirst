import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDetailsComponent } from './side-bar-details.component';

describe('SideBarDetailsComponent', () => {
  let component: SideBarDetailsComponent;
  let fixture: ComponentFixture<SideBarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarDetailsComponent]
    });
    fixture = TestBed.createComponent(SideBarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
