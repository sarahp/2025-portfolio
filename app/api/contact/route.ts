import { NextResponse } from "next/server"
import { PrismaClient } from '@/lib/generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    })

    return NextResponse.json(contact, { status: 201 })
  } catch (error) {
    console.error("Error creating contact:", error)
    return NextResponse.json(
      { error: "Error creating contact" },
      { status: 500 }
    )
  }
} 