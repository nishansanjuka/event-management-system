import { EventForm } from "@/components/layouts/ui/event-form";
import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return new Response("Unauthorized", { status: 401 });

  const { title, description, venue, date, category } =
    (await req.json()) as EventForm;

  const prisma = new PrismaClient();

  try {
    const owner = await prisma.user.findUnique({ where: { clerkId: user.id } });

    if (owner) {
      const event = await prisma.event.create({
        data: {
          title,
          description,
          venue,
          date,
          category,
          userId: owner.id,
        },
        include: {
          User: {
            select: {
              firstName: true,
              lastName: true,
              image: true,
              rsvpList: user !== null && {
                where: {
                  User: {
                    clerkId: user.id,
                  },
                },
              },
            },
          },
        },
      });
      return Response.json({ event });
    } else {
      return new Response("Can't find user", { status: 400 });
    }
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(req: NextRequest) {
  const user = await currentUser();
  const searchParams = req.nextUrl.searchParams;
  const take = searchParams.get("take") as string | "all";
  const prisma = new PrismaClient();

  try {
    const events = await prisma.event.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: take === "all" ? undefined : parseInt(take),
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
    return Response.json({ events });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
