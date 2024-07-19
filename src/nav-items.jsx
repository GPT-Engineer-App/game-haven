import { Home, Gamepad2, Newspaper, Users, Mail } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Games",
    to: "/games",
    icon: <Gamepad2 className="h-4 w-4" />,
    page: <div>Games Page</div>,
  },
  {
    title: "News",
    to: "/news",
    icon: <Newspaper className="h-4 w-4" />,
    page: <div>News Page</div>,
  },
  {
    title: "Community",
    to: "/community",
    icon: <Users className="h-4 w-4" />,
    page: <div>Community Page</div>,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <div>Contact Page</div>,
  },
];