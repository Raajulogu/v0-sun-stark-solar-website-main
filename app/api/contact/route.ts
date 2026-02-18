import { NextRequest, NextResponse } from 'next/server'

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// In production, you would:
// 1. Connect to MongoDB for data storage
// 2. Send emails via email service (SendGrid, Resend, etc.)
// 3. Store leads in your CRM
// 4. Add authentication and rate limiting

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, serviceType, message } = body

    // Validation
    if (!name || !email || !phone || !serviceType || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      )
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      )
    }

    // Store the contact form data
    // In production, integrate with:
    // - MongoDB for database storage
    // - Email service for notifications
    // - CRM system for lead management

    const contactData = {
      name,
      email,
      phone,
      serviceType,
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
    }

    // Example: Log to console (in production, save to database)
    console.log('[Contact Form Submission]', contactData)

    // TODO: Integration points
    // 1. Save to MongoDB:
    // const db = await connectToDatabase()
    // await db.collection('contacts').insertOne(contactData)

    // 2. Send email to admin:
    // await sendAdminEmail(contactData)

    // 3. Send confirmation to user:
    // await sendUserConfirmationEmail(email, name)

    // 4. Post to CRM:
    // await crmService.createLead(contactData)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your inquiry. We will contact you soon!',
        data: { email }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact API Error]', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    )
  }
}

// Prevent GET requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
