import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsQueueComponent } from './tickets-queue.component';

describe('TicketsQueueComponent', () => {
  let component: TicketsQueueComponent;
  let fixture: ComponentFixture<TicketsQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsQueueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
