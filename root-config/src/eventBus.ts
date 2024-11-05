import { Subject } from 'rxjs';

export const eventBus = new Subject<any>();

export function sendMessage(message: any) {
  eventBus.next(message);
}
