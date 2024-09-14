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
import { Button } from "./ui/button";

export default function CreatorPost() {
  return (
    <Card className="w-[700px] mt-5">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img src="https://via.assets.so/game.png?id=9&q=95&w=650&h=360&fit=fill" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://via.assets.so/game.png?id=11&q=95&w=650&h=360&fit=fill" />
            </CarouselItem>
            <CarouselItem>
              <img src="https://via.assets.so/game.png?id=12&q=95&w=650&h=360&fit=fill" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
      <CardFooter className="w-full">
        <div className="w-full flex justify-between">
          <Button className="w-[200px]">Chat</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
