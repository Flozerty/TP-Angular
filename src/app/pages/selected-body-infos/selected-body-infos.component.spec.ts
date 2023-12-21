import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBodyInfosComponent } from './selected-body-infos.component';

describe('SelectedBodyInfosComponent', () => {
  let component: SelectedBodyInfosComponent;
  let fixture: ComponentFixture<SelectedBodyInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedBodyInfosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedBodyInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
