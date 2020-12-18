import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsItemComponent } from './ans-item.component';

describe('AnsItemComponent', () => {
  let component: AnsItemComponent;
  let fixture: ComponentFixture<AnsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
