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

const sidebarSections = [
  {
    type: 'collapsible',
    label: 'Documentation',
    icon: FileText,
    tooltip: 'Documentation',
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
    defaultOpen: true,
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
                          <section.icon className="h-4 w-4" />
                          <span>{section.label}</span>
                          <ChevronRight className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
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

      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                <span className="text-sm font-medium text-white">S</span>
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">shadcn</span>
                <span className="truncate text-xs text-muted-foreground">
                  m@example.com
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
