import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoflicenceComponent } from './listoflicence.component';

describe('ListoflicenceComponent', () => {
  let component: ListoflicenceComponent;
  let fixture: ComponentFixture<ListoflicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoflicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoflicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
