import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { StarIcon } from "lucide-react";
interface props {
  viewer: string;
  kind: string;
}

export default function SponsorPost({ viewer, kind }: props) {
  // const types = ["anyone-can-post", "approved-post"];
  function RequestsDialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Requests</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Requests</DialogTitle>
            <div className="space-y-2">NAME - DESCRIPTION - COST</div>
            <div className="space-y-2">NAME - DESCRIPTION - COST</div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }
  function MakeRequestDialog() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Make Request</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Make Request</DialogTitle>
          </DialogHeader>
          <div>
            <Label htmlFor="desc">Description</Label>
            <Input id="desc" />
            <Label className="mt-3" htmlFor="price">
              Price
            </Label>
            <Input id="price" />
            <Button className="mt-3">Send Request</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  if (viewer === "sponsor") {
    return (
      <Card className="w-[700px] mt-5">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>(Region) - Card Description </CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <img src="https://via.assets.so/game.png?id=1&q=95&w=650&h=360&fit=fill" />
              </CarouselItem>
              <CarouselItem>
                <img src="https://via.assets.so/game.png?id=2&q=95&w=650&h=360&fit=fill" />
              </CarouselItem>
              <CarouselItem>
                <img src="https://via.assets.so/game.png?id=3&q=95&w=650&h=360&fit=fill" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
        <CardFooter className="w-full">
          <div className="w-full flex justify-between">
            <Button className="w-[200px]">Chat</Button>
            {kind === "approved-post" && <RequestsDialog />}
            <Card className="px-3 py-1">
              {kind === "anyone-can-post" && <p>Anyone Can post</p>}
              {kind === "approved-post" && <p>Approved Post</p>}
            </Card>
          </div>
        </CardFooter>
      </Card>
    );
  } else if (viewer === "creator") {
    return (
      <Card className="w-[700px] mt-5">
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>(Region) - Card Description </CardDescription>
          </div>
          <Button variant="outline">
            <StarIcon />
          </Button>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <img src="https://via.assets.so/game.png?id=1&q=95&w=650&h=360&fit=fill" />
              </CarouselItem>
              <CarouselItem>
                <img src="https://via.assets.so/game.png?id=2&q=95&w=650&h=360&fit=fill" />
              </CarouselItem>
              <CarouselItem>
                <img src="https://via.assets.so/game.png?id=3&q=95&w=650&h=360&fit=fill" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
        <CardFooter className="w-full">
          <div className="w-full flex justify-between">
            <Button className="w-[200px]">Chat</Button>
            {kind === "approved-post" && <MakeRequestDialog />}
            <Card className="px-3 py-1">
              {kind === "anyone-can-post" && <p>Anyone Can post</p>}
              {kind === "approved-post" && <p>Approved Post</p>}
            </Card>
          </div>
        </CardFooter>
      </Card>
    );
  }
}
