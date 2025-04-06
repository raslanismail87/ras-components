import React from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import { Modal } from "@/components/ui/modal";
import { Swap } from "@/components/ui/swap";
import { ChatBubble } from "@/components/ui/chat-bubble";
import { Countdown } from "@/components/ui/countdown";
import { Kbd } from "@/components/ui/kbd";
import { RadialProgress } from "@/components/ui/radial-progress";
import { Stat } from "@/components/ui/stat";
import { Timeline } from "@/components/ui/timeline";
import { FileInput } from "@/components/ui/file-input";
import { Range } from "@/components/ui/range";
import { Rating } from "@/components/ui/rating";
import { Artboard } from "@/components/ui/artboard";
import { ButtonGroup } from "@/components/ui/button-group";
import { Divider } from "@/components/ui/divider";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/ui/hero";
import { Indicator } from "@/components/ui/indicator";
import { InputGroup } from "@/components/ui/input-group";
import { Join } from "@/components/ui/join";
import { Mask } from "@/components/ui/mask";
import { Stack } from "@/components/ui/stack";
import { BottomNavigation } from "@/components/ui/bottom-navigation";
import { Link } from "@/components/ui/link";
import { Menu } from "@/components/ui/menu";
import { Navbar } from "@/components/ui/navbar";
import { Pagination } from "@/components/ui/pagination";
import { Steps } from "@/components/ui/steps";
import { Actions } from "@/components/ui/actions";
import { DataDisplay } from "@/components/ui/data-display";
import { DataInput } from "@/components/ui/data-input";
import { Layout } from "@/components/ui/layout";
import { Navigation } from "@/components/ui/navigation";

const ComponentShowcase: React.FC = () => {
  const { toast } = useToast();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Component Showcase</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Button</h3>
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Dropdown</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Item 1</DropdownMenuItem>
                <DropdownMenuItem>Item 2</DropdownMenuItem>
                <DropdownMenuItem>Item 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Modal</h3>
            <Modal />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Swap</h3>
            <Swap />
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Data Display</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Alert</h3>
            <Alert>
              <AlertTitle>Alert Title</AlertTitle>
              <AlertDescription>This is an alert description.</AlertDescription>
            </Alert>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Avatar</h3>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Badge</h3>
            <Badge>Badge</Badge>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Card</h3>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here.</p>
              </CardContent>
              <CardFooter>
                <p>Card footer</p>
              </CardFooter>
            </Card>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Carousel</h3>
            <Carousel>
              <CarouselContent>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Chat Bubble</h3>
            <ChatBubble />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Collapse</h3>
            <Collapsible>
              <CollapsibleTrigger asChild>
                <Button variant="outline">Toggle</Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="p-2 mt-2 border rounded">
                  Collapsible content
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Countdown</h3>
            <Countdown />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Kbd</h3>
            <Kbd />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Progress</h3>
            <Progress value={60} />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Radial Progress</h3>
            <RadialProgress />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Stat</h3>
            <Stat />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Table</h3>
            <Table>
              <TableCaption>A simple table example</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>jane@example.com</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Timeline</h3>
            <Timeline />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Tooltip</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip content</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Data Input</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Checkbox</h3>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">File Input</h3>
            <FileInput />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Radio</h3>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Range</h3>
            <Range />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Rating</h3>
            <Rating />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Select</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Text Input</h3>
            <Input placeholder="Enter text here..." />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Textarea</h3>
            <Textarea placeholder="Type your message here." />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Toggle</h3>
            <Toggle>Toggle</Toggle>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Artboard</h3>
            <Artboard />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Button Group</h3>
            <ButtonGroup />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Divider</h3>
            <Divider />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Drawer</h3>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Drawer Title</DrawerTitle>
                  <DrawerDescription>Drawer Description</DrawerDescription>
                </DrawerHeader>
                <div className="p-4">Drawer Content</div>
              </DrawerContent>
            </Drawer>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Footer</h3>
            <Footer />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Hero</h3>
            <Hero />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Indicator</h3>
            <Indicator />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Input Group</h3>
            <InputGroup />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Join</h3>
            <Join />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Mask</h3>
            <Mask />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Stack</h3>
            <Stack />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Toast</h3>
            <Button
              onClick={() => {
                toast({
                  title: "Toast Title",
                  description: "Toast Description",
                });
              }}
            >
              Show Toast
            </Button>
            <Toaster />
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Breadcrumbs</h3>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Bottom Navigation</h3>
            <BottomNavigation />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Link</h3>
            <Link />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Menu</h3>
            <Menu />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Navbar</h3>
            <Navbar />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Pagination</h3>
            <Pagination />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Steps</h3>
            <Steps />
          </div>
          
          <div className="p-4 border rounded-md">
            <h3 className="font-medium mb-2">Tabs</h3>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">Tab 1 content</TabsContent>
              <TabsContent value="tab2">Tab 2 content</TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentShowcase;
