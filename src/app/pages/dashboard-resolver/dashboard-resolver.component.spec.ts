import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResolverComponent } from './dashboard-resolver.component';

describe('DashboardResolverComponent', () => {
  let component: DashboardResolverComponent;
  let fixture: ComponentFixture<DashboardResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardResolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
