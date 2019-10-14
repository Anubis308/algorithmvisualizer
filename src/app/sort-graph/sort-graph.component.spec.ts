import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortGraphComponent } from './sort-graph.component';

describe('SortGraphComponent', () => {
  let component: SortGraphComponent;
  let fixture: ComponentFixture<SortGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
