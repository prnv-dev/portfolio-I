import { Github, Instagram, Linkedin, Send, type LucideIcon } from "lucide-react";
import { RxDiscordLogo } from "react-icons/rx";
import type { ComponentType } from "react";
import type { SocialKey } from "@/data/profile";

type IconComponent = LucideIcon | ComponentType<{ size?: number; className?: string }>;

export const SOCIAL_ICONS: Record<SocialKey, IconComponent> = {
  github: Github,
  linkedin: Linkedin,
  telegram: Send,
  instagram: Instagram,
  discord: RxDiscordLogo,
};
