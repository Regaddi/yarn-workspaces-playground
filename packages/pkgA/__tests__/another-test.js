import pkgA from "../";

test("console.log is called", () => {
  const spy = jest.spyOn(console, "log");
  pkgA();
  expect(spy).toHaveBeenCalledTimes(1);
});
