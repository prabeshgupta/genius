"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
    {
        name: "Prabesh",
        icon: "P",
        title: "Web Developer",
        description: "It's a magic wand for web developers."
    },
    {
        name: "Suruchi",
        icon: "S",
        title: "Blog writer",
        description: "I am able to write blogs within couple of minutes. All thanks to this application."
    },
    {
        name: "Aayush",
        icon: "A",
        title: "Graphic Designer",
        description: "I tested it for fun, but now I'm totally hooked on this brilliant website. It's really helpful for generating creative images."
    },
    {
        name: "Garima",
        icon: "G",
        title: "Student",
        description: "Can't lie. I have been using it for my college projects and assignments."
    },
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="px-0 pt-4">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}