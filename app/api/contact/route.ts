import { NextRequest, NextResponse } from "next/server"

// Email validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation
const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, website } = body

    // Honeypot check - if website field is filled, it's a bot
    if (website && website.trim()) {
      // Silently reject bot submissions
      return NextResponse.json({ message: "Message sent successfully!", success: true }, { status: 200 })
    }

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json({ message: "Name is required" }, { status: 400 })
    }

    if (!email || !email.trim()) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 })
    }

    if (!validateEmail(email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 })
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json({ message: "Phone number is required" }, { status: 400 })
    }

    if (!validatePhone(phone)) {
      return NextResponse.json({ message: "Invalid phone number" }, { status: 400 })
    }

    // Get Web3Forms access key from environment variable
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY
    
    if (!accessKey) {
      console.error("Missing Web3Forms configuration: WEB3FORMS_ACCESS_KEY not set")
      return NextResponse.json(
        { message: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      )
    }

    // Prepare form data for Web3Forms API (using URL-encoded format)
    const formData = new URLSearchParams()
    formData.append("access_key", accessKey)
    formData.append("subject", `New Contact Form Submission from ${name}`)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("message", message || "No message provided")

    // Send to Web3Forms API with proper headers to avoid Cloudflare blocking
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "application/json",
      },
      body: formData.toString(),
    })

    // Check if response is JSON
    const contentType = response.headers.get("content-type")
    let result

    if (contentType && contentType.includes("application/json")) {
      result = await response.json()
    } else {
      // If not JSON, get text response for debugging
      const textResponse = await response.text()
      console.error("Web3Forms returned non-JSON response:", textResponse.substring(0, 200))
      throw new Error("Web3Forms API returned an unexpected response format")
    }

    if (result.success) {
      return NextResponse.json(
        {
          message: "Message sent successfully!",
          success: true,
        },
        { status: 200 }
      )
    } else {
      console.error("Web3Forms API error:", result)
      return NextResponse.json(
        {
          message: result.message || "Failed to send message. Please try again later.",
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        message: "Failed to send message. Please try again later.",
        error: process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 }
    )
  }
}
