import CreatorPost from "@/components/CreatorPost";
import Navbar from "@/components/Navbar";
import SponsorPost from "@/components/SponsorPost";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomeView() {
  const user = "sponsor";
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
            <SponsorPost viewer="sponsor" kind="approved-post" />
            <SponsorPost viewer="sponsor" kind="approved-post" />
            <SponsorPost viewer="sponsor" kind="approved-post" />
          </TabsContent>
          <TabsContent
            className="flex justify-cente items-center flex-col"
            value="creators"
          >
            <CreatorPost viewer="sponsor" />
            <CreatorPost viewer="sponsor" />
          </TabsContent>
        </Tabs>
      </>
    );
  }
  function CreatorView() {
    return (
      <>
        <Navbar />
        <Tabs defaultValue="sponsors" className="w-full">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="yours">Yours</TabsTrigger>
              <TabsTrigger value="sponsors">Sponsors'</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent
            value="yours"
            className="flex justify-center items-center flex-col"
          >
            <CreatorPost viewer="creator" />
            <CreatorPost viewer="creator" />
          </TabsContent>
          <TabsContent
            className="flex justify-cente items-center flex-col"
            value="sponsors"
          >
            <SponsorPost viewer="creator" kind="approved-post" />
            <SponsorPost viewer="creator" kind="approved-post" />
            <SponsorPost viewer="creator" kind="approved-post" />
          </TabsContent>
        </Tabs>
      </>
    );
  }
  if (user === "sponsor") {
    return <SponsorView />;
  }
  return <CreatorView />;
}
