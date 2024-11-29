export interface ChatMessage {
  id: number;
  content: {
    text: string;
    image: string[] | null;
    video: string[] | null;
  };
  type: "message" | "reply" | "image";
  replyTo?: string;
}
export interface ChatState {
  messages: ChatMessage[];
  replyTarget: boolean;
  replyToId?: string;
}

export interface ButtonConfig {
  type: string;
  command: () => void;
  icon: JSX.Element;
  activeType?: string;
  customClass?: string;
  ariaLabel: string;
}

export type PlatformName = "Messenger" | "Instagram" | "Telegram" | "WhatsApp";

export interface User {
  user_id: string;
  platform: PlatformName;
  name: string;
  username: string;
  profile_picture_url: string;
  last_interaction_timestamp: string;
}

export interface UsersResponse {
  status: "success" | "error";
  data: User[];
  pagination: {
    current_page: number;
    limit: number;
    total_users: number;
    has_next: boolean;
  };
}

export interface ChatDataResponse {
  status: "success" | "error";
  data: ChatMessages[];
  pagination: Pagination;
}

export interface ChatMessages {
  id: string;
  message_id: string;
  from: string;
  to: string;
  content: MessageContent;
  reaction: Reaction | null;
  reply: Reply | null;
  referral: Referral | null;
  quick_reply: QuickReply | null;
  metadata: Metadata;
}

export interface MessageContent {
  text: string | null;
  type: "text" | "image" | "video" | "audio";
  attachments: Attachment[];
  products: any[];
  fallbacks: any[];
  reels: any[];
}

export interface Attachment {
  url: string;
  type: "image" | "video" | "file" | "audio";
}

export interface Reaction {
  emoji: string;
  text: string;
}

export interface Reply {
  is_reply: boolean;
  reply_to: string;
}

export interface Referral {
  is_referral: boolean;
  ref: string;
  source: string;
  type: string;
  ad_id: string;
  referrer_url: string;
}

export interface QuickReply {}

export interface Metadata {
  platform: string;
  page_id: string;
  status: string;
  flow: "Incoming" | "Outgoing";
  timestamp: string;
}
export interface Pagination {
  current_page: number;
  limit: number;
  total_messages: number;
  has_next: boolean;
}

export interface SenderMessageProps {
  message: ChatMessages;
}

export interface ReceiverMessageProps {
  message: ChatMessages;
}

export interface AudioMessageProps {
  message: ChatMessages;
}

export interface VideoMessageProps {
  message: ChatMessages;
}

export interface EditorContentProps {
  messages: ChatMessage;
}

export interface ImageMessageProps {
  message: ChatMessages;
}

export interface ReplyMessageProps {
  onClose: () => void;
}

export interface ChatBodyProps {
  user: User;
}

export interface ChatAreaProps {
  selectedUser: User | null;
}

export interface ChatFooterProps {
  placeholder: string;
}

export interface ChatHeaderProps {
  user: User;
}

export interface DateSeparatorProps {
  date: string;
}

export interface TextReplyProps {
  replyToId: string;
}

export interface UserItemProps {
  user: User;
  onUserSelect: (user: User) => void;
}

export const platformIcons: Record<PlatformName, string> = {
  Messenger: "/channelIcons/telegram.png",
  Instagram: "/channelIcons/instagram.png",
  Telegram: "/channelIcons/telegram.png",
  WhatsApp: "/channelIcons/whatsapp.png",
};
