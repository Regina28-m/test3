import getLevel from "../user";
import fetchData from "../http";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("return correctly value 1", () => {
  fetchData.mockReturnValue({
    status: "ok",
    level: "1",
  });
  const result = "Ваш текущий уровень: 1";
  const response = getLevel(1);
  expect(response).toBe(result);
  expect(fetchData).toBeCalledTimes(1);
  expect(fetchData).toBeCalledWith("https://server/user/1");
});

test("return correctly value undefined", () => {
  fetchData.mockReturnValue({
    status: "error",
    level: "1",
  });
  const result = "Информация об уровне временно недоступна";
  const response = getLevel(1);
  expect(response).toEqual(result);
});
