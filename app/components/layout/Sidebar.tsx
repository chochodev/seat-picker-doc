import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '~/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/collapsible';
import {
  Play,
  History,
  Star,
  Settings,
  Box,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { Link } from '@remix-run/react';
import { LuStar } from 'react-icons/lu';

const sidebarSections = [
  {
    type: 'collapsible',
    label: 'Documentation',
    icon: FileText,
    tooltip: 'Documentation',
    defaultOpen: true,
    items: [
      { label: 'Getting Started', to: '#', icon: null },
      { label: 'API Reference', to: '#', icon: null },
    ],
  },
  {
    type: 'collapsible',
    label: 'Playground',
    icon: Play,
    tooltip: 'Playground',
    items: [
      { label: 'History', to: '#', icon: History },
      { label: 'Starred', to: '#', icon: Star },
      { label: 'Settings', to: '#', icon: Settings },
    ],
  },
  {
    type: 'collapsible',
    label: 'Models',
    icon: Box,
    tooltip: 'Models',
    items: [
      { label: 'GPT-4', to: '#', icon: null },
      { label: 'Claude', to: '#', icon: null },
    ],
  },
  {
    type: 'item',
    label: 'Settings',
    icon: Settings,
    tooltip: 'Settings',
    to: '#',
  },
];

export default function AppSidebar() {
  return (
    <Sidebar className="border-0 border-solid border-r border-slate-800">
      <SidebarHeader className="border-0 border-solid border-b px-4 flex border-slate-800 justify-center h-[calc(4rem+1px)]">
        <div className="flex items-center gap-3">
          <Link
            to="https://npmjs.com/package/seat-picker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-indigo-100"
          >
            <img
              src="/images/brand-svg-dark.svg"
              alt="Seat Picker Logo"
              className="h-5 w-5"
            />
          </Link>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Seat Picker</span>
            <span className="truncate text-xs text-muted-foreground">
              Docs & Playground
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Platform
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarSections.map((section) =>
                section.type === 'collapsible' ? (
                  <Collapsible
                    key={section.label}
                    defaultOpen={section.defaultOpen}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={section.tooltip}
                          className="w-full"
                        >
                          <section.icon className="h-4 w-4 text-slate-100" />
                          <span className="text-slate-100">{section.label}</span>
                          <ChevronRight className="ml-auto h-4 w-4 text-slate-300 ease-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {(section.items ?? []).map((item) => (
                            <SidebarMenuSubItem key={item.label}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  to={item.to}
                                  className="flex items-center gap-2"
                                >
                                  {item.icon && (
                                    <item.icon className="h-3 w-3" />
                                  )}
                                  <span>{item.label}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={section.label}>
                    <SidebarMenuButton tooltip={section.tooltip}>
                      <section.icon className="h-4 w-4" />
                      <span>{section.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-0 border-solid border-t border-slate-800 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <a
              href="https://github.com/chochodev/seat-picker-lib"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full px-4 py-2 rounded-md hover:bg-slate-800/20 ease-200 hover:scale-105 active:scale-95"
            >
              <LuStar className="h-4 w-4 text-yellow-400" />
              <span className="font-medium text-sm text-slate-100">Star us on GitHub</span>
            </a>
        </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
