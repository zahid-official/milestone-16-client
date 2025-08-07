"use client"

import { useState } from "react"
import { BookOpen, User, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BorrowBookPage() {
  const [borrowerName, setBorrowerName] = useState("")
  const [email, setEmail] = useState("")
  const [quantity, setQuantity] = useState("1")
  const [dueDate, setDueDate] = useState("2025-08-21")

  const bookDetails = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Literature",
    isbn: "978-0-7432-7356-5",
    available: 3,
    total: 5
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", {
      borrowerName,
      email,
      quantity,
      dueDate,
      book: bookDetails.title
    })
  }

  const formatDisplayDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-black">
            Borrow Book
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete the borrowing process
          </p>
        </div>

        {/* Book Details Card */}
        <Card className="border border-border rounded-xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold">
              <BookOpen className="h-5 w-5" />
              Book Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Title</Label>
                <p className="text-lg font-medium">{bookDetails.title}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Author</Label>
                <p className="text-lg">{bookDetails.author}</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Genre</Label>
                <Badge variant="secondary" className="mt-1 w-fit">
                  {bookDetails.genre}
                </Badge>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">ISBN</Label>
                <p className="font-mono">{bookDetails.isbn}</p>
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-muted-foreground">Availability</Label>
              <p className="text-lg">
                <span className="font-medium text-green-600">{bookDetails.available}</span> of {bookDetails.total} copies available
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Borrowing Information Card */}
        <Card className="border border-border rounded-xl shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold">
              <User className="h-5 w-5" />
              Borrowing Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="borrowerName" className="text-sm font-medium">
                    Borrower Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="borrowerName"
                    placeholder="Enter your full name"
                    required
                    value={borrowerName}
                    onChange={(e) => setBorrowerName(e.target.value)}
                    className="h-9"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="borrowerEmail" className="text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="borrowerEmail"
                    placeholder="Enter your email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-9"
                  />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-sm font-medium">
                    Quantity <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="quantity"
                    min="1"
                    max="3"
                    placeholder="Number of copies"
                    required
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="h-9"
                  />
                  <p className="text-sm text-muted-foreground">Maximum 3 copies available</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate" className="text-sm font-medium">
                    Due Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="dueDate"
                    required
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="h-9"
                  />
                </div>
              </div>
              
              {/* Borrowing Summary */}
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Borrowing Summary
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Book:</span>
                    <span className="font-medium">{bookDetails.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity:</span>
                    <span className="font-medium">{quantity} copy</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Due Date:</span>
                    <span className="font-medium">{formatDisplayDate(dueDate)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <Button 
                  type="submit" 
                  className="flex-1 h-9"
                  disabled={!borrowerName || !email}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Confirm Borrow
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1 h-9"
                  onClick={() => window.history.back()}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
