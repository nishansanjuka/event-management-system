import { EEvent } from "@/hooks";
import {
  SendSubscriptionNotification,
  SendUnSubscribeNotification,
} from "@/lib/mails";
import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  const user = await currentUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const searchParams = req.nextUrl.searchParams;
  const action = searchParams.get("action") as "cancel" | "set";
  const eventId = searchParams.get("event") as string;
  const prisma = new PrismaClient();

  try {
    const rsvpUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    if (rsvpUser) {
      if (action === "set") {
        await prisma.rSVP.create({
          data: {
            User: {
              connect: {
                clerkId: user.id,
              },
            },
            status: "PENDING",
            Event: {
              connect: {
                id: eventId,
              },
            },
          },
        });

        const event = await prisma.event.findUnique({
          where: { id: eventId },
          include: {
            User: {
              select: {
                firstName: true,
                lastName: true,
                image: true,
              },
            },
            rsvpList: user !== null && {
              where: {
                User: {
                  clerkId: user.id,
                },
              },
            },
          },
        });

        await SendSubscriptionNotification({
          to: user.emailAddresses[0].emailAddress,
        });

        return Response.json({ event });
      } else if (action === "cancel") {
        const existingRSVP = await prisma.rSVP.findFirst({
          where: {
            eventId: eventId,
            User: {
              clerkId: user.id,
            },
          },
        });

        if (existingRSVP) {
          await prisma.rSVP.delete({
            where: {
              id: existingRSVP.id,
            },
          });

          const event = await prisma.event.findUnique({
            where: { id: eventId },
            include: {
              User: {
                select: {
                  firstName: true,
                  lastName: true,
                  image: true,
                },
              },
              rsvpList: user !== null && {
                where: {
                  User: {
                    clerkId: user.id,
                  },
                },
              },
            },
          });

          await SendUnSubscribeNotification({
            to: user.emailAddresses[0].emailAddress,
            event: event as EEvent,
          });

          return Response.json({ event });
        } else {
          return new Response("Bad Request", { status: 400 });
        }
      }
    } else {
      return new Response("Bad Request", { status: 400 });
    }
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
