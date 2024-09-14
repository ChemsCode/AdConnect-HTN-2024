import CreatorPost from "@/components/CreatorPost";
import Navbar from "@/components/Navbar";
import SponsorPost from "@/components/SponsorPost";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomeView() {
  function SponsorView() {
    return (
      <>
        <Navbar />
        <Tabs defaultValue="yours" className="w-full">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="yours">Yours</TabsTrigger>
              <TabsTrigger value="creators">Creators'</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent
            value="yours"
            className="flex justify-center items-center flex-col"
          >
            <SponsorPost />
            <SponsorPost />
            <SponsorPost />
          </TabsContent>
          <TabsContent
            className="flex justify-cente items-center flex-col"
            value="creators"
          >
            <CreatorPost />
            <CreatorPost />
          </TabsContent>
        </Tabs>
      </>
    );
  }
  return <SponsorView />;
}
