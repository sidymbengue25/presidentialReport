import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashNotificationComponent } from './flash-notification.component';

describe('FlashNotificationComponent', () => {
  let component: FlashNotificationComponent;
  let fixture: ComponentFixture<FlashNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
