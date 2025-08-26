import React from 'react';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';

const PostsPage: React.FC = () => {
  const posts = [
    {
      content: "🚀 Just launched a new series on advanced React patterns! These techniques will take your components to the next level. What topics would you like to see covered next?",
      timestamp: "2 hours ago",
      likes: 156,
      comments: 23,
      shares: 12
    },
    {
      content: "💡 Pro tip: Always use semantic HTML elements. Not only does it improve accessibility, but it also makes your code more maintainable and SEO-friendly. What's your favorite semantic element?",
      timestamp: "1 day ago", 
      likes: 89,
      comments: 15,
      shares: 8
    },
    {
      content: "🎨 Working on some amazing CSS animations for the upcoming tutorial series. The future of web design is looking incredible! Here's a sneak peek at what we're building...",
      timestamp: "3 days ago",
      likes: 234,
      comments: 42,
      shares: 28
    },
    {
      content: "📚 Reading list update: Just finished 'Clean Code' by Robert Martin. The principles in this book are timeless and apply to any programming language. Highly recommended for developers at any level!",
      timestamp: "1 week ago",
      likes: 178,
      comments: 31,
      shares: 19
    },
    {
      content: "🌟 Thank you all for 1.2M subscribers! This community means everything to me. Your support and engagement drive me to create better content every day. What's been your favorite video so far?",
      timestamp: "2 weeks ago",
      likes: 892,
      comments: 156,
      shares: 89
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
          Community Posts
        </h2>
        <p className="text-muted-foreground animate-slide-up">
          Stay updated with the latest news, tips, and behind-the-scenes content
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <article 
            key={index}
            className="bg-card rounded-xl p-6 border border-border hover:border-purple-500/30 transition-all duration-300 animate-slide-in-left"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Post Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                YT
              </div>
              <div>
                <div className="font-medium text-foreground">YourTube Channel</div>
                <div className="text-sm text-muted-foreground">{post.timestamp}</div>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-6">
              <p className="text-foreground leading-relaxed">{post.content}</p>
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between border-t border-border/50 pt-4">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-red-400 transition-all duration-200 group">
                  <Heart className="w-5 h-5 group-hover:scale-110 group-hover:animate-bounce-in transition-transform duration-200" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                
                <button className="flex items-center gap-2 text-muted-foreground hover:text-blue-400 transition-all duration-200 group">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                
                <button className="flex items-center gap-2 text-muted-foreground hover:text-green-400 transition-all duration-200 group">
                  <Share className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm font-medium">{post.shares}</span>
                </button>
              </div>

              <button className="text-muted-foreground hover:text-yellow-400 transition-all duration-200 group">
                <Bookmark className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;