"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Loading from "./loading";
import { useGetProjectDetails } from "@/lib/hooks/use-swr";

interface Props {
  baseName: string;
}

const BreadcrumbSegment = ({ baseName }: Props) => {
  const router = useRouter();
  const back = router.back;
  const params = useParams<{ projectsid: string }>();
  const { data, isLoading, isError } = useGetProjectDetails(params.projectsid);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error: {isError.message}</div>;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Button variant={"ghost"} onClick={back}>
              {baseName}
            </Button>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{data?.name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbSegment;
