import React from "react";

export default function WishList({ data }) {
  return (
    <div>
      <div className="space-y-4">
        <ul>
          {data.map((row, index) => (
            <li key={index}>
              <strong>Name:</strong> {row.name}, <strong>Email:</strong>{" "}
              {row.email}, <strong>Content:</strong> {row.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
