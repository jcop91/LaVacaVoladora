import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPagesComponent } from './start-pages.component';

describe('StartPagesComponent', () => {
  let component: StartPagesComponent;
  let fixture: ComponentFixture<StartPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
