/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Booking as PrismaBooking,
  Attendee as PrismaAttendee,
  Payment as PrismaPayment,
  BookingReference as PrismaBookingReference,
  WorkflowReminder as PrismaWorkflowReminder,
  DailyEventReference as PrismaDailyEventReference,
  DestinationCalendar as PrismaDestinationCalendar,
  EventType as PrismaEventType,
  User as PrismaUser,
} from "@prisma/client";

export class BookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BookingCountArgs, "select">): Promise<number> {
    return this.prisma.booking.count(args);
  }

  async bookings(args: Prisma.BookingFindManyArgs): Promise<PrismaBooking[]> {
    return this.prisma.booking.findMany(args);
  }
  async booking(
    args: Prisma.BookingFindUniqueArgs
  ): Promise<PrismaBooking | null> {
    return this.prisma.booking.findUnique(args);
  }
  async createBooking(args: Prisma.BookingCreateArgs): Promise<PrismaBooking> {
    return this.prisma.booking.create(args);
  }
  async updateBooking(args: Prisma.BookingUpdateArgs): Promise<PrismaBooking> {
    return this.prisma.booking.update(args);
  }
  async deleteBooking(args: Prisma.BookingDeleteArgs): Promise<PrismaBooking> {
    return this.prisma.booking.delete(args);
  }

  async findAttendees(
    parentId: number,
    args: Prisma.AttendeeFindManyArgs
  ): Promise<PrismaAttendee[]> {
    return this.prisma.booking
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .attendees(args);
  }

  async findPayment(
    parentId: number,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.booking
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payment(args);
  }

  async findReferences(
    parentId: number,
    args: Prisma.BookingReferenceFindManyArgs
  ): Promise<PrismaBookingReference[]> {
    return this.prisma.booking
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .references(args);
  }

  async findWorkflowReminders(
    parentId: number,
    args: Prisma.WorkflowReminderFindManyArgs
  ): Promise<PrismaWorkflowReminder[]> {
    return this.prisma.booking
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .workflowReminders(args);
  }

  async getDailyRef(
    parentId: number
  ): Promise<PrismaDailyEventReference | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .dailyRef();
  }

  async getDestinationCalendar(
    parentId: number
  ): Promise<PrismaDestinationCalendar | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .destinationCalendar();
  }

  async getEventType(parentId: number): Promise<PrismaEventType | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .eventType();
  }

  async getUser(parentId: number): Promise<PrismaUser | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
