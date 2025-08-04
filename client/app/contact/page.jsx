"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Copy, Trash2, Pencil, ThumbsUp } from "lucide-react";
import { toast } from "sonner";
import { FaUserCircle } from "react-icons/fa";
import ParticlesCustomBackground from "../backgrounds/ParticlesCustomBackground";
import { emailDisplay } from "../home/ProfileSection";

const TwitterMockupPage = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [comments, setComments] = useState({});
  const [reactions, setReactions] = useState({});
  const [commentReactions, setCommentReactions] = useState({});
  const [userReactions, setUserReactions] = useState(new Set());
  const [userCommentReactions, setUserCommentReactions] = useState(new Set());
  const [editingPostId, setEditingPostId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = emailDisplay;

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const savedComments = JSON.parse(localStorage.getItem("comments")) || {};
    const savedReactions = JSON.parse(localStorage.getItem("reactions")) || {};
    const savedCommentReactions = JSON.parse(localStorage.getItem("commentReactions")) || {};
    const savedUserReactions = new Set(JSON.parse(localStorage.getItem("userReactions")) || []);
    const savedUserCommentReactions = new Set(JSON.parse(localStorage.getItem("userCommentReactions")) || []);
    setPosts(savedPosts);
    setComments(savedComments);
    setReactions(savedReactions);
    setCommentReactions(savedCommentReactions);
    setUserReactions(savedUserReactions);
    setUserCommentReactions(savedUserCommentReactions);
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
    localStorage.setItem("comments", JSON.stringify(comments));
    localStorage.setItem("reactions", JSON.stringify(reactions));
    localStorage.setItem("commentReactions", JSON.stringify(commentReactions));
    localStorage.setItem("userReactions", JSON.stringify(Array.from(userReactions)));
    localStorage.setItem("userCommentReactions", JSON.stringify(Array.from(userCommentReactions)));
  }, [posts, comments, reactions, commentReactions, userReactions, userCommentReactions]);

  const generateUsername = () => {
    return "anon-" + Math.floor(100 + Math.random() * 900);
  };

  const handlePost = () => {
    if (newPost.trim() === "") return;
    const post = {
      id: Date.now(),
      content: newPost.trim(),
      timestamp: new Date().toLocaleString(),
      username: generateUsername(),
    };
    setPosts([post, ...posts]);
    setNewPost("");
    toast.success("Post created successfully!");
  };

  const handleReact = (postId) => {
    if (userReactions.has(postId)) return;
    setReactions((prev) => ({
      ...prev,
      [postId]: (prev[postId] || 0) + 1,
    }));
    setUserReactions(new Set(userReactions).add(postId));
  };

  const handleCommentReact = (postId, commentIndex) => {
    const key = `${postId}-${commentIndex}`;
    if (userCommentReactions.has(key)) return;
    setCommentReactions((prev) => ({
      ...prev,
      [key]: (prev[key] || 0) + 1,
    }));
    setUserCommentReactions(new Set(userCommentReactions).add(key));
  };

  const handleComment = (postId, comment) => {
    if (comment.trim() === "") return;
    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment.trim()],
    }));
    toast.success("Comment added successfully!");
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
    const updatedComments = { ...comments };
    delete updatedComments[postId];
    const updatedReactions = { ...reactions };
    delete updatedReactions[postId];
    const updatedCommentReactions = { ...commentReactions };
    Object.keys(updatedCommentReactions).forEach((key) => {
      if (key.startsWith(`${postId}-`)) delete updatedCommentReactions[key];
    });
    setComments(updatedComments);
    setReactions(updatedReactions);
    setCommentReactions(updatedCommentReactions);
    setUserReactions((prev) => {
      const updated = new Set(prev);
      updated.delete(postId);
      return updated;
    });
    setUserCommentReactions((prev) => {
      const updated = new Set(Array.from(prev).filter((key) => !key.startsWith(`${postId}-`)));
      return updated;
    });
    toast.success("Post deleted successfully!");
  };

  const startEditing = (post) => {
    setEditingPostId(post.id);
    setEditContent(post.content);
  };

  const saveEdit = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, content: editContent } : post
      )
    );
    setEditingPostId(null);
    setEditContent("");
    toast.success("Post edited successfully!");
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  // Real form submission using formspree
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Your message has been sent!");
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Failed to send the message.");
        toast.error("Failed to send the message.");
      }
    } catch (error) {
      setResponseMessage("An Error occurred:", error);
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4">
      {/* Fixed Header Title */}
      <h1 className="text-center text-4xl font-bold text-primary mb-8">
        Social Media Testing-Grounds
      </h1>

      {/* Particles background */}
      <ParticlesCustomBackground 
        color="#800080"
        shape="char"
        characters={["☎️", "📧", "📫", "✉️"]}
      />

      {/* Main content */}
      <div className="pt-24 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {/* Social media mockup on left */}
        <div className="md:col-span-2 bg-card rounded-lg shadow-md p-4 h-[80vh] overflow-y-auto flex flex-col gap-6">
          <h2 className="text-3xl font-bold mb-4">Post Your Thoughts</h2>

          <div className="p-6 bg-muted rounded-lg">
            <Textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
              rows={4}
              className="mb-3 resize-none bg-background border-border"
            />
            <div className="flex justify-end">
              <Button onClick={handlePost}>Post</Button>
            </div>
          </div>

          {posts.map((post) => (
            <div key={post.id} className="p-6 bg-muted rounded-lg">
              <div className="flex items-start gap-4">
                <FaUserCircle className="w-10 h-10 text-muted-foreground" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{post.username}</span>
                    <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                  </div>
                  {editingPostId === post.id ? (
                    <>
                      <Textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        rows={3}
                        className="mb-2 resize-none bg-background border-border"
                      />
                      <div className="flex gap-2 mb-2">
                        <Button size="sm" onClick={() => saveEdit(post.id)}>
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingPostId(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="mb-2 whitespace-pre-wrap">{post.content}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleReact(post.id)}
                          disabled={userReactions.has(post.id)}
                        >
                          ❤️ {reactions[post.id] || 0}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => startEditing(post)}
                        >
                          <Pencil className="w-4 h-4" /> Edit
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                        >
                          <Trash2 className="w-4 h-4" /> Delete
                        </Button>
                      </div>
                    </>
                  )}

                  <div className="mt-2">
                    <p className="font-semibold text-sm mb-1">Comments:</p>
                    <div className="flex flex-col gap-1 mb-2">
                      {(comments[post.id] || []).map((comment, i) => (
                        <div
                          key={i}
                          className="text-sm bg-background p-2 rounded flex justify-between items-center"
                        >
                          <span>{comment}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCommentReact(post.id, i)}
                            disabled={userCommentReactions.has(`${post.id}-${i}`)}
                          >
                            <ThumbsUp className="w-4 h-4 mr-1" />{" "}
                            {commentReactions[`${post.id}-${i}`] || 0}
                          </Button>
                        </div>
                      ))}
                    </div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target;
                        const input = form.elements["comment" + post.id];
                        handleComment(post.id, input.value);
                        input.value = "";
                      }}
                      className="mt-2 flex gap-2"
                    >
                      <Input
                        name={"comment" + post.id}
                        placeholder="Write a comment..."
                        className="bg-background border-border"
                      />
                      <Button type="submit" size="sm">
                        Reply
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact and Form on right, sticky */}
        <aside className="space-y-6 sticky top-24 h-fit">
          {/* Copy email card */}
          <div className="p-6 bg-card rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
            <p className="text-sm text-muted-foreground mb-3">Feel free to reach out:</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-mono bg-muted px-2 py-1 rounded">{email}</span>
              <Button
                onClick={copyEmail}
                variant="outline"
                size="sm"
                className="px-2"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Click to copy email</p>
          </div>

          {/* Contact form card */}
          <div className="p-6 bg-card rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <Input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background border-border"
              />
              <Input
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background border-border"
              />
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="resize-none bg-background border-border"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TwitterMockupPage;
