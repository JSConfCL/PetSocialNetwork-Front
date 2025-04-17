"use client";

import type { Post } from "@/interfaces/post";
import { Heart, MessageCircle, PawPrint } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState, type FormEvent } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CountUp,
  FadeContent,
  Input
} from "@/components";

export const Feed = (props: { post: Post }) => {
  const t = useTranslations("Feed");

  const { post } = props;
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = (e: FormEvent) => {
    e.preventDefault();

    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        userName: "CurrentUser", // Esto vendría del usuario autenticado
        content: newComment
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <Card className="mx-auto w-full max-w-2xl text-purple-950 shadow-lg shadow-purple-100 dark:bg-[#10061d]/50 dark:text-purple-300 dark:shadow-purple-950/50">
      <CardHeader className="flex flex-row items-center space-x-4">
        <Avatar>
          <AvatarImage src={`https://api.dicebear.com/6.x/bottts/svg?seed=${post.userName}`} />

          <AvatarFallback>{post.userName[0]}</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-semibold">{post.userName}</p>
          <p className="text-sm text-purple-400">{post.petName}</p>
        </div>
      </CardHeader>

      <CardContent>
        <p className="mb-4">{post.content}</p>

        <Image
          width={630}
          height={290}
          src={post.imageUrl || "/placeholder.svg"}
          alt={`${post.petName}'s post`}
          className="w-full rounded-lg"
        />

        <div className="flex items-center">
          <div className="mt-2 flex w-full items-center space-x-2 text-purple-500">
            <Button
              variant="ghost"
              onClick={handleLike}
              className="hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-950/40"
            >
              <Heart className="mr-1 h-4 w-4" />

              <CountUp from={0} to={likes} separator="." direction="up" duration={1} className="count-up-text" />
            </Button>

            <Button variant="ghost" className="hover:bg-purple-100 hover:text-purple-700 dark:hover:bg-purple-950/40">
              <MessageCircle className="mr-1 h-4 w-4" />

              <CountUp
                from={0}
                to={comments.length}
                separator="."
                direction="up"
                duration={1}
                className="count-up-text"
              />
            </Button>
          </div>

          <span className="flex w-full justify-end text-[13px] text-purple-500">{t("timeAgo", { hours: 10 })}</span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start space-y-3">
        <div className="w-full">
          {comments.map((comment) => (
            <FadeContent key={comment.id} blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
              <div className="mb-2">
                <span className="font-semibold">
                  {comment.userName}
                  {":"}{" "}
                </span>
                {comment.content}
              </div>
            </FadeContent>
          ))}
        </div>

        <form onSubmit={handleComment} className="flex w-full space-x-2">
          <Input
            type="text"
            placeholder={t("addCommentInputPlaceholder")}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-grow border-purple-700 text-purple-700"
          />

          <Button type="submit" size="sm">
            <PawPrint className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default Feed;
