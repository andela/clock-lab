describe("Clock", function () {

  it("prints the hour", function () {
    expect(at(8).toString()).toEqual("08:00");
    expect(at(9).toString()).toEqual("09:00");
  });

  it("prints past the hour", function () {
    expect(at(11, 9).toString()).toEqual("11:09");
    expect(at(11, 19).toString()).toEqual("11:19");
  });

  it("can add minutes", function () {
    var clock = at(10).plus(3);
    expect(clock.toString()).toEqual("10:03");
  });

  it("can add over an hour", function () {
    var clock = at(10).plus(61);
    expect(clock.toString()).toEqual("11:01");
  });

  it("can subtract minutes", function () {
    var clock = at(10, 3).minus(3);
    expect(clock.toString()).toEqual("10:00");
  });

  it("can know if it's equal to another clock", function () {
    var clock1 = at(10, 3);
    var clock2 = at(10, 3);
    expect(clock1.equals(clock2)).toBe(true);
  });


});