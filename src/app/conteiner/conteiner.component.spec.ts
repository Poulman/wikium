import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteinerComponent } from './conteiner.component';

describe('ConteinerComponent', () => {
  let component: ConteinerComponent;
  let fixture: ComponentFixture<ConteinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
