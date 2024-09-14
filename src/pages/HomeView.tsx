import CreatorPost from "@/components/CreatorPost";
import SponsorPost from "@/components/SponsorPost";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomeView() {
  function SponsorView() {
    return (
      <Tabs defaultValue="yours" className="w-full">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="yours">Yours</TabsTrigger>
            <TabsTrigger value="creators">Creators'</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="yours" className="flex justify-center">
          <SponsorPost />
        </TabsContent>
        <TabsContent className="flex justify-center" value="creators">
          <CreatorPost />
        </TabsContent>
      </Tabs>
    );
  }
  return <SponsorView />;
}
