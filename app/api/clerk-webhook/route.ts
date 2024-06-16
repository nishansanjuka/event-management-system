import { Webhook } from "svix";
import { headers } from "next/headers";
import {
  DeletedObjectJSON,
  User,
  UserJSON,
  WebhookEvent,
} from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Invalid Secret");
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  //   const { id } = evt.data;
  const eventType = evt.type;
  if (eventType === "user.created") {
    await CreateUser(payload.data as UserJSON);
  }

  if (eventType === "user.updated") {
    await UpdateUser(payload.data as UserJSON);
  }

  if (eventType === "user.deleted") {
    await DeleteUser(payload.data as DeletedObjectJSON);
  }

  return new Response("", { status: 200 });
}

async function CreateUser(user: UserJSON) {
  const prisma = new PrismaClient();

  try {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email_addresses[0].email_address,
        image: user.has_image ? user.image_url : "NO-IMAGE",
      },
    });
  } catch (error: any) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }
}

async function UpdateUser(user: UserJSON) {
  const prisma = new PrismaClient();

  try {
    await prisma.user.update({
      where: { email: user.email_addresses[0].email_address },
      data: {
        firstName: user.first_name,
        lastName: user.last_name,
        image: user.has_image ? user.image_url : "NO-IMAGE",
      },
    });
  } catch (error: any) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }
}

async function DeleteUser(deleted: DeletedObjectJSON) {
  const prisma = new PrismaClient();

  try {
    console.log(deleted.id);
    await prisma.user.delete({ where: { clerkId: deleted.id } });
  } catch (error: any) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }
}
