// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Tag from "../index";

describe("Tag", () => {
  const content = "Brno";
  const dataTest = "test";
  const onRemove = jest.fn();
  const onClick = jest.fn();
  const selected = true;

  it("it should have data-test", () => {
    render(
      <Tag selected={selected} dataTest={dataTest} onRemove={onRemove} onClick={onClick}>
        {content}
      </Tag>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });

  it("should fire onClick", () => {
    render(<Tag onClick={onClick}>{content}</Tag>);
    const tag = screen.getByRole("button");
    userEvent.click(tag);
    expect(onClick).toHaveBeenCalled();
  });

  it("should fire onRemove", () => {
    render(<Tag onRemove={onRemove}>{content}</Tag>);
    userEvent.click(screen.getByRole("button", { name: "" }));
    expect(onRemove).toHaveBeenCalled();
  });

  it("should contain a content", () => {
    render(<Tag>{content}</Tag>);
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
