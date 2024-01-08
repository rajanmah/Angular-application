import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltimehitsComponent } from './alltimehits.component';

describe('AlltimehitsComponent', () => {
  let component: AlltimehitsComponent;
  let fixture: ComponentFixture<AlltimehitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlltimehitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlltimehitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
