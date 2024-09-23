import { Category } from "./categories";

interface ChildrenCtgsProps {
  ctgChildren: Category[];
}

export default function ChildrenCtgs({ ctgChildren }: ChildrenCtgsProps) {
  return (
    <div className="children-categories">
      {ctgChildren.map((ctgChild) => (
        <div key={ctgChild.id} className="child">
          <p>{ctgChild.name}</p>
          <div className="subsection-children">
            {ctgChild.children.map((child) => (
              <span key={child.id}>{child.name}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
