import * as React from "react";
import PageWrapper from "@/components/primitive/page-wrapper";
import NotesEditor from "./notes-editor";

const Notes = () => {
  return (
    <div>
      <PageWrapper>
        <NotesEditor />
      </PageWrapper>
    </div>
  );
};
export default Notes;
