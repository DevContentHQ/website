"use client";

import React, { useEffect, useState } from "react";
import { Facebook, Linkedin, Twitter, Link as LinkIcon, Check } from "lucide-react";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleShare = (platform: "facebook" | "linkedin" | "twitter") => {
    if (!url) return;

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  const handleCopyLink = async () => {
    if (!url) return;
    
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const buttonClass = "p-2.5 rounded-full bg-white text-blue-900/60 hover:bg-blue-50 hover:text-blue-600 transition-all border border-blue-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer";

  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-sm font-medium text-blue-900/60 mr-2">Share this post:</span>
      
      <button 
        onClick={() => handleShare("facebook")}
        className={buttonClass}
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </button>
      
      <button 
        onClick={() => handleShare("linkedin")}
        className={buttonClass}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </button>
      
      <button 
        onClick={() => handleShare("twitter")}
        className={buttonClass}
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </button>
      
      <button 
        onClick={handleCopyLink}
        className={buttonClass}
        aria-label="Copy link"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
      </button>
    </div>
  );
}
