import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL;

const gameReturn = {
  title: "Zelda",
  genre: "",
  image: "",
  backupImage: "",
  players: "",
  synopsis: "",
  release: "",
  owner: "2",
  id: "1",
};

export const handlers = [
  rest.post(`${apiUrl}user/register`, async (req, res, ctx) => {
    const { userName } = await req.json();
    const status = userName === "" ? 400 : 201;
    return res(ctx.status(status));
  }),

  rest.post(`${apiUrl}user/login`, async (req, res, ctx) => {
    const { userName } = await req.json();
    const status = userName === "" ? 400 : 200;
    return res(ctx.status(status), ctx.json("token"));
  }),

  rest.get(`${apiUrl}games`, async (req, res, ctx) => {
    return res.once(ctx.status(400));
  }),

  rest.get(`${apiUrl}games`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        games: {
          isPreviousPage: false,
          isNextPage: true,
          totalPages: 1,
          currentPage: 0,
          games: [],
        },
      })
    );
  }),

  rest.delete(`${apiUrl}games/delete/1`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.delete(`${apiUrl}games/delete/2`, async (req, res, ctx) => {
    return res(ctx.status(400));
  }),

  rest.post(`${apiUrl}games/create`, async (req, res, ctx) => {
    const request: any = await req;
    const titleData: string = await request._body.get("title");
    const status = titleData === "" ? 400 : 201;
    return res(ctx.status(status), ctx.json({ game: gameReturn }));
  }),

  rest.get(`${apiUrl}games/my-list`, async (req, res, ctx) => {
    return res.once(ctx.status(400));
  }),

  rest.get(`${apiUrl}games/my-list`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ games: [] }));
  }),

  rest.get(`${apiUrl}games/correctId`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ game: "game" }));
  }),

  rest.get(`${apiUrl}games/errorId`, async (req, res, ctx) => {
    return res(ctx.status(400), ctx.json({ game: "error" }));
  }),
];
