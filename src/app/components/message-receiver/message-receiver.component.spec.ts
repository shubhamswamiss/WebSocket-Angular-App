import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageReceiverComponent } from './message-receiver.component';

describe('MessageReceiverComponent', () => {
  let component: MessageReceiverComponent;
  let fixture: ComponentFixture<MessageReceiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageReceiverComponent]
    });
    fixture = TestBed.createComponent(MessageReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
