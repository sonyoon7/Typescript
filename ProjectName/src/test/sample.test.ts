describe("비교", () => {
  test("같음", () => {
    expect(true).toEqual(true);
  });

  test("다름", () => {
    expect(true).not.toEqual(false);
  });
});
