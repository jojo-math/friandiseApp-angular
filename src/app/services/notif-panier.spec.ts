import { TestBed } from '@angular/core/testing';

import { NotifPanier } from './notif-panier';

describe('NotifPanier', () => {
  let service: NotifPanier;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifPanier);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
