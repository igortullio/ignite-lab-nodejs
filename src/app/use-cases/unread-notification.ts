import { NotificationRepository } from '@app/repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found';

interface Request {
  notificationtId: string;
}

type Response = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(request: Request): Promise<Response> {
    const { notificationtId } = request;

    const notification = await this.notificationRepository.findById(
      notificationtId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.unread();
    await this.notificationRepository.save(notification);
  }
}
