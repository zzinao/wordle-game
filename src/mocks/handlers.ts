import { rest } from "msw";

export const handlers = [
  rest.get("/word", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        valid: [
          "cigar",
          "rebut",
          "sissy",
          "humph",
          "awake",
          "blush",
          "focal",
          "evade",
          "naval",
          "serve",
          "heath",
          "dwarf",
        ],
        invalid: [
          "aahed",
          "aalii",
          "aargh",
          "aarti",
          "abaca",
          "abaci",
          "abacs",
          "abaft",
          "abaka",
          "abamp",
          "aband",
          "abash",
          "abask",
        ],
      })
    );
  }),
];
