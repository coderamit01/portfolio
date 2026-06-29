import { Fragment } from "react";
import type { RichText } from "@/src/types";

/** Renders a RichText array, wrapping `em` segments in the code-accent colour. */
export function RichTextRenderer({ value }: { value: RichText }) {
  return (
    <>
      {value.map((seg, i) => (
        <Fragment key={i}>
          {seg.em ? <span className="text-pink">{seg.text}</span> : seg.text}
        </Fragment>
      ))}
    </>
  );
}
