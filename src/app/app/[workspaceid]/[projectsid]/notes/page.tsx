import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Page = () => {
  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-dvh w-full">
      <ResizablePanel defaultSize={25}>
        <div className="p-4">Sidebar</div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            aliquet, neque eu rhoncus mattis, lectus sem aliquam arcu, vel
            consectetur nulla libero id mi. Sed ullamcorper tempor tellus a
            consequat. Duis vel arcu sem. Maecenas at libero non felis suscipit
            luctus. Duis iaculis est in felis dignissim aliquam quis non ex.
            Mauris sollicitudin sapien eros, in eleifend tortor suscipit sit
            amet. Proin neque diam, gravida sit amet lectus a, elementum
            elementum diam. Aliquam egestas magna ac lorem facilisis tincidunt.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Mauris iaculis tempor fringilla. Praesent est
            purus, mollis sit amet sem nec, placerat semper enim. Proin
            dignissim urna id sapien fringilla mollis. Aliquam erat volutpat.
            Sed dignissim pulvinar augue, non gravida lorem gravida quis.
            Pellentesque velit ligula, faucibus nec massa id, euismod porttitor
            nisl. Praesent elit massa, sollicitudin varius faucibus porttitor,
            egestas sed quam. Sed porta dolor ac nibh consequat dapibus. Nullam
            varius velit semper quam ullamcorper feugiat. Aenean et leo placerat
            nibh consequat eleifend. Curabitur vestibulum turpis ut nisl
            porttitor pellentesque. Curabitur finibus ornare sem, blandit
            sollicitudin nibh sodales sed. Donec vitae condimentum nisl. Aliquam
            varius maximus pellentesque. Pellentesque imperdiet urna vitae ante
            lobortis convallis. Nam eros urna, scelerisque vel nisi vitae,
            commodo porttitor justo. Etiam nec iaculis eros, sodales porta
            justo. Vivamus tincidunt, arcu et eleifend sodales, nulla dolor
            volutpat massa, ullamcorper auctor dui lorem et nisi. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Donec sit amet vehicula felis.
          </p>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Page;
