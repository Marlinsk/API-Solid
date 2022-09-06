import { request, response, Router } from "express";
import { createPostController } from "./modules/create";
import { deletePostController } from "./modules/delete";
import { editPostController } from "./modules/edit";
import { findAllPostsController } from "./modules/read/find-all";

const router = Router();

router.post("/create/post", async (request, response) => {
  return createPostController.handle(request, response);
});

router.get("/find-all-posts", async (request, response) => {
  return findAllPostsController.handle(request, response);
});

router.put("/edit/post/:id", async (request, response) => {
  return editPostController.handle(request, response);
});

router.delete("/delete/post/:id", async (request, response) => {
  return deletePostController.handle(request, response);
});

export { router };
