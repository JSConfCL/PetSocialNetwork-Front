"use client"

import { useState } from "react"

import { Heart, MessageCircle, Send } from "lucide-react"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Button,
    Input
} from "@/components/ui"

interface Comment {
    id: number
    userName: string
    content: string
}

interface Post {
    id: number
    userName: string
    petName: string
    content: string
    imageUrl: string
    likes: number
    comments: Comment[]
}

export default function PetPost({ post }: { post: Post }) {
    const [likes, setLikes]             = useState( post.likes );
    const [comments, setComments]       = useState( post.comments );
    const [newComment, setNewComment]   = useState( "" );

    const handleLike = () => {
        setLikes(likes + 1)
    }

    const handleComment = (e: React.FormEvent) => {
        e.preventDefault()

        if (newComment.trim()) {
            const comment = {
                id: comments.length + 1,
                userName: "CurrentUser", // Esto vendría del usuario autenticado
                content: newComment,
            }
            setComments([...comments, comment])
            setNewComment("")
        }
    }

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-lg">
            <CardHeader className="flex flex-row items-center space-x-4">
                <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/6.x/bottts/svg?seed=${post.userName}`} />

                    <AvatarFallback>{post.userName[0]}</AvatarFallback>
                </Avatar>

                <div>
                    <p className="font-semibold">{post.userName}</p>
                    <p className="text-sm text-gray-500">{post.petName}</p>
                </div>
            </CardHeader>

            <CardContent>
                <p className="mb-4">{post.content}</p>

                <img
                    src         = {post.imageUrl || "/placeholder.svg"}
                    alt         = {`${post.petName}'s post`}
                    className   = "w-full rounded-lg"
                />
            </CardContent>

            <CardFooter className="flex flex-col items-start space-y-4">
                <div className="flex items-center space-x-4 w-full">
                    <Button variant="ghost" size="sm" onClick={handleLike}>
                        <Heart className="mr-2 h-4 w-4" />
                        {likes}
                    </Button>

                    <Button variant="ghost" size="sm">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {comments.length}
                    </Button>
                </div>

                <div className="w-full">
                    {comments.map((comment) => (
                        <div key={comment.id} className="mb-2">
                        <span className="font-semibold">{comment.userName}: </span>
                        {comment.content}
                        </div>
                    ))}
                </div>

                <form onSubmit={handleComment} className="flex w-full space-x-2">
                    <Input
                        type        = "text"
                        placeholder = "Añade un comentario..."
                        value       = {newComment}
                        onChange    = {(e) => setNewComment(e.target.value)}
                        className   = "flex-grow"
                    />

                    <Button type="submit" size="sm">
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}

