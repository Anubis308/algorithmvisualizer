import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSortGraphComponent } from './app-sort-graph.component';

describe('AppSortGraphComponent', () => {
  let component: AppSortGraphComponent;
  let fixture: ComponentFixture<AppSortGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSortGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSortGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
