import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@app/repositories/notification-repository';

interface Request {
  recipientId: string;
}

interface Response {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(request: Request): Promise<Response> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
