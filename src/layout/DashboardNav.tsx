import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { Icons } from '@/components/icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { usePathname } from '@/hooks/usePathname';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
  isMinimized?: boolean;
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false,
  isMinimized = false,
}: DashboardNavProps) {
  const path = usePathname();
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {items.map((item) => {
          const Icon = Icons[item.icon || 'arrowRight'];
          return (
            item.href && (
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.disabled ? '/' : item.href}
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      item.disabled && 'cursor-not-allowed opacity-80',
                      path === item.href ? 'bg-accent' : 'transparent',
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                    }}
                  >
                    <Icon className="ml-3 size-5" />

                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className="mr-2 truncate">{item.title}</span>
                    ) : (
                      ''
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={!isMinimized ? 'hidden' : 'inline-block'}
                >
                  {item.title}
                </TooltipContent>
              </Tooltip>
            )
          );
        })}
      </TooltipProvider>
    </nav>
  );
}
